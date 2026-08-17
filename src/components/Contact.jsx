import FadeInSection from "./FadeInSection"
import {
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa"

function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-slate-100"
    >
      <FadeInSection>
        <div className="max-w-3xl mx-auto">

          <div className="text-center mb-12">
            <p className="text-sm font-semibold tracking-[0.3em] uppercase text-cyan-600 mb-4">
              Contact
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              Let's Connect
            </h2>

            <p className="mt-6 text-lg text-slate-600">
              Interested in working together, discussing a security project,
              or connecting about an opportunity?
            </p>
          </div>

          <div className="flex flex-col gap-4">

            <a
              href="tel:+2348118005577"
              className="group flex items-center justify-between w-full p-5 rounded-2xl bg-slate-950 text-white hover:bg-slate-900 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <FaPhone className="text-cyan-400 text-xl" />

                <div className="text-left">
                  <p className="font-semibold">
                    Call Me
                  </p>

                  <p className="text-sm text-slate-400">
                    +234 811 800 5577
                  </p>
                </div>
              </div>

              <span className="text-slate-500 group-hover:text-cyan-400 transition-colors">
                →
              </span>
            </a>

            <a
              href="https://wa.me/2349023300986?text=Hello%20Yahuza%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect."
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between w-full p-5 rounded-2xl bg-slate-950 text-white hover:bg-slate-900 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <FaWhatsapp className="text-cyan-400 text-2xl" />

                <div className="text-left">
                  <p className="font-semibold">
                    WhatsApp Me
                  </p>

                  <p className="text-sm text-slate-400">
                    +234 902 330 0986
                  </p>
                </div>
              </div>

              <span className="text-slate-500 group-hover:text-cyan-400 transition-colors">
                →
              </span>
            </a>

            <a
              href="mailto:yunusyehuzamusa@gmail.com"
              className="group flex items-center justify-between w-full p-5 rounded-2xl bg-slate-950 text-white hover:bg-slate-900 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-cyan-400 text-xl" />

                <div className="text-left">
                  <p className="font-semibold">
                    Email Me
                  </p>

                  <p className="text-sm text-slate-400">
                    yunusyehuzamusa@gmail.com
                  </p>
                </div>
              </div>

              <span className="text-slate-500 group-hover:text-cyan-400 transition-colors">
                →
              </span>
            </a>

          </div>

        </div>
      </FadeInSection>
    </section>
  )
}

export default Contact
