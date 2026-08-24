import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";

export default function HeroSlider({ images }) {
  const handleSlideChange = (swiper) => {
    const realIndex = swiper.realIndex;
    const slides = swiper.slides;

    if (!slides || slides.length === 0) return;

    slides.forEach((slide, idx) => {
      if (realIndex >= idx) {
        slide.classList.add("swiper-clip-active");
      } else {
        slide.classList.remove("swiper-clip-active");
      }
    });

  };

  return (
    <div className="started-carousel">
      <Swiper
        modules={[EffectFade, Autoplay]}
        loop={true}
        spaceBetween={0}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        slidesPerView={1}
        simulateTouch={false}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        onSlideChange={handleSlideChange}
        className="swiper-container"
      >
        {images.map((src, i) => (
          <SwiperSlide key={`${src}-${i}`} className={i === 0 ? "swiper-clip-active" : ""}>
            <div className="main-img" style={{ backgroundImage: `url(${src})` }} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
