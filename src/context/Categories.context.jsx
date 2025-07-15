import { createContext, useEffect, useState } from "react";
import {
  getAllCategoriesApi,
  getSubCategoryByCategoryApi,
} from "../services/categories-service";

export const categoriesContext = createContext(null); // لاحظ أول حرف كابيتال

export default function CategoriesProvider({ children }) {
  const [categories, setCategories] = useState(null);

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(false);

  async function getAllCategories() {
    try {
      setIsLoading(true);
      const response = await getAllCategoriesApi();
      if (response.success) {
        setCategories(response.data.data);
      }
    } catch (error) {
      setIsError(true);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <categoriesContext.Provider
      value={{ categories, isLoading, isError, error }}
    >
      {children}
    </categoriesContext.Provider>
  );
}
