import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const timers = useRef([]);

  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  const playReveal = () => {
    clearTimers();
    document.querySelector(".lines")?.classList.remove("ready", "finish");

    timers.current.push(
      setTimeout(() => {
        document.querySelector(".lines")?.classList.add("ready");
      }, 3000)
    );

    timers.current.push(
      setTimeout(() => {
        setLoading(false);
        document.querySelector(".lines")?.classList.add("finish");
      }, 1000)
    );
  };

  useEffect(() => {
    playReveal();
    return clearTimers;
  }, []);

  useEffect(() => {
    const showOnStart = () => {
      clearTimers();
      document.querySelector(".lines")?.classList.remove("ready", "finish");
      setLoading(true);
    };

    const hideOnComplete = () => {
      playReveal();
    };

    router.events.on("routeChangeStart", showOnStart);
    router.events.on("routeChangeComplete", hideOnComplete);
    router.events.on("routeChangeError", hideOnComplete);

    return () => {
      router.events.off("routeChangeStart", showOnStart);
      router.events.off("routeChangeComplete", hideOnComplete);
      router.events.off("routeChangeError", hideOnComplete);
    };
  }, [router]);

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
