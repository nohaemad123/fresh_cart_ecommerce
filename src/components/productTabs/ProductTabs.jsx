import { useState } from "react";
import ReviewsTab from "./ReviewsTab";
import ShippingTab from "./ShippingTab";
import DescriptionTab from "./DescriptionTab";

export default function ProductTabs({ productDetails }) {
  const { ratingsQuantity, description, ratingsAverage } = productDetails;
  const [activeTab, setActiveTab] = useState("details");

  function getActiveTab() {
    switch (activeTab) {
      case "details":
        return <DescriptionTab description={description} />;
      case "reviews":
        return (
          <ReviewsTab
            ratingsQuantity={ratingsQuantity}
            ratingsAverage={ratingsAverage}
          />
        );
      case "shipping":
        return <ShippingTab />;
      default:
        return <DescriptionTab />;
    }
  }
  return (
    <>
      <div className="bg-white rounded-lg my-10">
        <div className="border-b border-gray-200">
          <div className="flex">
            <button
              onClick={() => {
                setActiveTab("details");
              }}
              className={`${
                activeTab == "details"
                  ? "text-primary-600 border-b-2 border-primary-600"
                  : "text-gray-600 border-b-transparent"
              } px-6 py-4 font-medium  cursor-pointer`}
            >
              product info
            </button>
            <button
              onClick={() => {
                setActiveTab("reviews");
              }}
              className={`${
                activeTab == "reviews"
                  ? "text-primary-600 border-b-2 border-primary-600"
                  : "text-gray-600 border-b-transparent"
              } px-6 py-4 font-medium  cursor-pointer`}
            >
              Reviews ({ratingsQuantity})
            </button>
            <button
              onClick={() => {
                setActiveTab("shipping");
              }}
              className={`${
                activeTab == "shipping"
                  ? "text-primary-600 border-b-2 border-primary-600"
                  : "text-gray-600 border-b-transparent"
              } px-6 py-4 font-medium  cursor-pointer`}
            >
              Shipping & returns
            </button>
          </div>
        </div>

        <div className="p-6">{getActiveTab()}</div>
      </div>
    </>
  );
}
