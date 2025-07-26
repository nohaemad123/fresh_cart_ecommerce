import cash_image from "../../assets/images.jpg";
import mastercardimg from "../../assets/mastercard.webp";

export default function PaymentMethods() {
  return (
    <>
      <h3 className="text-xl font-bold">Payment methods</h3>
      <div className="flex flex-col mt-5">
        <div className="flex gap-x-4 items-center border-b border-gray-300 pb-5 mb-5">
          <img
            src={cash_image}
            className="size-20 rounded-full border-3 border-gray-200"
          />
          <div className="flex flex-col space-y-2">
            <h3 className="text-lg font-semibold">Cash on Delivery</h3>
            <p className="text-gray-500 text-sm">Pay when your order arrives</p>
          </div>
        </div>
        <div className="flex gap-x-4 items-center">
          <img
            src={mastercardimg}
            className="size-20 rounded-full border-3 border-gray-200 object-content"
          />
          <div className="flex flex-col space-y-2">
            <h3 className="text-lg font-semibold">Online payment</h3>
            <p className="text-gray-500 text-sm">
              Pay securely with card or digital wallet
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
