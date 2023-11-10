export default function Rodape() {
    return (
      <div className="min-h-screen flex flex-col p-4 relative">
       
        <footer className="fixed bottom-0 left-0 w-full bg-rgb-190-190-202 h-20 flex items-center justify-between">
          <p className="ml-4 text-black font-italic">Todos os direitos reservados</p>
  
          <div className="flex items-center space-x-4 mr-4">
            <img src="/img/git.png" alt="GitHub" className="h-9 w-9" />
            <img src="/img/face.png" alt="Facebook" className="h-9 w-9" />
            <img src="/img/twitter.png" alt="Twitter" className="h-9 w-9" />
            <img src="/img/porto3.png" alt="PortoSeguro" className="h-10 w-10" />
           
          </div>
        </footer>
      </div>
    );
  }
  