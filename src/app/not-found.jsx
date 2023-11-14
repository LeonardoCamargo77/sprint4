import Image from "next/image";

export default function NotFound() {
  return (
    <div className="bg-red-600 font-sans m-auto w-96 h-35 p-4 rounded-lg">
      <h1 className="text-center text-4xl text-white font-black">ERROR - 404</h1>
      <p className="text-center text-white">Página não encontrada!</p>
    </div>
  );
}
