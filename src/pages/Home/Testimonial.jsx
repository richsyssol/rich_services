import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

// Testimonial data with image support
const testimonialsData = [
  {
    id: 1,
    name: "Yogilates With Nishi",
    role: "Nishi Dokania Yogilates",
    content:
      "Our platform has been working with this company since 2020 with constant creative work, promotions & lead generation. Their team has been very good with their creative work.",
    logo: "Y",
    image: "/images/testimonials/yogilates.jpg", // Add your image path
  },
  {
    id: 2,
    name: "TECHNOMIALS",
    role: "Technology Solutions",
    content:
      "Working with this team has transformed our digital presence. Their innovative approach to our marketing challenges has delivered exceptional results.",
    logo: "T",
    image: "/images/testimonials/technomials.jpg",
  },
  {
    id: 3,
    name: "PROSTEDA Prime Honda",
    role: "Automotive Excellence",
    content:
      "The campaigns created for our dealership have consistently outperformed our expectations. Their attention to detail is remarkable.",
    logo: "P",
    image: "/images/testimonials/prosteda.jpg",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const sliderRef = useRef(null);

  // Auto-rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length
    );
  };

  // Animation variants
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.6 },
    }),
  };

  // Background image animation
  const bgVariants = {
    enter: { opacity: 0 },
    center: { opacity: 0.1 },
    exit: { opacity: 0 },
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"
          />
        </motion.div>

        {/* Testimonial slider */}
        <div className="relative max-w-4xl mx-auto mb-20 h-[400px]">
          {/* Background image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`bg-${currentIndex}`}
              variants={bgVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 1 }}
              className="absolute inset-0 bg-cover bg-center rounded-xl"
              style={{
                backgroundImage: `url(${testimonialsData[currentIndex].image})`,
                filter: "blur(8px)",
              }}
            />
          </AnimatePresence>

          {/* Testimonial card */}
          <div className="relative h-full" ref={sliderRef}>
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 md:p-10 flex flex-col"
              >
                <Quote className="absolute top-8 left-8 text-gray-300 w-10 h-10" />

                {/* Content */}
                <div className="flex-1 flex flex-col md:flex-row gap-8">
                  {/* Client image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md self-center md:self-start"
                  >
                    <img
                      src={testimonialsData[currentIndex].image}
                      alt={testimonialsData[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Text content */}
                  <div className="flex-1">
                    <p className="text-lg text-gray-700 mb-6">
                      {testimonialsData[currentIndex].content}
                    </p>

                    <div className="mt-auto">
                      <h4 className="text-xl font-semibold text-gray-900">
                        {testimonialsData[currentIndex].name}
                      </h4>
                      <p className="text-gray-600">
                        {testimonialsData[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
