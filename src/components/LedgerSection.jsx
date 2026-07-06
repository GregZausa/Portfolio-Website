import React, { useEffect, useRef, useState } from "react";
import { useReveal } from "../hooks/useReveal";

const entries = [
  {
    id: "001",
    done: true,
    title: "Started with one dumb question",
    body: "\u201cHow do websites actually work?\u201d That question sent me into HTML, CSS, and JavaScript, and I never found the exit. Started small — profile cards and campaign pages for student orgs at BulSU, the unglamorous work nobody notices until it's broken.",
  },
  {
    id: "002",
    done: true,
    title: "Stopped optimizing for being noticed",
    body: "Around the same time I got into stoicism, existentialism, and the colder end of strategic thinking — not as an aesthetic, as an operating system. The takeaway I actually kept: build the leverage first, let recognition show up late, or not at all. Competence that compounds quietly beats competence that needs an audience.",
  },
  {
    id: "003",
    done: true,
    title: "Started CostIQ",
    body: "Not because the market was empty, but because at 22 I wanted to understand how a business actually makes money — margins, COGS, pricing — before I ever tried to run one myself. Picked the PERN stack. Picked to build it alone.",
  },
  {
    id: "004",
    done: true,
    title: "Shipped three systems, not one",
    body: "CostIQ went live. Then StudIQ — GPA math, focus timers, quiz generation, for students juggling five tabs at once. Then a renewable-energy analytics dashboard in Streamlit that people actually open every morning. Somewhere in there I also shipped a full accounting system as my BulSU capstone.",
  },
  {
    id: "005",
    done: false,
    title: "Now: sharpening the fundamentals",
    body: "Going deeper on PERN/MERN, tightening up DSA and OOP, and looking for a team that wants someone who ships quietly and consistently — not someone who needs to announce it first.",
  },
];

const LedgerEntry = ({ entry, index }) => {
  const [ref, inView] = useReveal({ threshold: 0.25 });
  return (
    <div
      ref={ref}
      style={{ transitionDelay: inView ? `${index * 70}ms` : "0ms" }}
      className={`grid grid-cols-[28px_1fr] gap-6 py-7 transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="relative flex justify-center">
        <span
          className={`w-[10px] h-[10px] rounded-full border-2 mt-1.5 z-10 transition-colors duration-500 ${
            entry.done
              ? "bg-[#E3A23C] border-[#E3A23C]"
              : "bg-transparent border-[#DDD5C6] dark:border-white/20"
          }`}
        />
      </div>
      <div>
        <div className="flex items-center gap-3 mb-2 flex-wrap">
          <span className="font-['JetBrains_Mono'] text-[11px] tracking-widest text-[#8A8478] dark:text-[#5B6572]">
            ENTRY {entry.id}
          </span>
          {!entry.done && (
            <span className="font-['JetBrains_Mono'] text-[10px] tracking-widest uppercase text-[#4FB6A8] border border-[#4FB6A8]/30 bg-[#4FB6A8]/10 px-2 py-0.5 rounded-full">
              In progress
            </span>
          )}
        </div>
        <h3 className="font-['Sora'] font-bold text-[#14181C] dark:text-[#E8EDF2] text-[1.2rem] mb-2">
          {entry.title}
        </h3>
        <p className="text-[#5B6572] dark:text-[#8A97A3] leading-relaxed text-[14.5px] max-w-xl">
          {entry.body}
        </p>
      </div>
    </div>
  );
};

const LedgerSection = () => {
  const railRef = useRef(null);
  const [fill, setFill] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handle = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const el = railRef.current;
        if (el) {
          const rect = el.getBoundingClientRect();
          const total = rect.height;
          const visible = Math.min(
            Math.max(window.innerHeight * 0.75 - rect.top, 0),
            total,
          );
          setFill(total > 0 ? (visible / total) * 100 : 0);
        }
        ticking = false;
      });
    };
    window.addEventListener("scroll", handle, { passive: true });
    handle();
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <section
      id="ledger"
      className="bg-[#F7F5F0] dark:bg-[#0B0F14] py-24 px-6 font-['Inter']"
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-14 max-w-2xl">
          <p className="text-[11px] font-['JetBrains_Mono'] tracking-widest uppercase text-[#C97A22] dark:text-[#E3A23C] mb-3">
            Exhibit B — The Ledger
          </p>
          <h2 className="font-['Sora'] text-4xl md:text-5xl font-bold text-[#14181C] dark:text-[#E8EDF2] tracking-tight mb-4">
            Competence, compounding quietly
          </h2>
          <p className="text-[15px] text-[#5B6572] dark:text-[#8A97A3] leading-relaxed">
            I don't think talent is real in any way that matters. I think reps
            are. This is the log of what got built while nobody was required to
            be watching — scroll down to read it the way it happened.
          </p>
        </div>

        <div ref={railRef} className="relative">
          <div className="absolute left-[13px] top-2 bottom-2 w-px bg-[#DDD5C6] dark:bg-white/10" />
          <div
            className="absolute left-[13px] top-2 w-px bg-[#E3A23C] transition-[height] duration-150"
            style={{ height: `${fill}%` }}
          />
          <div className="flex flex-col">
            {entries.map((entry, i) => (
              <LedgerEntry key={entry.id} entry={entry} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LedgerSection;
