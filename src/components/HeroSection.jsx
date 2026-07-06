import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react";
import NavBar from "./NavBar";
import { usePageParallax } from "../hooks/useParallax";
import resumePDf from "../res/G.C.Zausa-Resume-Developer.pdf";

const roles = [
  "Full-Stack Developer",
  "PERN/MERN Builder",
  "Problem Solver",
  "Fresh IT Grad",
];

const systems = [
  {
    name: "CostIQ",
    url: "usecostiq.vercel.app",
    href: "https://usecostiq.vercel.app",
  },
  {
    name: "StudIQ",
    url: "usestudiq.vercel.app",
    href: "https://usestudiq.vercel.app/",
  },
  {
    name: "GEMI Dashboard",
    url: "gemidashboards.streamlit.app",
    href: "https://gemidashboards.streamlit.app/",
  },
];

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [visible, setVisible] = useState(true);
  const gridParallax = usePageParallax(0.08);
  const glowParallaxA = usePageParallax(0.18);
  const glowParallaxB = usePageParallax(-0.12);
  const panelParallax = usePageParallax(-0.05);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setVisible(true);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const socials = [
    {
      href: "https://github.com/GregZausa",
      icon: <Github size={17} />,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/greg-clarence-zausa-a8babb293/",
      icon: <Linkedin size={17} />,
      label: "LinkedIn",
    },
    {
      href: "mailto:gregclarence.zausa@gmail.com",
      icon: <Mail size={17} />,
      label: "Email",
    },
  ];

  return (
    <>
      <NavBar />
      <section
        id="hero"
        className="relative min-h-screen flex items-center overflow-hidden bg-[#F7F5F0] dark:bg-[#0B0F14] font-['Inter']"
      >
        <div
          style={gridParallax}
          className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:44px_44px]"
        />
        <div
          style={glowParallaxA}
          className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-[#E3A23C]/8 blur-3xl pointer-events-none"
        />
        <div
          style={glowParallaxB}
          className="absolute bottom-0 left-0 w-[420px] h-[420px] rounded-full bg-[#4FB6A8]/6 blur-3xl pointer-events-none"
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 w-full">
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-14 items-start">
            <div>
              <div className="inline-flex items-center gap-2 mb-7 px-3 py-1.5 rounded-full border border-[#DDD5C6] dark:border-white/10 bg-white dark:bg-white/5 text-[#5B6572] dark:text-[#7C8A98] text-[11px] font-medium font-['JetBrains_Mono'] uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4FB6A8]" />
                San Jose del Monte, Bulacan · PH
              </div>

              <h1 className="font-['Sora'] text-4xl md:text-6xl font-bold tracking-tight text-[#14181C] dark:text-[#E8EDF2] mb-6 leading-[1.08]">
                I don't just say
                <br />I can build products.
                <br />
                <span className="text-[#C97A22] dark:text-[#E3A23C]">
                  I have three, live, right now.
                </span>
              </h1>

              <p className="text-lg text-[#5B6572] dark:text-[#7C8A98] mb-3 font-medium">
                Greg Clarence Zausa — a{" "}
                <span
                  className="text-[#14181C] dark:text-[#E8EDF2] font-semibold transition-all duration-300"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(-6px)",
                    display: "inline-block",
                  }}
                >
                  {roles[currentRole]}
                </span>
              </p>

              <p className="text-[15px] text-[#5B6572] dark:text-[#7C8A98] leading-relaxed mb-10 max-w-xl">
                22 years old, BulSU IT graduate, class of 2025. No team, no
                funding, no shortcuts — just enough curiosity about how software
                (and businesses) actually work to ship a costing platform, a
                student productivity app, and an energy analytics dashboard, on
                my own, before the ink on the diploma dried.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <button
                  onClick={() => scrollTo("projects")}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#14181C] dark:bg-[#E8EDF2] text-white dark:text-[#0B0F14] rounded-lg font-semibold text-sm hover:-translate-y-0.5 hover:bg-[#C97A22] dark:hover:bg-[#E3A23C] dark:hover:text-[#0B0F14] transition-all duration-200"
                >
                  See the systems <ArrowRight size={15} />
                </button>
                <button
                  onClick={() => scrollTo("contacts")}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-white dark:bg-white/5 text-[#14181C] dark:text-[#E8EDF2] rounded-lg font-semibold text-sm border border-[#DDD5C6] dark:border-white/10 hover:-translate-y-0.5 hover:border-[#C97A22] dark:hover:border-[#E3A23C] transition-all duration-200"
                >
                  Get in touch
                </button>
                <a
                  href={resumePDf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-semibold text-sm border border-[#4FB6A8]/40 bg-[#4FB6A8]/8 text-[#1E8F80] dark:text-[#4FB6A8] hover:-translate-y-0.5 transition-all duration-200"
                >
                  <Download size={14} /> Resume
                </a>
              </div>

              <div className="flex items-center gap-2">
                {socials.map(({ href, icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-[#5B6572] dark:text-[#7C8A98] hover:text-[#14181C] dark:hover:text-[#E8EDF2] border border-transparent hover:border-[#DDD5C6] dark:hover:border-white/10 hover:bg-white dark:hover:bg-white/5 transition-all duration-200 text-sm"
                  >
                    {icon}
                    <span className="hidden sm:inline">{label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* RIGHT — the signature: systems status board */}
            <div
              style={panelParallax}
              className="bg-white dark:bg-[#121820] border border-[#E4E0D8] dark:border-white/10 rounded-xl overflow-hidden shadow-sm lg:mt-6"
            >
              <div className="px-5 py-3.5 border-b border-[#E4E0D8] dark:border-white/10 flex items-center justify-between">
                <span className="font-['JetBrains_Mono'] text-[10.5px] uppercase tracking-widest text-[#5B6572] dark:text-[#7C8A98]">
                  Systems status
                </span>
                <span className="flex items-center gap-1.5 font-['JetBrains_Mono'] text-[10px] text-[#4FB6A8]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4FB6A8] animate-pulse" />
                  ALL ONLINE
                </span>
              </div>
              <div>
                {systems.map((s, i) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-between gap-4 px-5 py-4 group hover:bg-[#E3A23C]/6 transition-colors duration-200 ${
                      i !== systems.length - 1
                        ? "border-b border-[#E4E0D8] dark:border-white/10"
                        : ""
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="w-2 h-2 rounded-full bg-[#4FB6A8] flex-shrink-0" />
                      <span className="text-sm font-semibold text-[#14181C] dark:text-[#E8EDF2] truncate">
                        {s.name}
                      </span>
                    </div>
                    <span className="font-['JetBrains_Mono'] text-[11px] text-[#5B6572] dark:text-[#7C8A98] group-hover:text-[#C97A22] dark:group-hover:text-[#E3A23C] whitespace-nowrap">
                      {s.url}
                    </span>
                  </a>
                ))}
              </div>
              <div className="px-5 py-3 bg-[#F7F5F0] dark:bg-white/[0.02] font-['JetBrains_Mono'] text-[10.5px] text-[#5B6572] dark:text-[#7C8A98]">
                built solo · PERN + Streamlit
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
