import React, { useState } from "react";
import { ExternalLink, Github, ArrowUpRight, Lock } from "lucide-react";
import dashboardProj from "../res/gemi-dashboard.png";
import costiqProj from "../res/costiq-image.png";
import studToolProj from "../res/student-tool-app.jpg";

const projects = [
  {
    id: 1,
    title: "GEMI Energy Analytics Dashboard",
    description:
      "Advanced energy monitoring and analytics platform featuring real-time data visualization, trend analysis, and multi-site comparison for renewable energy systems.",
    image: dashboardProj,
    tags: ["Streamlit", "Python", "Data Viz", "Energy"],
    liveDemo: "https://gemidashboards.streamlit.app/",
    github: "https://github.com/GregZausa/Dashboard",
    status: "live",
    features: [
      "kWh/kWp monitoring",
      "Interactive trend analysis",
      "Multi-site comparison",
      "Availability factor tracking",
    ],
    tagColor:
      "bg-cyan-50 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800/40",
  },
  {
    id: 2,
    title: "CostIQ",
    description:
      "A full-stack expense and cost intelligence application built with the PERN stack (PostgreSQL, Express, React, Node.js). CostIQ helps users analyze pricing data, generate reports, and gain AI-powered insights through interactive charts and dashboards.",
    image: costiqProj,
    tags: ["React", "Node.js", "PostgreSQL", "Express"],
    liveDemo: `https://usecostiq.vercel.app`,
    github: "https://github.com/GregZausa/CostIQ",
    status: "live",
    features: [
      "Accurate product pricing",
      "Generate reports",
      "AI Insights",
      "Graphs and Charts",
    ],
    tagColor:
      "bg-gray-50 dark:bg-gray-800/40 text-gray-500 dark:text-gray-400 border-gray-200 dark:border-gray-700",
  },
  {
    id: 3,
    title: "Student Tool Application",
    description:
      "All-in-one student productivity application that helps users manage academics and daily tasks — featuring a GPA calculator, Pomodoro timer, quiz generator, notes and materials organizer, todo list, and deadline tracking system.",
    image: studToolProj,
    tags: ["React", "Supabase", "API"],
    liveDemo: `https://usestudiq.vercel.app/`,
    github: `https://github.com/GregZausa/student-tool-app`,
    status: "live",
    features: [
      "GPA Calculator",
      "Pomodoro Timer",
      "Quiz Generator",
      "Notes",
      "Materials",
    ],
    tagColor:
      "bg-violet-50 dark:bg-violet-950/40 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-800/40",
  },
];

const statusBadge = {
  live: {
    label: "Live",
    className:
      "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800/40",
    dot: "bg-emerald-500",
  },
  private: {
    label: "Private",
    className:
      "bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-500 border-gray-200 dark:border-gray-700",
    dot: "bg-gray-400",
  },
  wip: {
    label: "In progress",
    className:
      "bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-800/40",
    dot: "bg-amber-500",
  },
};

const PlaceholderImage = ({ title, wip }) => (
  <div
    className={`w-full h-full flex flex-col items-center justify-center gap-3 ${wip ? "bg-gray-50 dark:bg-gray-900" : "bg-gray-100 dark:bg-gray-800/60"}`}
  >
    <div className="w-12 h-12 rounded-2xl border-2 border-dashed border-gray-200 dark:border-gray-700 flex items-center justify-center">
      {wip ? (
        <span className="text-lg">🚧</span>
      ) : (
        <Lock size={18} className="text-gray-300 dark:text-gray-600" />
      )}
    </div>
    <p className="text-xs text-gray-400 dark:text-gray-600 font-medium">
      {wip ? "Coming soon" : "Private project"}
    </p>
  </div>
);

const ProjectCard = ({ project }) => {
  const [hovered, setHovered] = useState(false);
  const badge = statusBadge[project.status];

  return (
    <div
      className="group bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden h-full flex flex-col hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-lg hover:shadow-gray-100/50 dark:hover:shadow-gray-950/50 transition-all duration-300 hover:-translate-y-1"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-video overflow-hidden bg-gray-50 dark:bg-gray-800">
        {project.image ? (
          <>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Feature overlay on hover */}
            {project.features.length > 0 && (
              <div
                className={`absolute inset-0 bg-gray-900/85 backdrop-blur-sm flex flex-col justify-end p-5 transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}`}
              >
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
                  Key features
                </p>
                <ul className="space-y-1.5">
                  {project.features.map((f, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-white"
                    >
                      <span className="w-1 h-1 rounded-full bg-violet-400 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        ) : (
          <PlaceholderImage
            title={project.title}
            wip={project.status === "wip"}
          />
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 flex-wrap mb-4">
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${badge.className}`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${badge.dot}`} />
            {badge.label}
          </span>
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`px-2.5 py-1 rounded-full text-xs font-medium border ${project.tagColor}`}
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="font-bold text-gray-900 dark:text-white text-[16px] mb-2 leading-snug">
          {project.title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
          {project.description}
        </p>

        <div className=" mt-auto flex gap-2">
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl text-sm font-semibold hover:bg-gray-700 dark:hover:bg-gray-100 transition-all duration-200"
            >
              View live <ArrowUpRight size={14} />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-xl text-sm font-medium text-gray-600 dark:text-gray-400 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-200"
            >
              <Github size={14} /> Code
            </a>
          )}
          {!project.liveDemo && !project.github && (
            <div className="flex-1 flex items-center justify-center px-4 py-2.5 bg-gray-50 dark:bg-gray-800/60 rounded-xl text-sm text-gray-400 dark:text-gray-500 border border-gray-100 dark:border-gray-700">
              {project.status === "wip"
                ? "⏳ In development"
                : "🔒 Private repository"}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectSection = () => (
  <section id="projects" className="bg-white dark:bg-gray-950 py-24 px-6">
    <div className="max-w-5xl mx-auto">
      <div className="mb-14">
        <p className="text-xs font-semibold tracking-widest uppercase text-violet-500 dark:text-violet-400 mb-3">
          Work
        </p>
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
            Projects I've shipped
          </h2>
          <a
            href="https://github.com/GregZausa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-200 transition-colors duration-200 pb-2"
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

      {/* Bottom CTA */}
      <div className="mt-16 rounded-2xl border border-dashed border-gray-200 dark:border-gray-800 p-10 text-center">
        <p className="text-sm text-gray-400 dark:text-gray-500 mb-2">
          More projects in progress
        </p>
        <p className="text-gray-600 dark:text-gray-400 text-[15px] mb-6">
          Currently building with the PERN stack — follow along on GitHub to see
          what's coming next.
        </p>
        <a
          href="https://github.com/GregZausa"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-200"
        >
          <Github size={15} /> Follow on GitHub
        </a>
      </div>
    </div>
  </section>
);

export default ProjectSection;
