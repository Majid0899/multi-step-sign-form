export default function ProgressBar({ step }) {
  const steps = ["Personal Info", "Account Details", "Review"];

  return (
    <div className="relative mb-8">
      {/* Progress Line Background */}
      <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 rounded-full transform -translate-y-1/2" />

      {/* Animated Active Line */}
      <div
        className="absolute top-1/2 left-0 h-1 bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full transform -translate-y-1/2 transition-all duration-500 ease-out"
        style={{
          width: `${((step - 1) / (steps.length - 1)) * 100}%`,
        }}
      />

      {/* Steps */}
      <div className="flex justify-between relative z-10">
        {steps.map((label, i) => {
          const isActive = i + 1 === step;
          const isCompleted = i + 1 < step;

          return (
            <div key={i} className="flex flex-col items-center text-center w-1/3">
              {/* Step Circle */}
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full border-2 transition-all duration-300 ${
                  isCompleted
                    ? "bg-linear-to-r from-blue-500 to-purple-500 border-transparent text-white"
                    : isActive
                    ? "border-blue-500 text-blue-600 bg-white shadow-md"
                    : "border-gray-300 text-gray-400 bg-white"
                }`}
              >
                {isCompleted ? "✓" : i + 1}
              </div>

              {/* Step Label */}
              <span
                className={`mt-2 text-xs font-medium ${
                  isCompleted || isActive ? "text-gray-800" : "text-gray-400"
                }`}
              >
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
