import Image from "next/image";
import Link from "next/link";

export default function ApiPython() {
  return (
    <div className="mx-auto max-w-screen-xl">
      <h1 className="text-5xl font-serif text-center mt-16 mb-24">API Python</h1>

      <div className="flex justify-center space-x-8">
      <Link href="http://127.0.0.1:5000/funcionarios">
          <div className="border border-blue-500 py-2 px-4 rounded-full text-blue-500 hover:bg-blue-500 hover:text-white cursor-pointer">
            Funcionários
          </div>
        </Link>

      

       

        
      </div>
    </div>
  );
}
