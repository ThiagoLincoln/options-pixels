import { useNavigate } from "react-router-dom";

export function App() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-screen px-4">
      <div className="flex flex-col gap-4 w-full max-w-[600px]">
        <div className="flex items-center flex-col">
          <h1 className="text-3xl sm:text-4xl font-medium text-center">
            Pixel Converter
          </h1>
          <p className="text-sm sm:text-base text-center text-zinc-400 mt-2">
            O Pixel Converter é uma plataforma online projetada para facilitar a
            conversão de valores em pixels para uma ampla variedade de unidades
            e formatos utilizados em design, desenvolvimento web e outras
            aplicações digitais.
          </p>
        </div>
        <div className="flex justify-center items-center mt-6">
          <div className="flex items-center flex-col gap-4 w-full">
            <button
              onClick={() => navigate("/viewHeight")}
              className="bg-purple-500 w-full sm:w-[14vh] h-[48px] sm:h-[5.5vh] rounded-md hover:bg-purple-600 transform transition-transform duration-300 hover:scale-105 text-white text-sm sm:text-base"
            >
              PX to <strong>VH</strong>
            </button>
            <button
              onClick={() => navigate("/viewWidth")}
              className="bg-purple-500 w-full sm:w-[14vh] h-[48px] sm:h-[5.5vh] rounded-md hover:bg-purple-600 transform transition-transform duration-300 hover:scale-105 text-white text-sm sm:text-base"
            >
              PX to <strong>VW</strong>
            </button>
            <button
              onClick={() => navigate("/rem")}
              className="bg-purple-500 w-full sm:w-[14vh] h-[48px] sm:h-[5.5vh] rounded-md hover:bg-purple-600 transform transition-transform duration-300 hover:scale-105 text-white text-sm sm:text-base"
            >
              PX to <strong>REM</strong>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
