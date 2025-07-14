import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router";

export default function BreadCrumb({ secondLink, thirdLink, bg_gray }) {
  return (
    <>
      <div
        className={`${
          bg_gray ? `${bg_gray} border-t-2 border-gray-200` : ""
        } breadcrumb py-3 border-b-2 border-gray-200`}
      >
        <div className="container">
          <nav class="flex" aria-label="Breadcrumb">
            <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li class="inline-flex items-center">
                <Link
                  to="/"
                  class="inline-flex items-center text-sm  text-gray-400 font-semibold hover:text-primary-600 "
                >
                  Home
                </Link>
              </li>
              {secondLink && (
                <li>
                  <div class="flex items-center">
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="text-gray-400 text-sm"
                    />
                    <a
                      href="#"
                      class="ms-3 text-sm text-gray-400 font-semibold hover:text-primary-600 "
                    >
                      {secondLink}
                    </a>
                  </div>
                </li>
              )}
              <li aria-current="page">
                <div class="flex items-center">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="text-gray-400 text-sm"
                  />
                  <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                    {thirdLink}
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </>
  );
}
