import { useState, useEffect, useRef } from "react";
import "../App.css";
import Email from "./svg/Email";
import GitHub from "./svg/GitHub";
import LinkedIn from "./svg/LinkedIn";
import { SideBar } from "./SideBar";
import type { ActiveSection, Dialogue, Mood } from "./types";
import { useTypingText } from './hooks'
import { Download } from "./svg/Download";

// ── Data ─────────────────────────────────────────────────────────────
const SECTIONS: string[] = ["Resume", "Projects", "Get in Touch"];

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
  // const { displayed, done } = useTypingText(DIALOGUES[activeSection].text);
  // const mood: Mood = DIALOGUES[activeSection].mood;

  // Scroll spy via IntersectionObserver
  // useEffect(() => {
  //   const observers = SECTIONS.map((id) => {
  //     const el = sectionRefs.current[id];
  //     if (!el) return null;
  //     const obs = new IntersectionObserver(
  //       ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
  //       { threshold: 0.4 }
  //     );
  //     obs.observe(el);
  //     return obs;
  //   });
  //   return () => observers.forEach((o) => o?.disconnect());
  // }, []);

  // const scrollTo = (id: ActiveSection) =>
  //   sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      {/* <style>{css}</style> */}
      <div className="portfolio">

        {/* ── SIDEBAR ── */}
        <SideBar SECTIONS={SECTIONS} />

        {/* ── MAIN ── */}
        <main className="main">

          {/* Hero */}
          <section ref={(el) => (sectionRefs.current.hero = el)} id="hero">
            <h1 className="fadeUp" style={{ animationDelay: "0.25s" }}>
              Turning complex product ideas into polished web experiences.
            </h1>
            <p className="hero-sub fadeUp" style={{ animationDelay: "0.4s" }}>
              Full Stack Developer with 4.5+ years of experience in building scalable web applications using Golang, Node.js, JavaScript, and React.js. Successfully contributed to over 5 projects, focusing on high-performance, reliable solutions. Strong problem-solving abilities and analytical thinking, ensuring software is developed with best practices in mind.
            </p>
            <div className="cta-row fadeUp" style={{ animationDelay: "0.55s" }}>
              <button className="btn btn-primary flex">Download Resume <Download />
              </button>
              <button className="btn btn-primary">View Projects</button>
              <button className="btn btn-primary">Get in Touch</button>
            </div>
          </section>

          {/* Projects */}
          <section ref={(el) => (sectionRefs.current.projects = el)} id="projects">
            {/* <p className="sec-label"></p> */}
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
            {/* <p className="sec-label">// 02 — skills</p> */}
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
            {/* <p className="sec-label">// 03 — contact</p> */}
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
