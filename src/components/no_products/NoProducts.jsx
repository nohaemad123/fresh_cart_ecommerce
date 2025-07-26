import no_products from "../../assets/undraw_empty_4zx0.svg";

export default function NoProducts({ name }) {
  return (
    <>
      <div className="bg-white p-10 rounded-md">
        <div className=" flex flex-col justify-center items-center space-y-5">
          <img src={no_products} alt="" className="w-80" />
          <h3 className="text-2xl text-primary-600 font-bold">
            No products in {name}
          </h3>
          <p className="text-gray-500">continue shopping</p>
        </div>
      </div>
    </>
  );
}
