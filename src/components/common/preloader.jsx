import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t1 = setTimeout(() => {
      document.querySelector(".lines")?.classList.add("ready");
    }, 3000);

    const t2 = setTimeout(() => {
      setLoading(false);
      document.querySelector(".lines")?.classList.add("finish");
    }, 1000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div className="preloader" style={{ display: loading ? "block" : "none" }}>
      <div className="centrize full-width">
        <div className="vertical-center">
          <div className="spinner">
            <div className="double-bounce1" />
            <div className="double-bounce2" />
          </div>
        </div>
      </div>
    </div>
  );
}
