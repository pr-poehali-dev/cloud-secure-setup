import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/10985523-2211-464f-91ec-49a510babb0d/bucket/6fd63a0e-2b7f-4032-bb1f-ff194d8da4a0.png"
          alt="Соловецкий монастырь"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          НАСЛЕДИЕ
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
          Путешествуй по культурным маршрутам городов России
        </p>
      </div>
    </div>
  );
}