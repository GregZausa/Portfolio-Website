import React, { useState } from "react";
import { ExternalLink, Github, ArrowUpRight, Check } from "lucide-react";
import dashboardProj from "../res/gemi-dashboard.png";
import costiqProj from "../res/costiq-homepage.png";
import studToolProj from "../res/studiq-homepage.png";

const projects = [
  {
    id: 1,
    title: "CostIQ",
    subtitle: "Cost & pricing intelligence",
    description:
      "Full-stack PERN application that turns raw pricing data into AI-assisted margin analysis, reports, and dashboards SMEs can actually trust.",
    image: costiqProj,
    tags: ["React", "Node.js", "PostgreSQL", "Express"],
    liveDemo: "https://costiq.site",
    liveLabel: "costiq.site",
    github: "https://github.com/GregZausa/CostIQ",
    features: ["Accurate product pricing", "One-click reports", "AI-generated insights", "Charts that mean something"],
  },
  {
    id: 2,
    title: "StudIQ",
    subtitle: "Student productivity system",
    description:
      "One place for the five tabs students usually have open at once — GPA math, focus timer, quiz drilling, notes, and deadlines.",
    image: studToolProj,
    tags: ["React", "Supabase", "REST API"],
    liveDemo: "https://studiq.site",
    liveLabel: "studiq.site",
    github: "https://github.com/GregZausa/student-tool-app",
    features: ["GPA calculator", "Pomodoro timer", "Quiz generator", "Notes & materials"],
  },
  {
    id: 3,
    title: "GEMI Energy Dashboard",
    subtitle: "Renewable energy analytics",
    description:
      "Real-time monitoring platform for renewable energy systems — the kind of dashboard someone opens every single morning, not once.",
    image: dashboardProj,
    tags: ["Streamlit", "Python", "Data Viz"],
    liveDemo: "https://gemidashboards.streamlit.app/",
    liveLabel: "gemidashboards.streamlit.app",
    github: "https://github.com/GregZausa/Dashboard",
    features: ["kWh / kWp monitoring", "Interactive trend analysis", "Multi-site comparison", "Availability tracking"],
  },
];

const ProjectCard = ({ project }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group bg-white dark:bg-[#121820] rounded-xl border border-[#E4E0D8] dark:border-white/10 overflow-hidden h-full flex flex-col hover:border-[#E3A23C]/40 hover:-translate-y-1 transition-all duration-300"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-video overflow-hidden bg-[#F1EEE7] dark:bg-white/[0.02]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          className={`absolute inset-0 bg-[#0B0F14]/88 backdrop-blur-[2px] flex flex-col justify-end p-5 transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}`}
        >
          <p className="text-[10.5px] font-['JetBrains_Mono'] font-semibold text-[#7C8A98] uppercase tracking-widest mb-3">
            What it does
          </p>
          <ul className="space-y-1.5">
            {project.features.map((f, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-[#E8EDF2]">
                <Check size={12} className="text-[#4FB6A8] flex-shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3 font-['JetBrains_Mono'] text-[10.5px] uppercase tracking-widest text-[#4FB6A8]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4FB6A8] opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4FB6A8]" />
          </span>
          Live in production
        </div>

        <h3 className="font-['Sora'] font-bold text-[#14181C] dark:text-[#E8EDF2] text-[17px] mb-1">
          {project.title}
        </h3>
        <p className="text-xs text-[#8A8478] dark:text-[#5B6572] mb-3">{project.subtitle}</p>
        <p className="text-sm text-[#5B6572] dark:text-[#8A97A3] leading-relaxed mb-4">
          {project.description}
        </p>

        <div className="flex items-center gap-2 flex-wrap mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md text-[11px] font-medium border border-[#E4E0D8] dark:border-white/10 text-[#5B6572] dark:text-[#8A97A3]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex gap-2">
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-between gap-2 px-4 py-2.5 bg-[#14181C] dark:bg-[#E8EDF2] text-white dark:text-[#0B0F14] rounded-lg text-[13px] font-semibold hover:bg-[#C97A22] dark:hover:bg-[#E3A23C] transition-all duration-200"
          >
            <span className="font-['JetBrains_Mono'] truncate">{project.liveLabel}</span>
            <ArrowUpRight size={14} className="flex-shrink-0" />
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2.5 border border-[#E4E0D8] dark:border-white/10 rounded-lg text-sm font-medium text-[#5B6572] dark:text-[#8A97A3] hover:border-[#C97A22] dark:hover:border-[#E3A23C] transition-all duration-200"
          >
            <Github size={14} />
          </a>
        </div>
      </div>
    </div>
  );
};

const ProjectSection = () => (
  <section id="projects" className="bg-[#F7F5F0] dark:bg-[#0B0F14] py-24 px-6 font-['Inter']">
    <div className="max-w-5xl mx-auto">
      <div className="mb-14">
        <p className="text-[11px] font-['JetBrains_Mono'] tracking-widest uppercase text-[#C97A22] dark:text-[#E3A23C] mb-3">
          Exhibit C — Field Work
        </p>
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <h2 className="font-['Sora'] text-4xl md:text-5xl font-bold text-[#14181C] dark:text-[#E8EDF2] tracking-tight">
            Three systems, all still running
          </h2>
          <a
            href="https://github.com/GregZausa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-[#8A8478] dark:text-[#5B6572] hover:text-[#C97A22] dark:hover:text-[#E3A23C] transition-colors duration-200 pb-2"
          >
            All on GitHub <ExternalLink size={13} />
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="mt-16 rounded-xl border border-dashed border-[#DDD5C6] dark:border-white/10 p-10 text-center">
        <p className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-widest text-[#8A8478] dark:text-[#5B6572] mb-2">
          Next build queued
        </p>
        <p className="text-[#5B6572] dark:text-[#8A97A3] text-[15px] mb-6">
          Currently deepening the PERN stack — follow along on GitHub to see what ships next.
        </p>
        <a
          href="https://github.com/GregZausa"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#DDD5C6] dark:border-white/10 text-sm font-medium text-[#14181C] dark:text-[#E8EDF2] hover:border-[#C97A22] dark:hover:border-[#E3A23C] transition-all duration-200"
        >
          <Github size={15} /> Follow on GitHub
        </a>
      </div>
    </div>
  </section>
);

export default ProjectSection;