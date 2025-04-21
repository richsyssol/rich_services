import { motion } from "framer-motion";
import { FaRocket, FaUsers, FaLightbulb } from "react-icons/fa";

const AboutUs = () => {
  // Animation variants
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
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      y: -10,
      scale: 1.03,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-indigo-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.p
            variants={itemVariants}
            className="text-blue-600 font-semibold mb-3"
          >
            WHO WE ARE
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Innovating the Future, Today
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            We're a passionate team of creators, thinkers, and problem-solvers
            dedicated to building solutions that make a difference.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mission Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whilehover="hover"
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <FaRocket className="text-blue-600 text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Mission
            </h3>

            <p className="text-gray-600">
              To empower businesses and individuals through innovative
              technology solutions that simplify complexity and drive meaningful
              results.
            </p>
          </motion.div>

          {/* Team Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whilehover="hover"
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <FaUsers className="text-purple-600 text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Team</h3>
            <p className="text-gray-600">
              A diverse collective of experts in design, engineering, and
              strategy working together to create exceptional experiences.
            </p>
          </motion.div>

          {/* Values Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whilehover="hover"
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <FaLightbulb className="text-amber-600 text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Values
            </h3>
            <p className="text-gray-600">
              Integrity, innovation, and impact guide everything we do. We
              believe in building with purpose and pushing boundaries.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
