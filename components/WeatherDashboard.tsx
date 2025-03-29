"use client";

import { Card } from "@/components/ui/card";
import {
  Sun,
  Sunset,
  Wind,
  Droplets,
  Eye,
  Gauge,
  ThermometerSun,
  ThermometerSnowflake,
} from "lucide-react";
import { motion } from "framer-motion";

interface WeatherDashboardProps {
  weatherData: any;
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

export default function WeatherDashboard({ weatherData }: WeatherDashboardProps) {
  const formatTime = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {/* Main Weather Card */}
      <motion.div 
        className="col-span-full"
        variants={cardVariants}
      >
        <Card className="p-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm hover:bg-white/95 dark:hover:bg-gray-800/95 transition-all duration-300">
          <motion.div 
            className="flex flex-col items-center text-center"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <h2 className="text-2xl font-bold mb-2">{weatherData.name}</h2>
            <motion.p 
              className="text-6xl font-bold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {Math.round(weatherData.main.temp)}°C
            </motion.p>
            <p className="text-lg capitalize">{weatherData.weather[0].description}</p>
          </motion.div>
        </Card>
      </motion.div>

      {/* Temperature Details */}
      <motion.div variants={cardVariants}>
        <Card className="p-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm hover:bg-white/95 dark:hover:bg-gray-800/95 transition-all duration-300">
          <div className="flex items-center gap-2 mb-4">
            <ThermometerSun className="h-5 w-5 text-orange-500" />
            <h3 className="font-semibold">Temperature</h3>
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <ThermometerSun className="h-4 w-4" />
              <span>Max: {Math.round(weatherData.main.temp_max)}°C</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <ThermometerSnowflake className="h-4 w-4" />
              <span>Min: {Math.round(weatherData.main.temp_min)}°C</span>
            </motion.div>
          </div>
        </Card>
      </motion.div>

      {/* Humidity and Pressure */}
      <motion.div variants={cardVariants}>
        <Card className="p-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm hover:bg-white/95 dark:hover:bg-gray-800/95 transition-all duration-300">
          <div className="flex items-center gap-2 mb-4">
            <Droplets className="h-5 w-5 text-blue-500" />
            <h3 className="font-semibold">Humidity & Pressure</h3>
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <Droplets className="h-4 w-4" />
              <span>{weatherData.main.humidity}%</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <Gauge className="h-4 w-4" />
              <span>{weatherData.main.pressure} hPa</span>
            </motion.div>
          </div>
        </Card>
      </motion.div>

      {/* Visibility and Wind */}
      <motion.div variants={cardVariants}>
        <Card className="p-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm hover:bg-white/95 dark:hover:bg-gray-800/95 transition-all duration-300">
          <div className="flex items-center gap-2 mb-4">
            <Eye className="h-5 w-5 text-gray-500" />
            <h3 className="font-semibold">Visibility & Wind</h3>
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <Eye className="h-4 w-4" />
              <span>{(weatherData.visibility / 1000).toFixed(1)} km</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <Wind className="h-4 w-4" />
              <span>{weatherData.wind.speed} m/s</span>
            </motion.div>
          </div>
        </Card>
      </motion.div>

      {/* Sunrise and Sunset */}
      <motion.div variants={cardVariants}>
        <Card className="p-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm hover:bg-white/95 dark:hover:bg-gray-800/95 transition-all duration-300">
          <div className="flex items-center gap-2 mb-4">
            <Sun className="h-5 w-5 text-yellow-500" />
            <h3 className="font-semibold">Sun Schedule</h3>
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <Sun className="h-4 w-4" />
              <span>Rise: {formatTime(weatherData.sys.sunrise)}</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <Sunset className="h-4 w-4" />
              <span>Set: {formatTime(weatherData.sys.sunset)}</span>
            </motion.div>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
}