import { useContext, useState } from "react";

import AddressCard from "../../components/address_card/AddressCard";
import EmptyAddress from "../../components/empty_address/EmptyAddress";
import AddAddress from "../../components/add_address/AddAddress";
import { useAddresses } from "../../hooks/useAddresses";
import AddressesSkeleton from "../../skeleton/AddressesSkeleton";

export default function Addresses() {
  const { addresses, isLoading } = useAddresses();
  const [isAction, setIsAction] = useState(null);
  console.log(addresses);
  if (isLoading) return <AddressesSkeleton />;
  return (
    <>
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold">My addresses</h3>
        <button
          onClick={() => setIsAction("add")}
          className=" py-2 px-3 bg-primary-600 border-transparent cursor-pointer  text-sm font-semibold text-white text-center rounded-md"
        >
          Add new address
        </button>
      </div>
      {!addresses.length && <EmptyAddress />}

      <div className="grid lg:grid-cols-2 mt-5 gap-10">
        {addresses &&
          addresses.map((address) => (
            <AddressCard addressInfo={address} key={address._id} />
          ))}
      </div>
      <div className="mt-5">{isAction == "add" && <AddAddress />}</div>
    </>
  );
}
