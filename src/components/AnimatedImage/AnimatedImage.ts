"use client";
import { memo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const AnimatedImage = memo(motion.create(Image));
