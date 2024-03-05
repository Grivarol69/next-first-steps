import Link from "next/link";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hola Mundo con Next !!!</h1>

      <Link href={'/about'}>About Page</Link>
    </main>
  );
}
