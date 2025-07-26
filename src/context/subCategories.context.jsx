import { createContext, useEffect, useState } from "react";
import {
  getAllCategoriesApi,
  getAllSubCategoriesApi,
  getSubCategoryByCategoryApi,
} from "../services/categories-service";

export const subcategoriesContext = createContext(null);

export default function SubCategoriesProvider({ children }) {
  const [subCategories, setSubCategories] = useState(null);

  const [isSubCategoryLoading, setSubCategoryIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(false);

  async function getAllSubCategories() {
    try {
      setSubCategoryIsLoading(true);
      const response = await getAllSubCategoriesApi();
      console.log(response);
      if (response.success) {
        setSubCategories(response.data.data);
      }
    } catch (error) {
      setIsError(true);
      setError(error);
    } finally {
      setSubCategoryIsLoading(false);
    }
  }
  useEffect(() => {
    getAllSubCategories();
  }, []);

  return (
    <subcategoriesContext.Provider
      value={{ isSubCategoryLoading, isError, error, subCategories }}
    >
      {children}
    </subcategoriesContext.Provider>
  );
}
