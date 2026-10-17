/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect } from "react";

interface Experience {
  company: string;
  url?: string;
  logo: string;
  // Wide wordmarks need more room than square icons to read at the same visual size
  logoClass: string;
  title: string;
  period: string;
  previously?: string;
  highlights: string[];
}

const experiences: Experience[] = [
  {
    company: "Aomly",
    url: "https://aomly.app",
    logo: "images/Work/aomly.png",
    logoClass: "w-[72px] rounded-[18px]",
    title: "Founder & Maker",
    period: "2026 - Present",
    highlights: [
      "Designed and built Aomly, a daily budget tracker that gives you one number each morning, with your bills, savings and debt already taken out.",
      "Built with Next.js, React, TypeScript and Tailwind CSS, deployed on Cloudflare Workers, with Thai and English, light and dark themes, and data saved on the device.",
    ],
  },
  {
    company: "HDmall",
    logo: "images/hdmall_square_trans1.png",
    logoClass: "w-[84px]",
    title: "Product Engineer",
    period: "Mar 2025 - Present",
    previously:
      "Previously Frontend Web Developer (Sep 2024 - Mar 2025) and Frontend Developer Intern (Jun 2024 - Aug 2024)",
    highlights: [
      "Developed and designed a B2B website for HDmall, resulting in an increase of over 100 customers in the past 3 months.",
      "Created an internal tool to streamline company operations, boosting marketing team productivity by 50%.",
    ],
  },
  {
    company: "CoDev Community",
    logo: "icon/CoDev_CB.png",
    logoClass: "w-[104px]",
    title: "Founder",
    period: "May 2024 - Present",
    highlights: [
      "Founded CoDev to create a space where student developers collaborate, share ideas and support each other in their coding journeys.",
      "A place for beginners and experienced developers to work on projects, learn new technologies and grow their skills together.",
    ],
  },
  {
    company: "Center of Specialty Innovation (CoSI)",
    logo: "icon/CoSI_Icon_Dark.png",
    logoClass: "w-[72px]",
    title: "Senior Front-end Developer & UX/UI Designer",
    period: "Jun 2023 - Aug 2024",
    highlights: [
      "Led website development and UI/UX design using modern front-end frameworks.",
      "Managed version control and implemented CI/CD pipelines to streamline the development workflow and ensure timely feature delivery.",
    ],
  },
];

const ExperiencePage = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".animate-class");
    hiddenElements.forEach((el) => observer.observe(el));

    // Clean up observer when component unmounts
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <main className="font-line-bold text-[var(--ink)] relative">
      <div className="container section">
        <div className="flex flex-col justify-center items-center gap-10">
          <div className="section-pill animate-class delay-1">Experience</div>
          <h2 className="section-title animate-class delay-2">
            These are my Experiences
          </h2>
          <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 w-full">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={`grid grid-cols-[64px_minmax(0,1fr)] sm:grid-cols-[136px_minmax(0,1fr)] items-start cozy-card p-5 sm:p-8 gap-x-4 gap-y-3 sm:gap-x-8 animate-class delay-${Math.min(index + 3, 6)}`}
              >
                <div className="cozy-tile sm:row-span-2 w-16 h-16 sm:w-[136px] sm:h-[136px] flex justify-center items-center">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className={`h-auto max-w-[48px] sm:max-w-none ${exp.logoClass}`}
                  />
                </div>
                <div className="flex flex-col gap-1 sm:gap-2 min-w-0 self-center sm:self-start">
                  <h1 className="font-line-bold text-lg sm:text-xl leading-snug">
                    {exp.url ? (
                      <a
                        href={exp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[var(--accent-deep)] transition-colors"
                      >
                        {exp.company} ↗
                      </a>
                    ) : (
                      exp.company
                    )}
                  </h1>
                  <h2 className="font-line-Regular text-sm sm:text-base text-[var(--ink)] tracking-normal">
                    {exp.title}
                    <span className="text-[var(--ink-soft)]"> · {exp.period}</span>
                  </h2>
                </div>
                <div className="col-span-2 sm:col-span-1 sm:col-start-2 flex flex-col gap-2 min-w-0">
                  {exp.previously && (
                    <p className="font-line-Regular text-sm text-[var(--ink-soft)]">
                      {exp.previously}
                    </p>
                  )}
                  <ul className="list-disc pl-5 leading-relaxed font-line-Regular text-[15px] sm:text-base text-[var(--ink-muted)] flex flex-col gap-1 marker:text-[var(--accent)]">
                    {exp.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ExperiencePage;
