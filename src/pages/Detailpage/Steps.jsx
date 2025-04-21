import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, ChevronRight, Zap } from "lucide-react";
import { featuresData } from "../../constants/featureData";

const FeatureDetail = () => {
  const { slug } = useParams();
  const feature = featuresData.find((item) => item.slug === slug);

  if (!feature) {
    return (
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Feature not found
          </h1>
          <p className="mt-4 text-gray-600">
            The feature you're looking for doesn't exist or has been moved.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Main Content */}
        <div className="bg-white p-8 rounded-xl shadow-sm">
          {/* Detailed Description */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg max-w-none text-gray-700 mb-12"
          >
            <p>{feature.detailedDescription}</p>
          </motion.div>

          {/* Steps Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              How it works
            </h2>

            <div className="space-y-6">
              {feature.steps.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="flex items-start p-4 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-4 mt-0.5">
                    <span className="text-blue-600 font-medium">
                      {index + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      Step {index + 1}
                    </h3>
                    <p className="mt-1 text-gray-600">{item}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Key Benefits
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {feature.benefits?.map((benefit, i) => (
                <li
                  key={i}
                  className="flex items-start bg-gray-50 p-4 rounded-lg"
                >
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              )) || (
                <>
                  {feature.benifits.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start bg-gray-50 p-4 rounded-lg"
                    >
                      <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </>
              )}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeatureDetail;
