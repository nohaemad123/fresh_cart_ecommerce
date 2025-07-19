import { createContext, useEffect, useState } from "react";
import {
  addAddressApi,
  deleteAddressApi,
  getAllAddressesApi,
} from "../services/address-service";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const addressContext = createContext(null);
const MySwal = withReactContent(Swal);

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
        setAddresses(response.data.data);
      }
    } catch (error) {
      setIsError(true);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function AddAddressFunction(values) {
    try {
      const response = await addAddressApi(values);
      if (response.success) {
        toast.success("The address is added successfully");
        getAllAddresses();
      } else {
        toast.error(response.message || "Failed to add address");
      }
    } catch (err) {
      toast.error(err.message);
    }
  }

  async function DeleteAddress(id) {
    try {
      const result = await Swal.fire({
        title: "Are you sure want delete address?",
        text: "if click on delete the address will removed",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#f00",
        cancelButtonColor: "#aaa",
        confirmButtonText: "Yes, delete it!",
      });
      if (result.isConfirmed) {
        const response = await deleteAddressApi(id);
        if (response.success) {
          Swal.fire({
            title: "Deleted!",
            text: "Your address has been deleted successfully.",
            icon: "success",
          });
          getAllAddresses();
          console.log(response);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllAddresses();
  }, []);

  return (
    <addressContext.Provider
      value={{ addresses, isLoading, AddAddressFunction, DeleteAddress }}
    >
      {children}
    </addressContext.Provider>
  );
}
