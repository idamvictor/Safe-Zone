// import Image from "next/image";

// const HeroSection = () => {
//   return (
//     <section>
//       <div className="container mx-auto md:flex items-center justify-center gap-8 self-center p-4">
//         <div className="flex flex-col mb-0 basis-1/2 intersect:motion-preset-slide-right-lg motion-duration-1500 motion-ease-spring-bouncy">
//           <div className="max-w-[552px] mx-auto">
//             <h1 className="text-4xl md:text-6xl font-bold motion-preset-typewriter-[14] motion-duration-[5s]">
//               We have <br /> your back any <br /> time, anywhere{" "}
//             </h1>
//             <p className="mt-14 text-[16px] md:text-xl md:leading-8 max-md:mt-10 max-md:max-w-full">
//               Lorem ipsum dolor sit amet consectetur. Rhoncus at turpis in
//               tincidunt sagittis sit. Mattis aliquet a turpis at vestibulum nunc
//               vestibulum elit. Tristique felis lacus dignissim tortor accumsan
//               vitae non viverra. Dapibus elementum et sit pretium vehicula.
//             </p>
//           </div>
//         </div>
//         <Image
//           src="/hero-image.png"
//           alt="Hero Image"
//           width={392}
//           height={882}
//           className="mx-auto my-0 intersect:motion-preset-slide-left-lg motion-duration-1500 motion-ease-spring-bouncy"
//         />
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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

const phoneVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-950 to-blue-950">
      {/* Background elements */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2 }}
          className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-blue-500/30 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-blue-600/30 blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-12 px-4 py-24 lg:grid-cols-2 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-block rounded-full bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-400">
              24/7 Emergency Response
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
          >
            We have your back{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              any time, anywhere
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="max-w-xl text-lg text-gray-300"
          >
            Stay informed and protected with real-time emergency alerts, instant
            communication, and comprehensive safety features right at your
            fingertips.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-lg border border-gray-700 bg-gray-900/50 px-6 py-3 font-medium text-gray-300 backdrop-blur-sm transition-colors hover:border-blue-500 hover:text-blue-400"
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          variants={phoneVariants}
          initial="hidden"
          animate="visible"
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
              alt="Mobile app interface showing emergency alert"
              width={366}
              height={742}
              className="rounded-[2rem] bg-gray-950"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

