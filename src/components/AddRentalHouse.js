import axios from "axios";
import { Outlet, Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import React from "react";
import { useForm } from "react-hook-form";

function AddRentalHouse() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  async function fetchData(data) {
    const Result = await axios.post(
      " http://localhost:3000/rental-houses",
      data
    );
    console.log("Add successfully");
  }
  const [fetchedData, setFetchedData] = useState("");
  const onSubmit = (data, e) => {
    console.log(data);
    e.preventDefault();
    setFetchedData(data);

    fetchData(data);
  };
  return (
    <>
      <div>
        <div class="container mx-auto p-2">
          <div class="max-w-sm mx-auto my-24 bg-white px-5 py-10 rounded shadow-xl">
            <div class="text-center mb-8">
              <h1 class=" text-2xl font-bold">Add details</h1>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="mt-5">
                <label
                  for="img"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  image
                </label>
                <input
                  {...register("url")}
                  type="text"
                  id="username"
                  class="block w-full p-2 border rounded border-gray-500"
                />
              </div>
              <div class="mt-5">
                <label
                  for="Address"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Address
                </label>
                <input
                  {...register("Address")}
                  type="text"
                  id="Address"
                  class="block w-full p-2 border rounded border-gray-500"
                ></input>
              </div>

              <div class="mt-5">
                <label
                  for="City"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  City
                </label>
                <input
                  {...register("city")}
                  type="text"
                  id="City"
                  class="block w-full p-2 border rounded border-gray-500"
                />
              </div>
              <div class="mt-5">
                <label
                  for="Rent"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Rent
                </label>
                <input
                  {...register("price")}
                  type="number"
                  id="Rent"
                  class="block w-full p-2 border rounded border-gray-500"
                  min="3000"
                  max="10000"
                />
              </div>
              <div class="mt-5">
                <label
                  for="squareFootage"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  squareFootage
                </label>
                <input
                  {...register("squareFootage")}
                  type="number"
                  id="Rent"
                  class="block w-full p-2 border rounded border-gray-500"
                  min="1000"
                  max="10000"
                />
              </div>

              <div class="mt-5">
                <label
                  for="propertyType"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  PropertyType
                </label>
                <select
                  {...register("propertyType")}
                  id="propertyType"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500"
                >
                  <option value="Apartment">Apartment</option>
                  <option value="Duplex-Triplex">Duplex-Triplex</option>
                  <option value="Single Family">Single Family</option>
                </select>
              </div>
              <div class="mt-5">
                <label
                  for="bedrooms"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  bedrooms
                </label>
                <input
                  {...register("bedrooms")}
                  type="number"
                  id="bedrooms"
                  class="block w-full p-2 border rounded border-gray-500"
                  min="1"
                  max="12"
                />
              </div>
              <div class="mt-10">
                <input
                  type="submit"
                  value="ADD"
                  class="py-3 bg-green-500 hover:bg-green-600 rounded text-white text-center w-full"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddRentalHouse;
