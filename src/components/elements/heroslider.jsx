"use client";

import { useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";

export default function HeroSlider({ images }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleRealIndexChange = useCallback((swiper) => {
    setActiveIndex(swiper.realIndex);
  }, []);

  return (
    <div className="started-carousel">
      <Swiper
        modules={[EffectFade, Autoplay]}
        loop={false}
        rewind={true}
        spaceBetween={0}
        effect="fade"
        slidesPerView={1}
        simulateTouch={false}
        navigation={false}
        speed={1000}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
          waitForTransition: false,
          enabled: true,
        }}
        onRealIndexChange={handleRealIndexChange}
        className="swiper-container"
      >
        {images.map((src, i) => (
          <SwiperSlide
            key={src}
            className={i < activeIndex ? "swiper-clip-active" : i === 0 ? "swiper-clip-active" : ""}
            style={{ zIndex: images.length - i }}
          >
            <div className="main-img" style={{ backgroundImage: `url(${src})` }} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
