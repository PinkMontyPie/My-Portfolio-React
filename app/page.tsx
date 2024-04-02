import Image from "next/image";
import Link from "next/link";
import NavigationBar from "./components/navbar/NavigationBar";
import HeroPage from "./components/landing/Heros";
import AboutPage from "./components/landing/Abouts";  

export default function Home() {
  return (
    <main className="font-line-bold text-black">
      <HeroPage />
      <AboutPage /> 
    </main >
  );
}
