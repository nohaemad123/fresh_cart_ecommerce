import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import CartItem from "../../components/cart_item/CartItem";
import Loading from "../../components/loading/Loading";
import EmptyCart from "../../components/empty_cart/EmptCart";
import { useCart } from "../../hooks/useCart";
import { useUpdateProductCount } from "../../hooks/useUpdateProductCount";
import { Link } from "react-router";
import CartSkeleton from "../../skeleton/CartSkeleton";
import ViewedProducts from "../../components/viewed_products/ViewedProducts";

export default function Cart() {
  const { isLoading, cartProducts, numOfCartItems, totalCartPrice } = useCart();
  const updateCountProductsApi = useUpdateProductCount();

  if (isLoading || updateCountProductsApi.isPending) return <CartSkeleton />;

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
                  {numOfCartItems} items in your cart
                </p>
              </div>

              {!cartProducts?.products?.length && <EmptyCart />}

              {cartProducts && (
                <div className="py-5 pb-0">
                  {cartProducts.products.map((cartProduct) => (
                    <CartItem
                      cartProduct={cartProduct}
                      key={cartProduct._id}
                      updateCountProductsApi={updateCountProductsApi}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Order Summary */}
            <div className="md:col-span-4">
              <div className="bg-white p-5 w-full rounded-md border border-gray-300/70">
                {cartProducts?.products?.length > 0 && (
                  <>
                    <h3 className="text-xl font-bold mb-5">Order summary </h3>
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="text-lg text-gray-600">
                        Subtotal ( {numOfCartItems} items)
                      </h4>
                      <span className="text-sm text-[16px] font-semibold">
                        {totalCartPrice} EGP
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
                        {Math.trunc(totalCartPrice * 0.14)} EGP
                      </span>
                    </div>
                    <div className="flex justify-between items-center mb-3 border-t py-3 border-gray-300">
                      <h4 className="text-lg font-bold">Total</h4>
                      <span className=" text-[16px] font-bold">
                        {Math.trunc(
                          totalCartPrice + 70 + totalCartPrice * 0.14
                        )}{" "}
                        EGP
                      </span>
                    </div>
                  </>
                )}

                {!cartProducts?.products?.length && (
                  <p className="mb-3 bg-red-50 py-2 px-3 text-red-700 font-semibold">
                    No products in cart
                  </p>
                )}

                <div className="flex flex-col space-y-3">
                  {cartProducts?.products?.length > 0 && (
                    <Link
                      to="/checkout"
                      className="py-3 bg-primary-600 border-transparent text-lg font-semibold text-white text-center rounded-md"
                    >
                      Proceed to checkout
                    </Link>
                  )}
                  <Link
                    to="/"
                    className="py-3 border mb-5 border-primary-600 text-lg text-primary-600 font-semibold text-center rounded-md"
                  >
                    Continue shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ViewedProducts />
    </>
  );
}
