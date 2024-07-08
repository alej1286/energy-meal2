/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  AddService,
  EditService,
  ServiceCardCollection,
  ServiceCard,
} from "../ui-components";
import React, { useState, useEffect } from "react";
import { StorageManager, StorageImage } from "@aws-amplify/ui-react-storage";
import { DataStore, syncExpression } from "aws-amplify/datastore";
import { Service } from "../models";
import { Button, Card, Flex } from "@aws-amplify/ui-react";
import { useRolReposStore } from "./../store/RolRepo";
import { getProperties } from "aws-amplify/storage";
import { v4 as uuidv4 } from "uuid";

const Services = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [updateNote, setUpdateNote] = useState();
  const { rol } = useRolReposStore();

  const [isEditingService, setIsEditingService] = useState(false);
  const [serviceToUpdate, setServiceToUpdate] = useState(null);
  const [isAddingService, setIsAddingService] = useState(true);
  const [imagePath, setImagePath] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [key, setKey] = useState(0);

  const reinitializeStorageManager = () => {
    setKey((prevKey) => prevKey + 1);
  };
  const onSuccess = async ({ file, key }) => {
    console.log(`Key: ${key}`);
    let src;
    const imageSrc = await getProperties({ path: key }).then((result) => {
      if (isEditingService) {
        updatedService(key);
      }

      if (isAddingService) {
        setImagePath(
          "https://energymeal2-storage-5c8f340e5e7a7-dev.s3.amazonaws.com/" +
            key
        );
      }
      src = result;
    });
    /*     console.log("imageSrc:", imageSrc);
    console.log("src:", src);
    console.log("file: ", file); */
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
                  {/* <Text>Drop files here</Text>
                  <Divider size="small" label="or" maxWidth="10rem" /> */}
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
          onUploadSuccess={onSuccess}
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
        //console.log("imagePath: ", imagePath, "price:", price, "type: ", type);
        //console.log("files:", files);
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

  return (
    <>
      <div className="container">
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

        <ServiceCardCollection />
      </div>

      <div
        className="modal"
        style={{ display: showCreateModal === false && "none" }}
      >
        <AddService overrides={addServiceOverrides} />
      </div>
      <div className="modal" style={{ display: "none" }}>
        {/* <EditService /> */}
      </div>
    </>
  );
};

export default Services;
