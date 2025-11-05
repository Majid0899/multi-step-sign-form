export default function Step3Review({ data, prevStep, onSubmit }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-green-400 via-emerald-500 to-teal-600 p-3 sm:p-6">
      <div className="relative bg-white/90 backdrop-blur-lg shadow-2xl rounded-3xl p-5 sm:p-8 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg border border-white/30 overflow-hidden">
        {/* Decorative glowing shapes */}
        <div className="absolute -top-12 -right-12 w-32 sm:w-40 md:w-56 h-32 sm:h-40 md:h-56 bg-teal-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-12 -left-12 w-32 sm:w-40 md:w-56 h-32 sm:h-40 md:h-56 bg-green-400/20 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center text-gray-800 mb-5 sm:mb-6">
            Step 3: Review & Confirm
          </h2>

          {/* Review Summary */}
          <div className="space-y-3 sm:space-y-4 text-gray-700 bg-white/60 rounded-xl p-4 sm:p-6 shadow-inner">
            <p className="text-sm sm:text-base flex flex-col">
              <span className="font-semibold text-gray-800">Full Name:</span>
              {data.fullName || <span className="text-gray-400">N/A</span>}
            </p>

            <p className="text-sm sm:text-base flex flex-col">
              <span className="font-semibold text-gray-800">Email:</span>
              {data.email || <span className="text-gray-400">N/A</span>}
            </p>

            <p className="text-sm sm:text-base flex flex-col">
              <span className="font-semibold text-gray-800">Phone:</span>
              {data.phone || <span className="text-gray-400">N/A</span>}
            </p>

            <p className="text-sm sm:text-base flex flex-col">
              <span className="font-semibold text-gray-800">Username:</span>
              {data.username || <span className="text-gray-400">N/A</span>}
            </p>
          </div>

          <p className="text-xs sm:text-sm text-gray-600 text-center mt-4 sm:mt-5">
            Please confirm that all your information is correct before submitting.
          </p>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-3 sm:gap-0">
            <button
              onClick={prevStep}
              className="w-full sm:w-auto text-gray-700 font-medium hover:underline hover:text-gray-900 transition"
            >
              ← Edit
            </button>
            <button
              onClick={onSubmit}
              className="w-full sm:w-auto bg-green-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-700 transition transform hover:scale-105 shadow-md"
            >
              Submit →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
