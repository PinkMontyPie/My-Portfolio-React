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
      <div className="" >
        <HeroPage />
      </div>
      <section id="about" className="z-10">
        <AboutPage />
      </section>
      <section id="skills" className="z-20">
        <SkillPage />
      </section>
      <section id="works" className="z-30">
        <WorksPage />
      </section>
      {/* <section id="contact" className="z-40">
        <ContactPage />
      </section> */}
    </main >
  );
}
