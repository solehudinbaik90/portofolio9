import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import works, { filters, categoryIcons } from "../../data/works";

export default function PortfolioItems() {
  const [filter, setFilter] = useState(".box-item");
  const containerRef = useRef(null);
  const itemRefs = useRef({});

  const visibleWorks = useMemo(
    () =>
      works.filter(
        (item) => filter === ".box-item" || filter === `.f-${item.category.toLowerCase()}`
      ),
    [filter]
  );

  useLayoutEffect(() => {
    const columns = 2;
    const colHeights = new Array(columns).fill(0);

    visibleWorks.forEach((item) => {
      const node = itemRefs.current[item.id];
      if (!node) return;
      const shortest = colHeights.indexOf(Math.min(...colHeights));
      node.style.position = "absolute";
      node.style.left = `${(shortest * 100) / columns}%`;
      node.style.top = `${colHeights[shortest]}px`;
      colHeights[shortest] += node.offsetHeight;
    });

    if (containerRef.current) {
      containerRef.current.style.height = `${Math.max(...colHeights, 0)}px`;
    }
  }, [visibleWorks]);

  useEffect(() => {
  let cancelled = false;

  (async () => {
    const [{ default: $ }] = await Promise.all([import("jquery"), import("magnific-popup")]);
    if (cancelled) return;

    $(".has-popup-gallery").each(function () {
      const $trigger = $(this);
      if ($trigger.data("mfpInitialized")) return;

      const targetSelector = $trigger.attr("href");
      const items = $(targetSelector)
        .find("a")
        .map(function () {
          return { src: $(this).attr("href"), type: "image" };
        })
        .get();

      if (!items.length) return;

      $trigger.magnificPopup({
        items,
        type: "image",
        gallery: { enabled: true },
      });
      $trigger.data("mfpInitialized", true);
    });

    $(".has-popup-video").magnificPopup({ type: "iframe" });
    $(".has-popup-music").magnificPopup({ type: "iframe" });
    $(".has-popup-image").magnificPopup({ type: "image" });
    $(".has-popup-media").magnificPopup({ type: "inline" });
  })();

  return () => {
    cancelled = true;
  };
}, [visibleWorks]);

  useEffect(() => {
    let instance;
    (async () => {
      const { default: simpleParallax } = await import("simple-parallax-js");
      const images = containerRef.current?.querySelectorAll(".simpleParallax img");
      if (images && images.length) {
        instance = new simpleParallax(images, { scale: 1.3 });
      }
    })();
    return () => instance?.destroy?.();
  }, [visibleWorks]);

  return (
    <>
      <div className="filter-menu content-box">
        <div className="filters">
          {filters.map((f) => (
            <div className="btn-group" key={f.value}>
              <label
                data-text={f.label}
                className={`c-pointer${filter === f.value ? " glitch-effect" : ""}`}
              >
                <input
                  type="radio"
                  name="fl_radio"
                  value={f.value}
                  checked={filter === f.value}
                  onChange={() => setFilter(f.value)}
                />
                {f.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="box-items portfolio-items" ref={containerRef} style={{ position: "relative" }}>
        {visibleWorks.map((item) => (
          <WorkItem key={item.id} item={item} setRef={(node) => (itemRefs.current[item.id] = node)} />
        ))}
      </div>
    </>
  );
}

function WorkItem({ item, setRef }) {
  const icon = categoryIcons[item.category];
  const preview = item.thumb || item.image || item.images?.[0];

  const anchorHref =
    item.category === "Gallery"
      ? `#gallery-${item.id}`
      : item.category === "Video"
      ? item.videoUrl
      : item.category === "Music"
      ? item.musicUrl
      : item.category === "Image"
      ? item.image
      : item.category === "Content"
      ? `#popup-${item.id}`
      : item.href;

  const anchorClass =
    item.category === "Content"
      ? "has-popup-media hover-animated"
      : item.category === "Links"
      ? "has-popup-link hover-animated"
      : `has-popup-${item.category.toLowerCase()} hover-animated`;

  const anchorProps = item.category === "Links" ? { target: "_blank", rel: "noreferrer" } : {};

  return (
    <div className={`box-item f-${item.category.toLowerCase()}`} ref={setRef}>
      <div className="image">
        <a href={anchorHref} className={anchorClass} {...anchorProps}>
          <div className="simpleParallax" style={{ overflow: "hidden" }}>
            <img src={preview} className="wp-post-image" alt={item.name} />
          </div>
          <span className="info circle">
            <span className="centrize full-width">
              <span className="vertical-center">
                <span className={`icon fas ${icon}`} />
                <span className="desc">
                  <span className="category">{item.category}</span>
                  <span className="name">{item.name}</span>
                </span>
              </span>
            </span>
          </span>
        </a>

        {item.category === "Gallery" && (
          <div id={`gallery-${item.id}`} className="mfp-hide">
            {item.images.map((src) => (
              <a href={src} key={src} />
            ))}
          </div>
        )}

        {item.category === "Content" && (
          <div id={`popup-${item.id}`} className="popup-box mfp-fade mfp-hide">
            <div className="content">
              <div className="image" style={{ backgroundImage: `url(${item.thumb})` }} />
              <div className="desc single-post-text">
                <div className="category">Content</div>
                <h4>{item.popupTitle}</h4>
                <p>{item.description}</p>
                <ul>
                  {item.listItems?.map((li) => (
                    <li key={li}>{li}</li>
                  ))}
                </ul>
                <p>{item.extraDescription}</p>
                <a className="btn hover-animated" href={item.link}>
                  <span className="circle" />
                  <span className="lnk">Lihat Proyek</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
