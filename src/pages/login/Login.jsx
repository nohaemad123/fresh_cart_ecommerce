import {
  faClock,
  faLock,
  faStar,
  faTruckFast,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import login_img from "../../assets/login-img.png";
import {
  faCircleQuestion,
  faEnvelope,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-regular-svg-icons";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useFormik } from "formik";
import { sendDataToSignIn } from "../../services/auth-service";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useContext, useState } from "react";
import { authContext } from "../../context/Auth.context";

export default function Login() {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const navigate = useNavigate();

  const { setToken, setUserData } = useContext(authContext);

  const [isExistError, setIsExistError] = useState(null);
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const location = useLocation();
  const from = location?.state?.from || "/";

  async function SendDataSignIn(values) {
    try {
      const response = await sendDataToSignIn(values);
      console.log(response);
      if (response.success) {
        toast.success("Welcome back");
        localStorage.setItem(
          "user_details",
          JSON.stringify(response.data.user)
        );
        console.log(response.data.user);
        if (values.rememberMe) {
          sessionStorage.setItem("token", response.data.token);
        } else {
          localStorage.setItem("token", response.data.token);
        }
        setToken(response.data.token);
        setTimeout(() => {
          navigate(from);
        }, 3000);
      } else {
      }
    } catch (error) {
      toast.error(error.message);
      setIsExistError(error.message);
    }
  }

  const validationSchema = yup.object({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .min(8, "Min 6 characters")
      .required("password is required")
      .matches(
        passwordRegex,
        "password must be minimum 8 characters least one capital character one low case character one number one special character"
      ),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validationSchema,
    onSubmit: SendDataSignIn,
  });

  function toggleShowPassword() {
    setIsPasswordShow(!isPasswordShow);
  }

  return (
    <>
      <div className="py-15 bg-mainColor">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 w-full lg:w-[90%] mx-auto">
            <div className="text-center flex flex-col space-y-3">
              <img
                src={login_img}
                alt=""
                className="w-full rounded-xl shadow-lg"
              />
              <h2 className="text-4xl font-bold mt-5">
                Fresh groceries delivered
              </h2>
              <p className="text-lg mt-3">
                Join thousands of happy customers who enjoy fresh groceries
                delivered right to their doorstep
              </p>
              <div className="mt-3">
                <div className="flex flex-col lg:flex-row gap-4 justify-center items-center">
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon
                      icon={faTruckFast}
                      className="text-primary-600 text-lg"
                    />
                    <span className="text-gray-500">Free delivery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon
                      icon={faCircleQuestion}
                      className="text-primary-600 text-lg"
                    />
                    <span className="text-gray-500">Secure payment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon
                      icon={faClock}
                      className="text-primary-600 text-lg"
                    />
                    <span className="text-gray-500">24/7 Support</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="form bg-white p-5 lg:p-10 space-y-8 shadow-xl rounded-xl">
              <div className="flex flex-col justify-center items-center space-y-2">
                <h2 className="text-3xl font-semibold mb-2">
                  <span className="text-primary-600">Fresh</span>Cart
                </h2>

                <h2 className="text-3xl font-bold">Welcome back!</h2>
                <p className="text-md text-gray-500">
                  Sign in to continue your fresh shopping experience
                </p>
              </div>
              <div className="flex flex-col space-y-4 mt-5 mb-8">
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
                <span className="absolute px-4 bg-white left-1/2 top-1/2 -translate-1/2 uppercase">
                  or continue with email
                </span>
              </div>
              <form
                className="mt-3 flex flex-col space-y-5"
                onSubmit={formik.handleSubmit}
              >
                <div className="name flex flex-col space-y-1">
                  <label htmlFor="">Email address</label>
                  <div className="relative flex justify-center">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="text-gray-400"
                      />
                    </div>
                    <input
                      type="email"
                      id="email_input"
                      className="form-control block w-full ps-10"
                      placeholder="Enter your email"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>

                  {formik.touched.email && formik.errors.email && (
                    <p className="text-red-600">{formik.errors.email}</p>
                  )}

                  {isExistError && (
                    <p className="text-red-600">{isExistError}</p>
                  )}
                </div>

                <div className="password flex flex-col space-y-1">
                  <div className="flex justify-between">
                    <label htmlFor="password_input">Password </label>
                    <Link to={"/forget-password"} className="text-primary-600">
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative flex justify-center">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <FontAwesomeIcon
                        icon={faLock}
                        className="text-gray-400"
                      />
                    </div>
                    <input
                      type={isPasswordShow ? "text" : "password"}
                      id="email_input"
                      className="form-control block w-full ps-10"
                      placeholder="Enter your password"
                      name="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <button
                      className="absolute z-30 inset-y-0 end-0 flex cursor-pointer items-center pe-3.5 "
                      onClick={() => setIsPasswordShow(!isPasswordShow)}
                    >
                      {isPasswordShow ? (
                        <FontAwesomeIcon
                          icon={faEyeSlash}
                          className="text-gray-400"
                        />
                      ) : (
                        <FontAwesomeIcon
                          icon={faEye}
                          className="text-gray-400"
                        />
                      )}
                    </button>
                  </div>

                  {formik.touched.password && formik.errors.password && (
                    <p className="text-red-600">{formik.errors.password}</p>
                  )}
                </div>

                <div className="terms flex gap-2 items-center flex-wrap">
                  <input
                    type="checkbox"
                    className="accent-primary-600 size-4"
                    name="rememberMe"
                    value={formik.values.rememberMe}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <label>Keep me signed in</label>
                </div>

                <button
                  type="submit"
                  className="btn flex gap-2 items-center text-center rounded-md py-2 justify-center bg-primary-600 text-white hover:bg-primary-700 transition-colors duration-500"
                >
                  <span>Sign in</span>
                </button>
              </form>
              <p className="border-t-2 border-gray-300/30 mt-2 pt-4 text-center">
                New to freshCart?{" "}
                <Link to="/signup" className="text-primary-600 underline">
                  Create an account
                </Link>
              </p>
              <div className="flex flex-col lg:flex-row gap-4 justify-center items-center">
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faLock}
                    className="text-gray-400 text-sm"
                  />
                  <span className="text-gray-500">SSL secure</span>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faUsers}
                    className="text-gray-400 text-sm"
                  />
                  <span className="text-gray-500">50k+ users</span>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-gray-400 text-sm"
                  />
                  <span className="text-gray-500">4.9 rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
