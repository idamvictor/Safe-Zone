"use client";

import {
  Users,
  MapPin,
  Camera,
  ShieldCheck,
  Network,
  AlertTriangle,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const headerVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative overflow-hidden py-24">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />

      <div className="container relative mx-auto px-4">
        {/* Header section */}
        <motion.div
          className="mb-20 text-center"
          initial="hidden"
          animate="visible"
          variants={headerVariants}
        >
          <motion.h2
            className="mb-2 text-sm font-medium uppercase tracking-wider text-primary"
            whileHover={{ scale: 1.05 }}
          >
            Features
          </motion.h2>
          <h3 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Best Features
          </h3>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
        </motion.div>

        {/* Features grid */}
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {[
            {
              icon: Camera,
              title: "Live incidence streams",
              description:
                "Real-time monitoring and streaming of incidents as they occur, providing immediate situational awareness.",
            },
            {
              icon: Users,
              title: "Track your Loved ones",
              description:
                "Keep track of family members and loved ones with our advanced tracking and notification system.",
            },
            {
              icon: MapPin,
              title: "Track Locations",
              description:
                "Precise location tracking with detailed mapping and historical movement data.",
            },
            {
              icon: AlertTriangle,
              title: "SOS & Emergency",
              description:
                "Instant emergency alerts and SOS signaling with automatic authority notification.",
            },
            {
              icon: Network,
              title: "Make connections",
              description:
                "Build your safety network with trusted contacts and emergency responders.",
            },
            {
              icon: ShieldCheck,
              title: "Estate Guard",
              description:
                "Comprehensive security solutions for residential and commercial properties.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                transition: { type: "spring", stiffness: 400, damping: 10 },
              }}
              className="group relative rounded-2xl border border-gray-800 bg-gradient-to-br from-background to-secondary p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
            >
              <motion.div
                className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <feature.icon className="h-6 w-6" />
              </motion.div>
              <h3 className="mb-2 text-xl font-semibold">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
