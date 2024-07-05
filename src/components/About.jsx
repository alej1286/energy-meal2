const About = () => {
  return (
    <div
      id="about"
      className="mt-24 flex flex-col md:flex-row w-full h-screen bg-amber-800"
    >
      <div className="w-full md:w-1/2 p-0 md:p-8 flex items-center justify-center ">
        <img
          src="https://energymeal2-storage-5c8f340e5e7a7-dev.s3.amazonaws.com/public/dish1.jpeg"
          alt="About Us"
          className="w-full h-5/6 object-cover rounded-tr-full rounded-bl-ful"
        />
      </div>

      <div className="w-full md:w-1/2 p-4 md:p-8 bg-gray-100 flex items-center justify-center">
        <div className="text-center md:text-left">
          <h1 className="text-base text-indigo-600 font-semibold tracking-wide uppercase mb-5">
          About Us
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse modi impedit laboriosam consectetur unde! Quos.
            <br />
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae blanditiis neque sed omnis, repellat nostrum!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
