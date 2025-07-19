import { useFormik } from "formik";

export default function AddAddress() {
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      city: "",
      details: "",
    },
    // validationSchema,
    // onSubmit: SendDataToChangePassword,
  });
  return (
    <>
      <form
        className="flex flex-col space-y-2 mt-4"
        onSubmit={formik.handleSubmit}
      ></form>
    </>
  );
}
