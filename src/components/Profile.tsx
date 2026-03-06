import { useState, useEffect, useRef } from "react";
import "../App.css";
import Email from "./svg/Email";
import GitHub from "./svg/GitHub";
import LinkedIn from "./svg/LinkedIn";
import { SideBar } from "./SideBar";
import type { ActiveSection, Dialogue, Mood } from "./types";
import { useTypingText } from './hooks'

// ── Data ─────────────────────────────────────────────────────────────
const SECTIONS: ActiveSection[] = ["hero", "projects", "skills", "contact"];

const DIALOGUES: Record<ActiveSection, Dialogue> = {
  hero: { text: "Hey! I'm Rajinder Singh~ Welcome to my portfolio! I am a full-stack developer who loves building things. Scroll down to explore! ✨", mood: "wave" },
  projects: { text: "Ooh, these are my projects! From e-commerce to AI tools — quite a range. Hover over the cards for more~ 🛠️", mood: "excited" },
  skills: { text: "Look at all these skills! I know both frontend AND backend. A true full-stack wizard! 🧙‍♀️", mood: "happy" },
  contact: { text: "You've reached the end! If you liked what you saw, why not say hello? I would love to hear from you! 💌", mood: "thinking" },
};

const PROJECTS = [
  { icon: "🛒", title: "ShopFlow", desc: "An e-commerce platform with real-time inventory, Stripe payments, and a beautiful storefront.", tags: ["Next.js", "Prisma", "Stripe"] },
  { icon: "📊", title: "DataLens", desc: "A dashboard for visualizing complex datasets with drag-and-drop chart composition.", tags: ["React", "D3.js", "Python"] },
  { icon: "🤖", title: "AskDoc", desc: "AI-powered document assistant. Upload any PDF and chat with its contents instantly.", tags: ["LangChain", "FastAPI", "OpenAI"] },
  { icon: "🗺️", title: "Wandr", desc: "Travel planning app that generates smart itineraries based on your preferences.", tags: ["Vue", "Mapbox", "Node.js"] },
];

const SKILLS = [
  { group: "Frontend", items: ["React / Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { group: "Backend", items: ["Node.js / Express", "Python / FastAPI", "PostgreSQL", "REST & GraphQL"] },
  { group: "Tools & More", items: ["Git / GitHub", "Docker", "AWS / Vercel", "Figma"] },
];

// ── App ──────────────────────────────────────────────────────────────
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState<ActiveSection>("hero");
  const sectionRefs = useRef<Partial<Record<ActiveSection, HTMLElement | null>>>(
    {}
  );
  const { displayed, done } = useTypingText(DIALOGUES[activeSection].text);
  const mood: Mood = DIALOGUES[activeSection].mood;

  // Scroll spy via IntersectionObserver
  useEffect(() => {
    const observers = SECTIONS.map((id) => {
      const el = sectionRefs.current[id];
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.4 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const scrollTo = (id: ActiveSection) =>
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      {/* <style>{css}</style> */}
      <div className="portfolio">

        {/* ── SIDEBAR ── */}
        <SideBar mood={mood} activeSection={activeSection} displayed={displayed} done={done} SECTIONS={SECTIONS} scrollTo={scrollTo} />

        {/* ── MAIN ── */}
        <main className="main">

          {/* Hero */}
          <section ref={(el) => (sectionRefs.current.hero = el)} id="hero">
            <p className="hero-tag fadeUp" style={{ animationDelay: "0.1s" }}>// available for work</p>
            <h1 className="fadeUp" style={{ animationDelay: "0.25s" }}>
              Building things<br />for the <em>web.</em>
            </h1>
            <p className="hero-sub fadeUp" style={{ animationDelay: "0.4s" }}>
              I&apos;m Rajinder Singh — a full-stack developer who loves crafting clean, performant, and thoughtful digital experiences.
            </p>
            <div className="cta-row fadeUp" style={{ animationDelay: "0.55s" }}>
              <button className="btn btn-primary" onClick={() => scrollTo("projects")}>View Projects</button>
              <button className="btn btn-ghost" onClick={() => scrollTo("contact")}>Get in Touch</button>
            </div>
          </section>

          {/* Projects */}
          <section ref={(el) => (sectionRefs.current.projects = el)} id="projects">
            <p className="sec-label"></p>
            <h2 className="sec-title">Things I&apos;ve Built</h2>
            <div className="projects-grid">
              {PROJECTS.map((p) => (
                <div className="project-card" key={p.title}>
                  <div className="project-icon">{p.icon}</div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <div className="tags">
                    {p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section ref={(el) => (sectionRefs.current.skills = el)} id="skills">
            <p className="sec-label">// 02 — skills</p>
            <h2 className="sec-title">What I Work With</h2>
            <div className="skills-grid">
              {SKILLS.map((s) => (
                <div className="skill-group" key={s.group}>
                  <h4>{s.group}</h4>
                  <div className="skill-list">
                    {s.items.map((item) => (
                      <div className="skill-item" key={item}>
                        <span className="skill-dot" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section ref={(el) => (sectionRefs.current.contact = el)} id="contact">
            <p className="sec-label">// 03 — contact</p>
            <h2 className="sec-title">Let&apos;s Work Together</h2>
            <div className="contact-card">
              <div>
                <h2>Say hello. 👋</h2>
                <p>Open to freelance, full-time, and interesting collabs.</p>
              </div>
              <div className="contact-links">
                <Email />
                <GitHub />
                <LinkedIn />
              </div>
            </div>
          </section>

        </main>
      </div>
    </>
  );
}
