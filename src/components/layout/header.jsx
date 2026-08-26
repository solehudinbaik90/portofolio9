import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import menuData from "../../data/menu";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const isActive = (path) =>
    path === "/" ? router.asPath === "/" : router.asPath.startsWith(path);

  const handleNavigation = (e, path) => {
    e.preventDefault(); 
    setIsOpen(false);
    router.push(path);
  };

  const renderMenu = () => (
    <div className="menu-top-menu-container">
      <ul className="menu">
        {menuData.map((item) => (
          <li 
            key={item.id} 
            className={`menu-item ${isActive(item.path) ? "current-menu-item" : ""}`}
          >
            <a 
              href={item.path} 
              className={isActive(item.path) ? "active" : ""}
              onClick={(e) => handleNavigation(e, item.path)}
            >
              <span className="mask-lnk">{item.title}</span>
              <span className="mask-lnk mask-lnk-hover">{item.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      <header className={`header mobileHeader ${isOpen ? "active" : ""}`}>
        <div className="head-top">
          <button 
            aria-label="Toggle menu" 
            className="menu-btn" 
            onClick={() => setIsOpen((v) => !v)}
          >
            <span />
          </button>
          <div className="logo hover-masks-logo">
            <a href="/" onClick={(e) => handleNavigation(e, "/")}>
              <span className="mask-lnk">Muhamad <strong>Soleh</strong></span>
              <span className="mask-lnk mask-lnk-hover">Download <strong>CV</strong></span>
            </a>
          </div>

          <div className="top-menu hover-masks">
            <div className="top-menu-nav">{renderMenu()}</div>
          </div>
        </div>
      </header>

      <header className="header desktopHeader">
        <div className="head-top">
          <div className="logo hover-masks-logo">
            <a href="/" onClick={(e) => handleNavigation(e, "/")}>
              <span className="mask-lnk">Muhamad <strong>Soleh</strong></span>
              <span className="mask-lnk mask-lnk-hover">Download <strong>CV</strong></span>
            </a>
          </div>

          <div className="top-menu hover-masks">
            <div className="top-menu-nav">{renderMenu()}</div>
          </div>
        </div>
      </header>
    </>
  );
}
