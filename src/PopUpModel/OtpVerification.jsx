import React, { useState } from "react";
import { Link } from "react-router-dom";
import ResetPassword from "./ResetPassword";

const OtpVerification = ({ handleToggle }) => {
  
  const [changePassword, setChangePassword] = useState(true);
  const [otpValue, setOtpValue] = useState("");

  const handleOtpChange = (index, value) => {
    let newOtpValue = otpValue;
    newOtpValue =
      newOtpValue.substring(0, index) +
      value +
      newOtpValue.substring(index + 1);
    setOtpValue(newOtpValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setChangePassword(false);
  };

  return (
    <>
      {changePassword ? (
        <div className="mx-auto flex w-full max-w-md flex-col space-y-5">
          <div className="flex flex-col items-center justify-center text-center space-y-2">
            <p className="text-2xl font-extrabold text-gray-10 dark:text-gray-90">
              Email Verification
            </p>
            <p className="flex flex-row text-sm font-medium text-gray-400">
              sent an otp to ba**@gmail.com
            </p>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col space-y-8">
                <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                  {/* Customize the input fields */}
                  {[1, 2, 3, 4].map((index) => (
                    <div key={index} className="w-16 h-16">
                      <input
                        className="w-full h-full text-center px-5 outline-none rounded-xl border border-gray-200 text-lg font-bold text-gray-90 ring-blue-700
                       focus:bg-gray-50 focus:text-gray-10 focus:ring-1
                        dark:bg-gray-50 dark:focus:bg-gray-10 dark:text-gray-10 dark:focus:text-gray-50"
                        type="text"
                        name={`digit-${index}`}
                        id={`digit-${index}`}
                        maxLength={1}
                        value={otpValue[index - 1] || ""}
                        onChange={(e) =>
                          handleOtpChange(index - 1, e.target.value)
                        }
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col space-y-5">
                  <div>
                    <button
                      type="submit"
                      className="w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-md font-bold shadow-sm"
                    >
                      Verify Account
                    </button>
                  </div>

                  <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                    <p>Didn't receive code?</p>{" "}
                    <Link className="flex flex-row items-center text-blue-600">
                      Resend
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <ResetPassword handleToggle={handleToggle} />
      )}
    </>
  );
};

export default OtpVerification;
