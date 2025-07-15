import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import featured_image from "../../assets/categories_page.svg";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function FeaturedCategories() {
  return (
    <>
      <div className="bg-mainColor py-10">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-12">
            <div className="md:col-span-7 ">
              <div className="bg-primary-100/50 rounded-tl-md rounded-bl-md p-10 h-full flex items-center">
                <div className="flex flex-col justify-center items-stretch space-y-3">
                  <h5 className="text-primary-600 font-bold ">
                    Featured Categories
                  </h5>
                  <h2 className="text-3xl font-bold">
                    Organic fruits and vegetables
                  </h2>
                  <p className="text-gray-500">
                    Discover our wide range of certified organic produce,
                    secured from local farms and delivered fresh to your
                    doorstep
                  </p>
                  <ul className="*:text-lg *:font-medium flex flex-col space-y-2">
                    <li>
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="text-primary-600 me-2"
                      />
                      100% certified organic
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="text-primary-600 me-2"
                      />
                      Locally sourced when available
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="text-primary-600 me-2"
                      />
                      No pesticides or harmful chemicals
                    </li>
                  </ul>
                  <button className="w-fit px-5 py-2 rounded-md cursor-pointer bg-primary-600 text-white text-lg inline-flex items-center">
                    Explore category
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
