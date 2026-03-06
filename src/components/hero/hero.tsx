import React from "react";

type Mood = "happy" | "excited" | "thinking" | "wave";

export default function YukiCharacter({ mood = "happy" }: { mood: Mood }) {
    const moodStyles = {
        happy: {
            filter: "none",
            transform: "scale(1) rotate(0deg)",
            animation: "none",
        },
        excited: {
            filter: "brightness(1.15) saturate(1.2)",
            transform: "scale(1.07) rotate(0deg)",
            animation: "bounce 0.5s ease infinite alternate",
        },
        thinking: {
            filter: "saturate(0.6) brightness(0.92)",
            transform: "scale(0.97) rotate(-4deg)",
            animation: "none",
        },
        wave: {
            filter: "none",
            transform: "scale(1) rotate(0deg)",
            animation: "wave 0.7s ease infinite alternate",
        },
    };

    const style = {
        width: "100%",
        height: "100%",
        objectFit: "contain",
        transition: "filter 0.4s ease, transform 0.4s ease",
        transformOrigin: "bottom center",
        ...moodStyles[mood] || moodStyles.happy,
    };

    return (
        <>
            <style>{`
        @keyframes bounce {
          from { transform: scale(1.07) translateY(0px); }
          to   { transform: scale(1.07) translateY(-8px); }
        }
        @keyframes wave {
          from { transform: rotate(-3deg) scale(1); }
          to   { transform: rotate(3deg) scale(1.03); }
        }
      `}</style>
            <img src='/arjun_nobg.png' alt="Arjun guide character" style={style as React.CSSProperties} />
        </>
    );
}
