"use client";

import { useState } from "react";
import WeatherDashboard from "@/components/WeatherDashboard";
import SearchBar from "@/components/SearchBar";
import WeatherEffects from "@/components/WeatherEffects";
import { CloudSun } from "lucide-react";
import { WeatherData } from "@/types/weather";

export default function Home() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getWeatherBackground = (weatherCode: string) => {
    if (weatherCode.startsWith('01')) return 'weather-bg-clear';
    if (weatherCode.startsWith('02') || weatherCode.startsWith('03') || weatherCode.startsWith('04')) return 'weather-bg-clouds';
    if (weatherCode.startsWith('09') || weatherCode.startsWith('10')) return 'weather-bg-rain';
    if (weatherCode.startsWith('11')) return 'weather-bg-thunderstorm';
    if (weatherCode.startsWith('13')) return 'weather-bg-snow';
    if (weatherCode.startsWith('50')) return 'weather-bg-mist';
    return 'weather-bg-clear';
  };

  const fetchWeatherData = async (searchCity: string) => {
    setLoading(true);
    setError("");
    try {
      const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${API_KEY}&units=metric`
      );
      
      if (!response.ok) {
        throw new Error("City not found");
      }
      
      const data: WeatherData = await response.json();
      setWeatherData(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch weather data");
    } finally {
      setLoading(false);
    }
  };

  const isDay = weatherData ? 
    new Date().getTime() / 1000 > weatherData.sys.sunrise && 
    new Date().getTime() / 1000 < weatherData.sys.sunset : 
    true;

  return (
    <main className={`min-h-screen transition-all duration-1000 ${
      weatherData ? getWeatherBackground(weatherData.weather[0].icon) : 'weather-bg-clear'
    }`}>
      {weatherData && (
        <WeatherEffects 
          weatherCode={weatherData.weather[0].icon}
          isDay={isDay}
        />
      )}
      <div className="max-w-4xl mx-auto space-y-8 pt-8 p-4 relative z-20">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <CloudSun className="h-12 w-12 text-white" />
            <h1 className="text-4xl font-bold text-white">
              Weather Dashboard
            </h1>
          </div>
          <p className="text-gray-100">
            Get real-time weather information for any city
          </p>
        </div>
        
        <SearchBar 
          onSearch={(searchCity) => {
            setCity(searchCity);
            fetchWeatherData(searchCity);
          }}
          loading={loading}
        />

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        {weatherData && <WeatherDashboard weatherData={weatherData} />}
      </div>
    </main>
  );
}