import { useQuery } from "@tanstack/react-query";
import { getAllAddressesApi } from "../services/address-service";
import { useContext } from "react";
import { authContext } from "../context/Auth.context";

export function useAddresses() {
  const { token } = useContext(authContext);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["addresses"],
    queryFn: getAllAddressesApi,
    enabled: !!token,
  });

  return {
    addresses: data?.data.data,
    isLoading,
    isError,
    error,
  };
}
