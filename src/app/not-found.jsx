import Image from "next/image";
import Link from "next/link";
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-red-600 font-sans w-96 h-35 p-4 rounded-lg mb-0">
        <h1 className="text-center text-6xl text-white font-black"> - ERROR - 404</h1>
        <p className="text-center text-white text-3xl">Página não encontrada!</p>
        <div className="mb-0 overflow-hidden rounded-xl transform hover:rotate-3 transition-transform duration-300">
        <figure className="flex flex-col items-center">
          <Image src="/img/killua2.jpg" alt="Killua2" width={400} height={400} />
          <figcaption className="text-center font-thin text-lg"></figcaption>
        </figure>
      </div>
      </div>
      
   
      
      <div className="mb-0 overflow-hidden rounded-xl transform hover:rotate-3 transition-transform duration-300">
        <figure className="flex flex-col items-center">
          <Image src="/img/killua2.jpg" alt="Killua2" width={400} height={400} />
          <figcaption className="text-center font-thin text-lg"></figcaption>
        </figure>
      </div>


      <div className="flex justify-end mt-4">
        <Link href="/">
          <p className="text-center text-2xl font-bold">Mas fique calmo!!! Clique no botão e retorne a Home, amigo...</p>
          <div className="border border-blue-500 py-2 px-6 rounded-full text-blue-500 hover:bg-blue-500 hover:text-white cursor-pointer">
            Saiba mais
          </div>
        </Link>
      </div>
    </div>
    
  );
}
