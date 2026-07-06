import React from 'react';

const tenets = [
  {
    tag: '01 / STOIC',
    title: "Control what's in your hands. Ship it. Let the rest go.",
    body:
      "Whether a feature gets noticed, whether a recruiter replies, whether the market cares — none of that is mine to manage. The code, the release, the next fix — that is. I spend my attention accordingly.",
  },
  {
    tag: '02 / EXISTENTIAL',
    title: "Meaning isn't handed to you. It's built, one shipped feature at a time.",
    body:
      "I don't wait to feel ready, qualified, or \u201ccalled\u201d to this work. Shipping is the meaning. Waiting for permission is just a slower way of doing nothing.",
  },
  {
    tag: '03 / STRATEGIC',
    title: "Play the long game, not the loud one.",
    body:
      "I'd rather be the quiet position that keeps compounding than the loud one that peaks early. Visibility is a side effect of good work, not a goal on its own — being underestimated has always struck me as a fairly useful place to build from.",
  },
];

const DoctrineSection = () => (
  <section id="doctrine" className="bg-[#F1EEE7] dark:bg-[#0E141B] py-24 px-6 font-['Inter']">
    <div className="max-w-5xl mx-auto">
      <div className="mb-14 max-w-2xl">
        <p className="text-[11px] font-['JetBrains_Mono'] tracking-widest uppercase text-[#C97A22] dark:text-[#E3A23C] mb-3">
          Exhibit D — Doctrine
        </p>
        <h2 className="font-['Sora'] text-4xl md:text-5xl font-bold text-[#14181C] dark:text-[#E8EDF2] tracking-tight mb-4">
          How I actually decide things
        </h2>
        <p className="text-[15px] text-[#5B6572] dark:text-[#8A97A3] leading-relaxed">
          Not a personality quiz result. Just the three ideas that show up in almost
          every technical or life decision I make.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {tenets.map((t) => (
          <div
            key={t.tag}
            className="bg-white dark:bg-[#121820] rounded-xl border border-[#E4E0D8] dark:border-white/10 p-7 flex flex-col"
          >
            <span className="font-['JetBrains_Mono'] text-[11px] tracking-widest text-[#C97A22] dark:text-[#E3A23C] mb-6">
              {t.tag}
            </span>
            <h3 className="font-['Sora'] font-semibold text-[#14181C] dark:text-[#E8EDF2] text-[1.15rem] leading-snug mb-3">
              {t.title}
            </h3>
            <p className="text-[#5B6572] dark:text-[#8A97A3] text-[13.5px] leading-relaxed">
              {t.body}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-8 text-[13px] text-[#8A8478] dark:text-[#5B6572] italic max-w-2xl">
        For what it's worth — this is also why the calculated, patient kind of character
        (Death Note's planning, Classroom of the Elite's quiet dominance) has always been
        more interesting to me than the loud protagonist. Less noise, more compounding.
      </p>
    </div>
  </section>
);

export default DoctrineSection;