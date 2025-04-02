import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MdKeyboardArrowDown } from "react-icons/md";
import slide1 from "../../assets/img/slide1.jpg";
import slide2 from "../../assets/img/slide2.jpg";
import logo from "../../assets/img/logo.png";

export const Login = () => {
  const [showForm, setShowForm] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const [currentSlide, setCurrentSlide] = useState(slide1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === slide1 ? slide2 : slide1));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[200vh] md:h-[120vh] mt-24 flex flex-col md:flex-row bg-gray-100 font-nunito">
      {/* Left Side - Login */}
      <div className="w-full xl:w-1/2 h-full flex flex-col justify-center items-center  p-4 md:p-10 xl:p-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full h-auto p-8 bg-white rounded-lg  flex flex-col"
        >
          <Link
            to="/"
            className="flex font-noto text-2xl text-black font-bold items-center"
          >
            <div className="mr-3">
              <img src={logo} width={35} height={35} alt="SLP Logo" />
            </div>
            <div className="text-lg text-black">Dashboard Cianjur</div>
          </Link>
          <p className="mt-4 font-black font-noto text-2xl">Welcome back</p>
          <p className="mt-2 font-normal text-gray-500 text-sm">
            Start your website in seconds. Don’t have an account? Sign up.
          </p>
          <form className="space-y-4 md:space-y-6 mt-6" action="#">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="flex items-start xs:gap-0 gap-2 xs:items-center justify-between flex-col xs:flex-row">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="remember"
                    className="text-gray-500 dark:text-gray-300"
                  >
                    Remember me
                  </label>
                </div>
              </div>
              <a
                href="#"
                className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-green-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Sign in
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Don’t have an account yet?{" "}
              <Link
                to="/eksekutif-dashboard/register"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Sign up
              </Link>
            </p>
          </form>
          <div className="flex flex-col xs:flex-row md:flex-col lg:flex-row gap-2 xs:gap-4 mt-4">
            <button className="text-sm font-normal bg-green-600 px-4 py-5 w-full rounded-lg text-white  ">
              Masuk dengan SSO Cianjur
            </button>
            <button className="text-sm font-normal flex items-center justify-center bg-white gap-2 px-4 py-5 w-full border rounded-lg text-black   hover:bg-gray-100">
              Masuk Tanpa SSO Cianjur
            </button>
          </div>
        </motion.div>
      </div>

      {/* Right Side - Registration */}
      <div
        className="w-full xl:w-1/2 h-full flex flex-col justify-center items-center bg-cover bg-center transition-all duration-1000 font-nunito overflow-auto relative"
        style={{ backgroundImage: `url(${currentSlide})` }}
      >
        <div className="w-full h-full bg-black opacity-80 z-0"></div>
      </div>
    </div>
  );
};
