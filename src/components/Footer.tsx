import { useState } from "react";

function AboutModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70" onClick={onClose}>
      <div
        className="bg-white max-w-xl w-full mx-4 p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-black transition-colors text-xl leading-none"
        >
          ✕
        </button>
        <h2 className="uppercase text-xs tracking-widest text-neutral-500 mb-4">О проекте</h2>
        <p className="text-neutral-900 text-base leading-relaxed">
          Наша цель — поспособствовать глубокому пониманию категорий материального и нематериального культурного наследия среди населения, раскрыть разнообразие форм культурного наследия и подчеркнуть их значение для самоидентификации народа и общества.
        </p>
      </div>
    </div>
  );
}

export default function Footer() {
  const [showAbout, setShowAbout] = useState(false);
  return (
    <>
    {showAbout && <AboutModal onClose={() => setShowAbout(false)} />}
    <div
      className="relative h-[400px] sm:h-[600px] lg:h-[800px] max-h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+600px)] lg:h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[400px] sm:h-[600px] lg:h-[800px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-600px)] lg:top-[calc(100vh-800px)]">
          <div className="bg-neutral-900 py-4 sm:py-6 lg:py-8 px-4 sm:px-6 h-full w-full flex flex-col justify-between">
            <div className="flex shrink-0 gap-8 sm:gap-12 lg:gap-20">
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-neutral-400 text-xs sm:text-sm">Маршруты</h3>
                <a
                  href="#material"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Материальное наследие
                </a>
                <a
                  href="#immaterial"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Нематериальное наследие
                </a>
                <a
                  href="#cities"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Все города
                </a>
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-neutral-400 text-xs sm:text-sm">Проект</h3>
                <button
                  onClick={() => setShowAbout(true)}
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base text-left"
                >
                  О проекте
                </button>
                <a
                  href="#contact"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Контакты
                </a>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
              <h1 className="text-[18vw] sm:text-[16vw] lg:text-[14vw] leading-[0.8] mt-4 sm:mt-6 lg:mt-10 text-white font-bold tracking-tight">
                НАСЛЕДИЕ
              </h1>
              <p className="text-white text-sm sm:text-base">{new Date().getFullYear()} Наследие России</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}