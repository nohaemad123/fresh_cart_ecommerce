import React from "react";

export default function NewsLetter() {
  return (
    <>
      <div className="bg-primary-100/50 py-20">
        <div className="container">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-semibold">
              Subscribe to our newsletter
            </h2>
            <p className="text-gray-400">
              Stay updated with our latest offers, recipes and health tips
            </p>
          </div>
          <div className="flex flex-col lg:flex-row space-y-4 lg:w-50 m-auto mt-5 justify-center lg:space-y-0">
            <input
              type="text"
              className="form-control bg-white lg:min-w-100 rounded-tr-none rounded-br-none"
            />
            <button className="bg-primary-600 py-2 px-4  text-white text-lg border-transparent rounded-tr-md rounded-br-md font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
