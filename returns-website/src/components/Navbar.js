"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
let timeout;

const Navbar = ({ showDropdown, hideDropdown, hideSignIn }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();

  const gotoHome = () => {
    router.push("/");
  };
  const openDropdown = () => {
    clearTimeout(timeout);
    setIsDropdownOpen(true);
  };

  const closeDropdown = () => {
    timeout = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 500);
  };

  const handleMouseEnter = () => {
    openDropdown();
  };

  const handleMouseLeave = () => {
    closeDropdown();
  };

  return (
    <div>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/">
            <span className="ml-0 text-4xl font-extrabold gradient-text">
              RePro
            </span>
          </Link>

          <div className="flex items-center space-x-3 md:space-x-0 md:order-2 rtl:space-x-reverse">
            {!showDropdown && !hideSignIn && (
              <Link href="/login">
                <button
                  type="button"
                  className="gradient-text inline-flex justify-center items-center py-2 px-4 text-base font-medium text-center text-gray-900 shadow-lg rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-black dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                  style={{
                    boxShadow: "0 0 3px 0px #020202, 0 0 3px 0px #0c81f7",
                  }}
                >
                  SignIn
                </button>
              </Link>
            )}
            {!hideDropdown && (
              <div
                className="relative inline-block text-left"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  className="flex text-sm bg-gray-300 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  onClick={openDropdown}
                  aria-expanded={isDropdownOpen ? "true" : "false"}
                >
                  <span className="sr-only">Open user menu</span>
                  <Image
                    src="/User.svg"
                    alt="product preview"
                    width="40"
                    height="40"
                    class="max-w-md rounded-full h-auto"
                  />
                </button>
                {isDropdownOpen && (
                  <div
                    className="absolute right-0 mt-2 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="px-4 py-3">
                      <span className="block text-sm text-gray-900 dark:text-white">
                        Bonnie Green
                      </span>
                      <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
                        name@flowbite.com
                      </span>
                    </div>
                    <ul className="py-2" aria-labelledby="user-menu-button">
                      <li>
                        <a
                          href="#"
                          onClick={gotoHome}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          Home
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          onClick={gotoHome}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          Log out
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
