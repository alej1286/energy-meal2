import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled, RxDot } from "react-icons/rx";
import { useState, useEffect, useRef } from "react";
import { list } from "aws-amplify/storage";
import awsconfig from "../aws-exports";

function BannerSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dataSlider, setDataSlider] = useState([]);
  const currentIndexRef = useRef(currentIndex);

  async function getSlider() {
    try {
      const result = await list({
        prefix: "slider/1/",
      });
      const arr = result.items;
      arr.shift();
      const arr2 = arr.map(
        (element) =>
          `https://${awsconfig.aws_user_files_s3_bucket}.s3.amazonaws.com/public/${element.key}`
      );

      const updatedSliderContent = arr2.map((item, index) => {
        return {
          /* ...item, */
          id: index,
          imageUrl: arr2[index], // Replace the img property with the new image reference
        };
      });

      setDataSlider(updatedSliderContent);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getSlider();
  }, []);

  useEffect(() => {
    currentIndexRef.current = currentIndex;
  }, [currentIndex]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const isLastSlide = currentIndexRef.current === dataSlider.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndexRef.current + 1;
      setCurrentIndex(newIndex);
    }, 5500); // 3000 milliseconds = 3 seconds

    // Remember to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [dataSlider]);

  /*  useEffect(() => {
    getSlider();
   

    const intervalId = setInterval(() => {
      
      console.log("This will run every 3 seconds!");
    }, 3000); // 3000 milliseconds = 3 seconds

    // Remember to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); */

  /* 
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log('This will run every 3 seconds!');
    }, 3000); // 3000 milliseconds = 3 seconds

    // Remember to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); */

  const prevButtonHandler = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? dataSlider.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextButtonHandler = () => {
    const isLastSlide = currentIndex === dataSlider.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <div className="h-[780px] w-full relative">
      {dataSlider[currentIndex] && dataSlider[currentIndex].imageUrl && (
        <>
          <div
            style={{ "--img-url": `url(${dataSlider[currentIndex].imageUrl})` }}
            className="bg-[image:var(--img-url)] w-full h-full bg-cover bg-center duration-500 flex items-center"
          ></div>
          <div className="absolute p-2 text-2xl text-white -translate-y-1/2 rounded-full cursor-pointer top-1/2 -translate-x-0 left-5 bg-primary/50">
            <BsChevronCompactLeft onClick={prevButtonHandler} />
          </div>
          <div className="absolute p-2 text-2xl text-white -translate-y-1/2 rounded-full cursor-pointer top-1/2 -translate-x-0 right-5 bg-primary/50">
            <BsChevronCompactRight onClick={nextButtonHandler} />
          </div>
          <div className="absolute flex left-1/2 bottom-2">
            {dataSlider.map((slider, slideIndex) => (
              <div
                className="text-3xl text-white cursor-pointer"
                key={slider.id}
                onClick={() => setCurrentIndex(slideIndex)}
              >
                {slideIndex === currentIndex ? (
                  <RxDotFilled className="text-white" />
                ) : (
                  <RxDot className="text-white" />
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default BannerSlider;
