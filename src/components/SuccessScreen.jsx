export default function SuccessScreen() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-green-400 via-emerald-500 to-teal-600 p-6">
      <div className="relative bg-white/90 backdrop-blur-lg shadow-2xl rounded-3xl p-10 w-full max-w-md border border-white/30 text-center overflow-hidden">
        {/* Decorative glowing shapes */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-green-400/20 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          {/* Animated Checkmark */}
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center animate-bounce-slow shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-green-700 mb-2">
            Signup Successful 🎉
          </h2>
          <p className="text-gray-700 mb-6">
            Welcome aboard! Your account has been created successfully.
          </p>

          <button
            onClick={() => window.location.reload()}
            className="bg-green-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-700 transition transform hover:scale-105 shadow-md"
          >
            Go to Homepage
          </button>
        </div>
      </div>

    
    </div>
  );
}
