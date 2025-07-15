import React from "react";
import featured_image from "../../assets/brands_page.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function BrandPartner() {
  return (
    <>
      <div className="bg-primary-100/50 py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-12  w-[100%] lg:w-[80%] m-auto">
            <div className="md:col-span-7 ">
              <div className="bg-white rounded-tl-md rounded-bl-md p-10 h-full flex items-center">
                <div className="flex flex-col justify-center items-stretch space-y-3">
                  <h2 className="text-3xl font-bold">
                    Want to become a brand partner?
                  </h2>
                  <p className="text-gray-500">
                    Join our growing family of quality brands. Showcase your
                    products to our engaged customer base and grow your business
                    with freshCart
                  </p>
                  <ul className="*:text-lg *:font-medium flex flex-col space-y-3 mt-10">
                    <li>
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="text-primary-600 me-2"
                      />
                      Access to over 1 million active customers
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="text-primary-600 me-2"
                      />
                      Dedicated account manager of your brand
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="text-primary-600 me-2"
                      />
                      marketing and promotional opportunities
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="text-primary-600 me-2"
                      />
                      streamlined logistics and fulfillment
                    </li>
                  </ul>
                  <button className="mt-5 w-fit px-5 py-2 rounded-md cursor-pointer bg-primary-600 text-white text-lg inline-flex items-center">
                    Apply to become a partner
                  </button>
                </div>
              </div>
            </div>
            <div className="md:col-span-5">
              <img
                src={featured_image}
                className="w-full rounded-tr-md rounded-br-md h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
