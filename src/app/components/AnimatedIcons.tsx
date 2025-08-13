"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState, useRef} from "react";
import { FaHtml5, FaReact, FaGithub, FaTerminal, FaCloud } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiApollographql } from "react-icons/si";

const icons = [
  { icon: <FaHtml5 size={28} className="text-orange-500" /> },
  { icon: <SiApollographql size={28} className="text-pink-500" /> },
  { icon: <FaReact size={28} className="text-cyan-400" /> },
  { icon: <SiNextdotjs size={28} className="text-white" /> },
  { icon: <SiTailwindcss size={28} className="text-sky-400" /> },
  { icon: <FaGithub size={28} className="text-gray-300" /> },
  { icon: <FaTerminal size={28} className="text-green-400" /> },
  { icon: <FaCloud size={28} className="text-blue-300" /> },
];

const AnimatedIcons = () => {
  const [radius, setRadius] = useState(160); // par défaut desktop
  const controls = useAnimation();
  const angleRef = useRef(0);

  // Ajuste le rayon selon la taille d’écran
  useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth < 640) setRadius(95);
      else if (window.innerWidth < 768) setRadius(130);
      else setRadius(160);
    };

    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  useEffect(() => {
    let isMounted = true;

    const loopAnimation = async () => {
      while (isMounted) {
        angleRef.current += 360;
        await controls.start({
          rotate: angleRef.current,
          transition: { duration: 5, ease: "easeInOut" },
        });

        // angleRef.current += 360;
        // await controls.start({
        //   rotate: angleRef.current,
        //   transition: { duration: 5, ease: "easeOut" },
        // });

        await new Promise((res) => setTimeout(res, 20000));

        // angleRef.current += 360;
        // await controls.start({
        //   rotate: angleRef.current,
        //   transition: { duration: 8, ease: "easeIn" },
        // });

        // angleRef.current += 360;
        // await controls.start({
        //   rotate: angleRef.current,
        //   transition: { duration: 3, ease: "easeInOut" },
        // });
      }
    };

    loopAnimation();

    return () => {
      isMounted = false;
      controls.stop();
    };
  }, [controls]);


  return (
    <motion.div
      animate={controls}
      className="absolute flex items-center justify-center pointer-events-none"
      style={{ width: radius * 2, height: radius * 2 }}
    >
      {icons.map((item, index) => {
        const angle = (index / icons.length) * (2 * Math.PI);
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              x: [x, x + Math.random() * 10 - 5, x],
              y: [y, y + Math.random() * 10 - 5, y],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: index * 0.3,
              ease: "easeInOut",
            }}
            className="absolute"
            style={{ transform: "translate(-50%, -50%)" }}
          >
            {item.icon}
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default AnimatedIcons;
