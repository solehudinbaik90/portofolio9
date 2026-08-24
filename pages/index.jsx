import HeroSlider from "../src/components/elements/heroslider";
import TypingSubtitle from "../src/components/elements/typingsubtitle";

const heroImages = [
  "/images/slide/slide1.jpg",
  "/images/slide/slide2.jpg",
  "/images/slide/slide3.jpg",
  "/images/slide/slide4.jpg",
];

export default function Home() {
  return (
    <div className="section started" id="section-started">
      <div className="video-bg">
        <div className="video-bg-mask" />
        <div className="video-bg-texture" id="grained_container" />
        <HeroSlider images={heroImages} />
      </div>
      <div className="centrize full-width">
        <div className="vertical-center">
          <div className="started-content">
            <h1 className="h-title">
              Hello, Saya <strong>Muhamad Soleh</strong>, Seorang Guru dan{" "}
              <br />
              Desain Grafis Website dari Tanjakan Mekar.
            </h1>
            <TypingSubtitle extraClassName="h-subtitle" />
            <span className="typed-subtitle" />
          </div>
        </div>
      </div>
    </div>
  );
}

Home.pageTitle = "Home";