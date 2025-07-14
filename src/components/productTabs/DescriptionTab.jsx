import { faLeaf, faSeedling } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function DescriptionTab({ description }) {
  return (
    <>
      <h3 className="text-lg font-semibold mb-3">Product description</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="grid grid-cols-2">
        <div className="">
          <h3 className="text-lg font-semibold mb-3">Benefits</h3>
          <ul className="gap-y-1 flex flex-col">
            <li>Rich in vitamins c and k</li>
            <li>Good source of fiber and antifxidants</li>
            <li>Supports heart health</li>
            <li>Helps regulate blood sugar</li>
            <li>Promotes healthy skean</li>
          </ul>
        </div>
        <div className="">
          <h3 className="text-lg font-semibold mb-3">Product details</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 mb-2">
            <div className="md:col-span-1">
              <h3>Origin: </h3>
            </div>
            <div className="md:col-span-2">
              <p>California, USA</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 mb-2">
            <div className="md:col-span-1">
              <h3>Cultivation: </h3>
            </div>
            <div className="md:col-span-2">
              <p>organic</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 mb-2">
            <div className="md:col-span-1">
              <h3>Storage: </h3>
            </div>
            <div className="md:col-span-2">
              <p>Refregirate upon arrival</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 mb-2">
            <div className="md:col-span-1">
              <h3>Shelf life: </h3>
            </div>
            <div className="md:col-span-2">
              <p>5-7 days when refregirated</p>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-lg font-semibold mt-5 mb-3">How to store</h3>
      <p className="text-gray-600 mb-4">
        For optimal freshness, Refregirate strawberries unwashed in their
        original container or in a paper towel-lined container. wash just before
        eating. To extend shelf life, remove any damaged berries as soon as
        possible
      </p>
      <h3 className="text-lg font-semibold mt-5 mb-3">Certifications</h3>
      <div className="flex gap-x-4">
        <span className="px-3 py-2 border border-gray-200 text-sm hover:bg-gray-200 transition-colors duration-500">
          <FontAwesomeIcon
            icon={faLeaf}
            className="me-2 text-lg text-primary-600 "
          />
          USDA organic
        </span>
        <span className="px-3 py-2 border border-gray-200 text-sm  hover:bg-gray-200 transition-colors duration-500">
          <FontAwesomeIcon
            icon={faSeedling}
            className="me-2 text-lg text-primary-600"
          />
          Non-GMO
        </span>
      </div>
    </>
  );
}
