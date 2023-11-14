import Image from "next/image";

export default function QuemSomos() {
  return (
    <div className="mx-auto max-w-screen-xl">
      <h1 className="text-5xl font-serif text-center mt-16 mb-24">Integrantes</h1>

      <div className="flex justify-center space-x-8">
        <div className="mb-2 overflow-hidden rounded-xl transform hover:rotate-3 transition-transform duration-300">
          <figure className="flex flex-col items-center">
            <Image src="/img/anaa.jpeg" alt="AnaPaula" width={170} height={170} />
            <figcaption className="text-center font-thin text-lg">Ana Paula - 552513  </figcaption>
          </figure>
        </div>

        <div className="mb-2 overflow-hidden rounded-xl transform hover:rotate-3 transition-transform duration-300">
          <figure className="flex flex-col items-center">
            <Image src="/img/calina.jpg" alt="Calina" width={300} height={300} />
            <figcaption className="text-center font-thin text-lg">Calina Thalya - 552523</figcaption>
          </figure>
        </div>

        <div className="mb-2 overflow-hidden rounded-xl transform hover:rotate-3 transition-transform duration-300">
          <figure className="flex flex-col items-center">
            <Image src="/img/geovana.jpeg" alt="geovana" width={300} height={300} />
            <figcaption className="text-center font-thin text-lg">Geovana Ribeiro - 99646</figcaption>
          </figure>
        </div>

        <div className="mb-2 overflow-hidden rounded-xl transform hover:rotate-3 transition-transform duration-300">
          <figure className="flex flex-col items-center">
            <Image src="/img/leo.jpeg" alt="leo" width={240} height={50} />
            <figcaption className="text-center font-thin text-lg">Leonardo Lucena - 552537</figcaption>
          </figure>
        </div>

        <div className="mb-2 overflow-hidden rounded-xl transform hover:rotate-3 transition-transform duration-300">
          <figure className="flex flex-col items-center">
            <Image src="/img/nathan.jpeg" alt="nathan" width={310} height={550} />
            <figcaption className="text-center font-thin text-lg">Nathan Nunes - 552539</figcaption>
          </figure>
        </div>

        <div>
        <div className="mx-auto max-w-screen-xl">
      <h1 className="text-5xl font-serif text-center mt-16 mb-24">Link do repositório:</h1>
        </div>
        </div>

      </div>
    </div>
  );
  
}
