import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { CiEdit } from "react-icons/ci";
import { TbHelpSquareRounded } from "react-icons/tb";
import { CiLogout } from "react-icons/ci";
import { MdOutlineDashboard } from "react-icons/md";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { signOut } from "../redux/userSlice";

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentUser } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const handleSignOut = () => {
    dispatch(signOut());
  };

  return (
    <div className="relative">
      <button
        id="dropdown"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="flex items-center rounded-xl px-6 text-sm font-medium leading-normal text-primary transition duration-150 ease-in-out "
        type="button"
      >
        <img
          className="w-10 h-10 rounded-full object-cover"
          src={currentUser.user.photoURL || currentUser.user.profilePicture}
          alt="user photo"
        />
      </button>
      {isOpen && (
        <div
          id="dropdown"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="absolute z-50 -left-[50%] bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 transition-all duration-3000"
        >
          <div className="px-4 py-3 text-sm text-gray-900 dark:text-gray-10 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            <Link to="/">
              <div className="flex justify-start items-center gap-4 font-semibold">
                <CgProfile />
                <p className="hover:font-bold dark:text-gray-200">My Profile</p>
              </div>
            </Link>
          </div>
          <ul
            className="py-2 text-sm"
            aria-labelledby="dropdownAvatarNameButton"
          >
            <li>
              <Link
                to="/"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <div className="flex justify-start items-center gap-4 font-semibold">
                  <CiEdit />
                  <p className="hover:font-bold dark:text-gray-10">
                    Edit Profile
                  </p>
                </div>
              </Link>
            </li>
            {currentUser.user.email === import.meta.env.VITE_ADMIN_EMAIL ? (
              <li>
                <Link
                  to="/admin/dashboard"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <div className="flex justify-start items-center gap-4 font-semibold">
                    <MdOutlineDashboard />
                    <p className="hover:font-bold dark:text-gray-200">
                      Dashboard
                    </p>
                  </div>
                </Link>
              </li>
            ) : null}

            <li>
              <Link
                to="/"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <div className="flex justify-start items-center gap-4 font-semibold">
                  <TbHelpSquareRounded />
                  <p className="hover:font-bold dark:text-gray-200">Helps</p>
                </div>
              </Link>
            </li>
          </ul>
          <div className="py-2">
            <button
              onClick={handleSignOut}
              className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              <div className="flex justify-start items-center gap-4 font-semibold">
                <CiLogout />
                <p className="hover:font-bold dark:text-gray-10">Sign Out</p>
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
