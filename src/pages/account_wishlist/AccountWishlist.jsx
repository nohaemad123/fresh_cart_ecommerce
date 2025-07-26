import MyWishlist from "../../components/my_wishlist/MyWishlist";

export default function AccountWishlist() {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between mb-3 items-center">
        <h3 className="text-xl font-bold">My wishlist</h3>
        <div className="flex flex-col lg:flex-row gap-x-5 mt-3">
          <select className="form-control min-w-30 bg-[#f3f4f6] px-3 rounded-md mb-3 lg:mb-0">
            <option>All categories </option>
          </select>
          <div className="relative flex justify-center">
            <select className="form-control min-w-30 bg-[#f3f4f6] px-3 rounded-md mb-3 lg:mb-0">
              <option>sort by: recently added </option>
            </select>
          </div>
        </div>
      </div>
      <MyWishlist />
    </>
  );
}
