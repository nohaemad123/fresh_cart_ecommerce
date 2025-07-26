import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import author_image from "../../assets/review-author.png";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import UpdateAccount from "../../components/update_account/UpdateAccount";

export default function AccountDetails() {
  return (
    <>
      <h3 className="text-2xl font-bold">Account details</h3>
      <div className="flex flex-col lg:flex-row mt-5 gap-x-5">
        <div className="relative w-fit">
          <img
            src={author_image}
            className="size-30 border-5 border-gray-300 rounded-full"
          />
          <div className="absolute bottom-0 right-0 bg-primary-600 size-10 rounded-full flex justify-center items-center text-white">
            <FontAwesomeIcon icon={faCamera} />
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <h4 className="text-lg">Upload new profile picture</h4>
          <div className="flex gap-x-3">
            <button
              type="submit"
              className=" py-2 px-3 bg-primary-600 border-transparent cursor-pointer  text-lg font-semibold text-white text-center rounded-md"
            >
              Upload new
            </button>
            <button className="py-2 px-3 border cursor-pointer border-primary-600  text-sm text-primary-600 font-semibold text-center rounded-md">
              Cancel
            </button>
          </div>
          <h4 className="text-sm text-gray-500">JPG, PNG, max size 2Mb</h4>
        </div>
      </div>

      <div className="mt-5 border-t border-gray-300 pt-5">
        <h3 className="text-2xl font-bold">Profile information</h3>
        <UpdateAccount />
      </div>
    </>
  );
}
