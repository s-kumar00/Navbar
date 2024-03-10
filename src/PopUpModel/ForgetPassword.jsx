import React, { useState } from "react";
import { IoKeyOutline } from "react-icons/io5";
import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";
import OtpVerification from "./OtpVerification";

const ForgetPassword = ({ handleToggle}) => {
  const [isOtp, setIsOtp] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOtp(false);
  };

  return (
    <>
      {isOtp ? (
        <>
          <div className="text-center">
            <h1 className="text-2xl font-extrabold text-gray-10 dark:text-gray-90">
              Email Verification
            </h1>
            <p className="text-sm font-medium text-gray-400">
              Fill up the form to verify email
            </p>
          </div>
          <form onSubmit={handleSubmit} className="my-5">
            <div className="flex flex-col space-y-5">
              <input
                id="email"
                name="email"
                type="email"
                className="font-normal rounded-md p-2 w-full border border-gray-300 focus:ring dark:text-gray-90"
                placeholder="Enter email address"
              />
              <button
                type="submit"
                className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center"
              >
                <IoKeyOutline className="font-bold text-2xl" />
                <span>Send OTP</span>
              </button>
              <p className="text-center text-gray-200 dark:text-gray-50">
                Not registered yet?{" "}
                <Link
                  onClick={handleToggle}
                  className="text-indigo-400 font-medium inline-flex space-x-1 items-center dark:text-indigo-600"
                >
                  <span>Register now </span>
                  <FiExternalLink />
                </Link>
              </p>
            </div>
          </form>
        </>
      ) : (
        <OtpVerification handleToggle={handleToggle} />
      )}
    </>
  );
};

export default ForgetPassword;
