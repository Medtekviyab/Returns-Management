import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="bg-gray-800 text-gray-300">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div class="md:flex md:justify-between">
            <div class="mb-6 md:mb-0">
              <a href=" " class="flex items-center">
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  RePro
                </span>
              </a>
            </div>
            <div class="flex flex-wrap justify-end">
              <div class="mr-8 mb-8 sm:mb-0">
                <h2 class="mb-6 text-sm font-semibold text-gray-300 uppercase dark:text-white">
                  Follow us
                </h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                    <a
                      href="https://github.com/Medtekviyab"
                      class="hover:underline hover:text-sky-600 "
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/alliance-biomedica-private-limited/"
                      class="hover:underline hover:text-sky-600"
                    >
                      Linkedin
                    </a>
                  </li>
                </ul>
              </div>
              <div class="mr-8 mb-8 sm:mb-0">
                <h2 class="mb-6 text-sm font-semibold text-gray-300 uppercase dark:text-white">
                  Legal
                </h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                    <a href="#" class="hover:underline hover:text-sky-600">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline hover:text-sky-600">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr class="my-6 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div class="sm:flex sm:items-center sm:justify-center">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a href=" " class="hover:underline">
                RePro™
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
