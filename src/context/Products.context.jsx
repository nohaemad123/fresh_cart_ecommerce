// src/context/Products.context.js
import { createContext, useEffect, useState } from "react";
import { getAllProductsApi } from "../services/products-service";

export const productsContext = createContext(null);

export default function ProductsProvider({ children }) {
  const [products, setProducts] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(null);
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(false);

  async function getAllProducts() {
    try {
      const response = await getAllProductsApi();
      if (response.success) {
        setProducts(response.data.data);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setIsError(true);
      setError(error);
    }
  }

  async function getAllProductsFilter(params = {}) {
    try {
      setIsLoading(true);
      const response = await getAllProductsApi(params);
      if (response.success) {
        setFilteredProducts(response.data.data);
        setResults(response.data.metadata);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setIsError(true);
      setError(error);
    }
  }

  const resetFilteredProducts = () => {
    setFilteredProducts(null); // ✅ مسح المنتجات القديمة
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <productsContext.Provider
      value={{
        products,
        isLoading,
        results,
        error,
        isError,
        filteredProducts,
        getAllProducts,
        resetFilteredProducts,
        getAllProductsFilter,
      }}
    >
      {children}
    </productsContext.Provider>
  );
}
