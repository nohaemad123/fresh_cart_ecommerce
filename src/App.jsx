import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/home/Home";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/notFound/NotFound";
import SignUp from "./pages/signUp/SignUp";
import Login from "./pages/login/Login";
import { Slide, ToastContainer } from "react-toastify";
import ProductDetails from "./pages/product_details/ProductDetails";
import Cart from "./pages/cart/Cart";
import AuthProvider from "./context/Auth.context";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import CartProvider from "./context/Cart.context";
import Checkout from "./pages/checkout/Checkout";
import AccountLayout from "./components/account_layout/AccountLayout";
import Orders from "./pages/orders/Orders";
import OrderDetails from "./pages/order_details/OrderDetails";
import ForgetPassword from "./pages/forget_password/ForgetPassword";
import VerifyEmail from "./pages/verify_email/VerfifyEmail";
import ResetPassword from "./pages/reset_password/ResetPassword";
import SearchProducts from "./pages/search_products/SearchProducts";
import Categories from "./pages/categories/Categories";
import Brands from "./pages/brands/Brands";
import WishlistProvider from "./context/Wishlist.context";
import Wishlist from "./pages/wishlist/Wishlist";
import AccountWishlist from "./pages/account_wishlist/AccountWishlist";
import AccountDetails from "./pages/account_details/AccountDetails";
import ChangePassword from "./pages/change_password/ChangePassword";
import Addresses from "./pages/addresses/Addresses";
import AddressProvider from "./context/Address.context";
import PaymentMethods from "./pages/payment_methods/PaymentMethods";
import Dashboard from "./pages/dashboard/Dashboard";
import OfflineScreen from "./components/offline_screen/OfflineScreen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AllOrders from "./pages/all-orders/AllOrders";
function App() {
  const queryClient = new QueryClient();

  let routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          index: true,
          element: <Home />,
        },
        {
          path: "/signup",
          element: <SignUp />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/forget-password",
          element: <ForgetPassword />,
        },
        {
          path: "/verify-email",
          element: <VerifyEmail />,
        },
        {
          path: "/reset-password",
          element: <ResetPassword />,
        },

        {
          path: "/search-products",
          element: <SearchProducts />,
        },
        {
          path: "/categories",
          element: <Categories />,
        },
        {
          path: "/brands",
          element: <Brands />,
        },
        {
          path: "/cart",
          element: (
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          ),
        },
        {
          path: "/checkout",
          element: (
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          ),
        },
        {
          path: "/allOrders",
          element: (
            <ProtectedRoute>
              <AllOrders />
            </ProtectedRoute>
          ),
        },
        {
          path: "/wishlist",
          element: (
            <ProtectedRoute>
              <Wishlist />
            </ProtectedRoute>
          ),
        },
        {
          path: "/product-details/:id",
          element: <ProductDetails />,
        },
        {
          path: "/account",
          element: (
            <ProtectedRoute>
              <AccountLayout />
            </ProtectedRoute>
          ),
          children: [
            {
              index: true, // دي بدل path: "/"
              element: <Dashboard />,
            },
            {
              path: "orders",
              element: <Orders />,
            },
            {
              path: "order-details/:id",
              element: <OrderDetails />,
            },
            {
              path: "my-wishlist",
              element: <AccountWishlist />,
            },
            {
              path: "account-details",
              element: <AccountDetails />,
            },
            {
              path: "change-password",
              element: <ChangePassword />,
            },
            {
              path: "addresses",
              element: <Addresses />,
            },
            {
              path: "payment-methods",
              element: <PaymentMethods />,
            },
          ],
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <OfflineScreen>
          <AuthProvider>
            <AddressProvider>
              <CartProvider>
                <WishlistProvider>
                  <RouterProvider router={routes} />
                  <ToastContainer
                    autoClose={3000}
                    closeButton={false}
                    closeOnClick={true}
                    transition={Slide}
                  />
                </WishlistProvider>
              </CartProvider>
            </AddressProvider>
          </AuthProvider>
        </OfflineScreen>
      </QueryClientProvider>
    </>
  );
}

export default App;
