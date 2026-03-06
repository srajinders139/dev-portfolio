import YukiCharacter from "./hero/hero"
import { ActiveSection, Mood } from "./types";

type SideBarProps = {
    mood: Mood;
    activeSection: ActiveSection;
    displayed: string;
    done: boolean;
    SECTIONS: ActiveSection[];
    scrollTo: (id: ActiveSection) => void;
}

export const SideBar = ({ mood, activeSection, displayed, done, SECTIONS, scrollTo }: SideBarProps) => {
    return <aside className="sidebar">
        <div className="char-wrap float">
            <YukiCharacter mood={mood} />
        </div>
        <p className="char-name">Rajinder Singh · Full-stack Developer</p>
        <div className="bubble slideIn" key={activeSection}>
            {displayed}
            {!done && <span className="cursor" />}
        </div>
        <nav className="nav">
            {SECTIONS.map((id) => (
                <button
                    key={id}
                    className={`nav-btn ${activeSection === id ? "active" : ""}`}
                    onClick={() => scrollTo(id)}
                >
                    <span className="nav-dot" />
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                </button>
            ))}
        </nav>
    </aside>
}