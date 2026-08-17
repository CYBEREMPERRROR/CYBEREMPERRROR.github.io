import FadeInSection from "./FadeInSection"
import {
  FaShieldAlt,
  FaLock,
  FaBug,
  FaNetworkWired,
  FaPython,
  FaLinux,
  FaCode,
  FaDatabase,
} from "react-icons/fa"

const securityAreas = [
  {
    icon: FaShieldAlt,
    title: "Application Security",
    description:
      "Understanding application architecture, attack surfaces, authentication, authorization, and secure development practices.",
  },
  {
    icon: FaLock,
    title: "Authentication & Access Control",
    description:
      "Building systems around authenticated users, role separation, controlled permissions, and protected application functionality.",
  },
  {
    icon: FaBug,
    title: "Threat Analysis",
    description:
      "Analyzing systems and potential weaknesses to understand how threats can affect applications and their users.",
  },
  {
    icon: FaNetworkWired,
    title: "Security Automation",
    description:
      "Using programming and automation to make security analysis and repetitive security tasks more efficient.",
  },
]

const engineeringSkills = [
  {
    icon: FaPython,
    title: "Python",
    description:
      "Programming, automation, scripting, and security-oriented tooling.",
  },
  {
    icon: FaLinux,
    title: "Linux",
    description:
      "Systems environment for development, experimentation, and security work.",
  },
  {
    icon: FaCode,
    title: "JavaScript / Node.js",
    description:
      "Full-stack application development, APIs, backend logic, and system integration.",
  },
  {
    icon: FaDatabase,
    title: "PostgreSQL",
    description:
      "Relational databases, structured data, and backend data management.",
  },
]

function TechStack() {
  return (
    <section
      id="techstack"
      className="py-24 px-6 bg-slate-950 text-white"
    >
      <FadeInSection>
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-[0.3em] uppercase text-cyan-400 mb-4">
              Security Focus
            </p>

            <h2 className="text-4xl md:text-5xl font-bold">
              Where Security Meets Engineering
            </h2>

            <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-400">
              My technical foundation combines cybersecurity concepts with
              practical software engineering experience.
            </p>
          </div>

          <h3 className="text-2xl font-bold mb-8">
            Cybersecurity
          </h3>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {securityAreas.map((area) => {
              const Icon = area.icon

              return (
                <div
                  key={area.title}
                  className="p-6 rounded-2xl border border-slate-800 bg-slate-900 hover:border-cyan-500 hover:-translate-y-1 transition-all duration-300"
                >
                  <Icon className="text-3xl text-cyan-400 mb-5" />

                  <h4 className="text-xl font-semibold mb-3">
                    {area.title}
                  </h4>

                  <p className="text-slate-400 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              )
            })}
          </div>

          <h3 className="text-2xl font-bold mb-8">
            Engineering Foundation
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {engineeringSkills.map((skill) => {
              const Icon = skill.icon

              return (
                <div
                  key={skill.title}
                  className="p-6 rounded-2xl border border-slate-800 bg-slate-900 hover:border-cyan-500 hover:-translate-y-1 transition-all duration-300"
                >
                  <Icon className="text-3xl text-cyan-400 mb-5" />

                  <h4 className="text-xl font-semibold mb-3">
                    {skill.title}
                  </h4>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              )
            })}
          </div>

        </div>
      </FadeInSection>
    </section>
  )
}

export default TechStack
