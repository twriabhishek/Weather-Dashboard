"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface WeatherEffectsProps {
  weatherCode: string;
  isDay: boolean;
}

export default function WeatherEffects({ weatherCode, isDay }: WeatherEffectsProps) {
  const [particles, setParticles] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      const count = weatherCode.startsWith("2") ? 10 : // thunderstorm
                    weatherCode.startsWith("3") || weatherCode.startsWith("5") ? 50 : // rain/drizzle
                    weatherCode.startsWith("6") ? 30 : // snow
                    weatherCode.startsWith("01") && isDay ? 15 : 0; // sun rays for clear day

      for (let i = 0; i < count; i++) {
        const left = `${Math.random() * 100}%`;
        const animationDelay = `${Math.random() * 5}s`;
        const opacity = Math.random() * 0.6 + 0.4;

        if (weatherCode.startsWith("01") && isDay) {
          // Sun rays
          newParticles.push(
            <motion.div
              key={i}
              className="absolute bg-yellow-200/30 w-1 h-32"
              style={{
                left,
                top: "-20px",
                transformOrigin: "50% 0%",
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, opacity, 0],
                scale: [0.2, 1, 0.2],
                rotate: [0, 45, 0],
              }}
              transition={{
                duration: 3,
                delay: i * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        } else {
          newParticles.push(
            <motion.div
              key={i}
              className={`absolute ${
                weatherCode.startsWith("6")
                  ? "weather-snow"
                  : "weather-rain"
              }`}
              style={{
                left,
                opacity,
                top: "-10px",
              }}
              initial={{ y: -10 }}
              animate={{ y: "100vh" }}
              transition={{
                duration: weatherCode.startsWith("6") ? 3 : 1,
                delay: parseFloat(animationDelay),
                repeat: Infinity,
                ease: "linear",
              }}
            />
          );
        }
      }
      setParticles(newParticles);
    };

    generateParticles();
    const interval = setInterval(generateParticles, 5000);
    return () => clearInterval(interval);
  }, [weatherCode, isDay]);

  return (
    <AnimatePresence>
      <motion.div 
        className="weather-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {particles}
      </motion.div>
    </AnimatePresence>
  );
}