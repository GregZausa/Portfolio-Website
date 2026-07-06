import React from 'react';
import { Download, MapPin, GraduationCap, Zap, Target } from 'lucide-react';
import resumePDf from '../res/G.C.Zausa-Resume-Developer.pdf';

const tools = [
  { name: 'JavaScript', type: 'Language' },
  { name: 'TypeScript', type: 'Language' },
  { name: 'Python', type: 'Language' },
  { name: 'Java', type: 'Language' },
  { name: 'PHP', type: 'Language' },
  { name: 'React', type: 'Frontend' },
  { name: 'Tailwind CSS', type: 'Frontend' },
  { name: 'HTML5 / CSS3', type: 'Frontend' },
  { name: 'Bootstrap', type: 'Frontend' },
  { name: 'Node.js', type: 'Backend' },
  { name: 'Express', type: 'Backend' },
  { name: 'PostgreSQL', type: 'Database' },
  { name: 'MySQL', type: 'Database' },
  { name: 'MongoDB', type: 'Database' },
  { name: 'Streamlit', type: 'Data' },
  { name: 'Git / GitHub', type: 'Tools' },
  { name: 'REST APIs', type: 'Tools' },
  { name: 'OOP & DSA', type: 'CS Fundamentals' },
];

const stack = [
  { name: 'React', type: 'Frontend' },
  { name: 'Node.js', type: 'Backend' },
  { name: 'PostgreSQL', type: 'Database' },
  { name: 'Python', type: 'Data / Scripts' },
  { name: 'Express', type: 'API layer' },
  { name: 'Streamlit', type: 'Dashboards' },
];

const now = [
  { icon: <Zap size={14} />, text: 'Mastering PERN & MERN stack' },
  { icon: <Target size={14} />, text: 'Sharpening DSA & OOP fundamentals' },
  { icon: <GraduationCap size={14} />, text: 'Open to full-time & freelance roles' },
];

const Panel = ({ label, className = '', children }) => (
  <div className={`bg-white dark:bg-[#121820] rounded-xl border border-[#E4E0D8] dark:border-white/10 p-7 ${className}`}>
    <p className="text-[10.5px] font-['JetBrains_Mono'] tracking-widest uppercase text-[#5B6572] dark:text-[#7C8A98] mb-5">{label}</p>
    {children}
  </div>
);

const AboutSection = () => (
  <section id="about" className="bg-[#F1EEE7] dark:bg-[#0E141B] py-24 px-6 font-['Inter']">
    <div className="max-w-5xl mx-auto">

      <div className="mb-14">
        <p className="text-[11px] font-['JetBrains_Mono'] tracking-widest uppercase text-[#C97A22] dark:text-[#E3A23C] mb-3">Exhibit A — The Facts</p>
        <h2 className="font-['Sora'] text-4xl md:text-5xl font-bold text-[#14181C] dark:text-[#E8EDF2] tracking-tight">
          Quick facts, before the story
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">

        {/* Story */}
        <Panel label="Origin" className="md:col-span-4">
          <p className="text-[#5B6572] dark:text-[#8A97A3] leading-relaxed mb-4 text-[15px]">
            It started with one question: <em className="text-[#14181C] dark:text-[#E8EDF2] not-italic font-semibold">how do websites actually work?</em>{' '}
            That sent me down a rabbit hole of HTML, CSS, and JavaScript, and I never quite found the exit.
          </p>
          <p className="text-[#5B6572] dark:text-[#8A97A3] leading-relaxed mb-4 text-[15px]">
            That curiosity is now the reason I build tools that do real work — an energy analytics dashboard
            people actually check, and a full accounting system I shipped as my BulSU capstone.
          </p>
          <p className="text-[#5B6572] dark:text-[#8A97A3] leading-relaxed text-[15px]">
            Right now I'm deep in the PERN and MERN stack, sharpening my DSA fundamentals, and looking for
            a team that wants someone who ships rather than just talks about shipping.
          </p>
        </Panel>

        {/* Location */}
        <Panel label="Base of operations" className="md:col-span-2 flex flex-col justify-between">
          <div>
            <div className="text-4xl mb-4">🇵🇭</div>
            <p className="font-semibold text-[#14181C] dark:text-[#E8EDF2] text-[15px]">San Jose del Monte</p>
            <p className="text-sm text-[#8A8478] dark:text-[#5B6572] mt-1 flex items-center gap-1.5">
              <MapPin size={12} /> Bulacan, Philippines · UTC+8
            </p>
          </div>
          <div className="mt-6 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#4FB6A8]/10 border border-[#4FB6A8]/30 text-[#1E8F80] dark:text-[#4FB6A8] text-xs font-medium w-fit font-['JetBrains_Mono']">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4FB6A8] animate-pulse" />
            Remote-friendly
          </div>
        </Panel>

        {/* Currently */}
        <Panel label="Currently" className="md:col-span-2">
          <div className="flex flex-col gap-4">
            {now.map(({ icon, text }, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="mt-0.5 flex-shrink-0 text-[#C97A22] dark:text-[#E3A23C]">{icon}</span>
                <span className="text-sm text-[#5B6572] dark:text-[#8A97A3] leading-relaxed">{text}</span>
              </div>
            ))}
          </div>
          <a
            href={resumePDf}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#14181C] dark:bg-[#E8EDF2] text-white dark:text-[#0B0F14] text-sm font-semibold hover:bg-[#C97A22] dark:hover:bg-[#E3A23C] transition-all duration-200"
          >
            <Download size={14} /> Download resume
          </a>
        </Panel>

        {/* Stack */}
        <Panel label="Primary stack" className="md:col-span-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {stack.map(({ name, type }) => (
              <div key={name} className="rounded-lg border border-[#E4E0D8] dark:border-white/10 bg-[#F7F5F0] dark:bg-white/[0.02] px-4 py-3 transition-all duration-200 hover:border-[#E3A23C]/50 hover:-translate-y-0.5">
                <div className="font-semibold text-sm text-[#14181C] dark:text-[#E8EDF2]">{name}</div>
                <div className="text-xs text-[#8A8478] dark:text-[#5B6572] mt-0.5">{type}</div>
              </div>
            ))}
          </div>
        </Panel>

        {/* All tools */}
        <Panel label="All tools & technologies" className="md:col-span-6">
          <div className="flex flex-wrap gap-2">
            {tools.map(({ name, type }) => (
              <span
                key={name}
                className="px-3 py-1.5 rounded-md bg-[#F7F5F0] dark:bg-white/[0.03] border border-[#E4E0D8] dark:border-white/10 text-[#5B6572] dark:text-[#8A97A3] text-xs font-medium hover:border-[#E3A23C]/50 hover:text-[#C97A22] dark:hover:text-[#E3A23C] transition-all duration-200 cursor-default"
                title={type}
              >
                {name}
              </span>
            ))}
          </div>
        </Panel>

      </div>
    </div>
  </section>
);

export default AboutSection;