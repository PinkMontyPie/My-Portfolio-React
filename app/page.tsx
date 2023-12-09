import Image from "next/image";
import Link from "next/link";
import NavigationBar from "./components/navbar/NavigationBar";
import Hero from "./components/landing/Hero";

export default function Home() {
  return (
    <main className="font-line-bold text-black">
      <div className="container flex flex-col gap-3 px-8">
        <NavigationBar />
        <Hero />
      </div>
    </main>
  );
}
