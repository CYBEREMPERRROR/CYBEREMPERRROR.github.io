import FadeInSection from "./FadeInSection"

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 bg-slate-950 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <FadeInSection>
        <div className="relative z-10 max-w-4xl text-center">

          <p className="text-sm md:text-base font-semibold tracking-[0.3em] uppercase text-cyan-400 mb-6">
            Cybersecurity • Software • Systems
          </p>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Yahuza Yunus Musa
          </h1>

          <h2 className="mt-6 text-2xl md:text-4xl font-semibold text-slate-300">
            Cybersecurity-Focused Technologist
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed text-slate-400">
            I build and analyze software systems with a security-first
            mindset, combining cybersecurity, software engineering, and
            automation to solve real-world problems.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

            <a
              href="#projects"
              className="px-7 py-4 rounded-xl bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="px-7 py-4 rounded-xl border border-slate-600 text-white font-semibold hover:border-cyan-400 hover:text-cyan-400 hover:-translate-y-1 transition-all duration-300"
            >
              Contact Me
            </a>

          </div>

        </div>
      </FadeInSection>
    </section>
  )
}

export default Hero
