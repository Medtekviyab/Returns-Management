import React from "react";
import "../../src/app/globals.css";

const Homepage = () => {
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
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a
              href="#"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Join waitlist
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-6">
        <section className="bg-white">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:gap-16">
            <div
              className="flex flex-col justify-center items-start"
              style={{ maxWidth: "600px", width: "100%", textAlign: "left" }}
            >
              <p
                className="mb-8 text-xl font-normal text-gray-500 lg:text-2xl dark:text-gray-400"
                style={{ lineHeight: "1.3", marginLeft: "-20px" }}
              >
                <span
                  style={{
                    fontWeight: "bold",
                    color: "#0C81F7",
                    fontSize: "clamp(30px, 8vw, 50px)",
                  }}
                >
                  Where satisfaction meets every purchase, backed by our
                  seamless return policy.
                </span>
              </p>
              <p
                className="mb-8 text-xl font-normal text-gray-500 lg:text-2xl dark:text-gray-400"
                style={{ lineHeight: "1.3", marginLeft: "-20px" }}
              >
                <span
                  style={{
                    fontWeight: "bold",
                    color: "black",
                    fontSize: "clamp(20px, 6vw, 30px)",
                  }}
                >
                  Experience peace of mind with Repro – easy returns ensuring
                  your delight.
                </span>
              </p>
            </div>
            <div class="flex justify-end">
              <img
                src="Return.svg"
                alt="product preview"
                class="image"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </div>
        </section>
      </div> */}

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
            <a
              href="#"
              class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Join Waitlist
            </a>
          </div>
        </div>
      </section>
      {/* <section>
        <div class="py-8 px-4 mx-auto w-full lg:py-2">
          <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
            <h1
              class="text-gray-900 dark:text-white text-3xl md:text-4xl font-bold mb-2"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              The RePro return policy platform for commerce.
            </h1>
            <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
              "Revolutionizing returns, RePro simplifies commerce's return
              policies, empowering seamless customer experiences while
              streamlining merchant processes." "RePro: Redefining commerce
              returns with an innovative platform, fostering hassle-free
              transactions and customer-centric policies."
            </p>

            <ol class="space-y-8 w-80 mb-8">
              <li>
                <div
                  class="w-full p-4 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                  role="alert"
                >
                  <div class="flex items-center justify-between">
                    <h3 class="font-medium">7-Day return</h3>
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
                </div>
              </li>
              <li>
                <div
                  class="w-full p-4 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                  role="alert"
                >
                  <div class="flex items-center justify-between">
                    <h3 class="font-medium">Green Shipping protection</h3>
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
                      class="lucide lucide-container"
                    >
                      <path d="M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z" />
                      <path d="M10 21.9V14L2.1 9.1" />
                      <path d="m10 14 11.9-6.9" />
                      <path d="M14 19.8v-8.1" />
                      <path d="M18 17.5V9.4" />
                    </svg>
                  </div>
                </div>
              </li>
              <li>
                <div
                  class="w-full p-4 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                  role="alert"
                >
                  <div class="flex items-center justify-between">
                    <h3 class="font-medium">On-time Delivery Guarantee</h3>
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
                </div>
              </li>
              <li>
                <div
                  class="w-full p-4 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                  role="alert"
                >
                  <div class="flex items-center justify-between">
                    <h3 class="font-medium">Buyback Guarantee</h3>
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
                      class="lucide lucide-heart-handshake"
                    >
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                      <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66" />
                      <path d="m18 15-2-2" />
                      <path d="m15 18-2-2" />
                    </svg>
                  </div>
                </div>
              </li>
              <li>
                <div
                  class="w-full p-4 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                  role="alert"
                >
                  <div class="flex items-center justify-between">
                    <h3 class="font-medium">Extended Warranty</h3>
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
                </div>
              </li>
            </ol>
            <a
              href="#"
              class="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Book a demo
              <svg
                class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>

          <div class="flex justify-center mb-10">
            <div class="card max-w-screen-lg">
              <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                <h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
                  Start building risk-free shopping experience into your
                  customer journey.
                </h2>
                <a
                  href="#"
                  class="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-blue rounded-lg bg-white-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                >
                  Book a demo
                  <svg
                    class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Homepage;
