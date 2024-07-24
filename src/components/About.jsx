/* eslint-disable react/no-unescaped-entities */
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div
      id="about"
      className="mt-24 flex flex-col md:flex-row w-full h-screen bg-amber-800"
    >
      <Helmet>
        <title>About Us | Energy Meal</title>
        <meta
          name="description"
          content="Learn more about Energy Meal, our mission, and our services. We offer healthy meals, personalized training programs, and expert advice to help you achieve your health goals. Start your journey with Energy Meal today!"
        />
        <meta
          name="keywords"
          content="about, Energy Meal, healthy meals, diet meals, organic meals, vegan meals, gluten-free meals, personal training, weight loss advice"
        />
      </Helmet>
      <div className="w-full md:w-1/2 p-0 md:p-8 flex items-center justify-center ">
        <img
          src="https://energymeal2-storage-5c8f340e5e7a7-dev.s3.amazonaws.com/public/1cd8e475-4700-407c-8ee6-00d2c5361193.jpeg"
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
            Welcome to Energy Meal—where nutrition meets flavor! At Energy Meal,
            we believe that choosing a healthy lifestyle should never mean
            compromising on taste. That's why we dedicate ourselves to providing
            nutritious and delicious meals crafted from the finest ingredients,
            ensuring you fuel your body and satisfy your palate.
            <br />
            But we don’t stop at meals! Our team also offers personalized
            training programs tailored to fit your unique fitness goals,
            alongside expert advice to help you navigate your wellness journey
            with confidence. Whether you're looking to lose weight, build
            strength, or simply eat healthier, we have the resources and support
            you need.
            <br />
            Join us as we embark on this transformative journey. Start your
            healthy lifestyle with Energy Meal today, and discover how easy and
            enjoyable eating well can be!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
