import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from "framer-motion";
import { useState, useEffect } from "react";

const AdLauncherAdvanced = () => {
  const [activePlatform, setActivePlatform] = useState(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const radius = useMotionValue(0);
  const background = useMotionTemplate`radial-gradient(${radius}px circle at ${mouseX}px ${mouseY}px, var(--spotlight-color), transparent 80%)`;

  const platforms = [
    {
      name: "Google Search",
      color: "#4285F4",
      icon: "🔍",
      bg: "from-blue-50 to-blue-100",
    },
    {
      name: "Facebook",
      color: "#1877F2",
      icon: "👍",
      bg: "from-blue-50 to-blue-100",
    },
    {
      name: "Instagram",
      color: "#E4405F",
      icon: "📷",
      bg: "from-pink-50 to-purple-100",
    },
    {
      name: "Google Display",
      color: "#34A853",
      icon: "🖼️",
      bg: "from-green-50 to-green-100",
    },
    {
      name: "YouTube",
      color: "#FF0000",
      icon: "▶️",
      bg: "from-red-50 to-red-100",
    },
    {
      name: "LinkedIn",
      color: "#0A66C2",
      icon: "💼",
      bg: "from-blue-50 to-blue-100",
    },
  ];

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
    animate(radius, width * 1.5, { duration: 0.4 });
  };

  useEffect(() => {
    if (activePlatform) {
      document.documentElement.style.setProperty(
        "--spotlight-color",
        `${activePlatform.color}20` // 20% opacity
      );
    } else {
      document.documentElement.style.setProperty(
        "--spotlight-color",
        "#6366f120"
      );
    }
  }, [activePlatform]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-gray-50 to-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative max-w-5xl w-full"
      >
        {/* Animated spotlight background */}
        <motion.div
          style={{ background }}
          className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"
        />

        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={() => animate(radius, 0, { duration: 0.4 })}
          className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 overflow-hidden"
        >
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent mb-4"
            >
              AI-Powered Ad Launcher
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Effortlessly create and launch high-performing ads across all
              major platforms with our intelligent automation.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {platforms.map((platform) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 200 }}
                whilehover={{
                  y: -5,
                  boxShadow: `0 20px 25px -5px ${platform.color}20, 0 8px 10px -6px ${platform.color}20`,
                }}
                whileTap={{ scale: 0.98 }}
                onHoverStart={() => setActivePlatform(platform)}
                onHoverEnd={() => setActivePlatform(null)}
                className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-300 ${platform.bg} bg-gradient-to-br`}
                style={{
                  borderTop: `3px solid ${platform.color}`,
                }}
              >
                <div className="flex items-start gap-4">
                  <motion.span
                    className="text-3xl"
                    animate={{
                      rotate:
                        activePlatform?.name === platform.name
                          ? [0, 10, -10, 0]
                          : 0,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    {platform.icon}
                  </motion.span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      {platform.name}
                    </h3>
                    <p className="text-gray-600 mt-1 text-sm">
                      {activePlatform?.name === platform.name
                        ? `Launching ads on ${platform.name}...`
                        : "Click to configure"}
                    </p>
                  </div>
                </div>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{
                    width: activePlatform?.name === platform.name ? "100%" : 0,
                  }}
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent"
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.button
              whilehover={{
                scale: 1.02,
                boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.4)",
              }}
              whileTap={{ scale: 0.98 }}
              className="relative px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold text-lg shadow-lg overflow-hidden"
            >
              <span className="relative z-10">Launch All Campaigns</span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "conic-gradient(from 180deg at 50% 50%, #6366F1 0deg, #EC4899 180deg, #6366F1 360deg)",
                }}
              />
            </motion.button>
            <p className="text-gray-500 mt-4 text-sm">
              Start seeing results in as little as 24 hours
            </p>
          </motion.div>
        </motion.div>

        {/* Floating AI assistant animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{
            opacity: [0, 1, 1, 0],
            y: [40, 0, 0, -40],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatDelay: 4,
            ease: "easeInOut",
          }}
          className="absolute -bottom-20 -right-20"
        >
          <div className="w-32 h-32 bg-purple-100 rounded-full flex items-center justify-center shadow-xl border-4 border-white">
            <span className="text-4xl">🤖</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AdLauncherAdvanced;
