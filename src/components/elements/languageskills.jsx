import { useEffect, useRef, useState } from "react";
import { languageSkills } from "../../data/resume";

export default function LanguageSkills() {
  const ref = useRef(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimated(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="section skills" id="section-skills-lang" ref={ref}>
      <div className="content">
        <div className="title">
          <div className="title_inner">Keterampilan Bahasa</div>
        </div>
        <div className="skills percent content-box">
          <ul>
            {languageSkills.map((s) => (
              <li key={s.name}>
                <div className="name">{s.name}</div>
                <div className="progress">
                  <div
                    className={`percentage${animated ? " animated" : ""}`}
                    style={{ width: animated ? `${s.percent}%` : "0%" }}
                  >
                    <span className="percent">{s.percent}%</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
