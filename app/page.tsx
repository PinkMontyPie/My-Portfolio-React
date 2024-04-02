import Image from "next/image";
import Link from "next/link";
import NavigationBar from "./components/navbar/NavigationBar";
import HeroPage from "./components/landing/Heros";
import AboutPage from "./components/landing/Abouts";
import SkillPage from "./components/landing/Skills";

export default function Home() {
  return (
    <main className="font-line-bold text-black">
      <HeroPage />
      <div className="z-50">
        <AboutPage />
      </div>
      <SkillPage />
    </main >
  );
}
