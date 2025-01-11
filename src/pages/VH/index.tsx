import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function ViewHeight() {
  const navigate = useNavigate();
  const [pixelValue, setPixelValue] = useState("");
  const [vhValue, setVhValue] = useState<string | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPixelValue(event.target.value);
  };

  const handleConvert = () => {
    const vh = (parseFloat(pixelValue) / 10).toFixed(1);
    setVhValue(vh);
  };

  return (
    <>
      <button
        onClick={() => navigate("/")}
        className="flex items-center outline-none justify-end absolute mt-[3vh] ml-[3vh] transform transition-transform duration-300 hover:scale-110"
      >
        <span className="text-zinc-500 text-[1.7vh]">Voltar para home</span>
        <ChevronRight color="#71717a" size={13} />
      </button>
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col gap-[2vh]">
          <div className="flex items-center flex-col gap-[0.7vh]">
            <h1 className="text-white text-[3vh]">PX to VH</h1>
            <p className="text-zinc-400">
              Conversão de unidades de medida PX para VH.
            </p>
          </div>
          <div className="flex items-center flex-col gap-[4vh]">
            <div className="flex w-full flex-col gap-[0.3vh]">
              <label htmlFor="px" className="text-zinc-400 text-[1.6vh]">
                Pixel:
              </label>
              <input
                type="number"
                name="px"
                id="px"
                placeholder="Digite o tamanho em pixels"
                className="p-[1.5vh] bg-transparent text-[1.6vh] border-none outline-none"
                value={pixelValue}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex items-center flex-col gap-[3vh]">
              <button
                onClick={() => handleConvert()}
                className="text-[1.6vh] outline-none bg-purple-500 w-[20vh] h-[5.5vh] rounded-[0.3vh] hover:bg-purple-600 transform transition-transform duration-300 hover:scale-110"
              >
                Receber em ViewHeight
              </button>
              <span className="text-purple-500 text-[1.55vh]">
                {pixelValue} pixels em ViewHeight é: {vhValue}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
