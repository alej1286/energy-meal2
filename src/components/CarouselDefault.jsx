import { Carousel } from "@material-tailwind/react";
import { list } from "aws-amplify/storage";
import awsconfig from "../aws-exports";
import { useState, useEffect } from "react";
import { Hub } from "aws-amplify/utils";

export function CarouselDefault() {
  const [dataSlider, setDataSlider] = useState([]);
  //const currentIndexRef = useRef(currentIndex);
  async function getSlider() {
    try {
      const result = await list({
        prefix: "slider/1/",
      });
      //console.log("result:", result);
      const arr = result.items;
      arr.shift();
      const arr2 = await arr.map(
        (element) =>
          `https://${awsconfig.aws_user_files_s3_bucket}.s3.amazonaws.com/public/${element.key}`
      );
      /* console.log(arr2); */
      const updatedSliderContent = arr2.map((item, index) => {
        return {
          /* ...item, */
          id: index,
          imageUrl: arr2[index], // Replace the img property with the new image reference
        };
      });

      //setDataSlider(updatedSliderContent);
      //console.log(updatedSliderContent);
      Hub.dispatch("storageEvent", {
        event: "filesRetrieved",
        data: updatedSliderContent,
      });
      /*  setTimeout(() => {
        console.log(dataSlider);
      }, 2000); */
    } catch (error) {
      console.log(error);
    }
  }

  Hub.listen("storageEvent", (data) => {
    const { payload } = data;
    if (payload.event === "filesRetrieved") {
      setDataSlider(payload.data);
      //console.log("Files have been retrieved:", payload.data);
    }
  });

  useEffect(() => {
    getSlider();
  }, []);

  return (
    <Carousel loop={true} autoplay={true} className="rounded-xl">
      {dataSlider.map((slider) => (
        <img
          src={slider.imageUrl}
          className="h-full w-full object-cover"
          key={slider.id}
        ></img>
      ))}
    </Carousel>
  );
}
