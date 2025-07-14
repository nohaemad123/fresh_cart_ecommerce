import { createContext, useEffect, useState } from "react";
import { getAllProductsApi } from "../services/products-service";

export const productsContext = createContext(null);

export default function ProductsProvider({ children }) {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(false);
  async function getAllProducts(params = {}) {
    try {
      const response = await getAllProductsApi(params);
      if (response.success) {
        setIsLoading(false);
        setProducts(response.data.data);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setIsError(true);
      setError(error);
    }
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <productsContext.Provider
      value={{ products, isLoading, error, isError, getAllProducts }}
    >
      {children}
    </productsContext.Provider>
  );
}
