import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Calendar,
  Mail,
  MessageSquare,
  Layout,
  User,
  FormInput,
  Megaphone,
  LayoutTemplate,
} from "lucide-react";
import { featuresData } from "../../constants/featureData";

const FeaturesSection = () => {
  const navigate = useNavigate();

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const handleCardClick = (slug) => {
    navigate(`/features/${slug}`);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features to Help You Automate All At One Place
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive tools designed to streamline your business operations
            and boost productivity
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              whilehover={{ y: -10, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleCardClick(feature.slug)}
              className={`${feature.color} rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 cursor-pointer`}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-white shadow-xs mr-4">
                  <feature.icon className="w-5 h-5 " />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
