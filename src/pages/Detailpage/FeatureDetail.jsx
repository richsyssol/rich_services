import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { featuresData } from "../../constants/featureData";

// Import or define your service images
import calendarImage from "../../assets/banner/3.jpg";
import crmImage from "../../assets/banner/3.jpg";
// Import other images as needed

const serviceImages = {
  "shop-builder": calendarImage,
  "form-builder": crmImage,
  // Add mappings for other services
};

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
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`${feature.color} rounded-xl p-8 mb-12`}
        >
          <div className="flex items-center">
            <div className="p-4 rounded-lg bg-white shadow-md mr-6">
              <feature.icon className="w-8 h-8" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">
              {feature.title}
            </h1>
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left side - Details */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              <p className="text-xl text-gray-700 mb-8">
                {feature.detailedDescription}
              </p>

              <ul className="space-y-4 mb-10">
                {feature.features.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 bg-green-100 text-green-800 rounded-full p-1 mr-3">
                      <Zap className="h-5 w-5" />
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold mb-4">
                  Ready to get started?
                </h3>
                <p className="mb-4">{feature.cta}</p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
                  Try {feature.title} Now
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right side - Image */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="sticky top-8"
            >
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src={serviceImages[slug]}
                  alt={feature.title}
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureDetail;
