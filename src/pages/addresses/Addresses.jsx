import { useContext, useState } from "react";
import { addressContext } from "../../context/Address.context";
import Loading from "../../components/loading/Loading";
import AddressCard from "../../components/address_card/AddressCard";
import EmptyAddress from "../../components/empty_address/EmptyAddress";
import AddAddress from "../../components/add_address/AddAddress";

export default function Addresses() {
  const { addresses, isLoading } = useContext(addressContext);
  const [isAction, setIsAction] = useState(null);
  console.log(addresses);
  if (isLoading) return <Loading />;
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

      <div className="grid grid-cols-2 mt-5 gap-10">
        {addresses &&
          addresses.map((address) => <AddressCard addressInfo={address} />)}
      </div>
      <div className="mt-5">{isAction == "add" && <AddAddress />}</div>
    </>
  );
}
