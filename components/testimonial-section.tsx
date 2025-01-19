"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote:
      "SafeZone has revolutionized how we handle emergency situations. The real-time updates and community involvement have made a significant difference in our response times and overall effectiveness.",
    author: "Martin Lee",
    role: "Emergency Response Coordinator",
  },
  {
    id: 2,
    quote:
      "As a community leader, I've seen firsthand how SafeZone brings people together during critical moments. The platform's ability to coordinate and communicate has saved lives.",
    author: "Sarah Chen",
    role: "Community Safety Director",
  },
  {
    id: 3,
    quote:
      "The immediate access to verified information during emergencies has been invaluable. SafeZone has become an essential tool in our daily operations and emergency response protocols.",
    author: "James Wilson",
    role: "Public Safety Officer",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

export default function TestimonialSection() {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const paginate = useCallback(
    (newDirection: number) => {
      const newPage =
        (page + newDirection + testimonials.length) % testimonials.length;
      setPage([newPage, newDirection]);
    },
    [page]
  );

  useEffect(() => {
    if (isAutoPlaying) {
      const timer = setTimeout(() => {
        paginate(1);
      }, 5000); // Change testimonial every 5 seconds

      return () => clearTimeout(timer);
    }
  }, [page, isAutoPlaying, paginate]);

  const handleManualNavigation = (newDirection: number) => {
    setIsAutoPlaying(false);
    paginate(newDirection);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-950 to-blue-950/30 py-24">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
          className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-blue-500/30 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-blue-600/30 blur-3xl"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative mx-auto max-w-4xl text-center"
        >
          <motion.h2
            variants={containerVariants}
            className="mb-16 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl lg:text-7xl"
          >
            Testimonials
          </motion.h2>

          <div className="relative h-[400px]">
            {/* Large quote marks */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute -left-20 -top-20 text-blue-500/20"
            >
              <Quote className="h-40 w-40 rotate-180" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute -bottom-20 -right-20 text-blue-500/20"
            >
              <Quote className="h-40 w-40" />
            </motion.div>

            {/* Testimonial content */}
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={page}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute inset-0"
              >
                <blockquote className="flex h-full flex-col items-center justify-center space-y-8">
                  <p className="text-lg leading-relaxed text-gray-300 sm:text-xl">
                    {testimonials[page].quote}
                  </p>
                  <footer className="mt-8">
                    <div className="flex items-center justify-center space-x-4">
                      <div className="h-px w-12 bg-blue-500/50" />
                      <div>
                        <p className="text-2xl font-semibold text-blue-400">
                          {testimonials[page].author}
                        </p>
                        <p className="text-sm text-gray-500">
                          {testimonials[page].role}
                        </p>
                      </div>
                      <div className="h-px w-12 bg-blue-500/50" />
                    </div>
                  </footer>
                </blockquote>
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleManualNavigation(-1)}
                className="group -ml-4 rounded-full p-4 transition-colors hover:bg-gray-900/50"
              >
                <ChevronLeft className="h-6 w-6 text-gray-600 transition-colors group-hover:text-blue-400" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleManualNavigation(1)}
                className="group -mr-4 rounded-full p-4 transition-colors hover:bg-gray-900/50"
              >
                <ChevronRight className="h-6 w-6 text-gray-600 transition-colors group-hover:text-blue-400" />
              </motion.button>
            </div>

            {/* Dots navigation */}
            <div className="absolute bottom-0 left-0 right-0">
              <div className="flex justify-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setPage([index, index > page ? 1 : -1]);
                    }}
                    className={`h-2 w-2 rounded-full transition-all ${
                      index === page ? "bg-blue-500 w-4" : "bg-gray-600"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

