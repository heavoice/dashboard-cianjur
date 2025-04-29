import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import slide1 from "../../assets/img/slide1.jpg";
import slide2 from "../../assets/img/slide2.jpg";
import logo from "../../assets/img/logo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Auth = () => {
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
  const navigate = useNavigate();

  const API_URL = "http://localhost:5000/api";

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slide1 ? slide2 : slide1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      if (isLogin) {
        const { data } = await axios.post(`${API_URL}/login`, {
          email: formData.email,
          password: formData.password,
        });
        setSuccess(data.message);
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/eksekutif-dashboard");
      } else {
        if (formData.password !== formData.confirmPassword) {
          throw new Error("Passwords do not match");
        }
        if (!formData.acceptTerms) {
          throw new Error("You must accept the terms and conditions");
        }

        const { data } = await axios.post(`${API_URL}/register`, {
          fullname: formData.fullname,
          email: formData.email,
          password: formData.password,
        });
        setSuccess(data.message);
        setIsLogin(true);
      }
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setError("");
    setSuccess("");
  };

  const commonInputClasses =
    "bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5";
  const buttonClasses =
    "w-full text-white bg-[#22a9e1] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center";
  const ssoButtonClasses =
    "text-sm font-normal bg-[#22a9e1] px-4 py-5 w-full rounded-lg text-white";
  const nonSsoButtonClasses =
    "text-sm font-normal flex items-center justify-center bg-white gap-2 px-4 py-5 w-full border rounded-lg text-black hover:bg-gray-100";

  return (
    <div className="relative w-full h-[120vh] mt-24 flex flex-col md:flex-row bg-gray-100 font-nunito">
      {/* Left Side - Form */}
      <div className="w-full xl:w-1/2 h-full flex flex-col justify-center items-center p-4 md:p-10 xl:p-32">
        <div
          className="md:hidden absolute inset-0 bg-cover opacity-80 z-0"
          style={{ backgroundImage: `url(${currentSlide})` }}
        >
          <div className="absolute inset-0 bg-black opacity-80 z-0"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full h-auto p-8 bg-white rounded-lg flex flex-col z-10"
        >
          <Link
            to="/"
            className="flex font-noto text-2xl text-black font-bold items-center"
          >
            <img
              src={logo}
              width={35}
              height={35}
              alt="SLP Logo"
              className="mr-3"
            />
            <div className="text-lg text-black">Dashboard Cianjur</div>
          </Link>

          {success && (
            <div className="mt-4 p-2 bg-green-100 text-[#22a9e1] rounded-lg">
              {success}
            </div>
          )}
          {error && (
            <div className="mt-4 p-2 bg-red-100 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          <p className="mt-4 font-black font-noto text-2xl">
            {isLogin
              ? "Masuk ke Dashboard Eksekutif"
              : "Buat akun/Tautkan dengan SSO"}
          </p>

          <form className="space-y-4 md:space-y-6 mt-6" onSubmit={handleSubmit}>
            {!isLogin && (
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleChange}
                  className={commonInputClasses}
                  placeholder="John Doe"
                  required
                />
              </div>
            )}

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={commonInputClasses}
                placeholder="name@company.com"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className={commonInputClasses}
                required
              />
            </div>

            {!isLogin && (
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Konfirmasi Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className={commonInputClasses}
                  required
                />
              </div>
            )}

            {isLogin ? (
              <div className="flex items-start xs:gap-0 gap-2 xs:items-center justify-between flex-col xs:flex-row">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="rememberMe"
                      name="rememberMe"
                      type="checkbox"
                      checked={formData.rememberMe}
                      onChange={handleChange}
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                    />
                  </div>
                  <label
                    htmlFor="rememberMe"
                    className="ml-3 text-sm text-gray-500"
                  >
                    Remember me
                  </label>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-primary-600 hover:underline"
                >
                  Forgot password?
                </a>
              </div>
            ) : (
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="acceptTerms"
                    name="acceptTerms"
                    type="checkbox"
                    checked={formData.acceptTerms}
                    onChange={handleChange}
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                    required
                  />
                </div>
                <label
                  htmlFor="acceptTerms"
                  className="ml-3 text-sm text-gray-500"
                >
                  Saya menyetujui{" "}
                  <a
                    href="#"
                    className="font-medium text-primary-600 hover:underline"
                  >
                    Syarat dan Ketentuan
                  </a>
                </label>
              </div>
            )}

            <button type="submit" disabled={loading} className={buttonClasses}>
              {loading
                ? "Processing..."
                : isLogin
                ? "Sign in"
                : "Create an account"}
            </button>

            <p className="text-sm font-light text-gray-500">
              {isLogin ? "Don't have an account yet?" : "Sudah memiliki akun?"}{" "}
              <button
                type="button"
                onClick={toggleAuthMode}
                className="font-medium text-primary-600 hover:underline"
              >
                {isLogin ? "Sign up" : "Sign in"}
              </button>
            </p>
          </form>

          <div className="flex flex-col xs:flex-row md:flex-col lg:flex-row gap-2 xs:gap-4 mt-4">
            <button className={ssoButtonClasses}>
              {isLogin
                ? "Masuk dengan SSO Cianjur"
                : "Daftar dengan SSO Cianjur"}
            </button>
            <button className={nonSsoButtonClasses}>
              {isLogin ? "Masuk Tanpa SSO Cianjur" : "Daftar Tanpa SSO Cianjur"}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Right Side - Background */}
      <div
        className="w-full xl:w-1/2 h-full md:flex hidden flex-col justify-center items-center bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url(${currentSlide})` }}
      >
        <div className="w-full h-full bg-black opacity-80 z-0"></div>
      </div>
    </div>
  );
};
