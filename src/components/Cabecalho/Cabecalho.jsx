import Link from "next/link";

export default function Cabecalho() {
  return (
    <div>
      <header className="bg-rgb-190-190-202 text-black p-2 flex items-center justify-between h-20">
        <p className="text-1xl">
          <Link href="/">GuinchoSeguro</Link>
        </p>
        <nav className="cabecalhoo flex items-center">
          <p className="mx-2">
            <Link href="/">Home</Link>
          </p>
          <p className="mx-2">
            <Link href="/">ChatBot</Link>
          </p>
          <p className="mx-2">
            <Link href="/">Quem Somos</Link>
          </p>
        </nav>
      </header>
    </div>
  );
}
