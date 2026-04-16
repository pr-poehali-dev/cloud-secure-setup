import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "@/components/ui/icon";


function IntangibleMapModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" onClick={onClose}>
      <div
        className="relative bg-white w-full max-w-3xl mx-4 flex flex-col"
        style={{ height: "70vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-3 border-b border-neutral-200">
          <p className="uppercase text-xs tracking-widest text-neutral-600">
            Казань — Маршрут по объектам нематериального культурного наследия
          </p>
          <button onClick={onClose} className="text-neutral-500 hover:text-black transition-colors">
            <Icon name="X" size={20} />
          </button>
        </div>
        <div className="flex-1 relative">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A1e495072c06842340e6bb3843450a1a572742008c0cfa9e4c85837210951dcf7&source=constructor"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
            style={{ border: "none", display: "block" }}
          />
        </div>
        <div className="px-5 py-4 border-t border-neutral-200 flex justify-end">
          <button
            className="px-6 py-3 bg-neutral-900 text-white text-sm uppercase tracking-wide hover:bg-neutral-700 transition-all duration-300"
          >
            Начать экскурсию
          </button>
        </div>
      </div>
    </div>
  );
}

function MapModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" onClick={onClose}>
      <div
        className="relative bg-white w-full max-w-3xl mx-4 flex flex-col"
        style={{ height: "70vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-3 border-b border-neutral-200">
          <p className="uppercase text-xs tracking-widest text-neutral-600">
            Казань — Маршрут по объектам материального культурного наследия
          </p>
          <button onClick={onClose} className="text-neutral-500 hover:text-black transition-colors">
            <Icon name="X" size={20} />
          </button>
        </div>
        <div className="flex-1 relative">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A545884e799018532e7b42792c244243f0c988ba6f4d637d09915d85099520fb4&source=constructor"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
            style={{ border: "none", display: "block" }}
          />
        </div>
        <div className="px-5 py-4 border-t border-neutral-200 flex justify-end">
          <a
            href="https://psv4.userapi.com/s/v1/d2/-5WTQToCojKpUvVznbDduh6enN9PN6jdWOWl7R6fP-2Js-ilSf-mdUdV-xbXjjuguFDn-uidqLHKHwxolGmIABm9RAksgQKxIrSFp6kMy6wXhEKdiBqGzruVoR3ChUrhdMM6QxXTXLQt/Tatarstan_tema_itog.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-neutral-900 text-white text-sm uppercase tracking-wide hover:bg-neutral-700 transition-all duration-300"
          >
            Начать экскурсию
          </a>
        </div>
      </div>
    </div>
  );
}

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
  const [showMap, setShowMap] = useState(false);
  const [showIntangibleMap, setShowIntangibleMap] = useState(false);

  return (
    <div id="cities" className="min-h-screen bg-white px-6 py-20 flex flex-col items-center">
      {showMap && <MapModal onClose={() => setShowMap(false)} />}
      {showIntangibleMap && <IntangibleMapModal onClose={() => setShowIntangibleMap(false)} />}
      <div className="max-w-5xl w-full">
        <h3 className="uppercase mb-4 text-sm tracking-widest text-neutral-500 text-center">
          Культурные маршруты
        </h3>
        <p className="text-3xl md:text-5xl font-bold text-neutral-900 text-center mb-4 leading-tight">
          Выберите город
        </p>
        <p className="text-neutral-500 text-center mb-14 max-w-xl mx-auto">
          Тысячи лет истории, традиций и памятников — в каждом городе своя неповторимая история. Каждый из памятников внёс неоценимый вклад в культуру города.
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
              <button
                onClick={() => { if (selectedCity === "Казань") setShowMap(true); }}
                className={`px-6 py-4 bg-white text-neutral-900 border border-neutral-900 text-sm uppercase tracking-wide transition-all duration-300 w-full sm:w-auto text-center
                  ${selectedCity === "Казань" ? "hover:bg-neutral-900 hover:text-white cursor-pointer" : "opacity-50 cursor-not-allowed"}`}
              >
                Маршрут по объектам материального культурного наследия
              </button>
              <button
                onClick={() => { if (selectedCity === "Казань") setShowIntangibleMap(true); }}
                className={`px-6 py-4 bg-white text-neutral-900 border border-neutral-900 text-sm uppercase tracking-wide transition-all duration-300 w-full sm:w-auto text-center
                  ${selectedCity === "Казань" ? "hover:bg-neutral-900 hover:text-white cursor-pointer" : "opacity-50 cursor-not-allowed"}`}
              >
                Маршрут по объектам нематериального культурного наследия
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}