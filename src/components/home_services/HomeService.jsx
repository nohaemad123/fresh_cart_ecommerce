import {
  faHeadset,
  faRotateLeft,
  faShieldHalved,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HomeService() {
  return (
    <>
      <section className="py-15">
        <div className="container">
          <div className="grid lg:grid-cols-4 gap-x-6 space-y-3 lg:space-y-0">
            <div className="flex gap-x-3 rounded-lg border border-gray-200 p-4">
              <div className="rounded_icon ">
                <FontAwesomeIcon icon={faTruckFast} />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="font-semibold">Free delivery</h3>
                <p className="text-gray-600">Orders $50 or more</p>
              </div>
            </div>
            <div className="flex gap-x-3 rounded-lg border border-gray-200 p-4">
              <div className="rounded_icon ">
                <FontAwesomeIcon icon={faRotateLeft} />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="font-semibold">30 days return</h3>
                <p className="text-gray-600">Satisfaction guaranteed</p>
              </div>
            </div>
            <div className="flex gap-x-3 rounded-lg border border-gray-200 p-4">
              <div className="rounded_icon ">
                <FontAwesomeIcon icon={faShieldHalved} />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="font-semibold">Secure payment</h3>
                <p className="text-gray-600">100% protected checkout</p>
              </div>
            </div>
            <div className="flex gap-x-3 rounded-lg border border-gray-200 p-4">
              <div className="rounded_icon ">
                <FontAwesomeIcon icon={faHeadset} />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="font-semibold">24/7 support</h3>
                <p className="text-gray-600">Ready to help anytime</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
