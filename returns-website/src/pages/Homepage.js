"use client"

import React, { useState } from "react";
import "../../src/app/globals.css";

const Homepage = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
  };

  return (
    <div>
      <section className="bg-gray-100 dark:bg-gray-900">
        <div className="mt-14 py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-32">
          <h1 className="mb-4 text-3xl font-bold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-5xl dark:text-white">
            The{" "}
            <span
              style={{
                backgroundColor: "#0C81F7",
                borderRadius: "5px",
                padding: "2px 8px",
              }}
            >
              RePro return policy
            </span>{" "}
            platform
          </h1>
          <h1 className="mb-4 text-3xl font-bold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-5xl dark:text-white">
            for e-commerce.
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            Experience peace of mind with Repro – easy returns ensuring your
            delight.
          </p>

          <form onSubmit={handleSubmit} class="w-full max-w-md mx-auto">
            <label
              htmlFor="default-email"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Email sign-up
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 rtl:inset-x-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-900 dark:text-gray-900"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </div>
              <input
                type="email"
                id="default-email"
                className="block w-full p-4 pl-10 text-sm text-black border border-gray-600 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-100 dark:border-gray-900 dark:placeholder-gray-900 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your email here..."
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2 bg-black border border-black hover:bg-black hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-black dark:border-black dark:placeholder-black dark:focus:ring-white-800"
              >
                Join Waitlist
              </button>{" "}
            </div>
          </form>
        </div>
      </section>

      <div
        className="text mt-10 mb-10 flex-container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <p className="text-base lg:text-4xl font-bold">
          Our <span style={{ color: "#0C81F7" }}>return policy</span> to you
        </p>
        <p className="text-base lg:text-1xl" style={{ maxWidth: "600px" }}>
          The self-service eCommerce returns solution that makes reverse
          logistics profitable for your eCommerce business.
        </p>
      </div>

      <div class="card_container">
        <div class="card">
          <div class="circle-background">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-undo-2"
            >
              <path d="M9 14 4 9l5-5" />
              <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11" />
            </svg>
          </div>
          <h5> 7-Day return </h5>
          <p>
            {" "}
            Through its lens, the microscope unveils the extraordinary within
            the seemingly ordinary, magnifying the essence of life itself.
          </p>
        </div>
        <div class="card">
          <div class="circle-background">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-timer"
            >
              <line x1="10" x2="14" y1="2" y2="2" />
              <line x1="12" x2="15" y1="14" y2="11" />
              <circle cx="12" cy="14" r="8" />
            </svg>
          </div>
          <h5> On-time Delivery Guarantee </h5>
          <p>
            {" "}
            Through its lens, the microscope unveils the extraordinary within
            the seemingly ordinary, magnifying the essence of life itself.
          </p>
        </div>
        <div class="card">
          <div class="circle-background">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-shield-plus"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
              <path d="M8 11h8" />
              <path d="M12 15V7" />
            </svg>
          </div>
          <h5> Extended Warranty </h5>
          <p>
            {" "}
            Through its lens, the microscope unveils the extraordinary within
            the seemingly ordinary, magnifying the essence of life itself.
          </p>
        </div>
      </div>

      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h1 class="mb-4 text-3xl font-bold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
            Return with ease, shop with peace of mind – your satisfaction is our
            promise
          </h1>
          <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            We offer a straightforward return process to ensure your shopping
            experience remains worry-free. Simply reach out to our dedicated
            customer service team within 7 days of receiving your order. We'll
            guide you through the return steps and provide assistance at every
            stage.
          </p>
          <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <button
              type="button"
              class="gradient-text inline-flex justify-center items-center py-2 px-4 text-base font-medium text-center text-gray-900 shadow-lg rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-black dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              style={{
                boxShadow: "0 0 3px 0px #020202, 0 0 3px 0px #0c81f7",
              }}
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
