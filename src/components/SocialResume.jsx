import FadeInSection from "./FadeInSection"
import {
  FaGithub,
  FaLinkedin,
  FaFileDownload,
} from "react-icons/fa"

function SocialResume() {
  return (
    <section
      id="social"
      className="py-24 px-6 bg-slate-950 text-white"
    >
      <FadeInSection>
        <div className="max-w-3xl mx-auto text-center">

          <p className="text-sm font-semibold tracking-[0.3em] uppercase text-cyan-400 mb-4">
            Professional Links
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Find Me Online
          </h2>

          <p className="mt-6 text-lg text-slate-400">
            Connect with me professionally or explore my technical work.
          </p>

          <div className="mt-10 flex flex-col gap-4">

            <a
              href="https://github.com/CYBEREMPERRROR"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between w-full p-5 rounded-2xl border border-slate-800 bg-slate-900 hover:border-cyan-500 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <FaGithub className="text-2xl text-cyan-400" />

                <div className="text-left">
                  <p className="font-semibold">
                    GitHub
                  </p>

                  <p className="text-sm text-slate-400">
                    View my code and projects
                  </p>
                </div>
              </div>

              <span className="text-slate-500 group-hover:text-cyan-400">
                →
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/yunus-yahuza-58474a33b"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between w-full p-5 rounded-2xl border border-slate-800 bg-slate-900 hover:border-cyan-500 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <FaLinkedin className="text-2xl text-cyan-400" />

                <div className="text-left">
                  <p className="font-semibold">
                    LinkedIn
                  </p>

                  <p className="text-sm text-slate-400">
                    Connect with me professionally
                  </p>
                </div>
              </div>

              <span className="text-slate-500 group-hover:text-cyan-400">
                →
              </span>
            </a>

            <a
              href="/resume.pdf"
              download
              className="group flex items-center justify-between w-full p-5 rounded-2xl border border-cyan-500/40 bg-cyan-500/10 hover:bg-cyan-500/20 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <FaFileDownload className="text-2xl text-cyan-400" />

                <div className="text-left">
                  <p className="font-semibold">
                    Download Resume
                  </p>

                  <p className="text-sm text-slate-400">
                    View my cybersecurity-focused resume
                  </p>
                </div>
              </div>

              <span className="text-slate-500 group-hover:text-cyan-400">
                ↓
              </span>
            </a>

          </div>

          <div className="mt-20 pt-8 border-t border-slate-800">
            <p className="text-sm text-slate-500">
              Yahuza Yunus Musa
            </p>

            <p className="mt-2 text-sm text-slate-600">
              Cybersecurity-Focused Technologist
            </p>
          </div>

        </div>
      </FadeInSection>
    </section>
  )
}

export default SocialResume
