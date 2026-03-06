import { useEffect, useState } from "react";

export function useTypingText(text: string, speed = 22) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setDone(false);
    let i = 0;
    const iv = setInterval(() => {
      if (i >= text.length) {
        clearInterval(iv);
        setDone(true);
        return;
      }
      const char = text[i]; // capture BEFORE any increment
      i++;
      setDisplayed((p) => p + char); // use captured value, not text[i]
    }, speed);
    return () => clearInterval(iv);
  }, [text, speed]);

  return { displayed, done };
}