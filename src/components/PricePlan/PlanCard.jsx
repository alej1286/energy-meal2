/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { CheckIcon } from "@heroicons/react/24/solid";

import React from "react";

const PlanCard = ({
  name = "",
  price = 0,
  currency = "$",
  frequency = "month",
  features = [],
  featured = false,
}) => {
  return (
    <div
      className={`bg-white border border-indigo-600 rounded-md shadow-xl cursor-pointer relative ${
        featured ? "border-2" : "border-opacity-10"
      }`}
    >
      {featured ? (
        <span className="bg-indigo-600 text-white px-6 py-1 rounded-full uppercase text-sm font-semibold whitespace-nowrap absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          Most popular
        </span>
      ) : null}
      <div className="px-6 py-12 border-b-2 border-gray-200">
        <p className="text-3xl font-semibold text-center mb-4">{name}</p>
        <div className="flex justify-center items-center">
          <div className="flex items-start">
            <p className="text-4xl font-medium">{currency}</p>
            <p className="text-7xl font-bold">{price}</p>
          </div>
          <p className="text-2xl text-gray-400">/{frequency}</p>
        </div>
      </div>

      <div className="p-12 bg-gray-100">
        <ul className="space-y-3">
          {React.Children.toArray(
            features.map((feature) => (
              <li className="flex items-center space-x-4">
                <CheckIcon className="w-6 h-6 text-green-500 flex-shrink-0" />
                <p className="text-lg text-gray-600">{feature}</p>
              </li>
            ))
          )}
        </ul>

        <button
          className={`mt-12 w-full py-4 px-8 rounded-lg text-lg whitespace-nowrap focus:outline-none focus:ring-4 focus:ring-indigo-600 focus:ring-opacity-50 transition-all ${
            featured
              ? "bg-indigo-600 hover:bg-indigo-700 text-white hover:scale-105 transform"
              : "bg-white text-indigo-600 hover:bg-gray-50"
          }`}
        >
          Select this Plan
        </button>
      </div>
    </div>
  );
};

export default PlanCard;
