import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="contact_form content-box">
      <form id="cform" method="post" onSubmit={handleSubmit}>
        <div className="group-val">
          <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
        </div>
        <div className="group-val">
          <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        </div>
        <div className="group-val ct-gr">
          <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} required />
        </div>
        <div className="group-bts">
          <button type="submit" className="btn hover-animated" disabled={status === "sending"}>
            <span className="circle" />
            <span className="lnk">{status === "sending" ? "Sending..." : "Send Message"}</span>
          </button>
        </div>
      </form>
      {status === "success" && (
        <div className="alert-success">
          <p>Thanks, your message is sent successfully.</p>
        </div>
      )}
    </div>
  );
}