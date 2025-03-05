"use client";

import { getFirstImage } from "@/lib/getFirstImage";
import { Post } from "@/lib/types";
import { useGetPosts } from "@/services/getPosts";
import { motion, useInView } from "framer-motion";
import { Play } from "lucide-react";
import { useRef } from "react"; // Required for refs with `useInView`

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Highlights() {
  const { data: highlights, isFetching, error } = useGetPosts();
  console.log(isFetching, error);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-secondary py-24"
    >
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.2 } : {}}
          transition={{ duration: 2 }}
          className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/30 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.2 } : {}}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-primary/30 blur-3xl"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16 text-center"
        >
          <div className="space-y-4">
            <motion.p variants={itemVariants} className="text-blue-500">
              REAL-TIME HIGHLIGHTS
            </motion.p>
            <motion.h2
              variants={itemVariants}
              className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
            >
              Safezone is a force for good in the world.
            </motion.h2>
          </div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5"
          >
            {Array.isArray(highlights) &&
              highlights.slice(0, 5).map((highlight: Post) => {
                const bgImage = getFirstImage(highlight.files);

                return (
                  <motion.div
                    key={highlight.id}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative"
                  >
                    <div className="aspect-square overflow-hidden rounded-full">
                      <div className="relative h-full w-full">
                        <div
                          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110"
                          style={{
                            backgroundImage: `url(${bgImage})`,
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.div
                            initial={{ opacity: 0.5, scale: 0.8 }}
                            whileHover={{ opacity: 1, scale: 1 }}
                            className="rounded-full bg-blue-500/80 p-4 backdrop-blur-sm transition-colors group-hover:bg-blue-600"
                          >
                            <Play className="h-6 w-6 text-white" />
                          </motion.div>
                        </div>
                      </div>
                    </div>
                    <motion.p className="mt-4 text-sm text-accent-foreground transition-colors group-hover:text-blue-400">
                      {highlight.title}
                    </motion.p>
                  </motion.div>
                );
              })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
