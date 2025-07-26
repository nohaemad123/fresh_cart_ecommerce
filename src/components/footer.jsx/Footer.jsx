import { Link } from "react-router";
import logo from "../../assets/freshcart-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faPinterestP,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useContext } from "react";
import minlogo from "../../assets/mini-logo.png";
import { useCategories } from "../../hooks/useCategories";

export default function Footer() {
  const { categories } = useCategories();

  return (
    <>
      <footer className="py-10 border-t border-gray-300/30 ">
        <div className="container">
          <div className="grid lg:grid-cols-2 xl:grid-cols-5 gap-6 pb-5">
            <div className="col-span-2 space-y-3">
              <Link to={"/"}>
                <img src={logo} alt="" className="mb-3" />
              </Link>
              <p className=" text-gray-500">
                FreshCart is your on-stop destination for fresh groceries,
                organic produce, and household essentials delivered to your
                doorstep
              </p>
              <ul className="flex items-center text-xl gap-4 *:text-gray-500 *:hover:text-primary-400 *:transition-colors *:duration-300">
                <li>
                  <a href="">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FontAwesomeIcon icon={faPinterestP} />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-1">
              <h2 className="text-xl font-bold">Categories</h2>
              <ul className="mt-4 flex flex-col text-md gap-2 *:text-gray-500 *:hover:text-primary-500 *:transition-colors *:duration-300">
                {categories &&
                  categories.map((category) => (
                    <li key={category._id}>
                      <Link to={`/search-products?category=${category._id}`}>
                        {category.name}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
            <div className="col-span-1">
              <h2 className="text-xl font-bold">Quick links</h2>
              <ul className="mt-4 flex flex-col text-md gap-2 *:text-gray-500 *:hover:text-primary-500 *:transition-colors *:duration-300">
                <li>
                  <Link to="">About us</Link>
                </li>
                <li>
                  <Link to="">Contact us</Link>
                </li>
                <li>
                  <Link to="">Privacy policy</Link>
                </li>
                <li>
                  <Link to="">Terms of service</Link>
                </li>
                <li>
                  <Link to="">Shipping policy</Link>
                </li>
              </ul>
            </div>
            <div className="col-span-1">
              <h2 className="text-xl font-bold">Customer service</h2>
              <ul className="mt-4 flex flex-col text-md gap-2 *:text-gray-500 *:hover:text-primary-500 *:transition-colors *:duration-300">
                <li>
                  <Link to="">My account</Link>
                </li>
                <li>
                  <Link to="">My orders</Link>
                </li>
                <li>
                  <Link to="">Wishlist</Link>
                </li>
                <li>
                  <Link to="">Returns and Refunds</Link>
                </li>
                <li>
                  <Link to="">Help center</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="copyright flex justify-between mt-3 border-t border-gray-300/30 py-4">
            <p>
              &copy; {new Date().getFullYear()} FreeCart, all rights reserved
            </p>
            <img src={minlogo} className="w-8" alt="" />
          </div>
        </div>
      </footer>
    </>
  );
}
