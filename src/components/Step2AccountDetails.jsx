import { useState } from "react";

export default function Step2AccountDetails({ data, onChange, nextStep, prevStep }) {
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!data.username && !data.password && !data.confirmPassword) {
      setErrors({ global: "Please fill all fields" });
      return false;
    }

    if (!data.username) newErrors.username = "Username is required";
    if (!data.password) {
      newErrors.password = "Password is required";
    } else if (data.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    if (!data.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (data.password !== data.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) nextStep();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-500 via-blue-500 to-purple-600 p-4 sm:p-6">
      <div className="relative bg-white/90 backdrop-blur-lg shadow-2xl rounded-3xl p-6 sm:p-8 w-full max-w-sm sm:max-w-md md:max-w-lg border border-white/30 overflow-hidden">
        {/* Glow effects */}
        <div className="absolute -top-24 -right-24 w-48 sm:w-64 h-48 sm:h-64 bg-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-48 sm:w-64 h-48 sm:h-64 bg-blue-400/20 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-6">
            Step 2: Account Details
          </h2>

          <div className="space-y-4">
            {/* Username */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>
              <input
                name="username"
                placeholder="Enter your username"
                value={data.username}
                onChange={onChange}
                className={`w-full border p-3 rounded-lg focus:outline-none focus:ring-2 transition text-sm sm:text-base ${
                  errors.username
                    ? "border-red-500 focus:ring-red-300"
                    : "border-gray-300 focus:ring-blue-400"
                }`}
              />
              {errors.username && (
                <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.username}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  value={data.password}
                  onChange={onChange}
                  className={`w-full border p-3 rounded-lg focus:outline-none focus:ring-2 transition pr-16 text-sm sm:text-base ${
                    errors.password
                      ? "border-red-500 focus:ring-red-300"
                      : "border-gray-300 focus:ring-blue-400"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2 text-xs sm:text-sm text-gray-600 bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded transition"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <input
                name="confirmPassword"
                type="password"
                placeholder="Re-enter password"
                value={data.confirmPassword}
                onChange={onChange}
                className={`w-full border p-3 rounded-lg focus:outline-none focus:ring-2 transition text-sm sm:text-base ${
                  errors.confirmPassword
                    ? "border-red-500 focus:ring-red-300"
                    : "border-gray-300 focus:ring-blue-400"
                }`}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs sm:text-sm mt-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            {/* Global error */}
            {errors.global && (
              <p className="text-red-500 text-sm text-center mt-3">{errors.global}</p>
            )}
          </div>

          {/* Navigation buttons */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-3 sm:gap-0">
            <button
              onClick={prevStep}
              className="w-full sm:w-auto text-gray-700 font-medium hover:underline hover:text-gray-900 transition"
            >
              ← Back
            </button>
            <button
              onClick={handleNext}
              className="w-full sm:w-auto bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition transform hover:scale-105 shadow-md"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
