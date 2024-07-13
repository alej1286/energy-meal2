/* eslint-disable react-hooks/exhaustive-deps */
import awsconfig from "../aws-exports";
import { useState, useEffect } from "react";
import { list } from "aws-amplify/storage";
import { Helmet } from "react-helmet";

function Gallery() {
  const [images, setImages] = useState([]);

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
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    checkGallery();
  }, []);

  return (
    <div className="container mt-24 mx-auto px-5 py-2 lg:px-32 lg:pt-24 flex-col">
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
      <div className="-m-1 flex flex-wrap md:-m-2">
        <div className="justify-center">
          <h1 className="text-xl font-semibold mb-5 flex-col">
            Energy Meals Gallery
          </h1>
        </div>
        <div className="-m-1 flex flex-wrap md:-m-2">
          {images.map((image, index) => (
            <div
              key={index}
              className="flex w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-1 md:p-2"
            >
              <img
                className="block mx-auto h-full object-cover object-center rounded-lg shadow-md"
                src={image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
