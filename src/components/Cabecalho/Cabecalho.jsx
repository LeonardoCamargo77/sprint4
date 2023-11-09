import Link from "next/link";

export default function Cabecalho() {
  return (
    <div>
      <header className="bg-gray-800 text-white p-2">
        <nav className="p-linha ">
          <p>
            <Link href="/">GuinchoSeguro</Link>
          </p>
          <p>
            <Link href="/">Home</Link>
          </p>
          <p>
            <Link href="/">ChatBot</Link>
          </p>
          <p>
            <Link href="/">Quem Somos</Link>
          </p>
        </nav>
      </header>
    </div>
  );
}
