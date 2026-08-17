import FadeInSection from "./FadeInSection"

function Direction() {
  return (
    <section
      id="direction"
      className="py-24 px-6 bg-white"
    >
      <FadeInSection>
        <div className="max-w-4xl mx-auto text-center">

          <p className="text-sm font-semibold tracking-[0.3em] uppercase text-cyan-600 mb-4">
            Current Direction
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            From Building Systems to Securing Them
          </h2>

          <p className="mt-8 text-lg md:text-xl leading-relaxed text-slate-600">
            I am currently developing deeper expertise in cybersecurity,
            security engineering, threat analysis, and security automation.
            My software engineering background gives me a practical
            understanding of how applications and backend systems are built,
            which I am applying toward understanding how those systems can be
            secured.
          </p>

          <p className="mt-6 text-lg md:text-xl leading-relaxed text-slate-600">
            I am particularly interested in the intersection of cybersecurity,
            intelligent automation, and software engineering — building tools
            and systems that can identify problems, reduce risk, and improve
            the security of modern technology.
          </p>

          <div className="mt-10 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-medium">
            Open to cybersecurity internships and opportunities
          </div>

        </div>
      </FadeInSection>
    </section>
  )
}

export default Direction
