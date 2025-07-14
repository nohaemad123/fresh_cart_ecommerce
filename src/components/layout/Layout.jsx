import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../footer.jsx/Footer";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
