import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";

export default function FeaturedBrandCard({ brandInfo }) {
  const { _id, name, image } = brandInfo;
  return (
    <>
      <Link to={`/search-products?brand=${_id}`}>
        <div className="shadow-md">
          <div
            className="relative rounded-md h-40"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
              <h3 className="text-white font-semibold text-lg">{name}</h3>
            </div>
          </div>
          <div className="bg-white p-5 flex flex-col space-y-2 ">
            <p className="text-gray-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
              nostrum vitae nobis temporibus molestiae. Sequi!
            </p>
            <span to=" text-primary-600 text-end">
              View products{" "}
              <FontAwesomeIcon icon={faArrowRight} className="ms-1" />
            </span>
          </div>
        </div>
      </Link>
    </>
  );
}
