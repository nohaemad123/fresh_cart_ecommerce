import { useContext, useEffect, useState } from "react";
import { authContext } from "../../context/Auth.context";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link } from "react-router";
import { updateUserData } from "../../services/auth-service";
import { toast } from "react-toastify";

export default function UpdateAccount() {
  const { userData } = useContext(authContext);
  const [initialValues, setInitialValues] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const phoneRegex = /^01[0-2,5]{1}[0-9]{8}$/;

  const validationSchema = yup.object({
    name: yup
      .string()
      .required("Name is required")
      .min(4, "name must be minimum 4 characters")
      .max(20, "name must be at least 20 characters"),
    email: yup.string().email("Invalid email").required("Email is required"),
    phone: yup.string(),
    //   .matches(phoneRegex, "Invalid phone number")
    //   .required("phone is required"),
  });

  useEffect(() => {
    if (userData) {
      setInitialValues({
        name: userData.name || "",
        email: userData.email || "",
        phone: userData.phone || "",
      });
    }
  }, [userData]);

  async function SendDataToUpdateAccount(values) {
    try {
      const response = await updateUserData(values);

      if (response.success) {
        toast.success("the account updated successfully ");
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
    enableReinitialize: true,
    initialValues,
    validationSchema,
    onSubmit: SendDataToUpdateAccount,
  });

  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col space-y-3 mt-3"
      >
        <div className="form-group flex flex-col space-y-3">
          <label>Name</label>
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
        <div className="form-group flex flex-col space-y-3">
          <label>Email</label>
          <input
            type="text"
            className="form-control block w-full "
            placeholder="Ali"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-600">{formik.errors.email}</p>
          )}
        </div>
        <div className="form-group flex flex-col space-y-3">
          <label>Phone</label>
          <input
            type="tel"
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
        <div className="flex gap-x-3 mt-3">
          <button
            type="submit"
            className=" py-2 px-3 bg-primary-600 border-transparent cursor-pointer  text-lg font-semibold text-white text-center rounded-md"
          >
            Update my profile
          </button>
          <Link
            to="/"
            className="py-2 px-3 border cursor-pointer border-primary-600  text-sm text-primary-600 font-semibold text-center rounded-md"
          >
            Cancel
          </Link>
        </div>
      </form>
    </>
  );
}
