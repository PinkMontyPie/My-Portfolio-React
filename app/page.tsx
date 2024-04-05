import Image from "next/image";
import Link from "next/link";
import NavigationBar from "./components/navbar/NavigationBar";
import HeroPage from "./components/landing/Heros";
import AboutPage from "./components/landing/Abouts";
import SkillPage from "./components/landing/Skills";
import WorksPage from "./components/landing/Works";
import ContactPage from "./components/landing/Contact";


export default function Home() {
  return (
    <main className="font-line-bold text-black">
      <div style={{ position: "relative", zIndex: 0 }}>
        <HeroPage />
      </div>
      
      <div style={{ position: "relative", zIndex: 10 }}>
        <section id="about">
          <AboutPage />
        </section>
        <section id="skills">
          <SkillPage />
        </section>
        <section id="works">
          <WorksPage />
        </section>
      </div>
    </main>
  );
}
