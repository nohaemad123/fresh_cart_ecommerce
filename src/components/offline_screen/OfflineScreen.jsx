import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useOnlineStatus } from "../../hooks/useOnlineStatus";
import {
  faGlobe,
  faRotate,
  faSign,
  faSignal,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";

export default function OfflineScreen({ children }) {
  const isOnline = useOnlineStatus();
  if (isOnline) {
    return children;
  }
  return (
    <>
      <div className="bg-mainColor h-screen flex justify-center items-center">
        <div className="container text-center">
          <FontAwesomeIcon icon={faWifi} className="text-red-500 text-6xl" />
          <div className="bg-white flex flex-col space-y-3 p-10 w-[38%] m-auto mt-5 shadow-md rounded-lg">
            <h1 className=" text-xl font-bold">Connection Lost</h1>
            <p className="text-sm text-gray-400">
              Oops! it looks like you've lost your internet connection don't
              worry, we'll help you get back online
            </p>
            <div className="bg-mainColor text-gray-500 p-5 flex flex-col space-y-3">
              <div className="flex justify-between ">
                <h3 className="text-lg">
                  <FontAwesomeIcon icon={faSignal} className="me-2" />
                  Network status:
                </h3>
                <span className="text-red-500">offline</span>
              </div>
              <div className="flex justify-between">
                <h3 className="text-lg">
                  <FontAwesomeIcon icon={faGlobe} className="me-2" />
                  Last checked:
                </h3>
                <span>{new Date().toLocaleTimeString()}</span>
              </div>
            </div>
            <button className="bg-mainColor py-3 mt-2">
              <FontAwesomeIcon icon={faRotate} /> Try again
            </button>
            <div className="border-t border-gray-300 pt-3 mt-5 text-center items-center flex flex-col space-y-3">
              <h3 className="font-bold text-[18px] text-gray-400">
                Quick fixes
              </h3>
              <ul className="list-disc *:text-gray-400 flex flex-col space-y-2">
                <li>Check your wifi connection</li>
                <li>Try moving closer to your router</li>
                <li>Restart your router or mobile data</li>
                <li>Contact your internet provider if the issue persists</li>
              </ul>
            </div>
          </div>
          <p className="text-center mt-5 text-gray-400">
            <FontAwesomeIcon icon={faRotate} /> Auto-checking connection every
            30 seconds
          </p>
        </div>
      </div>
    </>
  );
}
