"use client";

import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const successStories = [
  {
    name: "Emily Johnson",
    location: "New York, NY",
    story:
      "SafeZone's quick response saved my grandmother during a medical emergency. The app alerted nearby medical professionals who arrived within minutes.",
    image:
      "",
  },
  {
    name: "Michael Lee",
    location: "Los Angeles, CA",
    story:
      "When I witnessed a car accident, SafeZone guided me through providing first aid and alerted emergency services. It made me feel empowered to help.",
    image:
      "",
  },
  {
    name: "Sophia Rodriguez",
    location: "Miami, FL",
    story:
      "During a hurricane, SafeZone kept our community connected and informed. We coordinated evacuations and support efforts through the app.",
    image:
      "",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6 },
  },
};

export default function SuccessStories() {
  const [currentStory, setCurrentStory] = useState(0);

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % successStories.length);
  };

  const prevStory = () => {
    setCurrentStory(
      (prev) => (prev - 1 + successStories.length) % successStories.length
    );
  };

  return (
    <section className="bg-gradient-to-b from-blue-800 to-blue-900 py-20 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold mb-4"
          >
            Success Stories
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-blue-200 max-w-2xl mx-auto"
          >
            Real people, real impact. Discover how SafeZone is making a
            difference in lives across the world.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative max-w-3xl mx-auto"
        >
          <motion.div
            key={currentStory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center"
          >
            <Image
              src={successStories[currentStory].image || "/placeholder.svg"}
              alt={successStories[currentStory].name}
              layout="fill"
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-2xl font-semibold mb-2">
              {successStories[currentStory].name}
            </h3>
            <p className="text-blue-200 mb-4">
              {successStories[currentStory].location}
            </p>
            <p className="text-lg mb-6">
              &quot;{successStories[currentStory].story}&quot;
            </p>
            <div className="flex justify-center items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 text-yellow-400 fill-current"
                />
              ))}
            </div>
          </motion.div>

          <button
            onClick={prevStory}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors duration-300"
            aria-label="Previous story"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextStory}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors duration-300"
            aria-label="Next story"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12 text-center">
          <a
            href="#download"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300"
          >
            Join SafeZone Community
          </a>
        </motion.div>
      </div>
    </section>
  );
}
