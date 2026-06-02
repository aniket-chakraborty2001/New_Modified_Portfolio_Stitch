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
          <span className="h-px w-10 bg-[#0ea5e9]" />
          <p className="text-[0.68rem] font-black uppercase tracking-[0.24em] text-[#0ea5e9]">
            Initiate Protocol
          </p>
        </div>

        <h2 className="mt-3 text-3xl font-black uppercase tracking-[0] sm:text-4xl">
          <span className="animate-pulse bg-gradient-to-r from-[#0ea5e9] via-[#d946ef] to-[#f59e0b] bg-clip-text text-transparent">
            Get_in_Touch_
          </span>
        </h2>

        <p className="mx-auto mt-3 max-w-3xl text-xs font-semibold leading-5 text-slate-700 sm:text-sm">
          Ready to collaborate on the next generation of intelligent
          applications? Reach out for research inquiries, partnership
          opportunities, or technical consulting.
        </p>
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="space-y-4">
          <aside className="border border-sky-200/80 bg-white/92 p-4 shadow-[0_18px_48px_rgba(14,165,233,0.1)] sm:p-5">
            <h3 className="text-xl font-black uppercase tracking-[0] text-[#172033] drop-shadow-[0_3px_0_rgba(14,165,233,0.12)]">
              Hub_Locator
            </h3>

            <div className="mt-5 space-y-5">
              <div className="flex gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-sky-200/80 bg-sky-50 text-[#0ea5e9]">
                  <HiOutlineLocationMarker className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-slate-600">
                    Operational Base
                  </p>
                  <p className="mt-1.5 text-sm font-black text-[#172033]">
                    Kolkata AI Research Hub
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-600">
                    Kolkata, West Bengal
                    <br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-sky-200/80 bg-sky-50 text-[#0ea5e9]">
                  <HiOutlineAtSymbol className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-slate-600">
                    Direct Comms
                  </p>
                  <a
                    href="mailto:architect@neural-lab.ai"
                    className="mt-1.5 block break-words text-sm font-black text-[#172033] transition hover:text-[#0ea5e9]"
                  >
                    architect@neural-lab.ai
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-5 border-t border-sky-200/80 pt-4">
              <p className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-slate-600">
                Local Timezone
              </p>
              <p className="mt-2.5 flex items-center gap-3 text-xs font-semibold text-slate-700">
                <span className="h-2 w-2 rounded-full bg-[#14b8a6]" />
                IST (UTC+5:30) // ACTIVE
              </p>
            </div>
          </aside>

          <div className="relative h-28 overflow-hidden border border-sky-200/80 bg-sky-50 shadow-[0_18px_48px_rgba(14,165,233,0.1)]">
            <iframe
              title="Kolkata location map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=88.2539%2C22.4726%2C88.4739%2C22.6726&layer=mapnik&marker=22.5726%2C88.3639"
              className="h-full w-full border-0 saturate-150"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="pointer-events-none absolute inset-0 bg-sky-100/20 mix-blend-multiply" />
            <a
              href="https://www.google.com/maps/search/?api=1&query=Kolkata%2C%20West%20Bengal%2C%20India"
              target="_blank"
              rel="noreferrer"
              className="absolute bottom-3 left-3 border border-[#0ea5e9] bg-white/92 px-2.5 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.12em] text-[#0ea5e9] transition hover:bg-[#0ea5e9] hover:text-white"
            >
              MAP_COORDINATES_22.5726_N_88.3639_E
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="border border-sky-200/80 bg-white/92 p-4 shadow-[0_18px_48px_rgba(14,165,233,0.1)] sm:p-5"
        >
          <h3 className="text-xl font-black uppercase tracking-[0] text-[#172033] drop-shadow-[0_3px_0_rgba(14,165,233,0.12)]">
            Transmit_Data
          </h3>

          <div className="mt-5 space-y-4">
            <label className="block">
              <span className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-slate-600">
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
                className="mt-2 h-10 w-full border border-sky-200 bg-white px-4 text-xs font-semibold tracking-[0.12em] text-[#172033] outline-none transition placeholder:text-slate-400 focus:border-[#0ea5e9]"
              />
            </label>

            <label className="block">
              <span className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-slate-600">
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
                className="mt-2 h-10 w-full border border-sky-200 bg-white px-4 text-xs font-semibold tracking-[0.12em] text-[#172033] outline-none transition placeholder:text-slate-400 focus:border-[#0ea5e9]"
              />
            </label>

            <label className="block">
              <span className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-slate-600">
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
                className="mt-2 w-full resize-none border-b border-slate-300 bg-transparent py-2 text-xs font-semibold text-[#172033] outline-none transition placeholder:text-slate-400 focus:border-[#0ea5e9]"
              />
            </label>
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            suppressHydrationWarning
            className="mt-5 flex h-10 w-full items-center justify-center gap-3 border border-[#0ea5e9] text-xs font-black uppercase tracking-[0.16em] text-[#0ea5e9] transition hover:bg-[#0ea5e9] hover:text-white disabled:cursor-not-allowed disabled:opacity-60 sm:w-56"
          >
            {status === "sending" ? "Sending" : "Send Message"}
            <FiSend className="h-4 w-4" />
          </button>

          {status !== "idle" && (
            <p className="mt-3 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#0ea5e9]">
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
