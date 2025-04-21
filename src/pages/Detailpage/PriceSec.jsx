// pages/Detailpage/PriceSec.jsx
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useParams } from "react-router-dom";
import { featuresData } from "../../constants/featureData";

const PricingSection = () => {
  const { slug } = useParams();

  // Find the feature data based on the slug
  const feature = featuresData.find((f) => f.slug === slug);

  // Get pricing plans for this feature
  const pricingPlans = feature?.pricingPlans || [];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Pricing Plans
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your needs
          </p>
        </div>

        {pricingPlans.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={`${plan.name}-${index}`}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                whilehover={{ y: -5 }}
                className={`relative rounded-lg overflow-hidden border-2 ${
                  plan.highlight
                    ? "border-blue-500 shadow-xl bg-white"
                    : "border-gray-200 shadow-lg bg-white"
                }`}
              >
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                    {plan.name}
                  </h3>

                  <div className="text-center my-6">
                    {plan.customPrice ? (
                      <p className="text-3xl font-bold text-gray-900">
                        {plan.customPrice}
                      </p>
                    ) : (
                      <>
                        <p className="text-3xl font-bold text-gray-900">
                          ${plan.monthlyPrice}
                          {plan.annualPrice && (
                            <span className="block text-xl font-normal text-gray-500">
                              or ${plan.annualPrice}
                            </span>
                          )}
                        </p>
                        <p className="text-gray-500">per month</p>
                      </>
                    )}
                  </div>

                  <div className="border-t border-gray-200 my-6"></div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 mt-0.5 mr-3 flex-shrink-0 text-green-500" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="border-t border-gray-200 my-6"></div>

                  <motion.button
                    whilehover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 px-6 rounded-lg font-medium mt-6 ${
                      plan.highlight
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    } transition-colors`}
                  >
                    Get Started
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600">
              No pricing plans available for this feature.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PricingSection;
