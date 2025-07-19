import { useContext } from "react";
import { addressContext } from "../../context/Address.context";

export default function AddressCard({ addressInfo }) {
  const { _id, name, city, phone, details } = addressInfo;
  const { DeleteAddress } = useContext(addressContext);
  return (
    <>
      <div className="border border-gray-300 rounded-lg p-5">
        <div className="flex flex-col space-y-5">
          <div className="flex justify-between">
            <span className="text-lg text-primary-600 font-bold">Name:</span>
            <span>{name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-lg text-primary-600 font-bold">City:</span>
            <span>{city}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-lg text-primary-600 font-bold">Phone:</span>
            <span>{phone}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-lg text-primary-600 font-bold">Details:</span>
            <span>{details}</span>
          </div>
          <div className="flex justify-end">
            <button
              onClick={() => DeleteAddress(_id)}
              className="mt-3 w-fit py-2 px-3 bg-primary-600 border-transparent cursor-pointer  text-sm font-semibold text-white text-center rounded-md"
            >
              Delete address
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
