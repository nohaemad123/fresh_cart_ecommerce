import { Outlet } from "react-router";
import AccountSidebar from "../account_sidebar/AccountSidebar";
import BreadCrumb from "../breadcrumb/BreadCrumb";

export default function AccountLayout() {
  return (
    <>
      <BreadCrumb thirdLink={"Account"} bg_gray={"bg-mainColor"} />
      <div className="py-10 bg-mainColor">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-12 mb-2 gap-x-5">
            <div className="md:col-span-3 ">
              <AccountSidebar />
            </div>
            <div className="md:col-span-9 ">
              <div className="bg-white p-7 rounded-md">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
