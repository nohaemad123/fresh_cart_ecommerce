import React, { useContext, useState } from "react";
import logo from "../../assets/freshcart-logo.svg";
import { Link, NavLink } from "react-router";
import {
  faAddressCard,
  faBars,
  faCartShopping,
  faHeart,
  faMagnifyingGlass,
  faRightFromBracket,
  faUser,
  faUserPlus,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { authContext } from "../../context/Auth.context";
import { cartContext } from "../../context/Cart.context";
import { useCart } from "../../hooks/useCart";

export default function NavSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const { logout, token } = useContext(authContext);
  const { isLoading, numOfCartItems } = useCart();

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className=" xl:hidden">
        <div className="navbar_mobile py-3">
          <div className="container flex justify-between">
            <Link to="/" onClick={toggleMenu}>
              <img src={logo} alt="" />
            </Link>
            <button
              onClick={toggleMenu}
              className="text-white cursor-pointer bg-primary-600 hover:bg-primary-600/95 font-medium rounded-lg text-md size-8 flex justify-center items-center "
            >
              {isOpen ? (
                <FontAwesomeIcon icon={faXmark} />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <>
            <div
              className="background cursor-pointer fixed inset-0 bg-black/50 z-30"
              onClick={toggleMenu}
            ></div>
            <div className="offcanvas fixed bg-white z-40 p-5 top-0 bottom-0">
              <div className="flex justify-between items-center">
                <Link to={"/"}>
                  <img src={logo} alt="" />
                </Link>
                <button
                  onClick={toggleMenu}
                  className="size-8 bg-gray-200 rounded-full"
                >
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              </div>
              <div className="relative flex justify-center mt-5">
                <div className="absolute inset-y-0 end-0 flex items-center pe-3.5 pointer-events-none">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
                <input
                  type="text"
                  id="email-address-icon"
                  className="form-control "
                  placeholder="Search for products..."
                />
              </div>

              <div className="mt-4">
                {token && (
                  <>
                    <h2 className="text-xl font-bold mb-3">Main menu</h2>
                    <ul className=" *:space-y-3 *:hover:bg-gray-100 transition-colors ">
                      <li onClick={toggleMenu}>
                        <NavLink
                          to="/wishlist"
                          className="flex gap-2 px-3 py-2"
                        >
                          <FontAwesomeIcon className="text-xl" icon={faHeart} />
                          <span className="text-sm">Wishlist</span>
                        </NavLink>
                      </li>
                      <li onClick={toggleMenu}>
                        <NavLink
                          to={"/cart"}
                          className={({ isActive }) => {
                            return `${
                              isActive
                                ? " text-primary-600 flex gap-2 px-3 py-2 bg-primary-100"
                                : "text-black flex gap-2 px-3 py-2"
                            } 
                    `;
                          }}
                        >
                          <div className="relative">
                            <FontAwesomeIcon
                              className="text-xl"
                              icon={faCartShopping}
                            />
                            <div className="absolute inline-flex items-center justify-center size-5 text-sm font-bold text-white bg-primary-600 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
                              {isLoading ? (
                                <FontAwesomeIcon
                                  icon={faSpinner}
                                  className="spin"
                                />
                              ) : numOfCartItems ? (
                                numOfCartItems
                              ) : (
                                0
                              )}
                            </div>
                          </div>
                          <span className="text-sm">Cart</span>
                        </NavLink>
                      </li>
                      <li onClick={toggleMenu}>
                        <NavLink
                          to="/account"
                          className={({ isActive }) => {
                            return `${
                              isActive
                                ? " text-primary-600 flex gap-2 px-3 py-2 bg-primary-100"
                                : "text-black flex gap-2 px-3 py-2"
                            } 
                    `;
                          }}
                        >
                          <FontAwesomeIcon className="text-xl" icon={faUser} />
                          <span className="text-sm">Account</span>
                        </NavLink>
                      </li>
                    </ul>
                  </>
                )}

                <div className="mt-4">
                  <h2 className="text-xl font-bold mb-3">Account</h2>

                  <ul className="*:space-y-4 *:hover:bg-gray-100 transition-colors ">
                    {!token && (
                      <>
                        <li onClick={toggleMenu} className="">
                          <NavLink
                            className={({ isActive }) => {
                              return `${
                                isActive
                                  ? " text-primary-600 px-3 py-2 flex gap-2 bg-primary-100"
                                  : "text-black flex  gap-2 px-3 py-2"
                              } 
                                      `;
                            }}
                            to="/signup"
                          >
                            <FontAwesomeIcon
                              className="text-xl"
                              icon={faUserPlus}
                            />
                            <span className="text-sm">Signup</span>
                          </NavLink>
                        </li>
                        <li onClick={toggleMenu}>
                          <NavLink
                            className={({ isActive }) => {
                              return `${
                                isActive
                                  ? " text-primary-600 flex  gap-2 px-3 py-2"
                                  : "text-black flex gap-2 px-3 py-2"
                              } 
                                      `;
                            }}
                            to="/login"
                          >
                            <FontAwesomeIcon
                              className="text-xl"
                              icon={faAddressCard}
                            />
                            <span className="text-sm">Login</span>
                          </NavLink>
                        </li>
                      </>
                    )}
                    {token && (
                      <>
                        <li onClick={toggleMenu}>
                          <button
                            className="flex gap-2 px-3 py-2"
                            onClick={logout}
                          >
                            <FontAwesomeIcon
                              className="text-xl"
                              icon={faRightFromBracket}
                            />
                            <span className="text-sm">Logout</span>
                          </button>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
