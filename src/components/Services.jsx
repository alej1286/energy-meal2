/* eslint-disable react/no-children-prop */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  AddService,
  EditService,
  ServiceCard2Collection,
  ServiceCardCollection,
} from "../ui-components";
import React, { useState } from "react";
import { StorageManager, StorageImage } from "@aws-amplify/ui-react-storage";
import { DataStore } from "aws-amplify/datastore";
import { Service } from "../models";
import { Button, Card, Flex } from "@aws-amplify/ui-react";
import { useRolReposStore } from "./../store/RolRepo";
import { v4 as uuidv4 } from "uuid";
import awsconfig from "../aws-exports";
import { Hub } from "aws-amplify/utils";
import { remove } from "aws-amplify/storage";

const Services = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const { rol } = useRolReposStore();

  const [isEditingService, setIsEditingService] = useState(false);
  const [serviceToUpdate, setServiceToUpdate] = useState(null);
  const [isAddingService, setIsAddingService] = useState(true);
  const [imagePath, setImagePath] = useState("");
  const [imagePathtoDelete, setImagePathToDelete] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [key, setKey] = useState(0);
  const [refreshKey, setRefreshKey] = useState(0);

  Hub.listen("ui", (capsule) => {
    if (capsule.payload.event === "actions:datastore:update:finished") {
      setIsEditingService(false);
      setServiceToUpdate(null);
      setRefreshKey((oldKey) => oldKey + 2);
    }
  });

  Hub.listen("ui", async (capsule) => {
    if (capsule.payload.event === "actions:datastore:delete:started") {
      const model = await DataStore.query(Service, capsule.payload.data.id);
      const fileName = model.imagePath.split("/").pop();
      try {
        await remove({ key: fileName });
      } catch (error) {
        console.log("Error ", error);
      }
    }
  });

  Hub.listen("ui", (capsule) => {
    if (capsule.payload.event === "actions:datastore:delete:finished") {
      // console.log(capsule);
    }
  });

  const reinitializeStorageManager = () => {
    setKey((prevKey) => prevKey + 1);
  };
  const handleUploadSuccess = (event) => {
    const { key } = event;
    const s3Path = `https://${awsconfig.aws_user_files_s3_bucket}.s3.amazonaws.com/${key}`;
    console.log("Full S3 Path:", s3Path);
    if (isEditingService) {
      updatedService(s3Path);
    }

    if (isAddingService) {
      setImagePath(s3Path);
    }
  };

  const updatedService = async (imagePath) => {
    const updatedService = await DataStore.save(
      Service.copyOf(serviceToUpdate, (updated) => {
        updated.imagePath = imagePath;
        updated.price = serviceToUpdate.price;
        updated.type = serviceToUpdate.type;
      })
    );
    setServiceToUpdate(updatedService);
  };

  const processFile = ({ file, key }) => {
    const fileExtension = file.name.split(".").pop();
    const new_key = `${uuidv4()}.${fileExtension}`;
    return { file, key: new_key };
  };

  const addServiceOverrides = {
    Icon: {
      onClick: () => {
        setShowCreateModal(false);
      },
    },
    UploadNewImage: {
      children: (
        <StorageManager
          key={key}
          acceptedFileTypes={["image/*"]}
          path="public/"
          isResumable
          maxFileCount={1}
          processFile={processFile}
          components={{
            Container({ children }) {
              return <Card variation="elevated">{children}</Card>;
            },
            DropZone({ children, displayText, inDropZone, ...rest }) {
              return (
                <Flex
                  alignItems="center"
                  direction="column"
                  padding="medium"
                  backgroundColor={inDropZone ? "primary.10" : ""}
                  {...rest}
                >
                  {children}
                </Flex>
              );
            },
            FilePicker({ onClick }) {
              return (
                <Button variation="primary" onClick={onClick}>
                  Browse Files
                </Button>
              );
            },
            FileList({ files, onCancelUpload, onDeleteUpload }) {
              return <></>;
            },
          }}
          //onUploadSuccess={onSuccess}
          onUploadSuccess={handleUploadSuccess}
        />
      ),
    },
    PriceTextField: {
      onChange: (event) => {
        setPrice(event.target.value);
      },
      value: price,
    },
    TypeTextField: {
      onChange: (event) => {
        setType(event.target.value);
      },
      value: type,
    },
    SaveButton: {
      onClick: async (e) => {
        console.log("e:", e);
        const newService = await DataStore.save(
          new Service({
            imagePath,
            price,
            type,
          })
        );
        setShowCreateModal(false);
        setIsAddingService(false);
        setImagePath("");
        setPrice("");
        setType("");
        reinitializeStorageManager();
      },
    },
    AddService: {
      width: "400px",
      height: "600px",
    },
  };

  const editServiceOverrides = {
    Icon: {
      onClick: () => {
        setIsEditingService(false);
      },
    },
    UploadNewImage: {
      children: (
        <StorageManager
          key={key}
          acceptedFileTypes={["image/*"]}
          path="public/"
          isResumable
          maxFileCount={1}
          processFile={processFile}
          components={{
            Container({ children }) {
              return <Card variation="elevated">{children}</Card>;
            },
            DropZone({ children, displayText, inDropZone, ...rest }) {
              return (
                <Flex
                  alignItems="center"
                  direction="column"
                  padding="medium"
                  backgroundColor={inDropZone ? "primary.10" : ""}
                  {...rest}
                >
                  {children}
                </Flex>
              );
            },
            FilePicker({ onClick }) {
              return (
                <Button variation="primary" onClick={onClick}>
                  Browse Files
                </Button>
              );
            },
            FileList({ files, onCancelUpload, onDeleteUpload }) {
              return <></>;
            },
          }}
          //onUploadSuccess={onSuccess}
          onUploadSuccess={handleUploadSuccess}
        />
      ),
    },
    EditService: {
      width: "400px",
      height: "600px",
    },
  };

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="flex flex-col justify-start items-start w-4/5">
        {rol.includes("admin") && (
          <Button
            variation="primary"
            loadingText=""
            onClick={() => {
              setShowCreateModal(true);
              setIsAddingService(true);
            }}
          >
            Add service
          </Button>
        )}
      </div>

      <Flex className="flex flex-col justify-center items-center w-full">
        <ServiceCard2Collection
          type="list"
          direction="row"
          gap="1px"
          wrap="wrap"
          className="flex flex-col justify-center items-center w-full"
          /* overflow={"auto"} */
          isPaginated
          itemsPerPage={6}
          overrideItems={({ item }) => {
            return {
              overrides: {
                imageFrame: {
                  children: (
                    <Flex
                      gap="10px"
                      direction="column"
                      width="unset"
                      height="unset"
                      justifyContent="center"
                      alignItems="center"
                      shrink="0"
                      position="relative"
                      padding="0px 0px 0px 0px"
                      children={
                        <StorageImage
                          alt={item.imagePath}
                          path={`public/${item.imagePath}`}
                        />
                      }
                    />
                  ),
                },
                "Frame Button Row": {
                  display: rol.includes("admin") ? "flex" : "none",
                },
                Edit: {
                  onClick: () => {
                    setIsEditingService(true);
                    setServiceToUpdate(item);
                    setRefreshKey((oldKey) => oldKey + 1);
                  },
                },
              },
            };
          }}
        />
      </Flex>

      <div
        className="modal"
        style={{ display: showCreateModal === false && "none" }}
      >
        <AddService overrides={addServiceOverrides} />
      </div>
      <div
        className="modal"
        style={{ display: isEditingService === false && "none" }}
      >
        <EditService
          overrides={editServiceOverrides}
          key={refreshKey}
          service={serviceToUpdate}
        />
      </div>
    </div>
  );
};

export default Services;
