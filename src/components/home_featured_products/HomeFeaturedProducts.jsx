import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import Loading from "../loading/Loading";
import { useContext } from "react";
import ProductCard from "../product_card/ProductCard";
import { productsContext } from "../../context/Products.context";

export default function HomeFeaturedProducts() {
  const { products, isLoading } = useContext(productsContext);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <div className="py-10 ">
        <div className="container">
          <div className="flex justify-between ">
            <h2 className="text-2xl font-bold">Featured products</h2>
            <Link to="" className="flex items-center text-primary-600">
              View all featured{" "}
              <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5">
            {products &&
              products.map((product) => (
                <ProductCard productInfo={product} key={product._id} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
