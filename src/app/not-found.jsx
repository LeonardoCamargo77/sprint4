import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-red-600 font-sans w-96 h-35 p-4 rounded-lg flex-shrink-0">
        <h1 className="text-center text-6xl text-white font-black"> - ERROR - 404</h1>
        <p className="text-center text-white text-3xl">Página não encontrada!</p>
      </div>

      <div className="ml-8 mb-2 overflow-hidden rounded-xl transform hover:rotate-3 transition-transform duration-300 flex-shrink-0">
        <figure className="flex flex-col items-center">
          <Image src="/img/killua2.jpg" alt="Killua2" width={400} height={400} />
          <figcaption className="text-center font-thin text-lg"></figcaption>
        </figure>
      </div>
      </div>

      
    



  );
}
