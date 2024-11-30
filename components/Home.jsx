"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram } from "lucide-react";
import Navbar from "./Navbar";

const HomeSection = () => {
  //  Time State for footer
  const [currentTime, setCurrentTime] = useState("");
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZoneName: "short",
      };
      setCurrentTime(`Coming Soon - ${now.toLocaleString("en-US", options)}`);
    };

    updateTime(); // Set time initially
    const interval = setInterval(updateTime, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);
  // Time State for footer

  return (
    <div className="flex flex-col h-screen bg-[url('/images/bg.png')] bg-center bg-cover bg-black">
      {/* Navbar */}
      <Navbar />
      {/* Navbar */}

      {/* Hero Section */}
      <section className="relative w-full flex-1 ">
        <div className="max-w-screen-xl mx-auto px-4 py-3 h-full flex flex-col md:flex-row items-center text-gray-600 md:px-8">
          {/* Website Information */}
          <div className="flex-none space-y-5 max-w-xl relative text-center md:text-left">
            <Link
              href="#"
              className="inline-flex gap-x-6 items-center rounded-full p-1 pr-6 border text-sm font-medium duration-150"
            >
              <span className="inline-block rounded-full px-3 py-1 bg-indigo-600 text-white">
                About
              </span>
              <p className="flex items-center text-white">
                Our Website is Currently Under Development
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </p>
            </Link>
            <h1 className=" text-white font-medium sm:text-lg">
              Sarvman Health Care is a platform that facilitates online and
              offline physiotherapy appointment booking, with doctors
              registering and managing their services. It also offers
              educational blogs covering medical research, medicines, and
              diseases.
            </h1>
            <h2 className="text-2xl text-gray-300 font-extrabold mx-auto">
              We are working hard to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
                bring you something amazing! Stay Tuned!
              </span>
            </h2>
          </div>
          {/* Website Information */}

          {/* Maintainance side image */}
          <div className="flex-1  md:block">
            <Image
              src="/images/WebConstruction-1.png"
              className="max-w-full mx-auto md:max-w-2xl"
              alt="Web Construction"
              width={650}
              height={650}
            />
          </div>
          {/* Maintainance side image */}
        </div>
      </section>
      {/* Hero Section */}

      {/* Footer */}
      <footer className="relative w-full  text-white">
        <div className="max-w-7xl mx-auto px-6 ">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center ">
            {/* Copy Right Section */}
            <div className="mb-4 md:mb-0">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                  <img
                    src={"/icons/sarvman-logo.png"}
                    alt="logo"
                    className="rounded-lg w-10 h-10"
                  />
                </div>
              </div>
              <p className="text-zinc-300">© 2024 Sarvman Health Care</p>
            </div>
            {/* Copy Right Section */}

            {/* Gradient Background */}
            {/* <div
              className="absolute inset-0 blur-[118px]"
              style={{
                background:
                  "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
              }}
            ></div> */}
            {/* Gradient Background */}

            {/* Social Media And Time Section */}
            <div className="flex flex-col items-start md:items-end gap-2 z-50">
              <div className="gap-x-3 space-y-3 sm:flex sm:space-y-0 justify-center md:justify-start text-zinc-500 text-sm flex flex-row">
                <Link
                  href="#"
                  className="block py-2  text-white font-medium duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-lg shadow-lg hover:shadow-none"
                >
                  Follow For More Updates
                </Link>

                <Link
                  href="https://www.instagram.com/darshilptl_03/"
                  className="block py-1 px-4 text-white font-medium duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-lg shadow-lg hover:shadow-none"
                >
                  <Instagram size={25} />
                </Link>
                <Link
                  href="https://x.com/darshilptl03"
                  className="block py-1 text-white font-medium duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-lg shadow-lg hover:shadow-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="26"
                    height="26"
                    viewBox="0 0 50 50"
                  >
                    <path
                      d="M 11 4 C 7.1456661 4 4 7.1456661 4 11 L 4 39 C 4 42.854334 7.1456661 46 11 46 L 39 46 C 42.854334 46 46 42.854334 46 39 L 46 11 C 46 7.1456661 42.854334 4 39 4 L 11 4 z M 11 6 L 39 6 C 41.773666 6 44 8.2263339 44 11 L 44 39 C 44 41.773666 41.773666 44 39 44 L 11 44 C 8.2263339 44 6 41.773666 6 39 L 6 11 C 6 8.2263339 8.2263339 6 11 6 z M 13.085938 13 L 22.308594 26.103516 L 13 37 L 15.5 37 L 23.4375 27.707031 L 29.976562 37 L 37.914062 37 L 27.789062 22.613281 L 36 13 L 33.5 13 L 26.660156 21.009766 L 21.023438 13 L 13.085938 13 z M 16.914062 15 L 19.978516 15 L 34.085938 35 L 31.021484 35 L 16.914062 15 z"
                      fill="white"
                    ></path>
                  </svg>
                </Link>
              </div>

              <p className="text-zinc-300 text-sm">{currentTime}</p>
            </div>
            {/* Social Media And Time Section */}
          </div>
        </div>
      </footer>
      {/* Footer */}
    </div>
  );
};

export default HomeSection;
