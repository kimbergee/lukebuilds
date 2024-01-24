import Image from "next/image";
import { Navigation } from "./components/nav";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navigation />
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1>hiya</h1>
      </div>
    </main>
  );
}
