import Image from "next/image";

export default function Chatbot() {
  return (
    <div className="mx-auto max-w-screen-xl">
      <h1 className="text-3xl font-serif text-center mt-16 mb-24">Chatbot</h1>

      <div className="flex justify-center space-x-8">
        <div className="mb-2">
          <figure className="flex flex-col items-center">
            <Image src="/img/chatbot.png" alt="iamgemchatbot" width={700} height={700} />
            <figcaption className="text-center">O ChatBot será a primeira etapa para o início do processo de solicitação de guincho. O segurado deverá enviar mensagens via Telegram informando seus dados básicos como Nome, CPF, RG e número de apólice, em seguida, ele será encaminhado para o GuinchoSeguro, onde deverá selecionar as características que mais se adequal ao seu veículo, para que elas possam ser analisadas antes do envio do guincho.</figcaption>
          </figure>
        </div>

       

        
      </div>
    </div>
  );
}
