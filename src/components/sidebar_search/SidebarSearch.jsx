import React, { useContext } from "react";
import { useFormik } from "formik";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { brandsContext } from "../../context/Brands.context";
import ProductRating from "../product_rating/ProductRating";
import { Link } from "react-router";
import { useCategories } from "../../hooks/useCategories";
import { useBrands } from "../../hooks/useBrands";

export default function SidebarSearch() {
  const { categories } = useCategories();
  const { brands } = useBrands();

  return (
    <div className="bg-white p-5 rounded-md">
      <form>
        <div>
          <h3 className="text-lg font-semibold mb-2">Categories</h3>
          {categories &&
            categories.map((cat, index) => (
              <div key={index} className="flex flex-col gap-y-4">
                <label className="flex items-center space-x-2 mb-2 text-gray-700">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-primary-600"
                  />
                  <span className="text-md">{cat.name}</span>
                </label>
              </div>
            ))}
        </div>

        <div className="mt-2 border-t border-gray-300 pt-2">
          <h3 className="text-lg font-semibold mb-2">Price range</h3>

          <Slider
            range
            min={5}
            max={75}
            allowCross={false}
            trackStyle={[{ backgroundColor: "#16a34a", height: 6 }]}
            handleStyle={[
              {
                borderColor: "#aaa",
                height: 18,
                width: 18,
                opacity: 1,
              },
              {
                borderColor: "#aaa",
                height: 18,
                width: 18,
                opacity: 1,
              },
            ]}
            railStyle={{ backgroundColor: "#e5e7eb", height: 6 }}
          />
          <div className="flex items-center justify-between text-sm text-gray-700 mt-2">
            <span className="border border-gray-400 px-3 py-1 rounded-md">
              5 EGP
            </span>
            <span>to</span>
            <span className="border border-gray-400 px-3 py-1 rounded-md">
              75 EGP
            </span>
          </div>
        </div>

        <div className="mt-2 border-t border-gray-300 pt-2">
          <h3 className="text-lg font-semibold mb-2">Brands</h3>
          {brands &&
            brands.map((brand, index) => (
              <div key={index} className="flex flex-col gap-y-4">
                <label className="flex items-center space-x-2 mb-2 text-gray-700">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-primary-600"
                  />
                  <span className="text-md">{brand.name}</span>
                </label>
              </div>
            ))}
        </div>
        <div className="mt-2 border-t border-gray-300 pt-2">
          <h3 className="text-lg font-semibold mb-2">Ratings</h3>

          <label className="flex items-center space-x-2 mb-2 text-gray-700">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-primary-600"
            />
            <span className="text-md flex  gap-x-2">
              <ProductRating rating={5} /> (42)
            </span>
          </label>
          <label className="flex items-center space-x-2 mb-2 text-gray-700">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-primary-600"
            />
            <span className="text-md flex  gap-x-2">
              <ProductRating rating={5} /> (42)
            </span>
          </label>
          <label className="flex items-center space-x-2 mb-2 text-gray-700">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-primary-600"
            />
            <span className="text-md flex  gap-x-2">
              <ProductRating rating={5} /> (42)
            </span>
          </label>
        </div>
        <div className="mt-2 border-t border-gray-300 pt-2">
          <h3 className="text-lg font-semibold mb-2">Availability</h3>

          <label className="flex items-center space-x-2 mb-2 text-gray-700">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-primary-600"
            />
            <span className="text-md flex  gap-x-2">In stock (42)</span>
          </label>
          <label className="flex items-center space-x-2 mb-2 text-gray-700">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-primary-600"
            />
            <span className="text-md flex  gap-x-2">Out of stock (42)</span>
          </label>
        </div>
        <div className="mt-2 border-t border-gray-300 pt-2">
          <h3 className="text-lg font-semibold mb-2">Dietary preferences </h3>

          <label className="flex items-center space-x-2 mb-2 text-gray-700">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-primary-600"
            />
            <span className="text-md flex  gap-x-2">100% organic (42)</span>
          </label>
          <label className="flex items-center space-x-2 mb-2 text-gray-700">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-primary-600"
            />
            <span className="text-md flex  gap-x-2">Vegan (42)</span>
          </label>
          <label className="flex items-center space-x-2 mb-2 text-gray-700">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-primary-600"
            />
            <span className="text-md flex  gap-x-2">Gluten-free (42)</span>
          </label>
          <label className="flex items-center space-x-2 mb-2 text-gray-700">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-primary-600"
            />
            <span className="text-md flex  gap-x-2">Non-GMO (42)</span>
          </label>
        </div>
        <div className="grid grid-cols-2 gap-x-3">
          <button
            type="submit"
            className="py-2 px-3 bg-primary-600 border-transparent cursor-pointer  text-sm font-semibold text-white text-center rounded-md"
          >
            Apply filters
          </button>
          <button className="py-2 px-3 border  border-primary-600  text-sm text-primary-600 font-semibold text-center rounded-md">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}
