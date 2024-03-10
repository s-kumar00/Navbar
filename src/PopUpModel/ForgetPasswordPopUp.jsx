import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import ForgetPassword from "./ForgetPassword";
import { useNavigate } from "react-router-dom";


const AuthPopUp = () => {
  const [isLoginOpen, setLoginOpen] = useState(true);
  const navigate = useNavigate();
  const handleToggle = () => {
    setLoginOpen(false);
    navigate("/login");
  };

  return (
    <div className="fixed z-30 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen ">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-20 opacity-75 dark:bg-gray-90"></div>
        </div>
        <div className="relative bg-gray-50 rounded-lg p-8 max-w-md w-full dark:bg-gray-10">
          <RxCross2
            onClick={handleToggle}
            className="text-4xl font-bold absolute top-0 right-0 m-4 p-2 text-gray-100 hover:text-secondary cursor-pointer dark:text-gray-90 dark:hover:text-secondary"
          />
          {/* Toggle between login and sign up */}
          {isLoginOpen && <ForgetPassword handleToggle={handleToggle} />}
        </div>
      </div>
    </div>
  );
};

export default AuthPopUp;
