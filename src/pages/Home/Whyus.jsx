import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { useRef } from "react";
import { Users, Rocket, BarChart2, ShieldCheck, ThumbsUp } from "lucide-react";

const statsData = [
  {
    id: 1,
    value: 100,
    suffix: "+",
    label: "Satisfied Customers",
    icon: <Users className="w-6 h-6" />,
    color: "from-indigo-500 to-purple-500",
    bg: "bg-gradient-to-br from-indigo-50 to-purple-50",
  },
  {
    id: 2,
    value: 495,
    suffix: "+",
    label: "Successful Projects",
    icon: <Rocket className="w-6 h-6" />,
    color: "from-teal-500 to-emerald-500",
    bg: "bg-gradient-to-br from-teal-50 to-emerald-50",
  },
  {
    id: 3,
    value: 24,
    suffix: "%",
    label: "Average Conversion",
    icon: <BarChart2 className="w-6 h-6" />,
    color: "from-amber-500 to-orange-500",
    bg: "bg-gradient-to-br from-amber-50 to-orange-50",
  },
  {
    id: 4,
    value: 100,
    suffix: "%",
    label: "Guaranteed Results",
    icon: <ShieldCheck className="w-6 h-6" />,
    color: "from-rose-500 to-pink-500",
    bg: "bg-gradient-to-br from-rose-50 to-pink-50",
  },
];

const StatCard = ({ stat, inView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, type: "spring" }}
      whilehover={{
        y: -10,
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
      className={`${stat.bg} rounded-2xl p-8 relative overflow-hidden border border-white/20`}
    >
      <motion.div
        animate={
          inView
            ? {
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.2, 0.1],
              }
            : {}
        }
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-white/10"
      />
      <motion.div
        animate={
          inView
            ? {
                scale: [1, 1.2, 1],
                opacity: [0.05, 0.15, 0.05],
              }
            : {}
        }
        transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        className="absolute -bottom-5 -left-5 w-24 h-24 rounded-full bg-white/10"
      />

      <div className="relative z-10">
        <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6">
          <motion.div
            animate={
              inView
                ? {
                    rotate: [0, 10, -5, 0],
                    scale: [1, 1.1, 1],
                  }
                : {}
            }
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {stat.icon}
          </motion.div>
        </div>

        <div className="mb-4">
          <CountUp
            end={inView ? stat.value : 0}
            suffix={stat.suffix}
            duration={2.5}
            decimals={stat.suffix === "%" ? 1 : 0}
            className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
          />
        </div>

        <h3 className="text-lg font-semibold text-gray-800">{stat.label}</h3>
      </div>
    </motion.div>
  );
};

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <div className="px-4 py-2 bg-indigo-100 rounded-full inline-flex items-center">
              <ThumbsUp className="w-5 h-5 text-indigo-600 mr-2" />
              <span className="text-sm font-medium text-indigo-600">
                Why Choose Us
              </span>
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            We Deliver{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Exceptional Results
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by businesses worldwide to deliver measurable success and
            outstanding performance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat) => (
            <StatCard key={stat.id} stat={stat} inView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
