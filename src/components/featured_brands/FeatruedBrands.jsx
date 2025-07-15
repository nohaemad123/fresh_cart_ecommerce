import { useEffect, useState } from "react";
import { getAllBrandsApi } from "../../services/brands-service";
import Loading from "../loading/Loading";
import { Link } from "react-router";
import FeaturedBrandCard from "../featured_brand_card/FeaturedBrandCard";

export default function FeaturedBrands() {
  const [brands, setBrands] = useState(null);
  const [isBrandsLoading, setIsBrandsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(false);

  async function getAllBrands() {
    try {
      setIsBrandsLoading(true); //
      const response = await getAllBrandsApi({ limit: 3 });
      if (response.success) {
        setBrands(response.data.data);
      }
    } catch (error) {
      setIsError(true);
      setError(error);
    } finally {
      setIsBrandsLoading(false);
    }
  }

  useEffect(() => {
    getAllBrands();
  }, []);

  if (isBrandsLoading) return <Loading />;

  return (
    <>
      <div className="">
        <h3 className="text-2xl font-bold">Featured brands</h3>
        <div className="grid grid-cols-3 mt-5 gap-10">
          {brands &&
            brands.map((brand) => (
              <div className="rounded-md">
                <FeaturedBrandCard brandInfo={brand} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
