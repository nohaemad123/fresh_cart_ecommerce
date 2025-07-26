import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowRight,
  faEnvelopeOpenText,
  faHeadphones,
  faHeadset,
  faLock,
  faPaperPlane,
  faQuestion,
  faQuestionCircle,
  faShield,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { verifyEmail } from "../../services/auth-service";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useFormik } from "formik";
export default function VerifyEmail() {
  const navigate = useNavigate();
  const [isExistError, setIsExistError] = useState(null);
  const email = localStorage.getItem("registered_email");
  async function SendDataVerifyEmail(values) {
    const code =
      values.digit1 +
      values.digit2 +
      values.digit3 +
      values.digit4 +
      values.digit5 +
      values.digit6;
    try {
      const response = await verifyEmail(code);
      console.log(response);
      if (response.success) {
        toast.success("The code is correct, please reset your password");
        setTimeout(() => {
          navigate("/reset-password");
        }, 3000);
      } else {
      }
    } catch (error) {
      toast.error(error.message);
      setIsExistError(error.message);
    }
  }

  const validationSchema = yup.object({
    digit1: yup.string().required("digit 1 is required"),
    digit2: yup.string().required("digit 2 is required"),
    digit3: yup.string().required("digit 3 is required"),
    digit4: yup.string().required("digit 4 is required"),
    digit5: yup.string().required("digit 5 is required"),
    digit6: yup.string().required("digit 6 is required"),
  });

  const formik = useFormik({
    initialValues: {
      digit1: "",
      digit2: "",
      digit3: "",
      digit4: "",
      digit5: "",
      digit6: "",
    },
    validationSchema,
    onSubmit: SendDataVerifyEmail,
  });
  const initialMinutes = 3;
  const initialSeconds = 3;
  const initialTimeInSeconds = initialMinutes * 60 + initialSeconds;

  const [time, setTime] = useState(initialTimeInSeconds);

  useEffect(() => {
    if (time <= 0) return;

    const interval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  const formatTime = (seconds) => {
    const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${mins}:${secs}`;
  };

  async function sendCodeToEmail() {
    try {
      const response = await forgotPassword(email);
      if (response.success) {
        toast.success("We send you code, please check your email address");
      } else {
      }
    } catch (error) {
      toast.error(error.message);
      setIsExistError(error.message);
    }
  }

  return (
    <>
      <div className="bg-mainColor py-10">
        <div className="container">
          <div className="w-full lg:w-[40%] bg-white p-5 lg:p-10 mx-auto border border-gray-300 rounded-lg">
            <div className="flex flex-col space-y-2 items-center justify-center text-center">
              <div className="rounded_icon">
                <FontAwesomeIcon icon={faEnvelopeOpenText} />
              </div>
              <h3 className="text-2xl font-bold">Verify your email</h3>
              <p className="text-[16px] text-gray-500">
                we've sent a verification code to your email address.
              </p>

              <p className="text-lg text-primary-600 font-semibold">{email}</p>
            </div>
            <form
              className="mt-5 space-y-2 flex flex-col"
              onSubmit={formik.handleSubmit}
            >
              <label className="text-lg text-center">
                Enter 6-digit verification code
              </label>
              <div className="grid grid-cols-6 gap-x-5 justify-center items-center text-center">
                <input
                  type="text"
                  className="form-control text-center"
                  name="digit1"
                  value={formik.values.digit1}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <input
                  type="text"
                  className="form-control text-center"
                  name="digit2"
                  value={formik.values.digit2}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <input
                  type="text"
                  className="form-control text-center"
                  name="digit3"
                  value={formik.values.digit3}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <input
                  type="text"
                  className="form-control text-center"
                  name="digit4"
                  value={formik.values.digit4}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <input
                  type="text"
                  className="form-control text-center"
                  name="digit5"
                  value={formik.values.digit5}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <input
                  type="text"
                  className="form-control text-center"
                  name="digit6"
                  value={formik.values.digit6}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <p className="text-center my-3">
                Code expires in
                <span className="text-lg text-primary-600 font-semibold ms-2">
                  {formatTime(time)}
                </span>
              </p>
              <button
                type="submit"
                className="py-3 mt-3 bg-primary-600 border-transparent cursor-pointer  text-lg font-semibold text-white text-center rounded-md"
              >
                Verify email
              </button>
              <div className="flex flex-col space-y-3 justify-center items-center mt-3">
                <p>Didn't receive the code?</p>
                <button
                  onClick={() => sendCodeToEmail()}
                  className="text-primary-600 font-medium text-lg"
                >
                  Resend code
                </button>
                <Link to="/login" className="text-primary-600 font-medium">
                  Back to sign in
                </Link>
              </div>
            </form>
          </div>
          <p className="text-center text-gray-500 mt-5 text-lg">
            Need help?{" "}
            <span className="text-primary-600 font-medium">
              Contact support
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
