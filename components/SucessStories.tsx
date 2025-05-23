"use client";

import { motion, useInView } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useRef } from "react";

const successStories = [
  {
    name: "Emily Johnson",
    location: "New York, NY",
    story:
      "SafeZone's quick response saved my grandmother during a medical emergency. The app alerted nearby medical professionals who arrived within minutes.",
    image: "",
  },
  {
    name: "Michael Lee",
    location: "Los Angeles, CA",
    story:
      "When I witnessed a car accident, SafeZone guided me through providing first aid and alerted emergency services. It made me feel empowered to help.",
    image: "",
  },
  {
    name: "Sophia Rodriguez",
    location: "Miami, FL",
    story:
      "During a hurricane, SafeZone kept our community connected and informed. We coordinated evacuations and support efforts through the app.",
    image: "",
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    <section ref={ref} className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
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
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Real people, real impact. Discover how SafeZone is making a
            difference in lives across the world.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative max-w-3xl mx-auto"
        >
          <motion.div
            key={currentStory}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center"
          >
            <Image
              src={successStories[currentStory].image || "/placeholder.svg"}
              alt={successStories[currentStory].name}
              width={96}
              height={96}
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
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-primary p-2 rounded-full hover:bg-primary/50 transition-colors duration-300 text-background"
            aria-label="Previous story"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextStory}
            className="absolute text-background right-0 top-1/2 transform -translate-y-1/2 translate-x-12 bg-primary p-2 rounded-full hover:bg-primary/50 transition-colors duration-300"
            aria-label="Next story"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-12 text-center"
        >
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
