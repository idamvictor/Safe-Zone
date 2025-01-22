"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Bell } from "lucide-react";

export default function EstateGuard() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const features = [
    {
      icon: Shield,
      title: "Total Property Control",
      description: "Have total control over your house, office and more",
    },
    {
      icon: Lock,
      title: "Assured Security",
      description: "No trespass, no irregular or unauthorized visits",
    },
    {
      icon: Bell,
      title: "Space Monitoring",
      description: "Set your boundaries and monitor your space",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A0F1E]">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/2 w-[1000px] h-[1000px] bg-blue-700/10 rounded-full blur-3xl" />
      </div>

      <div className="relative">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-12"
            >
              <div className="space-y-6">
                <motion.div
                  {...fadeIn}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20"
                >
                  <span className="text-blue-400 text-sm font-medium">
                    Estate Security
                  </span>
                </motion.div>
                <motion.h1
                  {...fadeIn}
                  className="text-5xl md:text-6xl font-bold text-white"
                >
                  Estate Guard
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                    Access Control
                  </span>
                </motion.h1>
                <motion.p
                  {...fadeIn}
                  className="text-gray-400 text-lg max-w-lg"
                >
                  Secure your properties with advanced access control and
                  monitoring systems.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="grid gap-6"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 * index + 0.6 }}
                    className="flex items-center p-4 rounded-xl bg-gradient-to-r from-blue-900/40 to-blue-800/20 border border-blue-800/50"
                  >
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-blue-500">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-white">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - Phone Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative flex justify-center "
            >
              <div className="relative">
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(59, 130, 246, 0.5)",
                      "0 0 40px rgba(59, 130, 246, 0.3)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                  className="absolute inset-0 rounded-3xl"
                />
                <motion.img
                  src="https://res.cloudinary.com/dyp8gtllq/image/upload/v1737504197/add_image_ivwdy0.png"
                  alt="Estate Guard Interface"
                  className="relative z-10 w-full max-w-[300px] rounded-3xl border border-blue-500/20"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
