"use client";

import { motion, useInView } from "framer-motion";
import { Users, Heart, Shield } from "lucide-react";
import { useRef } from "react";

const stats = [
  { icon: Users, value: "500K+", label: "Active Users" },
  { icon: Heart, value: "10K+", label: "Lives Saved" },
  { icon: Shield, value: "98%", label: "User Safety Rate" },
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

export default function Impact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="bg-gradient-to-b from-secondary to-primary/70 py-20"
    >
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
            Our Community Impact
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            SafeZone is more than just an app - it&apos;s a movement towards a
            safer, more connected world. See how we&apos;re making a difference.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-colors duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary mb-4 text-background"
              >
                <stat.icon size={32} />
              </motion.div>
              <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 text-center"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-semibold mb-4"
          >
            Join the SafeZone Community
          </motion.h3>
          <motion.p
            variants={itemVariants}
            className="text-muted-foreground mb-6 max-w-2xl mx-auto"
          >
            Be part of a network that&apos;s actively making the world a safer
            place. Download SafeZone today and contribute to a more secure
            tomorrow.
          </motion.p>
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary hover:bg-blue-700 font-bold py-3 px-6 rounded-full transition-colors duration-300 text-background"
          >
            Download SafeZone Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}