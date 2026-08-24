import contact from "../../data/contact";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="copy">
        <p>E: {contact.footerEmail}</p>
        <p>T: {contact.footerPhone}</p>
      </div>
      <div className="soc-box">
        <div className="follow-label">Ikuti Saya</div>
        <div className="soc">
          {contact.socials.map((s) => (
            <a key={s.name} target="_blank" rel="noreferrer" href={s.url}>
              <span className={`icon fab ${s.icon}`} />
            </a>
          ))}
        </div>
      </div>
      <div className="clear" />
    </footer>
  );
}