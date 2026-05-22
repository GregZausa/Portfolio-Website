import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Coffee, CheckCircle, ArrowUpRight } from 'lucide-react';

const contactLinks = [
  {
    icon: <Mail size={16} />,
    label: 'Email',
    value: 'gregclarence.zausa@gmail.com',
    sub: 'Usually responds within a day',
    href: 'mailto:gregclarence.zausa@gmail.com',
    color: 'bg-rose-50 dark:bg-rose-950/40 text-rose-500 border-rose-100 dark:border-rose-900/40',
  },
  {
    icon: <Linkedin size={16} />,
    label: 'LinkedIn',
    value: 'Greg Clarence Zausa',
    sub: 'Professional networking',
    href: 'https://www.linkedin.com/in/greg-clarence-zausa-a8babb293/',
    color: 'bg-blue-50 dark:bg-blue-950/40 text-blue-500 border-blue-100 dark:border-blue-900/40',
  },
  {
    icon: <Github size={16} />,
    label: 'GitHub',
    value: 'GregZausa',
    sub: 'Check out my code',
    href: 'https://github.com/GregZausa',
    color: 'bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-100 dark:border-gray-700',
  },
  {
    icon: <Phone size={16} />,
    label: 'Phone',
    value: '+63 935 165 4297',
    sub: 'Available during business hours',
    href: 'tel:+639351654297',
    color: 'bg-violet-50 dark:bg-violet-950/40 text-violet-500 border-violet-100 dark:border-violet-900/40',
  },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  const inputBase =
    'w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 text-sm outline-none focus:border-violet-400 dark:focus:border-violet-500 focus:bg-white dark:focus:bg-gray-800 transition-all duration-200';

  return (
    <section id="contacts" className="bg-gray-50 dark:bg-gray-950/50 py-24 px-6">
      <div className="max-w-5xl mx-auto">

        <div className="mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-violet-500 dark:text-violet-400 mb-3">Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
            Let's build something great
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

          <div className="lg:col-span-2">
            <p className="text-[15px] text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
              I'm currently open to full-time roles, freelance projects, and interesting collaborations. 
              Whether you have a project in mind or just want to say hi — I'd love to hear from you.
            </p>

            <div className="flex flex-col gap-3 mb-8">
              {contactLinks.map(({ icon, label, value, sub, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-sm transition-all duration-200 group"
                >
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center border flex-shrink-0 ${color}`}>
                    {icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-gray-400 dark:text-gray-600 font-medium">{label}</p>
                    <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{value}</p>
                  </div>
                  <ArrowUpRight size={13} className="ml-auto text-gray-300 dark:text-gray-600 group-hover:text-gray-500 dark:group-hover:text-gray-400 transition-colors flex-shrink-0" />
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-400 dark:text-gray-600">
              <MapPin size={13} />
              San Jose del Monte, Bulacan, Philippines
            </div>
          </div>

          <div className="lg:col-span-3 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-7">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/40 flex items-center justify-center mb-5">
                  <CheckCircle size={24} className="text-emerald-500" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">Message sent!</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xs">
                  Thanks for reaching out. I'll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                  className="mt-8 px-5 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-600 dark:text-gray-400 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-200"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-1">Send a message</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-gray-500 dark:text-gray-400">Your name</label>
                    <input
                      className={inputBase}
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-gray-500 dark:text-gray-400">Email address</label>
                    <input
                      className={inputBase}
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-gray-500 dark:text-gray-400">Subject</label>
                  <input
                    className={inputBase}
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Project collaboration"
                    required
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-gray-500 dark:text-gray-400">Message</label>
                  <textarea
                    className={`${inputBase} resize-none`}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell me about your project or just say hello..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold text-sm hover:bg-gray-700 dark:hover:bg-gray-100 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 mt-1"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 dark:border-gray-900/30 border-t-white dark:border-t-gray-900 rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send message <Send size={14} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400 dark:text-gray-600">
            Prefer something casual?
          </p>
          <a
            href="https://buymeacoffee.com/gregabytez"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/40 text-amber-700 dark:text-amber-400 text-sm font-medium hover:bg-amber-100 dark:hover:bg-amber-950/50 transition-all duration-200"
          >
            <Coffee size={14} /> Buy me a coffee
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;