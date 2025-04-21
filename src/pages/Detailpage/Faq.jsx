import { useState } from "react";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronRight, Zap, Plus, Minus } from "lucide-react";
import { featuresData } from "../../constants/featureData";

const FeatureDetail = () => {
  const { slug } = useParams();
  const feature = featuresData.find((item) => item.slug === slug);
  const [faqs, setFaqs] = useState(
    feature?.faqs?.map((faq) => ({ ...faq, isOpen: false })) || []
  );

  const toggleFAQ = (index) => {
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq, i) => ({
        ...faq,
        isOpen: i === index ? !faq.isOpen : false,
      }))
    );
  };

  if (!feature) {
    return (
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Feature not found
          </h1>
          <p className="mt-4 text-gray-600">
            The feature you're looking for doesn't exist or has been moved.
          </p>
        </div>
      </motion.section>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-7xl mx-auto"
      >
        <motion.div
          whilehover={{ scale: 1.005 }}
          className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
        >
          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12"
          >
            <motion.h2
              className="text-3xl font-bold text-gray-900 mb-8"
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              Frequently Asked Questions
              <motion.div
                className="h-1 w-16 bg-blue-500 mt-2"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              />
            </motion.h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whilehover={{ scale: 1.01 }}
                  className="border border-gray-200 rounded-xl overflow-hidden bg-gradient-to-r from-white to-gray-50"
                >
                  <motion.button
                    className="flex items-center justify-between w-full p-6 text-left"
                    onClick={() => toggleFAQ(index)}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="font-semibold text-lg text-gray-800">
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{
                        rotate: faq.isOpen ? 180 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="ml-4"
                    >
                      {faq.isOpen ? (
                        <Minus className="h-6 w-6 text-blue-500" />
                      ) : (
                        <Plus className="h-6 w-6 text-blue-500" />
                      )}
                    </motion.span>
                  </motion.button>

                  <AnimatePresence>
                    {faq.isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <motion.div
                          className="px-6 pb-6 text-gray-600"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          {faq.answer}
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default FeatureDetail;
