function Gallery() {
  const images = [
    "https://energymeal2-storage-5c8f340e5e7a7-dev.s3.amazonaws.com/public/dish1.jpeg",
"https://energymeal2-storage-5c8f340e5e7a7-dev.s3.amazonaws.com/public/dish2.jpeg",
"https://energymeal2-storage-5c8f340e5e7a7-dev.s3.amazonaws.com/public/dish3.jpeg",
"https://energymeal2-storage-5c8f340e5e7a7-dev.s3.amazonaws.com/public/dish4.jpeg",
"https://energymeal2-storage-5c8f340e5e7a7-dev.s3.amazonaws.com/public/dish5.jpeg",
"https://energymeal2-storage-5c8f340e5e7a7-dev.s3.amazonaws.com/public/dish6.jpeg",
"https://energymeal2-storage-5c8f340e5e7a7-dev.s3.amazonaws.com/public/dish7.jpeg",
"https://energymeal2-storage-5c8f340e5e7a7-dev.s3.amazonaws.com/public/dish8.jpeg",
  ];
  return (
    <div className="container mt-24 mx-auto px-5 py-2 lg:px-32 lg:pt-24 flex-col">
      <div className="-m-1 flex flex-wrap md:-m-2">
      <div className="justify-center">

      <h1 className="text-xl font-semibold mb-5 flex-col">Energy Meals Gallery</h1>
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
