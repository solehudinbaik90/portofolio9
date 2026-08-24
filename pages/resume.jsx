import Title from "../src/components/common/title";
import Testimonials from "../src/components/elements/testimonials";
import LanguageSkills from "../src/components/elements/languageskills";
import {
  personalInfo, services, pricing, experience, education,
  designSkills, codingSkills, knowledge,
  interests, team, clients, customText,
} from "../src/data/resume";

export default function Resume() {
  return (
    <>
      <Title variant="creative" pageName="Resume" typingData={['<span class="typed-bread"><a href="/">Beranda</a> / Resume</span>']} />

      <div className="section about" id="next_section">
        <div className="content content-box">
          <div className="image"><img src={personalInfo.photo} alt={personalInfo.name} /></div>
          <div className="desc">
            <p>{personalInfo.bio}</p>
            <div className="info-list">
              <ul>
                <li><strong>Usia:</strong> {personalInfo.age}</li>
                <li><strong>Domisili:</strong> {personalInfo.residence}</li>
                <li><strong>Kerja lepas:</strong> {personalInfo.freelance}</li>
                <li><strong>Alamat:</strong> {personalInfo.address}</li>
                <li><strong>Telepon:</strong> {personalInfo.phone}</li>
                <li><strong>Email:</strong> {personalInfo.email}</li>
              </ul>
            </div>
            <div className="bts">
              <a href="/images/cv.pdf" className="btn hover-animated" download>
                <span className="circle" /><span className="lnk">Download CV</span>
              </a>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>

      <div className="section service" id="section-services">
        <div className="content">
          <div className="title"><div className="title_inner">Layanan</div></div>
          <div className="service-items">
            {services.map((s) => (
              <div className="service-col" key={s.name}>
                <div className="service-item content-box">
                  <div className="icon"><span className={`fas ${s.icon}`} /></div>
                  <div className="name">{s.name}</div>
                  <div className="text">{s.text}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="clear" />
        </div>
      </div>

      <div className="section pricing" id="section-pricing">
        <div className="content">
          <div className="title"><div className="title_inner">Tabel Harga</div></div>
          <div className="pricing-items">
            {pricing.map((p) => (
              <div className="pricing-col" key={p.name}>
                <div className="pricing-item content-box">
                  <div className="icon"><span className={`fas ${p.icon}`} /></div>
                  <div className="name">{p.name}</div>
                  <div className="amount">
                    <span className="number"><span className="dollar">$</span><span>{p.price}</span><span className="period">jam</span></span>
                  </div>
                  <div className="feature-list">
                    <ul>
                      {p.features.map((f) => (
                        <li key={f.text} className={f.enabled ? undefined : "disable"}>
                          {f.text} {f.badge && <strong>{f.badge}</strong>}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bts">
                    <a href="/contact" className="btn hover-animated"><span className="circle" /><span className="lnk">Order Sekarang</span></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section resume" id="section-history">
        <div className="content">
          <div className="cols">
            <div className="col col-md">
              <div className="title"><div className="title_inner">Pengalaman</div></div>
              <div className="resume-items">
                {experience.map((e, idx) => (
                  <div
                    className={`resume-item content-box${idx === 0 ? " active" : ""}`}
                    key={e.name}
                  >
                    <div className="date">{e.date}</div>
                    <div className="name">{e.name}</div>
                    <div className="text">{e.text}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col col-md">
              <div className="title"><div className="title_inner">Pendidikan</div></div>
              <div className="resume-items">
                {education.map((e) => (
                  <div className="resume-item content-box" key={e.name}>
                    <div className="date">{e.date}</div><div className="name">{e.name}</div><div className="text">{e.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section skills" id="section-skills">
        <div className="content">
          <div className="title"><div className="title_inner">Keterampilan</div></div>
          <div className="skills percent content-box">
            <ul>
              {designSkills.map((s) => (
                <li key={s.name}>
                  <div className="name">{s.name}</div>
                  <div className="progress"><div className="percentage" style={{ width: `${s.percent}%` }}><span className="percent">{s.percent}%</span></div></div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <LanguageSkills />

      <div className="section skills" id="section-skills-code">
        <div className="content">
          <div className="title"><div className="title_inner">Keterampilan Desain</div></div>
          <div className="skills circles content-box">
            <ul>
              {codingSkills.map((s) => (
                <li key={s.name}>
                  <div className="name">{s.name}</div>
                  <div className={`progress p${s.percent}`}>
                    <div className="percentage"><span className="percent">{s.percent}%</span></div>
                    <span>{s.percent}%</span>
                    <div className="slice"><div className="bar" /><div className="fill" /></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="section skills" id="section-skills-know">
        <div className="content">
          <div className="title"><div className="title_inner">Pengetahuan</div></div>
          <div className="skills list content-box">
            <ul>{knowledge.map((k) => <li key={k}><div className="name">{k}</div></li>)}</ul>
          </div>
        </div>
      </div>

      <div className="section service" id="section-interests">
        <div className="content">
          <div className="title"><div className="title_inner">Hobi</div></div>
          <div className="service-items">
            {interests.map((i) => (
              <div className="service-col" key={i.name}>
                <div className="service-item content-box">
                  <div className="icon"><span className={`fas ${i.icon}`} /></div>
                  <div className="name">{i.name}</div>
                  <div className="text">{i.text}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="clear" />
        </div>
      </div>

      <div className="section team" id="section-team">
        <div className="content">
          <div className="title"><div className="title_inner">Tim Kita</div></div>
          <div className="team-items">
            {team.map((t) => (
              <div className="team-col" key={t.name}>
                <div className="team-item content-box">
                  <div className="image"><img src={t.photo} alt={t.name} /></div>
                  <div className="desc">
                    <div className="name">{t.name}</div>
                    <div className="category">{t.role}</div>
                    <div className="soc">
                      <a target="_blank" rel="noreferrer" href={t.socials.pinterest}><span className="icon fab fa-pinterest" /></a>
                      <a target="_blank" rel="noreferrer" href={t.socials.instagram}><span className="icon fab fa-instagram" /></a>
                      <a target="_blank" rel="noreferrer" href={t.socials.dribbble}><span className="icon fab fa-dribbble" /></a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Testimonials />

      <div className="section clients" id="section-clients">
        <div className="content">
          <div className="title"><div className="title_inner">Klien</div></div>
          <div className="content-box">
            <div className="clients-items">
              {clients.map((c) => (
                <div className="clients-col" key={c}><div className="clients-item"><a target="_blank" rel="noreferrer" href="#"><img src={c} alt="client" /></a></div></div>
              ))}
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>

      <div className="section custom-text" id="section-custom-text">
        <div className="content">
          <div className="title"><div className="title_inner">Kata Bijak</div></div>
          <div className="content-box"><div className="single-post-text">{customText.map((p) => <p key={p}>{p}</p>)}</div></div>
          <div className="clear" />
        </div>
      </div>
    </>
  );
}

Resume.pageTitle = "Resume";
