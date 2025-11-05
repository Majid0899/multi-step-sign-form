import { useState } from "react";

export default function Step1PersonalInfo({ data, onChange, nextStep }) {
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    const nameRegex = /^[a-zA-Z]+(?: [a-zA-Z]+)+$/; // at least two words
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9+\-\s]{10,}$/; // digits, spaces, +, -

    // Global empty fields check
    if (!data.fullName && !data.email && !data.phone) {
      setErrors({ global: "Please fill all fields" });
      return false;
    }

    // Individual field checks
    if (!data.fullName) {
      newErrors.fullName = "Full name is required";
    } else if (!nameRegex.test(data.fullName.trim())) {
      newErrors.fullName = "Please enter your full name";
    }

    if (!data.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(data.email.trim())) {
      newErrors.email = "Invalid email format";
    }

    if (!data.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(data.phone.trim())) {
      newErrors.phone = "Invalid phone number";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) nextStep();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-blue-100 p-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Step 1: Personal Information
        </h2>

        <div className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              name="fullName"
              placeholder="John Doe"
              value={data.fullName}
              onChange={onChange}
              className={`w-full border p-3 rounded-lg focus:outline-none focus:ring-2 ${
                errors.fullName
                  ? "border-red-500 focus:ring-red-300"
                  : "border-gray-300 focus:ring-blue-400"
              }`}
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              name="email"
              placeholder="example@email.com"
              value={data.email}
              onChange={onChange}
              className={`w-full border p-3 rounded-lg focus:outline-none focus:ring-2 ${
                errors.email
                  ? "border-red-500 focus:ring-red-300"
                  : "border-gray-300 focus:ring-blue-400"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              name="phone"
              placeholder="(123) 456-7890"
              value={data.phone}
              onChange={onChange}
              className={`w-full border p-3 rounded-lg focus:outline-none focus:ring-2 ${
                errors.phone
                  ? "border-red-500 focus:ring-red-300"
                  : "border-gray-300 focus:ring-blue-400"
              }`}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>
        </div>

        {/* Global Error */}
        {errors.global && (
          <p className="text-red-500 text-sm mt-4 text-center">
            {errors.global}
          </p>
        )}

        <button
          onClick={handleNext}
          className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
