import { useFormik } from "formik";
import { useContext } from "react";
import * as yup from "yup";
import { addressContext } from "../../context/Address.context";

export default function AddAddress() {
  const { AddAddressFunction } = useContext(addressContext);
  const phoneRegex = /^01[0-2,5]{1}[0-9]{8}$/;

  const validationSchema = yup.object({
    name: yup.string().required("the name is required"),
    city: yup.string().required("the city is required"),
    details: yup.string().required("the details is required"),
    phone: yup
      .string()
      .matches(phoneRegex, "Invalid phone number")
      .required("phone is required"),
  });

  function SendDataToAddAddress(values) {
    AddAddressFunction(values);
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      city: "",
      details: "",
    },
    validationSchema,
    onSubmit: SendDataToAddAddress,
  });
  return (
    <>
      <form
        className="flex flex-col space-y-2 mt-10 border-t border-gray-300 pt-5"
        onSubmit={formik.handleSubmit}
      >
        <div className=" flex flex-col space-y-2">
          <label htmlFor="password_input">Name </label>

          <div className="relative flex justify-center">
            <input
              type="text"
              id="email_input"
              className="form-control block w-full pe-10"
              placeholder="Enter name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
        </div>
        {formik.touched.name && formik.errors.name && (
          <p className="text-red-600">{formik.errors.name}</p>
        )}
        <div className=" flex flex-col space-y-2">
          <label htmlFor="password_input">City </label>

          <div className="relative flex justify-center">
            <input
              type="text"
              id="email_input"
              className="form-control block w-full pe-10"
              placeholder="Enter city"
              name="city"
              value={formik.values.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
        </div>
        {formik.touched.city && formik.errors.city && (
          <p className="text-red-600">{formik.errors.city}</p>
        )}
        <div className=" flex flex-col space-y-2">
          <label htmlFor="password_input">Phone </label>

          <div className="relative flex justify-center">
            <input
              type="tel"
              id="email_input"
              className="form-control block w-full pe-10"
              placeholder="Enter your Phone"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
        </div>
        {formik.touched.phone && formik.errors.phone && (
          <p className="text-red-600">{formik.errors.phone}</p>
        )}
        <div className=" flex flex-col space-y-2">
          <label htmlFor="password_input">Address Details </label>

          <div className="relative flex justify-center">
            <textarea
              placeholder="Enter address details"
              name="details"
              value={formik.values.details}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              rows={5}
              className="form-control w-full "
            ></textarea>
          </div>
        </div>
        {formik.touched.details && formik.errors.details && (
          <p className="text-red-600">{formik.errors.details}</p>
        )}

        <button
          type="submit"
          className="mt-3 w-fit py-2 px-3 bg-primary-600 border-transparent cursor-pointer  text-[18px] font-semibold text-white text-center rounded-md"
        >
          Add address
        </button>
      </form>
    </>
  );
}
