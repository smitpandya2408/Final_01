import React from "react";
import banner from "../../public/2208.i305.025.F.m005.c9.realistic book lover.jpg"

const Banner = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32 ">
          <div className="space-y-12  ">
            <h1 className="text-4xl font-bold">
              Hello, welcomes here to learn something{" "}
              <span className="text-pink-500">new everyday!!!!</span>
            </h1>
            <p className="text-xl font-semibold">
              Whether you're looking for timeless classics, thrilling
              adventures, or inspiring stories, our curated collection has
              something for every kind of reader. From bestsellers to hidden
              gems, we bring the world of books to your fingertips.
            </p>

            <label className="input flex items-center gap-2 w-140">
              <svg
                className="h-6 w-6 opacity-70"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
                <path d="M22 6 12 13 2 6" />
              </svg>
              <input
                type="email"
                className="grow outline-none border-none focus:outline-none focus:border-none"
                placeholder="Enter your email"
              />
            </label>
          </div>
            <button className="btn btn-secondary mt-6">Secondary</button>
        </div>
        <div className="order-1 w-full md:w-1/2">
          <img src={banner} className=""></img>
        </div>
      </div>
    </>
  );
};

export default Banner;
