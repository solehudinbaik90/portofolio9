import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

export default function usePageTransition() {
  const [isTransitioning, setIsTransitioning] = useState(true);
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
        setIsTransitioning(false);
        document.querySelector(".lines")?.classList.add("finish");
      }, 1000)
    );
  };

  useEffect(() => {
    playReveal();
    return clearTimers;

  }, []);

  useEffect(() => {
    const handleStart = () => {
      clearTimers();
      document.querySelector(".lines")?.classList.remove("ready", "finish");
      setIsTransitioning(true);
    };

    const handleDone = () => playReveal();

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleDone);
    router.events.on("routeChangeError", handleDone);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleDone);
      router.events.off("routeChangeError", handleDone);
    };

  }, [router]);

  return isTransitioning;
}
