import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import { useContext } from "react";
import ProductCard from "../product_card/ProductCard";
import { useProduct } from "../../hooks/useProduct";
import HomeFeaturedProductsSkeleton from "../../skeleton/HomeFeaturedProductsSkeleton";

export default function HomeFeaturedProducts() {
  const { products, isLoading } = useProduct();

  if (isLoading) {
    return <HomeFeaturedProductsSkeleton />;
  }
  return (
    <>
      <div className="py-10 ">
        <div className="container">
          <div className="flex flex-col space-y-2 lg:flex-row justify-between items-center text-center">
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
