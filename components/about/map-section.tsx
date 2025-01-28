"use client";

import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRef } from "react";

export default function MapSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative min-h-screen overflow-hidden bg-background"
    >
      {/* Background map image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://res.cloudinary.com/dyp8gtllq/image/upload/v1737321619/photo-1736117703669-996247368d0a_l7qmws.jpg"
          alt="Network map"
          className="h-full w-full object-cover opacity-20"
          layout="fill"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-backround/30 via-transparent to-backgeound/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            <span className="block bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Build the future of public
            </span>
            <span className="mt-2 block bg-gradient-to-r from-purple-600 to-primary bg-clip-text text-transparent">
              safety together.
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Join our network of safety professionals and community leaders
            working together to create safer spaces for everyone.
          </p>
        </motion.div>

        {/* Network visualization - Simplified with basic animations */}
        <div className="relative mx-auto mt-20 grid h-[400px] place-items-center">
          {/* Center Node */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="animate-pulse rounded-full bgprimary p-4">
              <div className="h-8 w-8 rounded-full bg-blue-600" />
            </div>
          </motion.div>

          {/* Surrounding Nodes */}
          {[
            { top: "20%", left: "30%" },
            { top: "30%", left: "70%" },
            { top: "70%", left: "25%" },
            { top: "60%", left: "75%" },
            { top: "45%", left: "50%" },
          ].map((position, index) => (
            <motion.div
              key={index}
              className="absolute"
              style={position}
              initial={{ opacity: 0, scale: 0 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
              }
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div className="group relative">
                <div className="animate-bounce rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-3 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50">
                  <div className="h-6 w-6 rounded-full bg-black" />
                </div>
              </div>
            </motion.div>
          ))}

          {/* Animated connection lines using tailwind animations */}
          <div className="absolute inset-0">
            <div className="animate-pulse absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
            <div className="animate-pulse absolute bottom-0 top-0 left-1/2 w-px bg-gradient-to-b from-transparent via-purple-500/20 to-transparent" />
            <div className="animate-pulse absolute -left-1/4 -right-1/4 top-1/4 h-px rotate-45 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
            <div className="animate-pulse absolute -left-1/4 -right-1/4 bottom-1/4 h-px -rotate-45 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <Button
            size="lg"
            className="animate-bounce bg-gradient-to-r from-blue-500 to-purple-600 text-lg hover:from-blue-600 hover:to-purple-700"
          >
            Join the Network
          </Button>
        </motion.div>
      </div>

      {/* Simple animated background gradient */}
      <div className="animate-pulse pointer-events-none absolute inset-0 bg-gradient-to-b from-black/0 via-blue-500/5 to-black/0" />
    </section>
  );
}
