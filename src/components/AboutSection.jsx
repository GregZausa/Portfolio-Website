import React from 'react';
import { Download, MapPin, GraduationCap, Zap, Target } from 'lucide-react';
import resumePDf from '../res/G.C.Zausa-Resume.pdf';

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
  { name: 'React', type: 'Frontend', color: 'bg-cyan-50 dark:bg-cyan-950/40 border-cyan-200 dark:border-cyan-800/40 text-cyan-700 dark:text-cyan-300' },
  { name: 'Node.js', type: 'Backend', color: 'bg-green-50 dark:bg-green-950/40 border-green-200 dark:border-green-800/40 text-green-700 dark:text-green-300' },
  { name: 'PostgreSQL', type: 'Database', color: 'bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-800/40 text-blue-700 dark:text-blue-300' },
  { name: 'Python', type: 'Data / Scripts', color: 'bg-yellow-50 dark:bg-yellow-950/40 border-yellow-200 dark:border-yellow-800/40 text-yellow-700 dark:text-yellow-300' },
  { name: 'Express', type: 'API layer', color: 'bg-gray-50 dark:bg-gray-800/40 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300' },
  { name: 'Streamlit', type: 'Dashboards', color: 'bg-red-50 dark:bg-red-950/40 border-red-200 dark:border-red-800/40 text-red-700 dark:text-red-300' },
];

const now = [
  { icon: <Zap size={14} />, text: 'Mastering PERN & MERN stack', color: 'text-violet-500' },
  { icon: <Target size={14} />, text: 'Sharpening DSA & OOP fundamentals', color: 'text-cyan-500' },
  { icon: <GraduationCap size={14} />, text: 'Open to full-time & freelance roles', color: 'text-emerald-500' },
];

const AboutSection = () => (
  <section id="about" className="bg-gray-50 dark:bg-gray-950/50 py-24 px-6">
    <div className="max-w-5xl mx-auto">

      {/* Heading */}
      <div className="mb-14">
        <p className="text-xs font-semibold tracking-widest uppercase text-violet-500 dark:text-violet-400 mb-3">About</p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
          The person behind the code
        </h2>
      </div>

      {/* Bento grid */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">

        {/* Story — spans 4 cols */}
        <div className="md:col-span-4 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-7">
          <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 dark:text-gray-600 mb-5">Story</p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4 text-[15px]">
            My journey started with curiosity — <em className="text-gray-900 dark:text-white not-italic font-medium">how do websites actually work?</em> That question sent me down a rabbit hole of HTML, CSS, JavaScript, and I never quite found the exit.
          </p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4 text-[15px]">
            Today that curiosity drives me to build meaningful tools — from energy analytics dashboards to full accounting systems for my BulSU capstone. Real software, shipped and used.
          </p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-[15px]">
            I'm currently leveling up in PERN and MERN stack while sharpening my DSA fundamentals, and genuinely excited to bring fresh perspective and clean code to a great team.
          </p>
        </div>

        {/* Location — spans 2 cols */}
        <div className="md:col-span-2 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-7 flex flex-col justify-between">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 dark:text-gray-600 mb-5">Location</p>
            <div className="text-5xl mb-4">🇵🇭</div>
            <p className="font-semibold text-gray-900 dark:text-white text-[15px]">San Jose del Monte</p>
            <p className="text-sm text-gray-400 dark:text-gray-600 mt-1 flex items-center gap-1.5">
              <MapPin size={12} /> Bulacan, Philippines · UTC+8
            </p>
          </div>
          <div className="mt-6 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/40 text-emerald-600 dark:text-emerald-400 text-xs font-medium w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Remote-friendly
          </div>
        </div>

        {/* Currently — spans 2 cols */}
        <div className="md:col-span-2 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-7">
          <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 dark:text-gray-600 mb-5">Currently</p>
          <div className="flex flex-col gap-4">
            {now.map(({ icon, text, color }, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className={`mt-0.5 flex-shrink-0 ${color}`}>{icon}</span>
                <span className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{text}</span>
              </div>
            ))}
          </div>
          <a
            href={resumePDf}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-semibold hover:bg-gray-700 dark:hover:bg-gray-100 transition-all duration-200"
          >
            <Download size={14} /> Download Resume
          </a>
        </div>

        {/* Stack — spans 4 cols */}
        <div className="md:col-span-4 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-7">
          <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 dark:text-gray-600 mb-5">Primary stack</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {stack.map(({ name, type, color }) => (
              <div key={name} className={`rounded-xl border px-4 py-3 ${color} transition-all duration-200 hover:-translate-y-0.5`}>
                <div className="font-semibold text-sm">{name}</div>
                <div className="text-xs opacity-60 mt-0.5">{type}</div>
              </div>
            ))}
          </div>
        </div>

        {/* All tools — spans 6 cols */}
        <div className="md:col-span-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-7">
          <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 dark:text-gray-600 mb-5">All tools & technologies</p>
          <div className="flex flex-wrap gap-2">
            {tools.map(({ name, type }) => (
              <span
                key={name}
                className="group px-3 py-1.5 rounded-lg bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700/60 text-gray-600 dark:text-gray-400 text-xs font-medium hover:border-violet-300 dark:hover:border-violet-700 hover:text-violet-600 dark:hover:text-violet-300 hover:bg-violet-50 dark:hover:bg-violet-950/30 transition-all duration-200 cursor-default"
                title={type}
              >
                {name}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default AboutSection;