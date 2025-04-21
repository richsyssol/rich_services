import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { featuresData } from "../../constants/featureData";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

const OurWorkSection = ({ showAll = true, excludeSlug = null }) => {
  const { slug } = useParams();

  // Filter works if needed
  let worksToShow = [...featuresData];
  if (excludeSlug) {
    worksToShow = featuresData.filter(
      (features) => features.slug !== excludeSlug
    );
  }
  if (!showAll) {
    worksToShow = worksToShow.slice(0, 3);
  }

  return (
    <section
      className={`py-16 px-4 sm:px-6 lg:px-8 ${
        showAll ? "bg-gray-50" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {showAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our successful projects and case studies
            </p>
          </motion.div>
        )}

        <motion.div
          variants={showAll ? container : {}}
          initial={showAll ? "hidden" : false}
          whileInView={showAll ? "show" : false}
          viewport={{ once: true, margin: "-100px" }}
          className={`grid grid-cols-1 ${
            showAll ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-3"
          } gap-8`}
        >
          {worksToShow.map((features, index) => (
            <motion.div
              key={features.slug}
              variants={showAll ? item : {}}
              custom={index}
            >
              <Link to={`/features/${features.slug}`} className="block h-full">
                <motion.div
                  whilehover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-sm overflow-hidden h-full hover:shadow-md transition-all flex flex-col border border-gray-100"
                >
                  <div className="bg-gray-100 h-48 w-full flex items-center justify-center">
                    <span className="text-gray-400">Project Image</span>
                  </div>

                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {features.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {features.shortDescription}
                    </p>

                    <div className="mt-auto">
                      <motion.div
                        whilehover={{ x: 4 }}
                        className="inline-flex items-center text-blue-600 font-medium group"
                      >
                        View case study
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {showAll && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-16 text-center"
          >
            <div className="flex justify-center gap-4">
              <motion.button
                whilehover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
              >
                Browse All Projects
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default OurWorkSection;
