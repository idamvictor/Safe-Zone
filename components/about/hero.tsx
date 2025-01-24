"use client";

import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://res.cloudinary.com/dyp8gtllq/image/upload/v1737075746/samples/ecommerce/leather-bag-gray.jpg"
          alt="People together"
          className="h-full w-full object-cover"
          layout="fill"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-foreground/50 to-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              <span className="block">Safezone</span>
              <span className="mt-2 block text-primary">
                Where Safety Meets Community
              </span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              Creating a safe environment for everyone, building stronger
              communities, and fostering meaningful connections.
            </p>
            <div className="mt-10 flex gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-background">
                Get Started
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white hover:bg-white/20 bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="relative lg:mt-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -left-4 top-4 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
              <div className="absolute -right-4 bottom-4 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />
              <div className="relative rounded-2xl border border-white/10 bg-black/30 p-8 backdrop-blur-sm">
                <h2 className="text-3xl font-bold text-white">Mission</h2>
                <p className="mt-4 text-gray-300">
                  We believe in creating spaces where everyone feels secure,
                  valued, and empowered. Our mission is to build and maintain
                  environments that promote safety, understanding, and mutual
                  respect.
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                    <svg
                      className="h-8 w-8 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
                    <svg
                      className="h-8 w-8 "
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
      <div className="absolute bottom-0 left-1/2 h-24 w-px -translate-x-1/2 bg-gradient-to-b from-white/20 to-transparent" />
    </section>
  );
}
