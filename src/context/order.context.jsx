import { createContext, useEffect, useState } from "react";
import { getAllOrdersApi } from "../services/orders-service";

export const orderContext = createContext(null);

export default function OrderProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(false);
  const [orders, setOrders] = useState(null);

  async function getAllOrders() {
    try {
      setIsLoading(true);
      const response = await getAllOrdersApi();
      if (response.success) {
        setIsLoading(false);
        setOrders(response.data);
      }
    } catch (error) {
      setIsError(true);
      setError(error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getAllOrders();
  }, []);

  return (
    <orderContext.Provider value={{ orders, isLoading, error }}>
      {children}
    </orderContext.Provider>
  );
}
