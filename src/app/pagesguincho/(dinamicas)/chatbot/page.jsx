import Image from "next/image";

export default function Chatbot() {
  return (
    <div className="mx-auto max-w-screen-xl">
      <h1 className="text-3xl font-serif text-center mt-16 mb-24">Chatbot</h1>

      <div className="flex justify-center space-x-8">
        <div className="mb-2">
          <figure className="flex flex-col items-center">
            <Image src="/img/guinchoasadeltapesado.jpg" alt="GuinchoAsaDeltaPesado" width={300} height={300} />
            <figcaption className="text-center">Guincho asa delta pesado</figcaption>
          </figure>
        </div>

        <div className="mb-2">
          <figure className="flex flex-col items-center">
            <Image src="/img/guinchocegonha.jpg" alt="GuinchoCegonha" width={300} height={300} />
            <figcaption className="text-center">Guincho Cegonha</figcaption>
          </figure>
        </div>

        <div className="mb-2">
          <figure className="flex flex-col items-center">
            <Image src="/img/guinchoreboque.jpg" alt="GuinchoReboque" width={300} height={300} />
            <figcaption className="text-center">Guincho reboque</figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}
