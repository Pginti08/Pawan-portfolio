import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:preyanshginti@gmail.com?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${form.email}`;
    window.open(mailto);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl font-bold md:text-4xl"
        >
          Get in <span className="gradient-text">Touch</span>
        </motion.h2>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed">
              Interested in working together or have a project in mind? Let's connect.
            </p>

            <div className="space-y-4">
              <a href="tel:+919027417993" className="flex items-center gap-3 text-sm text-surface-foreground hover:text-foreground transition-colors">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-lg">📞</span>
                +91 9027417993
              </a>
              <a href="mailto:preyanshginti@gmail.com" className="flex items-center gap-3 text-sm text-surface-foreground hover:text-foreground transition-colors">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-lg">✉️</span>
                preyanshginti@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/pawan-ginti-a571b5241"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-surface-foreground hover:text-foreground transition-colors"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-lg">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </span>
                LinkedIn Profile
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card space-y-4 rounded-xl p-6"
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_25px_oklch(0.65_0.25_280/30%)] hover:brightness-110"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 border-t border-border pt-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Pawan Ginti. Built with passion and AI.
      </div>
    </section>
  );
}
