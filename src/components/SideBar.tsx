import YukiCharacter from "./hero/hero"
import { ActiveSection, Mood } from "./types";

type SideBarProps = {
    // mood: Mood;
    // activeSection?: ActiveSection;
    // displayed: string;
    // done: boolean;
    SECTIONS: string[];
    // scrollTo: (id: ActiveSection) => void;
}

export const SideBar = ({ SECTIONS }: SideBarProps) => {
    return <aside className="sidebar">
        <div
            className="char-block"
            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4.5rem" }}
        >
            <div className="char-wrap float">
                {/* <YukiCharacter mood={mood} /> */}
                <img src="/public/image.png" alt="Rajinder Singh" className="char-img" />

            </div>
            <p className="char-name">RAJINDER SINGH · PRODUCT-MINDED FULL-STACK & CLOUD</p>
        </div>

        <nav className="nav">
            {SECTIONS.map((id) => (
                <button className="nav-btn" key={id} onClick={() => { /* scrollTo(id as ActiveSection) */ }}>
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                </button>
            ))}
        </nav>
    </aside>
}