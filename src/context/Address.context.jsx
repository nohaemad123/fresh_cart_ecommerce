import { createContext, useEffect, useState } from "react";
import { getAllAddressesApi } from "../services/address-service";

export const addressContext = createContext(null);

export default function AddressProvider({ children }) {
  const [addresses, setAddresses] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(false);

  async function getAllAddresses() {
    try {
      setIsLoading(true);
      const response = await getAllAddressesApi();
      console.log(response);

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
    getAllAddresses();
  }, []);

  return (
    <addressContext.Provider value={{ addresses, isLoading }}>
      {children}
    </addressContext.Provider>
  );
}
