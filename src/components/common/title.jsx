import { useEffect } from "react";
import TypingSubtitle from "../elements/typingsubtitle";

function StartedContent({ pageName, pageTitle, typingData, extraClass }) {
  return (
    <>
      <div className="centrize full-width">
        <div className="vertical-center">
          <div className="started-content">
            <h1 className="h-title">{pageTitle || pageName}</h1>
            <TypingSubtitle typingData={typingData} extraClass={extraClass} />
          </div>
        </div>
      </div>
      <a href="#next_section" className="mouse_btn">
        <span className="icon fas fa-chevron-down" />
      </a>
    </>
  );
}

export default function Title({
  variant = "creative",
  pageName,
  pageTitle,
  typingData,
  extraClass,
  bannerImg,
  mapEmbedUrl,
}) {
  useEffect(() => {
    if (variant !== "jarallax") return;
    (async () => {
      const { jarallax, jarallaxVideo } = await import("jarallax");
      jarallaxVideo();
      jarallax(document.querySelectorAll(".jarallax"), {
        speed: 0.5,
        keepImg: true,
        automaticResize: true,
        videoVolume: 0,
      });
    })();
  }, [variant]);

  if (variant === "map") {
    return (
      <div className="section started section-title" id="section-started">
        <div className="video-bg">
          <div className="map">
            <iframe
              title="map"
              src={mapEmbedUrl}
              style={{ border: 0, width: "100%", height: "100%" }}
              allowFullScreen
              loading="lazy"
            />
          </div>
          <div className="video-bg-mask" />
          <div className="video-bg-texture" id="grained_container" />
        </div>
        <StartedContent pageName="Contacts" typingData={typingData} extraClass={extraClass} />
      </div>
    );
  }

  if (variant === "jarallax") {
    return (
      <div className="section started section-title" id="section-started">
        <div
          className="video-bg jarallax"
          style={{ backgroundImage: `url(${bannerImg || "/images/resume_bg.jpg"})` }}
        >
          <div className="video-bg-mask" />
          <div className="video-bg-texture" id="grained_container" />
        </div>
        <StartedContent
          pageName={pageName}
          pageTitle={pageTitle}
          typingData={typingData}
          extraClass={extraClass}
        />
      </div>
    );
  }

  if (variant === "creative") {
    return (
      <div className="section started layout-creative" id="section-started">
        <div className="video-bg">
          <div className="video-bg-mask" />
          <div className="video-bg-texture" id="grained_container" />
        </div>
        <StartedContent
          pageName={pageName}
          pageTitle={pageTitle}
          typingData={typingData}
          extraClass={extraClass}
        />
      </div>
    );
  }

  // plain "section-title" variant never forwards extraClass — matches the
  // original bundle's bK component, which drops it.
  return (
    <div className="section started section-title" id="section-started">
      <div className="video-bg">
        <div className="video-bg-mask" />
        <div className="video-bg-texture" id="grained_container" />
      </div>
      <StartedContent pageName={pageName} pageTitle={pageTitle} typingData={typingData} />
    </div>
  );
}