import React from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";

function Hero6() {
  const commonStyles = {
    focusRing:
      "focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-600 focus:ring-offset-gray-900",
    container: "container px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl",
    button:
      "inline-flex items-center justify-center text-base font-semibold transition-all duration-200 rounded-full sm:text-lg sm:leading-8",
  };

  return (
    <div className="relative pt-32 overflow-hidden bg-black xl:pt-40">

      <div className="relative">
        <div className={commonStyles.container}>
          <div className="text-left md:max-w-xl md:mx-auto md:text-center">
            <h1 className="tracking-tighter text-white">
              <span className="font-sans text-7xl">Cinimate</span>
              <br />
              <span className="font-serif italic text-8xl"> Discover with Us</span>
            </h1>
            <p className="mt-5 text-base font-normal leading-7 text-white text-opacity-70">
              Discover components that bring design consistency and ease to your
              Next.js projects with AuraUI. Build faster with beautiful,
              ready-to-use designs that perform seamlessly.
            </p>

            <div className="mt-8">
              <Link
                to='/home'
                className={`${commonStyles.button} px-8 py-2 text-black bg-white border-2 border-transparent hover:bg-opacity-90 ${commonStyles.focusRing}`}
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="relative max-w-5xl px-6 mx-auto mt-12 -mb-8 group sm:px-8 lg:px-12 sm:-mb-24 lg:-mb-36 xl:-mb-40">
        <div className="overflow-hidden rounded-md aspect-w-4 aspect-h-3 lg:aspect-w-16 lg:aspect-h-9">
          <img
            className="object-cover w-full h-full transition-all duration-300 group-hover:opacity-80"
            src="https://www.auraui.com/memeimage/laptop-girl.jpeg"
            alt="AuraUI Background"
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <button type="button" className="flex flex-col items-center">
            <span className="inline-flex items-center justify-center w-16 h-16 text-white transition-all duration-200 border-2 rounded-full border-indigo-600 hover:bg-white hover:bg-opacity-20">
              <FaPlay className="h-4 w-4 ml-1" />
            </span>
            <span className="mt-5 text-base font-normal text-white">
              Play overview
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero6;