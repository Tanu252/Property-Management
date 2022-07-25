import React from "react";
import { Link } from "react-router-dom";
export default function NoPage() {
  return (
    <div
      class="
    flex
    items-center
    justify-center
    w-full
    h-4/5
    bg-gradient-to-r
    from-indigo-600
    to-blue-400
  "
    >
      <div class="p-2 bg-white rounded-md shadow-xl h-2/5">
        <div class="flex flex-col items-center">
          <h1 class="font-bold text-blue-600 text-9xl">404</h1>

          <h6 class="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
            <span class="text-red-500">Oops!</span> Page not found
          </h6>

          <p class="mb-8 text-center text-gray-500 md:text-lg">
            The page you’re looking for doesn’t exist.
          </p>

          <Link
            to="/"
            class="px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}
