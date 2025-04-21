import { motion } from "framer-motion";
import heroImage from "../../assets/banner/3.jpg"; // Replace with your image path

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const imageVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 60, damping: 15 },
    },
  };

  return (
    <motion.section
      className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 mt-10"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <motion.div
          className="md:w-1/2 mb-10 md:mb-0 md:pr-10"
          variants={itemVariants}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight"
            variants={itemVariants}
          >
            Automate Your Business using WhatsApp & Email
          </motion.h1>

          <motion.p
            className="text-lg text-gray-600 mb-8"
            variants={itemVariants}
          >
            Streamline your sales and marketing with our all-in-one solution
            that integrates WhatsApp and Email automation.
          </motion.p>

          <motion.div variants={itemVariants}>
            <motion.button
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
              whilehover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Request a Demo
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div className="md:w-1/2" variants={imageVariants}>
          <motion.img
            src={heroImage}
            alt="Business Automation"
            className="rounded-lg shadow-xl w-full max-w-md mx-auto"
            whilehover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          />
        </motion.div>
      </div>

      {/* Section Divider */}
      <motion.div
        className="max-w-7xl mx-auto border-t border-gray-200 mt-16 pt-8"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <motion.h2
          className="text-2xl font-semibold text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          All-in-one Sales & Marketing System
        </motion.h2>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
