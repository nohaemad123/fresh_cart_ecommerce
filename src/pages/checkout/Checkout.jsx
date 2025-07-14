import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import ViewedProducts from "../../components/viewed_products/viewedProducts";
import {
  faArrowRight,
  faChevronLeft,
  faCreditCard,
  faIdCard,
  faIdCardAlt,
  faIdCardClip,
  faInfoCircle,
  faLock,
  faMoneyBill,
  faMoneyBill1Wave,
  faSdCard,
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { cartContext } from "../../context/Cart.context";
import { Link } from "react-router";
import americanimg from "../../assets/American-Express-Color.png";
import mastercardimg from "../../assets/mastercard.webp";
import paypalimg from "../../assets/paypal.png";

export default function Checkout() {
  const { cartProducts } = useContext(cartContext);

  console.log(cartProducts);
  return (
    <>
      <BreadCrumb thirdLink={"Checkout"} />
      <div className="bg-mainColor py-10">
        <div className="container">
          <h3 className="text-xl font-bold">Checkout </h3>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-12 mb-2 gap-x-5 mt-5">
              <div className="md:col-span-8 ">
                <div className="bg-white p-5 rounded-md mb-10">
                  <h3 className="text-xl font-bold mb-5">Payment method </h3>

                  <div className="space-y-4">
                    <label
                      htmlFor="cash"
                      className="flex flex-col border border-gray-400/70 rounded-md p-4 cursor-pointer transition-all duration-200 mb-5"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-5">
                          <input
                            type="radio"
                            id="cash"
                            name="payment"
                            value="cash"
                            className="accent-blue-500 size-5"
                          />
                          <FontAwesomeIcon
                            icon={faMoneyBill1Wave}
                            className="text-green-600 text-2xl"
                          />
                          <div>
                            <h3 className="text-md font-semibold">
                              Cash on Delivery
                            </h3>
                            <p className="text-gray-500 text-sm">
                              Pay when your order arrives
                            </p>
                            <div className="bg-green-100 items-center text-green-800 p-2 rounded-md mt-3 text-[15px] flex gap-2">
                              <FontAwesomeIcon
                                icon={faInfoCircle}
                                className="text-primary-600"
                              />
                              <p>
                                Please keep exact change ready for hassle-free
                                delivery
                              </p>
                            </div>
                          </div>
                        </div>
                        <span className="text-green-600 font-medium text-sm">
                          No extra charges
                        </span>
                      </div>
                    </label>
                  </div>
                  <div className="space-y-4">
                    <label
                      htmlFor="cash"
                      className="flex flex-col border border-gray-400/70 rounded-md p-4 cursor-pointer transition-all duration-200 "
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-5">
                          <input
                            type="radio"
                            id="online"
                            name="payment"
                            value="online"
                            className="accent-blue-500 size-5"
                          />
                          <FontAwesomeIcon
                            icon={faCreditCard}
                            className="text-green-600 text-2xl"
                          />
                          <div>
                            <h3 className="text-md font-semibold">
                              Online payment
                            </h3>
                            <p className="text-gray-500 text-sm">
                              Pay securely with card or digital wallet
                            </p>
                            <div className="bg-blue-100/50 items-center text-blue-800 font-semibold p-2 rounded-md mt-3 text-[15px] flex gap-2">
                              <FontAwesomeIcon
                                icon={faInfoCircle}
                                className="text-blue-600"
                              />
                              <p>
                                You will be redirected to secure payment gateway
                                to complete your transaction
                              </p>
                            </div>
                          </div>
                        </div>
                        <span className="text-green-600 font-medium text-sm mb-3">
                          Recommended
                        </span>
                      </div>
                    </label>
                  </div>
                </div>
                <div className="bg-white p-5 rounded-md">
                  <h3 className="text-xl font-bold mb-5">Billing address </h3>
                  <div className="flex flex-col space-y-2 mb-5">
                    <label>Address details:</label>
                    <textarea className="form-control w-full border border-gray-400"></textarea>
                  </div>
                  <div className="grid grid-cols-2 space-x-10">
                    <div className="flex flex-col space-y-2">
                      <label>City:</label>
                      <input
                        type="text"
                        className="form-control w-full border border-gray-400"
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <label>Phone number:</label>
                      <input
                        type="tel"
                        className="form-control w-full border border-gray-400"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-4">
                <div className="bg-white p-5 rounded-md">
                  <h3 className="text-xl font-bold mb-5">Order summary </h3>
                  {cartProducts?.data?.products.map((product) => (
                    <>
                      <div className="flex justify-between items-center gap-x-3 mb-3">
                        <div className="flex items-center gap-x-3">
                          <Link to={`/product-details/${product.product._id}`}>
                            <img
                              src={product.product.imageCover}
                              className="w-12 h-12 min-w-[50px] min-h-[50px] object-cover rounded-lg border border-gray-200 p-1"
                            />
                          </Link>
                          <div className="flex flex-col">
                            <Link
                              to={`/product-details/${product.product._id}`}
                            >
                              <h3 className="text-[14px] font-semibold">
                                {product.product.title}
                              </h3>
                            </Link>
                            <span className="text-sm text-gray-500">
                              Qty: {product.count}
                            </span>
                          </div>
                        </div>

                        <h3 className="text-sm font-bold whitespace-nowrap">
                          {product.price} EGP
                        </h3>
                      </div>
                    </>
                  ))}
                  <div className="flex justify-between items-center mb-3 mt-5 border-t pt-3 border-gray-300">
                    <h4 className="text-lg text-gray-600">Subtotal</h4>
                    <span className="text-sm text-[16px] font-semibold">
                      {cartProducts?.data.totalCartPrice} EGP
                    </span>
                  </div>
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="text-lg text-gray-600">Shipping</h4>
                    <span className="text-sm text-[16px] font-semibold text-primary-600">
                      70 EGP
                    </span>
                  </div>
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="text-lg text-gray-600">Tax</h4>
                    <span className="text-sm text-[16px] font-semibold">
                      {Math.trunc(cartProducts?.data.totalCartPrice * 0.14)} EGP
                    </span>
                  </div>
                  <div className="flex justify-between items-center mb-3 border-t py-3 border-gray-300">
                    <h4 className="text-lg font-bold">Total</h4>
                    <span className="text-lg text-[18px] font-bold">
                      {Math.trunc(
                        cartProducts?.data.totalCartPrice +
                          70 +
                          cartProducts?.data.totalCartPrice * 0.14
                      )}{" "}
                      EGP
                    </span>
                  </div>
                  <div className="flex flex-col space-y-3">
                    <button
                      type="submit"
                      className="py-3 bg-primary-600 border-transparent cursor-pointer  text-lg font-semibold text-white text-center rounded-md"
                    >
                      Proceed to payment
                      <FontAwesomeIcon icon={faArrowRight} className="ms-3" />
                    </button>
                    <Link
                      to="/cart"
                      className="py-3 border mb-5 border-primary-600  text-lg text-primary-600 font-semibold text-center rounded-md"
                    >
                      <FontAwesomeIcon icon={faChevronLeft} className="me-3" />
                      Return to cart
                    </Link>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    Secure checkout
                  </h3>
                  <p className="text-[17px] text-gray-500">
                    <FontAwesomeIcon
                      icon={faLock}
                      className="text-primary-600 me-3"
                    />
                    Your payment information is secure
                  </p>
                  <div className="flex mt-2 gap-x-4">
                    <img src={americanimg} className="w-12" />
                    <img src={mastercardimg} className="w-12" />
                    <img src={paypalimg} className="w-12" />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* <ViewedProducts /> */}
      </div>
    </>
  );
}
