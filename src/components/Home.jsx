/* eslint-disable no-unused-vars */
//import { Helmet } from "react-helmet";
import { Helmet } from "react-helmet-async";
import { CarouselDefault } from "./CarouselDefault";

function Home() {
  return (
    <div className="bg-gray-100 mt-24">
      <Helmet>
        <title>Healthy Meals & Personal Training | Energy Meal</title>
        <meta
          name="description"
          content="At Energy Meal, we offer nutritious and delicious meals, personalized training programs, and expert advice to help you start your healthy lifestyle. Start your journey with Energy Meal today!"
        />
        <meta
          name="keywords"
          content="healthy meals, diet meals, organic meals, vegan meals, gluten-free meals, personal training, weight loss advice"
        />
      </Helmet>
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h1 className="text-base text-indigo-600 font-semibold tracking-wide uppercase mb-5">
              Welcome to Energy Meal: Unlock Your Health & Wellness Potential
            </h1>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Fuel your journey to a healthier lifestyle with our nutritious and
              delicious meals crafted just for you. Explore our personalized
              training programs and expert advice designed to empower your
              wellness goals. Take the first step towards a vibrant, energized
              life today!
            </p>
          </div>
        </div>
      </div>
      {/* <Hero17 /> */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          {/* <BannerSlider /> */}
          <CarouselDefault />
          <div className="lg:text-center">
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our Services
            </p>
          </div>

          <div className="mt-10">
            <div className="md:grid md:grid-cols-2 md:gap-6">
              <div className="mt-5 md:mt-0 md:col-span-1">
                <div className="shadow overflow-hidden sm:rounded-md">
                  <img
                    src="https://energymeal2-storage-5c8f340e5e7a7-dev.s3.amazonaws.com/public/dish1.jpeg"
                    alt=""
                    className="h-48 w-full object-cover"
                  />
                  <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Odio, molestiae?
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm text-gray-500">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Nesciunt aperiam sunt explicabo quas labore quod quo.
                      Labore illo sit at!
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 md:mt-0 md:col-span-1">
                <div className="shadow overflow-hidden sm:rounded-md">
                  <img
                    src="https://energymeal2-storage-5c8f340e5e7a7-dev.s3.amazonaws.com/public/dish2.jpeg"
                    alt=""
                    className="h-48 w-full object-cover"
                  />
                  <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Lorem ipsum dolor sit amet consectetur.
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm text-gray-500">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Quas, facilis suscipit! Atque incidunt molestiae quas
                      necessitatibus ipsum cum culpa ex odio eveniet nihil, iure
                      illum praesentium modi laboriosam dicta obcaecati.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:grid md:grid-cols-2 md:gap-6 mt-10">
              <div className="mt-5 md:mt-0 md:col-span-1">
                <div className="shadow overflow-hidden sm:rounded-md">
                  <img
                    src="https://energymeal2-storage-5c8f340e5e7a7-dev.s3.amazonaws.com/public/dish3.jpeg"
                    alt=""
                    className="h-48 w-full object-cover"
                  />
                  <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Lorem ipsum dolor sit amet consectetur.
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Minima, maxime.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 md:mt-0 md:col-span-1">
                <div className="shadow overflow-hidden sm:rounded-md">
                  <img
                    src="https://energymeal2-storage-5c8f340e5e7a7-dev.s3.amazonaws.com/public/dish4.jpeg"
                    alt=""
                    className="h-48 w-full object-cover"
                  />
                  <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Lorem ipsum dolor sit amet consectetur.
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm text-gray-500">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Minima aperiam cumque obcaecati aliquam nemo a?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Our Team
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Meet Our Experienced Lorem, ipsum.
          </p>
        </div>

        <div className="mt-10">
          <div className="md:grid md:grid-cols-2 md:gap-6">
            <div className="mt-5 md:mt-0 md:col-span-1">
              <div className="shadow overflow-hidden sm:rounded-md">
                <img
                  src="https://energymeal2-storage-5c8f340e5e7a7-dev.s3.amazonaws.com/public/dish5.jpeg"
                  alt=""
                  className="h-48 w-full object-cover"
                />
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Lorem, ipsum.
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm text-gray-500">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Magnam temporibus officia nemo provident dicta! Obcaecati
                    neque corrupti illum recusandae. Pariatur!
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 md:mt-0 md:col-span-1">
              <div className="shadow overflow-hidden sm:rounded-md">
                <img
                  src="https://energymeal2-storage-5c8f340e5e7a7-dev.s3.amazonaws.com/public/dish6.jpeg"
                  alt=""
                  className="h-48 w-full object-cover"
                />
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Lorem, ipsum.
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptate, sed.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:grid md:grid-cols-2 md:gap-6 mt-10">
            <div className="mt-5 md:mt-0 md:col-span-1">
              <div className="shadow overflow-hidden sm:rounded-md">
                <img
                  src="https://energymeal2-storage-5c8f340e5e7a7-dev.s3.amazonaws.com/public/dish7.jpeg"
                  alt=""
                  className="h-48 w-full object-cover"
                />
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Lorem, ipsum.
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm text-gray-500">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ut, quis.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 md:mt-0 md:col-span-1">
              <div className="shadow overflow-hidden sm:rounded-md">
                <img
                  src="https://energymeal2-storage-5c8f340e5e7a7-dev.s3.amazonaws.com/public/dish8.jpeg"
                  alt=""
                  className="h-48 w-full object-cover"
                />
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Lorem, ipsum.
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente, cum numquam? Temporibus non cumque ducimus
                    suscipit recusandae, nostrum placeat fugit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Book Your Appointment Today
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Contact us to schedule your appointment for Lorem ipsum dolor sit
              amet.
            </p>
            <div className="mt-6">
              <a
                href="#"
                target="_blank"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                rel="noreferrer"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
