import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function TypingSubtitle({ typingData, extraClass }) {
  const el = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const typed = new Typed(el.current, {
        strings: typingData || [
          "Saya guru fisika <strong>humoris</strong>",
          "Saya ahli <strong>desain grafis</strong>",
          "Saya cinta <strong>kehidupanku</strong>",
        ],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 100,
        smartBackspace: true,
        loop: false,
        showCursor: false,
      });
      return () => typed.destroy();
    }, 10200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-subtitles ready">
      <span className={extraClass} ref={el} />
    </div>
  );
}
