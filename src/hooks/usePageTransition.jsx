import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function usePageTransition() {
  const [status, setStatus] = useState("idle"); // 'idle' | 'loading' | 'ready' | 'finish'
  const router = useRouter();

  useEffect(() => {
    // Jalankan preloader saat pertama kali web dimuat
    setStatus("ready");
    const initTimer = setTimeout(() => setStatus("finish"), 1000); // Sesuaikan durasi CSS
    return () => clearTimeout(initTimer);
  }, []);

  useEffect(() => {
    let finishTimer;

    const handleStart = () => {
      clearTimeout(finishTimer);
      setStatus("loading");
    };

    const handleDone = () => {
      setStatus("ready");
      // Berikan jeda kecil agar class 'ready' sempat di-render oleh browser sebelum masuk 'finish'
      finishTimer = setTimeout(() => {
        setStatus("finish");
      }, 300); 
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleDone);
    router.events.on("routeChangeError", handleDone);

    return () => {
      clearTimeout(finishTimer);
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleDone);
      router.events.off("routeChangeError", handleDone);
    };
  }, [router]);

  return {
    isTransitioning: status !== "finish",
    transitionStatus: status // Gunakan string ini untuk memetakan class CSS Anda
  };
}
