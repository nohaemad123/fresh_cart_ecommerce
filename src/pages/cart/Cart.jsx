import { useContext } from "react";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import CartItem from "../../components/cart_item/CartItem";
import { cartContext } from "../../context/Cart.context";
import Loading from "../../components/loading/Loading";
import RelatedProducts from "../../components/related_products/RelatedProducts";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShield,
  faShieldHalved,
  faTruck,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import ViewedProducts from "../../components/viewed_products/viewedProducts";
import EmptyCart from "../../components/empty_cart/EmptCart";

export default function Cart() {
  const { error, isLoading, cartProducts, isError } = useContext(cartContext);
  if (isLoading) return <Loading />;

  return (
    <>
      <BreadCrumb thirdLink={"Cart"} />
      <div className="bg-mainColor py-15">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-12 mb-2 gap-x-5">
            <div className="md:col-span-8 bg-white py-5 rounded-md border border-gray-300/70">
              <div className="border-b border-gray-300 pb-5 px-10">
                <h3 className="text-xl font-bold">Shopping cart </h3>
                <p className="text-gray-500 mt-1">
                  {cartProducts.numOfCartItems} items in your cart
                </p>
              </div>
              {!cartProducts?.data?.products?.length && <EmptyCart />}

              {cartProducts && (
                <div className="py-5 pb-0">
                  {cartProducts.data.products.map((cartProduct) => (
                    <CartItem cartProduct={cartProduct} />
                  ))}
                </div>
              )}
            </div>
            <div className="md:col-span-4">
              <div className="bg-white p-5 w-full rounded-md border border-gray-300/70">
                {cartProducts?.data?.products?.length > 0 && (
                  <>
                    <h3 className="text-xl font-bold mb-5">Order summary </h3>

                    <div className="flex justify-between items-center mb-3">
                      <h4 className="text-lg text-gray-600">
                        Subtotal ( {cartProducts.numOfCartItems} items)
                      </h4>
                      <span className="text-sm text-[16px] font-semibold">
                        {cartProducts.data.totalCartPrice} EGP
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
                        {Math.trunc(cartProducts.data.totalCartPrice * 0.14)}{" "}
                        EGP
                      </span>
                    </div>
                    <div className="flex justify-between items-center mb-3 border-t py-3 border-gray-300">
                      <h4 className="text-lg font-bold">Total</h4>
                      <span className="text-lg text-[18px] font-bold">
                        {Math.trunc(
                          cartProducts.data.totalCartPrice +
                            70 +
                            cartProducts.data.totalCartPrice * 0.14
                        )}{" "}
                        EGP
                      </span>
                    </div>
                  </>
                )}

                {!cartProducts?.data?.products?.length && (
                  <p className="mb-3 bg-red-50 py-2 px-3 text-red-700 font-semibold">
                    No products in cart
                  </p>
                )}
                <div className="flex flex-col space-y-3">
                  {cartProducts?.data?.products?.length > 0 && (
                    <Link
                      to="/checkout"
                      className="py-3 bg-primary-600 border-transparent  text-lg font-semibold text-white text-center rounded-md"
                    >
                      Proceed to checkout
                    </Link>
                  )}
                  <Link
                    to="/"
                    className="py-3 border mb-5 border-primary-600  text-lg text-primary-600 font-semibold text-center rounded-md"
                  >
                    Continue shopping
                  </Link>
                </div>
                <div className=" bg-mainColor p-3 mb-3 rounded-md border border-gray-300">
                  <div className="flex space-x-3 items-center">
                    <FontAwesomeIcon
                      icon={faTruckFast}
                      className="text-sm text-primary-600"
                    />
                    <span className="text-lg font-semibold">Free delivery</span>
                  </div>
                  <p className="text-gray-600 text-sm mt-1">
                    Your order qualifies for free delivery. estimated delivery
                    2-3 business day
                  </p>
                </div>
                <div className="bg-primary-100/50 p-3 mb-3 rounded-md border border-gray-300">
                  <div className="flex space-x-3 items-center">
                    <FontAwesomeIcon
                      icon={faShieldHalved}
                      className="text-sm text-primary-600"
                    />
                    <span className="text-lg font-semibold">
                      Secure checkout
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mt-1">
                    Your payment information is protected with 256-bit SSL
                    encryption
                  </p>
                </div>
              </div>
            </div>
          </div>
          <ViewedProducts />
        </div>
      </div>
    </>
  );
}
