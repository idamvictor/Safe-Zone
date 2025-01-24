"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Hospital, Shield, LineChart } from "lucide-react";
import { useRef } from "react";

export default function GreaterGood() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  const features = [
    {
      icon: Hospital,
      title: "Hospital and emergency",
      description:
        "Lorem ipsum dolor sit amet consectetur. Aliquot non egestas nam eget ut in gravida nulla aliquam. Est eget diam et amet maecenas.",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: LineChart,
      title: "Increasing transparency",
      description:
        "Lorem ipsum dolor sit amet consectetur. Consectetur a integer ipsum arcu. Tincidunt commodo elit condimentum imperdiet.",
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: Shield,
      title: "Safety and Security",
      description:
        "Lorem ipsum dolor sit amet consectetur. Tincidunt et vitae malesuada egestas sit tristique super monitor donec.",
      color: "from-blue-600 to-blue-800",
    },
  ];

  return (
    <div className="min-h-screen bg-secondary" ref={targetRef}>
      <div className="relative">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl -top-20 -left-20" />
          <div className="absolute w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl bottom-0 right-0" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/40 mb-6"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              For the greater good.
            </motion.h1>
            <motion.p
              className="text-muted-foreground max-w-2xl mx-auto text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </motion.p>
          </motion.div>

          <motion.div
            style={{ opacity, scale }}
            className="grid md:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-background to-primary/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative bg-muted backdrop-blur-sm border border-primary/10 rounded-2xl p-6 h-full">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}
                  >
                    <feature.icon className="w-7 h-7" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/30 rounded-full"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
