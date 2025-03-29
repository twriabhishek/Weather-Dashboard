"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface SearchBarProps {
  onSearch: (city: string) => void;
  loading: boolean;
}

export default function SearchBar({ onSearch, loading }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm.trim());
    }
  };

  return (
    <motion.form 
      onSubmit={handleSubmit} 
      className="flex gap-2 max-w-md mx-auto"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <Input
        type="text"
        placeholder="Enter city name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="flex-1 transition-all duration-300 focus:ring-2 focus:ring-blue-500"
      />
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button 
          type="submit" 
          disabled={loading}
          className="relative overflow-hidden"
        >
          {loading ? (
            <motion.div 
              className="h-5 w-5 border-2 border-white border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          ) : (
            <Search className="h-5 w-5" />
          )}
        </Button>
      </motion.div>
    </motion.form>
  );
}