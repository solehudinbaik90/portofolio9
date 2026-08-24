import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function TypingSubtitle({ typingData, extraClassName }) {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: typingData || [
        "Saya guru fisika <strong>humoris</strong>",
        "Saya ahli <strong>desain grafis</strong>",
        "Saya cinta <strong>kehidupan</strong>",
      ],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: false,
    });

    return () => typed.destroy();
  }, []);

  return (
    <span className={`${extraClassName} typing-subtitle`} id="subtitle" ref={el} />
  );
}
