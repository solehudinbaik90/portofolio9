import Title from "../src/components/common/title";
import ContactForm from "../src/components/elements/contactform";
import contact from "../src/data/contact";

export default function Contact() {
  return (
    <>
      <Title
        variant="creative"
        pageName="Kontak"
        typingData={['<span class="typed-bread"><a href="/">Beranda</a> / Kontak</span>']}
      />

      <div className="section contacts" id="next_section">
        <div className="content">
          <div className="title"><div className="title_inner">Hubungi Kami</div></div>
          <div className="service-items">
            <div className="service-col"><div className="service-item content-box"><div className="icon"><span className="fas fa-phone" /></div><div className="name">Telepon</div><div className="text">{contact.phone}</div></div></div>
            <div className="service-col"><div className="service-item content-box"><div className="icon"><span className="fas fa-envelope" /></div><div className="name">Email</div><div className="text"><a href={`mailto:${contact.email}`}>{contact.email}</a></div></div></div>
            <div className="service-col"><div className="service-item content-box"><div className="icon"><span className="fas fa-map-marker-alt" /></div><div className="name">Alamat</div><div className="text">{contact.address}</div></div></div>
            <div className="service-col"><div className="service-item content-box"><div className="icon"><span className="fas fa-user-tie" /></div><div className="name">Kerja Lepas</div><div className="text">{contact.freelanceText}</div></div></div>
          </div>
          <div className="clear" />
        </div>
      </div>

      <div className="section contacts" id="section-contacts">
        <div className="content">
          <div className="title"><div className="title_inner">Kirim Pesan</div></div>
          <ContactForm />
        </div>
        <div className="clear" />
      </div>
    </>
  );
}

Contact.pageTitle = "Kontak";
