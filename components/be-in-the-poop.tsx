"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Camera, Clock, Users } from "lucide-react";

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

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const phoneVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const features = [
  {
    icon: Camera,
    title:
      "See incidents unfold and get the real story from people on the scene.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Rhoncus at turpis in tincidunt sagittis sit. Mattis aliquet a turpis at vestibulum nunc vestibulum elit.",
  },
  {
    icon: Clock,
    title:
      "Fast, accurate information makes a meaningful difference in emergencies.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Rhoncus at turpis in tincidunt sagittis sit. Mattis aliquet a turpis at vestibulum nunc vestibulum elit.",
  },
  {
    icon: Users,
    title: "When you can, contribute to help resolve a situation.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Rhoncus at turpis in tincidunt sagittis sit. Mattis aliquet a turpis at vestibulum nunc vestibulum elit.",
  },
];

export default function BeInTheLoop() {
  return (
    <section className="relative min-h-screen overflow-hidden py-24">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2 }}
          className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-blue-500/30 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-blue-600/30 blur-3xl"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          <div className="text-center">
            <motion.p variants={itemVariants} className="text-blue-500">
              BE IN THE LOOP
            </motion.p>
            <motion.h2
              variants={itemVariants}
              className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl"
            >
              Know the real story faster.
            </motion.h2>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
            <motion.div
              variants={phoneVariants}
              className="relative mx-auto w-full max-w-[366px]"
            >
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(59, 130, 246, 0)",
                    "0 0 0 20px rgba(59, 130, 246, 0.1)",
                    "0 0 0 0 rgba(59, 130, 246, 0)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="relative rounded-[2.5rem] border-[14px] border-gray-900 bg-gray-900 shadow-2xl"
              >
                <div className="absolute left-1/2 top-0 h-6 w-20 -translate-x-1/2 rounded-b-lg bg-gray-900" />
                <Image
                  src="https://res.cloudinary.com/dyp8gtllq/image/upload/v1737324222/1000_F_628005942_zF7vOoa3tTs6bQPPPNVdXivtqYXh78Um_dk0fv2.jpg"
                  alt="SafeZone app interface showing incident map"
                  width={366}
                  height={742}
                  className="rounded-[2rem] bg-gray-950"
                  priority
                />
              </motion.div>
            </motion.div>

            <motion.div variants={containerVariants} className="space-y-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10"
                    >
                      <feature.icon className="h-6 w-6 text-blue-400" />
                    </motion.div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

