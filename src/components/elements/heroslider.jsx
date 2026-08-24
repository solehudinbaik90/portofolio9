import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";

export default function HeroSlider({ images }) {
  const handleSlideChange = (swiper) => {
    const realIndex = swiper.realIndex;
    const total = swiper.slides.length;
    const slides = document.querySelectorAll(".started-carousel .swiper-slide");

    slides.forEach((slide, idx) => {
      if (realIndex - 1 >= idx) {
        slide.classList.add("swiper-clip-active");
      } else {
        slide.classList.remove("swiper-clip-active");
      }
    });


    slides.forEach((slide, idx) => {
      slide.style.zIndex = total - idx;
    });
  };

  return (
    <div className="started-carousel">
      <Swiper
        modules={[EffectFade, Autoplay]}
        loop={false}
        spaceBetween={0}
        effect="fade"
        slidesPerView={1}
        simulateTouch={false}
        autoplay={{ delay: 6000, disableOnInteraction: false, waitForTransition: false }}
        onSlideChange={handleSlideChange}
        className="swiper-container"
      >
        {images.map((src, i) => (
          <SwiperSlide key={src} className={i === 0 ? "swiper-clip-active" : ""}>
            <div className="main-img" style={{ backgroundImage: `url(${src})` }} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
