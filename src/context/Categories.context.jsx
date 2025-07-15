import { createContext, useEffect, useState } from "react";
import { getAllCategoriesApi } from "../services/categories-service";

export const categoriesContext = createContext(null);

export default function CategoriesProvider({ children }) {
  const [categories, setCategories] = useState(null);

  const [isCategoriesLoading, setIsCategoriesLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(false);

  async function getAllCategories() {
    try {
      setIsCategoriesLoading(true);
      const response = await getAllCategoriesApi();
      if (response.success) {
        setCategories(response.data.data);
      }
    } catch (error) {
      setIsError(true);
      setError(error);
    } finally {
      setIsCategoriesLoading(false);
    }
  }

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <categoriesContext.Provider
      value={{ categories, isCategoriesLoading, isError, error }}
    >
      {children}
    </categoriesContext.Provider>
  );
}
