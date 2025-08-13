"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ReactTyped } from "react-typed";
import AnimatedIcons from "./AnimatedIcons";

const greetings = [
  "Bonjour",
  "Hello",
  "Hola",
  "Ciao",
  "Hallo",
  "Olá",
  "こんにちは", // Japonais
  "안녕하세요", // Coréen
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % greetings.length);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-4 sm:px-6 lg:px-72 py-12 md:py-24 relative gap-10 md:gap-16">
      {/* Texte */}
      <div className="flex-1 text-center md:text-left z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 leading-tight flex items-center gap-2">
          <AnimatePresence mode="wait">
            <motion.span
              key={greetings[index]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1 }}
              className="inline-block"
            >
              {greetings[index]},
            </motion.span>
          </AnimatePresence>
          <span className="text-white">je suis <span className="font-bold text-blue-400">Christopher De Pasqual</span></span>
        </h1>

        <ReactTyped
          strings={[
            "En formation",
            "Développeur web",
            "Frontend developper",
            "BackEnd developper",
          ]}
          typeSpeed={60}
          backSpeed={5}
          loop
          cursorChar="|"
          className="text-xl sm:text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 drop-shadow-lg"
        />
      </div>

      {/* Photo + Icônes */}
      <div className="flex-1 relative flex items-center justify-center">
        <AnimatedIcons />
        <div className="relative w-40 h-40 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full overflow-hidden shadow-lg group z-10">
          <Image
            src="/christopher.jpg"
            alt="Photo de Christopher"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
            <a
              href="/CV.pdf"
              download
              className="btn bg-blue-50 dark:bg-blue-900/20 p-2 md:p-3 rounded-lg border border-blue-200 dark:border-blue-800 hover:shadow-lg hover:shadow-blue-500/20 duration-300"
            >
              Télécharger mon CV
            </a>
            <a
              href="/Lettre.pdf"
              download
              className="btn bg-blue-50 dark:bg-blue-900/20 p-2 md:p-3 rounded-lg border border-blue-200 dark:border-blue-800 hover:shadow-lg hover:shadow-blue-500/20 transition duration-300"
            >
              Télécharger ma Lettre de Motivation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
