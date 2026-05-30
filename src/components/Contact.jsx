"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FiSend } from "react-icons/fi";
import { HiOutlineAtSymbol, HiOutlineLocationMarker } from "react-icons/hi";

const emailConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
};

export default function Contact() {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const updateField = (event) => {
    const { name, value } = event.target;
    setFormData((currentData) => ({ ...currentData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!emailConfig.serviceId || !emailConfig.templateId || !emailConfig.publicKey) {
      setStatus("missing-config");
      return;
    }

    setStatus("sending");

    try {
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        {
          from_name: formData.from_name,
          from_email: formData.from_email,
          message: formData.message,
        },
        {
          publicKey: emailConfig.publicKey,
        },
      );

      setStatus("success");
      setFormData({ from_name: "", from_email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative z-10 mx-auto min-h-[100svh] w-full max-w-[92rem] scroll-mt-20 px-5 pb-4 pt-20 sm:px-8 lg:px-12"
    >
      <div className="text-center">
        <div className="flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-[#64ffe7]" />
          <p className="text-[0.68rem] font-black uppercase tracking-[0.24em] text-[#64ffe7]">
            Initiate Protocol
          </p>
        </div>

        <h2 className="mt-3 text-3xl font-black uppercase tracking-[0] sm:text-4xl">
          <span className="animate-pulse bg-gradient-to-r from-[#64ffe7] via-[#ff6fd8] to-[#ffd36a] bg-clip-text text-transparent">
            Get_in_Touch_
          </span>
        </h2>

        <p className="mx-auto mt-3 max-w-3xl text-xs font-semibold leading-5 text-slate-300/80 sm:text-sm">
          Ready to collaborate on the next generation of intelligent
          applications? Reach out for research inquiries, partnership
          opportunities, or technical consulting.
        </p>
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="space-y-4">
          <aside className="border border-cyan-300/15 bg-[#0d213f]/90 p-4 sm:p-5">
            <h3 className="text-xl font-black uppercase tracking-[0] text-[#dce7ff] drop-shadow-[0_3px_0_rgba(0,0,0,0.42)]">
              Hub_Locator
            </h3>

            <div className="mt-5 space-y-5">
              <div className="flex gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-cyan-300/20 text-[#64ffe7]">
                  <HiOutlineLocationMarker className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-slate-300/80">
                    Operational Base
                  </p>
                  <p className="mt-1.5 text-sm font-black text-[#dce7ff]">
                    Kolkata AI Research Hub
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-300/85">
                    Kolkata, West Bengal
                    <br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-cyan-300/20 text-[#64ffe7]">
                  <HiOutlineAtSymbol className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-slate-300/80">
                    Direct Comms
                  </p>
                  <a
                    href="mailto:architect@neural-lab.ai"
                    className="mt-1.5 block break-words text-sm font-black text-[#dce7ff] transition hover:text-[#64ffe7]"
                  >
                    architect@neural-lab.ai
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-5 border-t border-cyan-300/10 pt-4">
              <p className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-slate-300/80">
                Local Timezone
              </p>
              <p className="mt-2.5 flex items-center gap-3 text-xs font-semibold text-slate-200/90">
                <span className="h-2 w-2 rounded-full bg-[#36d3c5]" />
                IST (UTC+5:30) // ACTIVE
              </p>
            </div>
          </aside>

          <div className="relative h-28 overflow-hidden border border-cyan-300/15 bg-[#071d38]">
            <iframe
              title="Kolkata location map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=88.2539%2C22.4726%2C88.4739%2C22.6726&layer=mapnik&marker=22.5726%2C88.3639"
              className="h-full w-full border-0 grayscale invert"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="pointer-events-none absolute inset-0 bg-[#03162d]/25 mix-blend-multiply" />
            <a
              href="https://www.google.com/maps/search/?api=1&query=Kolkata%2C%20West%20Bengal%2C%20India"
              target="_blank"
              rel="noreferrer"
              className="absolute bottom-3 left-3 border border-[#64ffe7] bg-[#071d38]/90 px-2.5 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.12em] text-[#64ffe7] transition hover:bg-[#64ffe7] hover:text-[#06172f]"
            >
              MAP_COORDINATES_22.5726_N_88.3639_E
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="border border-cyan-300/15 bg-[#0d213f]/90 p-4 sm:p-5"
        >
          <h3 className="text-xl font-black uppercase tracking-[0] text-[#dce7ff] drop-shadow-[0_3px_0_rgba(0,0,0,0.42)]">
            Transmit_Data
          </h3>

          <div className="mt-5 space-y-4">
            <label className="block">
              <span className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-slate-300/80">
                Identity_Name
              </span>
              <input
                type="text"
                name="from_name"
                value={formData.from_name}
                onChange={updateField}
                required
                suppressHydrationWarning
                placeholder="ENTER YOUR FULL NAME"
                className="mt-2 h-10 w-full border border-transparent bg-white px-4 text-xs font-semibold tracking-[0.12em] text-[#06172f] outline-none transition placeholder:text-slate-300 focus:border-[#64ffe7]"
              />
            </label>

            <label className="block">
              <span className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-slate-300/80">
                Comm_Envelope_Email
              </span>
              <input
                type="email"
                name="from_email"
                value={formData.from_email}
                onChange={updateField}
                required
                suppressHydrationWarning
                placeholder="YOUR@DOMAIN.COM"
                className="mt-2 h-10 w-full border border-transparent bg-white px-4 text-xs font-semibold tracking-[0.12em] text-[#06172f] outline-none transition placeholder:text-slate-300 focus:border-[#64ffe7]"
              />
            </label>

            <label className="block">
              <span className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-slate-300/80">
                Message_Payload
              </span>
              <textarea
                name="message"
                value={formData.message}
                onChange={updateField}
                required
                suppressHydrationWarning
                rows={3}
                placeholder="DESCRIBE YOUR PROJECT OR INQUIRY..."
                className="mt-2 w-full resize-none border-b border-slate-500/70 bg-transparent py-2 text-xs font-semibold text-slate-100 outline-none transition placeholder:text-slate-300 focus:border-[#64ffe7]"
              />
            </label>
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            suppressHydrationWarning
            className="mt-5 flex h-10 w-full items-center justify-center gap-3 border border-[#64ffe7] text-xs font-black uppercase tracking-[0.16em] text-[#64ffe7] transition hover:bg-[#64ffe7] hover:text-[#06172f] disabled:cursor-not-allowed disabled:opacity-60 sm:w-56"
          >
            {status === "sending" ? "Sending" : "Send Message"}
            <FiSend className="h-4 w-4" />
          </button>

          {status !== "idle" && (
            <p className="mt-3 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#64ffe7]">
              {status === "success" && "Message transmitted successfully."}
              {status === "error" && "Transmission failed. Please try again."}
              {status === "missing-config" &&
                "EmailJS configuration missing. Add your public environment variables."}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
