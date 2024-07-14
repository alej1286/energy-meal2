/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import awsconfig from "../aws-exports";
import { useState, useEffect } from "react";
import { list } from "aws-amplify/storage";
import { Helmet } from "react-helmet";
import { useRolReposStore } from "./../store/RolRepo";
import { fetchAuthSession } from "aws-amplify/auth";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { Flex } from "@aws-amplify/ui-react";
import Delete from "../ui-components/Delete";
import { Button } from "@aws-amplify/ui-react";
import { StorageManager } from "@aws-amplify/ui-react-storage";
import { v4 as uuidv4 } from "uuid";
import { remove } from "aws-amplify/storage";

function Gallery() {
  const [images, setImages] = useState([]);
  const [refreshKey, setRefreshKey] = useState(0);
  const [key, setKey] = useState(0);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const { rol, setRol } = useRolReposStore();
  const { route } = useAuthenticator((context) => [
    context.route,
    context.signOut,
  ]);

  async function checkGallery() {
    try {
      const result = await list({
        prefix: "gallery/",
      });
      const arr = result.items;
      arr.shift();
      const arr2 = arr.map(
        (element) =>
          `https://${awsconfig.aws_user_files_s3_bucket}.s3.amazonaws.com/public/${element.key}`
      );
      setImages(arr2);
      console.log(arr2);
    } catch (error) {
      console.log(error);
    }
  }
  const processFile = ({ file, key }) => {
    const fileExtension = file.name.split(".").pop();
    const new_key = `${uuidv4()}.${fileExtension}`;
    return { file, key: new_key };
  };

  const handleUploadSuccess = (event) => {
    setShowCreateModal(false);
    setRefreshKey((oldKey) => oldKey + 1);
    setKey((prevKey) => prevKey + 1);
  };

  const closeFileUploader = () => {
    if (showCreateModal) {
      setShowCreateModal(!showCreateModal);
    }
  };

  useEffect(() => {
    //console.log("route:",route)
    const checkUser = async () => {
      fetchAuthSession().then((session) => {
        setRol(session.tokens.accessToken.payload["cognito:groups"]);
        /* if (rol.includes("admin")) {
            console.log("rol include admin: ",rol)
          } */
      });
      /* const user2 = await fetchUserAttributes();
        console.log("user2:",user2) */
    };
    if (route === "authenticated") {
      checkUser();
    }
  }, [route]);

  const deleteImage = async (image) => {
    const fileName = image.split("/").pop();
    const fileName2 = `public/gallery/${fileName}`;

    try {
      await remove({ path: fileName2 });
    } catch (error) {
      console.log("Error ", error);
    }
    setKey((prevKey) => prevKey + 1);
    console.log(fileName2);
  };

  useEffect(() => {
    checkGallery();
  }, [key]);

  return (
    <div
      className="flex flex-col justify-center items-center w-full"
      onClick={() => {
        closeFileUploader();
      }}
    >
      <Helmet>
        <title>Gallery | Energy Meal</title>
        <meta
          name="description"
          content="Explore our gallery at Energy Meal to see our delicious meals and training sessions in action. Start your journey to a healthier lifestyle today!"
        />
        <meta
          name="keywords"
          content="gallery, Energy Meal, healthy meals, diet meals, organic meals, vegan meals, gluten-free meals, personal training, weight loss advice"
        />
      </Helmet>
      <div className="flex flex-col justify-start items-start w-4/5">
        {rol.includes("admin") && (
          <Button
            variation="primary"
            loadingText=""
            onClick={() => {
              setShowCreateModal(true);
            }}
          >
            Add Image
          </Button>
        )}
      </div>
      <Flex className="flex flex-col justify-center items-center w-full">
        <div className="justify-center">
          <h1 className="text-xl font-semibold mb-5 flex-col">
            Energy Meals Gallery
          </h1>
        </div>
        <Flex
          key={refreshKey}
          className="flex flex-wrap justify-center items-center w-full"
        >
          {images.map((image, index) => (
            <Flex
              key={index}
              className="flex w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-1 md:p-2"
            >
              <img
                className="block mx-auto h-full object-cover object-center rounded-lg shadow-md"
                src={image}
              />
              {rol.includes("admin") && (
                <Flex
                  style={{
                    position: "absolute",
                    bottom: "20px",
                    right: "30%",
                  }}
                  gap="19px"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="center"
                  alignItems="end"
                  grow="1"
                  shrink="1"
                  basis="0"
                  alignSelf="stretch"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  display="flex"
                >
                  <Flex
                    gap="10px"
                    direction="column"
                    width="70px"
                    height="unset"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    display="flex"
                  >
                    <Delete
                      display="flex"
                      gap="0"
                      direction="row"
                      width="70px"
                      height="26px"
                      justifyContent="flex-start"
                      alignItems="flex-start"
                      overflow="hidden"
                      shrink="0"
                      position="relative"
                      onClick={() => {
                        deleteImage(image);
                      }}
                      borderRadius="10px"
                      padding="0px 0px 0px 0px"
                    ></Delete>
                  </Flex>
                </Flex>
              )}
            </Flex>
          ))}
        </Flex>
      </Flex>
      <div
        className="modal"
        style={{ display: showCreateModal === false && "none" }}
      >
        <StorageManager
          key={key}
          acceptedFileTypes={["image/*"]}
          path="public/gallery/"
          isResumable
          maxFileCount={1}
          processFile={processFile}
          onUploadSuccess={handleUploadSuccess}
        />
      </div>
    </div>
  );
}

export default Gallery;
