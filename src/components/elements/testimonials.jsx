import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { testimonials } from "../../data/resume";

export default function Testimonials() {
  return (
    <div className="section testimonials" id="section-testimonials">
      <div className="content">
        <div className="title"><div className="title_inner">Testimonials</div></div>
        <div className="reviews-carousel">
          <Swiper
            modules={[Navigation, Autoplay]}
            loop
            spaceBetween={70}
            slidesPerView={2}
            autoplay={{ delay: 6000 }}
            navigation={{ nextEl: ".next", prevEl: ".prev" }}
            breakpoints={{
              720: { slidesPerView: 1, spaceBetween: 40 },
              1200: { slidesPerView: 2, spaceBetween: 70 },
            }}
            className="swiper-container"
          >
            {testimonials.map((t, idx) => (
              <SwiperSlide className="swiper-slide" key={`${t.name}-${idx}`}>
                <div className="reviews-item content-box">
                  <div className="image"><img src={t.photo} alt={t.name} /></div>
                  <div className="info">
                    <div className="name">{t.name}</div>
                    <div className="company">{t.role}</div>
                  </div>
                  <div className="text">{t.text}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-nav">
            <a className="prev swiper-button-prev fas fa-long-arrow-alt-left" />
            <a className="next swiper-button-next fas fa-long-arrow-alt-right" />
          </div>
        </div>
      </div>
    </div>
  );
}