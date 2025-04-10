import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MdKeyboardArrowDown } from "react-icons/md";
import slide1 from "../../assets/img/slide1.jpg";
import slide2 from "../../assets/img/slide2.jpg";
import logo from "../../assets/img/logo.png";
import axios from "axios";

export const Auth = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(slide1);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
    rememberMe: false,
    acceptTerms: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // API URL
  const API_URL = "http://localhost:5000/api";

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === slide1 ? slide2 : slide1));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      if (isLogin) {
        // Login logic
        const response = await axios.post(`${API_URL}/login`, {
          email: formData.email,
          password: formData.password,
        });

        setSuccess(response.data.message);

        // Store token in localStorage
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));

        // Redirect after successful login (uncomment when you have a dashboard route)
        setTimeout(() => {
          // navigate("/dashboard");
          console.log("Redirecting to dashboard...");
        }, 1500);
      } else {
        // Register logic
        if (formData.password !== formData.confirmPassword) {
          setError("Passwords do not match");
          setLoading(false);
          return;
        }

        if (!formData.acceptTerms) {
          setError("You must accept the terms and conditions");
          setLoading(false);
          return;
        }

        const response = await axios.post(`${API_URL}/register`, {
          fullname: formData.fullname,
          email: formData.email,
          password: formData.password,
        });

        setSuccess(response.data.message);

        // Switch to login form after successful registration
        setTimeout(() => {
          setIsLogin(true);
          setFormData({
            ...formData,
            fullname: "",
            password: "",
            confirmPassword: "",
            acceptTerms: false,
          });
        }, 1500);
      }
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred");
      console.error("Auth error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full h-[200vh] md:h-[120vh] mt-24 flex flex-col md:flex-row bg-gray-100 font-nunito">
      {/* Left Side - Login/Register Form */}
      <div className="w-full xl:w-1/2 h-full flex flex-col justify-center items-center p-4 md:p-10 xl:p-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full h-auto p-8 bg-white rounded-lg flex flex-col"
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

          {/* Show success message */}
          {success && (
            <div className="mt-4 p-2 bg-green-100 text-green-700 rounded-lg">
              {success}
            </div>
          )}

          {/* Show error message */}
          {error && (
            <div className="mt-4 p-2 bg-red-100 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          {isLogin ? (
            // Login Form
            <>
              <p className="mt-4 font-black font-noto text-2xl">Welcome back</p>
              <p className="mt-2 font-normal text-gray-500 text-sm">
                Start your website in seconds. Don't have an account?{" "}
                <button
                  onClick={() => {
                    setIsLogin(false);
                    setError("");
                    setSuccess("");
                  }}
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </button>
              </p>
              <form
                className="space-y-4 md:space-y-6 mt-6"
                onSubmit={handleSubmit}
              >
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
                    value={formData.email}
                    onChange={handleChange}
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
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="flex items-start xs:gap-0 gap-2 xs:items-center justify-between flex-col xs:flex-row">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="rememberMe"
                        name="rememberMe"
                        aria-describedby="remember"
                        type="checkbox"
                        checked={formData.rememberMe}
                        onChange={handleChange}
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="rememberMe"
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
                  disabled={loading}
                  className="w-full text-white bg-green-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  {loading ? "Processing..." : "Sign in"}
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don't have an account yet?{" "}
                  <button
                    type="button"
                    onClick={() => {
                      setIsLogin(false);
                      setError("");
                      setSuccess("");
                    }}
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </button>
                </p>
              </form>
              <div className="flex flex-col xs:flex-row md:flex-col lg:flex-row gap-2 xs:gap-4 mt-4">
                <button className="text-sm font-normal bg-green-600 px-4 py-5 w-full rounded-lg text-white">
                  Masuk dengan SSO Cianjur
                </button>
                <button className="text-sm font-normal flex items-center justify-center bg-white gap-2 px-4 py-5 w-full border rounded-lg text-black hover:bg-gray-100">
                  Masuk Tanpa SSO Cianjur
                </button>
              </div>
            </>
          ) : (
            // Register Form
            <>
              <p className="mt-4 font-black font-noto text-2xl">
                Create an account
              </p>
              <p className="mt-2 font-normal text-gray-500 text-sm">
                Already have an account?{" "}
                <button
                  onClick={() => {
                    setIsLogin(true);
                    setError("");
                    setSuccess("");
                  }}
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign in
                </button>
              </p>
              <form
                className="space-y-4 md:space-y-6 mt-6"
                onSubmit={handleSubmit}
              >
                <div>
                  <label
                    htmlFor="fullname"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullname"
                    id="fullname"
                    value={formData.fullname}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="John Doe"
                    required
                  />
                </div>
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
                    value={formData.email}
                    onChange={handleChange}
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
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="acceptTerms"
                      name="acceptTerms"
                      aria-describedby="terms"
                      type="checkbox"
                      checked={formData.acceptTerms}
                      onChange={handleChange}
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="acceptTerms"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      I accept the{" "}
                      <a
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        href="#"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full text-white bg-green-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  {loading ? "Processing..." : "Create an account"}
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => {
                      setIsLogin(true);
                      setError("");
                      setSuccess("");
                    }}
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign in
                  </button>
                </p>
              </form>
              <div className="flex flex-col xs:flex-row md:flex-col lg:flex-row gap-2 xs:gap-4 mt-4">
                <button className="text-sm font-normal bg-green-600 px-4 py-5 w-full rounded-lg text-white">
                  Daftar dengan SSO Cianjur
                </button>
                <button className="text-sm font-normal flex items-center justify-center bg-white gap-2 px-4 py-5 w-full border rounded-lg text-black hover:bg-gray-100">
                  Daftar Tanpa SSO Cianjur
                </button>
              </div>
            </>
          )}
        </motion.div>
      </div>

      {/* Right Side - Background Slideshow */}
      <div
        className="w-full xl:w-1/2 h-full flex flex-col justify-center items-center bg-cover bg-center transition-all duration-1000 font-nunito overflow-auto relative"
        style={{ backgroundImage: `url(${currentSlide})` }}
      >
        <div className="w-full h-full bg-black opacity-80 z-0"></div>
      </div>
    </div>
  );
};
