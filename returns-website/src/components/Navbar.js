"use client";
import React, { useState } from "react";

const Navbar = () => {

  return (
    <div>
      <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span className="ml-0 text-4xl font-extrabold gradient-text">
              RePro
            </span>
          <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            class="gradient-text inline-flex justify-center items-center py-2 px-4 text-base font-medium text-center text-gray-900 shadow-lg rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-black dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            style={{
              boxShadow: "0 0 3px 0px #020202, 0 0 3px 0px #0c81f7",
            }}
          >
            Book a demo
          </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
