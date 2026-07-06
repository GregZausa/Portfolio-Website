import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Coffee,
  CheckCircle,
  ArrowUpRight,
} from "lucide-react";

const contactLinks = [
  {
    icon: <Mail size={16} />,
    label: "Email",
    value: "gregclarence.zausa@gmail.com",
    sub: "Usually responds within a day",
    href: "mailto:gregclarence.zausa@gmail.com",
  },
  {
    icon: <Linkedin size={16} />,
    label: "LinkedIn",
    value: "Greg Clarence Zausa",
    sub: "Professional networking",
    href: "https://www.linkedin.com/in/greg-clarence-zausa-a8babb293/",
  },
  {
    icon: <Github size={16} />,
    label: "GitHub",
    value: "GregZausa",
    sub: "Check out my code",
    href: "https://github.com/GregZausa",
  },
  {
    icon: <Phone size={16} />,
    label: "Phone",
    value: "+63 935 165 4297",
    sub: "Available during business hours",
    href: "tel:+639351654297",
  },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(import.meta.env.VITE_FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSubmitted(true);
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const inputBase =
    "w-full px-4 py-3 rounded-lg bg-[#F7F5F0] dark:bg-white/[0.03] border border-[#E4E0D8] dark:border-white/10 text-[#14181C] dark:text-[#E8EDF2] placeholder-[#8A8478] dark:placeholder-[#5B6572] text-sm outline-none focus:border-[#E3A23C] dark:focus:border-[#E3A23C] transition-all duration-200 font-['Inter']";

  return (
    <section id="contacts" className="bg-[#F1EEE7] dark:bg-[#0E141B] py-24 px-6 font-['Inter']">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14">
          <p className="text-[11px] font-['JetBrains_Mono'] tracking-widest uppercase text-[#C97A22] dark:text-[#E3A23C] mb-3">
            Exhibit E — Transmission
          </p>
          <h2 className="font-['Sora'] text-4xl md:text-5xl font-bold text-[#14181C] dark:text-[#E8EDF2] tracking-tight">
            Open a channel
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-2">
            <p className="text-[15px] text-[#5B6572] dark:text-[#8A97A3] leading-relaxed mb-8">
              I'm open to full-time roles, freelance work, and collaborations worth
              building. If you've got a problem worth solving, or just want to talk
              shop about the PERN stack — send it over.
            </p>

            <div className="flex flex-col gap-3 mb-8">
              {contactLinks.map(({ icon, label, value, sub, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-lg bg-white dark:bg-[#121820] border border-[#E4E0D8] dark:border-white/10 hover:border-[#E3A23C]/40 transition-all duration-200 group"
                >
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center border border-[#E4E0D8] dark:border-white/10 text-[#C97A22] dark:text-[#E3A23C] flex-shrink-0">
                    {icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-['JetBrains_Mono'] uppercase tracking-wide text-[#8A8478] dark:text-[#5B6572]">{label}</p>
                    <p className="text-sm font-medium text-[#14181C] dark:text-[#E8EDF2] truncate">{value}</p>
                  </div>
                  <ArrowUpRight
                    size={13}
                    className="ml-auto text-[#DDD5C6] dark:text-[#3A4451] group-hover:text-[#C97A22] dark:group-hover:text-[#E3A23C] transition-colors flex-shrink-0"
                  />
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2 text-sm text-[#8A8478] dark:text-[#5B6572]">
              <MapPin size={13} />
              San Jose del Monte, Bulacan, Philippines
            </div>
          </div>

          <div className="lg:col-span-3 bg-white dark:bg-[#121820] rounded-xl border border-[#E4E0D8] dark:border-white/10 p-7">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-14 h-14 rounded-xl bg-[#4FB6A8]/10 border border-[#4FB6A8]/30 flex items-center justify-center mb-5">
                  <CheckCircle size={24} className="text-[#4FB6A8]" />
                </div>
                <h3 className="font-['Sora'] font-bold text-[#14181C] dark:text-[#E8EDF2] text-lg mb-2">
                  Message sent
                </h3>
                <p className="text-sm text-[#5B6572] dark:text-[#8A97A3] max-w-xs">
                  Thanks for reaching out — I'll get back to you as soon as I can.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", email: "", subject: "", message: "" });
                  }}
                  className="mt-8 px-5 py-2.5 rounded-lg border border-[#E4E0D8] dark:border-white/10 text-sm font-medium text-[#5B6572] dark:text-[#8A97A3] hover:border-[#E3A23C] transition-all duration-200"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <h3 className="font-['Sora'] font-bold text-[#14181C] dark:text-[#E8EDF2] text-lg mb-1">
                  Send a message
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-[#5B6572] dark:text-[#8A97A3]">Your name</label>
                    <input className={inputBase} type="text" name="name" value={form.name} onChange={handleChange} placeholder="John Doe" required />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-[#5B6572] dark:text-[#8A97A3]">Email address</label>
                    <input className={inputBase} type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@example.com" required />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-[#5B6572] dark:text-[#8A97A3]">Subject</label>
                  <input className={inputBase} type="text" name="subject" value={form.subject} onChange={handleChange} placeholder="Project collaboration" required />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-[#5B6572] dark:text-[#8A97A3]">Message</label>
                  <textarea className={`${inputBase} resize-none`} name="message" value={form.message} onChange={handleChange} rows={5} placeholder="Tell me about your project or just say hello..." required />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#14181C] dark:bg-[#E8EDF2] text-white dark:text-[#0B0F14] font-semibold text-sm hover:bg-[#C97A22] dark:hover:bg-[#E3A23C] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 mt-1"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 dark:border-[#0B0F14]/30 border-t-white dark:border-t-[#0B0F14] rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>Send message <Send size={14} /></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#DDD5C6] dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#8A8478] dark:text-[#5B6572]">Prefer something casual?</p>
          <a
            href="https://buymeacoffee.com/gregabytez"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#E3A23C]/10 border border-[#E3A23C]/30 text-[#C97A22] dark:text-[#E3A23C] text-sm font-medium hover:bg-[#E3A23C]/20 transition-all duration-200"
          >
            <Coffee size={14} /> Buy me a coffee
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;