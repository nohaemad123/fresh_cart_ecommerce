import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/home/Home";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/notFound/NotFound";
import SignUp from "./pages/signUp/SignUp";
import Login from "./pages/login/Login";
import { Slide, ToastContainer } from "react-toastify";
import ProductDetails from "./pages/product_details/ProductDetails";
import Cart from "./pages/cart/Cart";
import ProductsProvider from "./context/Products.context";
import AuthProvider from "./context/Auth.context";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import CartProvider from "./context/Cart.context";
import CategoriesProvider from "./context/Categories.context";
import Checkout from "./pages/checkout/Checkout";
import AccountLayout from "./components/account_layout/AccountLayout";
import Orders from "./pages/orders/Orders";
import OrderProvider from "./context/order.context";
import OrderDetails from "./pages/order_details/OrderDetails";
import ForgetPassword from "./pages/forget_password/ForgetPassword";
import VerfifyEmail from "./pages/verify_email/VerfifyEmail";
import VerifyEmail from "./pages/verify_email/VerfifyEmail";
import ResetPassword from "./pages/reset_password/ResetPassword";
import SearchProducts from "./pages/search_products/SearchProducts";
import BrandsProvider from "./context/Brands.context";
import Categories from "./pages/categories/Categories";
import SubCategoriesProvider from "./context/subCategories.context";
import Brands from "./pages/brands/Brands";

function App() {
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
          path: "/product-details/:id",
          element: <ProductDetails />,
        },
        {
          path: "/account",

          element: (
            <ProtectedRoute>
              <AccountLayout />,
            </ProtectedRoute>
          ),
          children: [
            {
              path: "orders",
              element: <Orders />,
            },
            {
              path: "order-details/:id",
              element: <OrderDetails />,
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
      <AuthProvider>
        <OrderProvider>
          <CartProvider>
            <ProductsProvider>
              <CategoriesProvider>
                <SubCategoriesProvider>
                  <BrandsProvider>
                    <RouterProvider router={routes} />
                    <ToastContainer
                      autoClose={3000}
                      closeButton={false}
                      closeOnClick={true}
                      transition={Slide}
                    />
                  </BrandsProvider>
                </SubCategoriesProvider>
              </CategoriesProvider>
            </ProductsProvider>
          </CartProvider>
        </OrderProvider>
      </AuthProvider>
    </>
  );
}

export default App;
