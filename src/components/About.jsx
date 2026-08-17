import FadeInSection from "./FadeInSection"

function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-24 bg-white"
    >
      <FadeInSection>
        <div className="max-w-4xl">

          <p className="text-sm font-semibold tracking-[0.3em] uppercase text-cyan-600 mb-4">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
            Security-minded. Systems-focused.
          </h2>

          <div className="space-y-6 text-lg md:text-xl leading-relaxed text-slate-600">

            <p>
              I am a cybersecurity-focused technologist with hands-on
              experience designing and deploying real-world software systems.
              My primary direction is cybersecurity, with software engineering
              serving as one of my strongest technical foundations.
            </p>

            <p>
              My experience building applications with React, Node.js, and
              PostgreSQL has given me practical insight into how modern
              applications are structured — from frontend interfaces and APIs
              to authentication, authorization, databases, and backend logic.
            </p>

            <p>
              I have built and deployed systems used within a university
              environment, including a lecture scheduling platform, an exam
              scheduling system, and an AI-powered academic platform. These
              projects have exposed me to real users, real requirements,
              access control, data integrity, and production constraints.
            </p>

            <p>
              I am now expanding that foundation toward cybersecurity,
              security engineering, threat analysis, and security automation.
              My objective is to understand systems deeply enough to build
              them securely, identify weaknesses, and develop practical
              solutions to security problems.
            </p>

          </div>

        </div>
      </FadeInSection>
    </section>
  )
}

export default About
