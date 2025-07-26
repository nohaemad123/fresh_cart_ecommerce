import { createContext, useEffect, useState } from "react";
import { getAllCategoriesApi } from "../services/categories-service";
import { getAllBrandsApi } from "../services/brands-service";

export const brandsContext = createContext(null);

export default function BrandsProvider({ children }) {
  const [brands, setBrands] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(false);

  async function getAllBrands() {
    try {
      setIsLoading(true);
      const response = await getAllBrandsApi();
      if (response.success) {
        setBrands(response.data.data);
      }
    } catch (error) {
      setIsError(true);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getAllBrands();
  }, []);

  return (
    <brandsContext.Provider value={{ brands, isLoading, isError, error }}>
      {children}
    </brandsContext.Provider>
  );
}
