import { useState } from "react";
import Step1PersonalInfo from "./components/Step1PersonalInfo";
import Step2AccountDetails from "./components/Step2AccountDetails";
import Step3Review from "./components/Step3Review";
import SuccessScreen from "./components/SuccessScreen";
import ProgressBar from "./components/ProgressBar";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1);
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = () => setSubmitted(true);

  // Page transition animation variants
  const pageVariants = {
    initial: { opacity: 0, y: 40, scale: 0.98 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -40, scale: 0.98 },
  };

  if (submitted) return <SuccessScreen />;

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-500 via-purple-500 to-pink-500 p-6">
      <motion.div
        className="bg-white/90 backdrop-blur-lg shadow-2xl rounded-3xl p-8 w-full lg:max-w-3xl border border-white/30 relative overflow-hidden"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Animated Glow Background */}
        <motion.div
          className="absolute -top-24 -left-24 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-24 -right-24 w-72 h-72 bg-pink-400/20 rounded-full blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10">
          <ProgressBar step={step} />

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.4 }}
              >
                <Step1PersonalInfo
                  data={formData}
                  onChange={handleChange}
                  nextStep={nextStep}
                />
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.4 }}
              >
                <Step2AccountDetails
                  data={formData}
                  onChange={handleChange}
                  nextStep={nextStep}
                  prevStep={prevStep}
                />
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.4 }}
              >
                <Step3Review
                  data={formData}
                  prevStep={prevStep}
                  onSubmit={handleSubmit}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
