import React, { useContext, useEffect, useState } from "react";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import {
  faComment,
  faEnvelope,
  faHome,
  faMagnifyingGlass,
  faMessage,
  faPhone,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NewsLetter from "../../components/newsletter/NewsLetter";
import { Link } from "react-router";
import { getAllCategoriesApi } from "../../services/categories-service";

import error_404 from "../../assets/undraw_page-not-found_6wni.svg";
import { useCategories } from "../../hooks/useCategories";

export default function NotFound() {
  return (
    <>
      <BreadCrumb thirdLink={"404 error"} bg_gray={"bg-gray-300/30"} />
      <div className="bg-mainColor py-15">
        <div className="container">
          <div className="flex flex-col justify-center items-center space-y-5">
            <img src={error_404} alt="" className="w-80" />

            <h3 className="text-3xl font-bold ">Oops! page not found</h3>
            <p className="text-gray-700 text-center ">
              The page you're looking for seems to have gone shopping! <br />
              <span className="text-gray-400 ">
                Don't worry, our fresh products are still available for you.
              </span>
            </p>
            <div className="flex gap-x-4">
              <Link
                to="/"
                className="bg-primary-600 py-3 px-8 text-white text-lg font-semilight rounded-lg border border-transparent"
              >
                <FontAwesomeIcon icon={faHome} className="me-2" /> Back to home
              </Link>
              <Link
                to="/"
                className="py-3 px-8 text-primary-600 text-lg font-semilight rounded-lg border border-primary-600"
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} className="me-2" />{" "}
                search for products
              </Link>
            </div>

            <div className="bg-primary-100/50 py-5 px-10 flex flex-col space-y-3 justify-center items-center mt-3">
              <h3 className="text-2xl font-medium ">Need help?</h3>
              <p className="text-gray-500">
                Our customer support team is here to assist you 24/7
              </p>
              <div className="flex gap-x-4">
                <p>
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="text-primary-600 me-2"
                  />
                  <a
                    href="tel:+1 (800)
                123-4567"
                  >
                    +1 (800) 123-4567
                  </a>
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-primary-600 me-2"
                  />
                  <a href="mailto:support@freshcart.com">
                    support@freshcart.com
                  </a>
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faComment}
                    className="text-primary-600 me-2"
                  />
                  Live chat
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NewsLetter />
    </>
  );
}
