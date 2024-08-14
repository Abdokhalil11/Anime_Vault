"use client";
import { motion } from "framer-motion";
const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
export default function AnimeMotion({ children, index }) {
  return (
    <motion.div
      variants={variants}
      animate="visible"
      initial="hidden"
      viewport={{ amount: 0 }}
      transition={{ ease: "easeInOut", delay: index * 0.25, duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
