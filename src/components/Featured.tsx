import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CITIES = [
  "Москва",
  "Санкт-Петербург",
  "Самара",
  "Новосибирск",
  "Екатеринбург",
  "Казань",
  "Красноярск",
  "Нижний Новгород",
  "Челябинск",
  "Уфа",
  "Ростов-на-Дону",
  "Краснодар",
  "Омск",
  "Воронеж",
  "Пермь",
];

export default function Featured() {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white px-6 py-20 flex flex-col items-center">
      <div className="max-w-5xl w-full">
        <h3 className="uppercase mb-4 text-sm tracking-widest text-neutral-500 text-center">
          Культурные маршруты
        </h3>
        <p className="text-3xl md:text-5xl font-bold text-neutral-900 text-center mb-4 leading-tight">
          Выберите город
        </p>
        <p className="text-neutral-500 text-center mb-14 max-w-xl mx-auto">
          Откройте маршруты по объектам культурного наследия России — материального и нематериального
        </p>

        <div className="flex flex-wrap gap-3 justify-center mb-16">
          {CITIES.map((city) => (
            <button
              key={city}
              onClick={() => setSelectedCity(selectedCity === city ? null : city)}
              className={`px-5 py-3 border text-sm uppercase tracking-wide transition-all duration-300 cursor-pointer
                ${selectedCity === city
                  ? "bg-black text-white border-black"
                  : "bg-white text-black border-black hover:bg-black hover:text-white"
                }`}
            >
              {city}
            </button>
          ))}
        </div>

        <AnimatePresence>
          {selectedCity && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <p className="text-neutral-500 uppercase text-xs tracking-widest mb-2 sm:mb-0 sm:mr-4">
                {selectedCity}:
              </p>
              <button className="px-6 py-4 bg-neutral-900 text-white text-sm uppercase tracking-wide hover:bg-neutral-700 transition-all duration-300 cursor-pointer w-full sm:w-auto text-center">
                Маршрут по объектам материального культурного наследия
              </button>
              <button className="px-6 py-4 bg-white text-neutral-900 border border-neutral-900 text-sm uppercase tracking-wide hover:bg-neutral-900 hover:text-white transition-all duration-300 cursor-pointer w-full sm:w-auto text-center">
                Маршрут по объектам нематериального культурного наследия
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
