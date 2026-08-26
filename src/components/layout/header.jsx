import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import menuData from "../../data/menu";

export default function Header({ isTransitioning }) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isTransitioning) setIsOpen(false);
  }, [isTransitioning]);

  const isActive = (path) =>
    path === "/" ? router.pathname === "/" : router.pathname.startsWith(path);

  const renderMenu = () => (
    <div className="menu-top-menu-container">
      <ul className="menu">
        {menuData.map((item) => (
          <li key={item.id} className="menu-item">
            <Link href={item.path}>
              <a className={isActive(item.path) ? "active" : ""}>
                <span className="mask-lnk">{item.title}</span>
                <span className="mask-lnk mask-lnk-hover">{item.title}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  const hiddenClass = isTransitioning ? "header--transitioning" : "";

  return (
    <>
      <header className={`header mobileHeader ${isOpen ? "active" : ""} ${hiddenClass}`}>
        <div className="head-top">
          <button
            aria-label="Toggle menu"
            className="menu-btn"
            onClick={() => setIsOpen((v) => !v)}
          >
            <span />
          </button>
          <div className="logo hover-masks-logo">
            <Link href="#">
              <a>
                <span className="mask-lnk">Muhamad <strong>Soleh</strong></span>
                <span className="mask-lnk mask-lnk-hover">Download <strong>CV</strong></span>
              </a>
            </Link>
          </div>
          <div className="top-menu hover-masks">
            <div className="top-menu-nav">{renderMenu()}</div>
          </div>
        </div>
      </header>

      <header className={`header desktopHeader ${hiddenClass}`}>
        <div className="head-top">
          <div className="logo hover-masks-logo">
            <Link href="#">
              <a>
                <span className="mask-lnk">Muhamad <strong>Soleh</strong></span>
                <span className="mask-lnk mask-lnk-hover">Download <strong>CV</strong></span>
              </a>
            </Link>
          </div>
          <div className="top-menu hover-masks">
            <div className="top-menu-nav">{renderMenu()}</div>
          </div>
        </div>
      </header>
    </>
  );
}
