import {
  faClockRotateLeft,
  faShieldHalved,
  faStar,
  faTag,
  faTruckFast,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import author_image from "../../assets/review-author.png";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate } from "react-router";
import { useFormik } from "formik";
import * as yup from "yup";
import { sendDataToSignUp } from "../../services/auth-service";
import { calcPasswordStrength } from "../../utils/password.utils";
import { toast } from "react-toastify";
import { useState } from "react";

export default function SignUp() {
  const phoneRegex = /^01[0-2,5]{1}[0-9]{8}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const [isExistError, setIsExistError] = useState(false);
  const navigate = useNavigate();

  const validationSchema = yup.object({
    name: yup
      .string()
      .required("Name is required")
      .min(4, "name must be minimum 4 characters")
      .max(20, "name must be at least 20 characters"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .min(8, "Min 6 characters")
      .required("password is required")
      .matches(
        passwordRegex,
        "password must be minimum 8 characters least one capital character one low case character one number one special character"
      ),
    rePassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
    phone: yup
      .string()
      .matches(phoneRegex, "Invalid phone number")
      .required("phone is required"),
    terms: yup
      .boolean()
      .oneOf([true], "You must accept our terms and conditions"),
  });

  async function SendDataSignUp(values) {
    try {
      const response = await sendDataToSignUp(values);

      if (response.success) {
        toast.success("user signed up successfully ");
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      } else {
      }
    } catch (error) {
      toast.error(error.message);
      setIsExistError(error.message);
    }
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
      terms: false,
    },
    validationSchema,
    onSubmit: SendDataSignUp,
  });

  const password_strength = calcPasswordStrength(formik.values.password);

  return (
    <>
      <div className="py-10 bg-mainColor">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="">
              <h2 className="text-4xl font-bold">
                Welcome to <span className="text-primary-600">FreshCart</span>
              </h2>
              <p className="text-lg mt-3">
                Join thousands of happy customers who enjoy fresh groceries
                delivered right to their doorstep
              </p>
              <div className="mt-5">
                <div className="flex gap-3">
                  <div className="rounded_icon ">
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="font-semibold">Premium quality</h3>
                    <p className="text-gray-600">
                      Premium quality products sourced from trusted suppliers
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <div className="flex gap-3">
                  <div className="rounded_icon ">
                    <FontAwesomeIcon icon={faTruckFast} />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="font-semibold">Fast delivery</h3>
                    <p className="text-gray-600">
                      Same-day delivered available in most areas
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <div className="flex gap-3">
                  <div className="rounded_icon ">
                    <FontAwesomeIcon icon={faShieldHalved} />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="font-semibold">Secure shopping</h3>
                    <p className="text-gray-600">
                      From data and payments are completely secure
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5 p-6 rounded-xl bg-white shadow-md">
                <div className="flex gap-3">
                  <img src={author_image} alt="" className="size-12" />
                  <div className="flex flex-col justify-center">
                    <h3 className="font-semibold">Sara johnson</h3>
                    <div className="flex *:text-yellow-400 gap-1 mt-1">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                  </div>
                </div>
                <blockquote>
                  <p className="text-gray-600 mt-3 italic">
                    "FreeCart has completely changed how i shop for groceries,
                    the quality is amazing and delivery is always on time!"
                  </p>
                </blockquote>
              </div>
            </div>
            <div className="form bg-white p-5 lg:p-10 space-y-8 shadow-xl rounded-xl">
              <div className="flex flex-col justify-center items-center space-y-2">
                <h2 className="text-3xl font-semibold">Create your account</h2>
                <p className="text-md text-gray-500">
                  Start your fresh journey with us today
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-5 mb-10">
                <button className="cursor-pointer border hover:bg-gray-100 transition-all duration-500 border-gray-400 rounded-lg py-2">
                  <FontAwesomeIcon
                    icon={faGoogle}
                    className="me-3 text-red-500"
                  />{" "}
                  Google
                </button>
                <button className="cursor-pointer border hover:bg-gray-100 transition-all duration-500 border-gray-400 rounded-lg py-2">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="me-3 text-blue-500"
                  />
                  Facebook
                </button>
              </div>
              <div className="h-0.5 w-full bg-gray-300/30 relative">
                <span className="absolute px-4 bg-white left-1/2 top-1/2 -translate-1/2">
                  OR
                </span>
              </div>
              <form
                className="mt-3 flex flex-col space-y-5"
                onSubmit={formik.handleSubmit}
              >
                <div className="name flex flex-col space-y-1">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    className="form-control block w-full "
                    placeholder="Ali"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.name && formik.errors.name && (
                    <p className="text-red-600">{formik.errors.name}</p>
                  )}
                </div>
                <div className="name flex flex-col space-y-1">
                  <label htmlFor="">Email *</label>
                  <input
                    type="email"
                    id="email_input"
                    className="form-control block w-full "
                    placeholder="john.doe@example.com"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className="text-red-600">{formik.errors.email}</p>
                  )}

                  {isExistError && (
                    <p className="text-red-600">{isExistError}</p>
                  )}
                </div>
                <div className="phone flex flex-col space-y-1">
                  <label htmlFor="phone_input">Phone *</label>
                  <input
                    type="tel"
                    id="phone_input"
                    className="form-control block w-full "
                    placeholder="+1 (800) 123-4567"
                    name="phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.phone && formik.errors.phone && (
                    <p className="text-red-600">{formik.errors.phone}</p>
                  )}
                </div>
                <div className="password flex flex-col space-y-1">
                  <label htmlFor="password_input">Password *</label>

                  <input
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="password"
                    id="password_input"
                    className="form-control block w-full "
                  />
                  {formik.touched.password && (
                    <div className="password_strength mt-2 flex flex-nowrap gap-2 items-center">
                      <div className="bar w-full h-2 bg-gray-200  rounded-xl">
                        <div
                          className={`progress ${password_strength.width} rounded-xl ${password_strength.background} h-full overflow-hidden`}
                        ></div>
                      </div>
                      <span className="text-nowrap text-center">
                        {password_strength.text}
                      </span>
                    </div>
                  )}
                  {formik.touched.password && formik.errors.password && (
                    <p className="text-red-600">{formik.errors.password}</p>
                  )}
                </div>

                <div className="repassword flex flex-col space-y-1">
                  <label htmlFor="repassword_input">Confirm password *</label>
                  <input
                    type="password"
                    name="rePassword"
                    id="repassword_input"
                    className="form-control block w-full "
                    value={formik.values.rePassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.rePassword && formik.errors.rePassword && (
                    <p className="text-red-600">{formik.errors.rePassword}</p>
                  )}
                </div>
                <div className="terms flex gap-2 items-center flex-wrap">
                  <input
                    value={formik.values.terms}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type="checkbox"
                    name="terms"
                    className="accent-primary-600 size-4"
                  />
                  <label>
                    I agree to the{" "}
                    <Link to="/terms" className="text-primary-600 underline">
                      terms
                    </Link>{" "}
                    of service and{" "}
                    <Link to="/privacy" className="text-primary-600 underline">
                      privacy policy
                    </Link>
                  </label>
                  {formik.touched.terms && formik.errors.terms && (
                    <p className="text-red-600 block">{formik.errors.terms}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn flex gap-2 items-center text-center rounded-md py-2 justify-center bg-primary-600 text-white hover:bg-primary-700 transition-colors duration-500"
                >
                  <FontAwesomeIcon icon={faUserPlus} />
                  <span>Create my account</span>
                </button>
                <p className="border-t-2 border-gray-300/30 mt-2 pt-4">
                  Already have account?{" "}
                  <Link to="/login" className="text-primary-600 underline">
                    Sign in
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="py-10 text-center">
        <div className="container">
          <h2 className="text-3xl font-bold">
            Why create an account with FreshCart
          </h2>
          <div className="grid lg:grid-cols-3 mt-8 lg:w-[85%] mx-auto gap-10 lg:gap-20">
            <div className="flex flex-col justify-center items-center space-y-3">
              <div className="rounded_icon">
                <FontAwesomeIcon icon={faTruckFast} />
              </div>
              <h3 className="font-semibold text-2xl">Faster checkout</h3>
              <p className="text-gray-600 text-lg">
                Save your delivery information for a quicker shopping
                experience.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center space-y-3">
              <div className="rounded_icon">
                <FontAwesomeIcon icon={faTag} />
              </div>
              <h3 className="font-semibold text-2xl">Exclusive deals</h3>
              <p className="text-gray-600 text-lg">
                Get access to member-only discounts and early sale notification
              </p>
            </div>
            <div className="flex flex-col justify-center items-center space-y-3">
              <div className="rounded_icon">
                <FontAwesomeIcon icon={faClockRotateLeft} />
              </div>
              <h3 className="font-semibold text-2xl">Order history</h3>
              <p className="text-gray-600 text-lg">
                Early track and recorder your favorite products from the past
                purchases
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
