import React from "react";

const ResetPassword = ({ handleToggle }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleToggle();
  };
  return (
    <div>
      <h1 className="text-2xl font-extrabold text-gray-10 dark:text-gray-90 ">
        Reset password
      </h1>
      <form
        onSubmit={handleSubmit}
        className="mt-4 space-y-4 lg:mt-5 md:space-y-5"
      >
        <div className="mb-4">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="font-normal rounded-md p-2 w-full border border-gray-300 focus:ring dark:text-gray-90"
            required
          />
        </div>
        <div>
          <input
            type="confirmPassword"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Retype password"
            className="font-normal rounded-md p-2 w-full border border-gray-300 focus:ring dark:text-gray-90"
            required
          />
        </div>
        <button
          type="submit"
          className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-md font-bold shadow-sm"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
