import FadeInSection from "./FadeInSection"
import { FaShieldAlt, FaBrain, FaTerminal } from "react-icons/fa"

const securityProjects = [
  {
    icon: FaShieldAlt,
    title: "STEALTH",
    subtitle: "Strategic Threat Evaluation & AI-Linked Threat Heuristics",
    description:
      "A security-focused project exploring structured threat evaluation and the use of intelligent systems to assist with security analysis.",
    focus: [
      "Threat evaluation",
      "Security analysis",
      "AI-assisted reasoning",
      "Structured security heuristics",
    ],
    status: "Developing",
  },
  {
    icon: FaTerminal,
    title: "Security Labs & Experiments",
    subtitle: "Hands-on security learning",
    description:
      "A growing collection of practical experiments focused on understanding vulnerabilities, systems, networks, and defensive security concepts.",
    focus: [
      "Web security",
      "Linux and systems",
      "Network analysis",
      "Security tooling",
    ],
    status: "Expanding",
  },
  {
    icon: FaBrain,
    title: "Security Automation",
    subtitle: "Programming for security",
    description:
      "Exploring how programming and automation can be applied to security analysis, repetitive tasks, and intelligent security workflows.",
    focus: [
      "Python automation",
      "Security scripting",
      "Data analysis",
      "AI-assisted security workflows",
    ],
    status: "Developing",
  },
]

function Vision() {
  return (
    <section
      id="security"
      className="py-24 px-6 bg-slate-950 text-white"
    >
      <FadeInSection>
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-[0.3em] uppercase text-cyan-400 mb-4">
              Security Projects & Research
            </p>

            <h2 className="text-4xl md:text-5xl font-bold">
              Building Toward Security Engineering
            </h2>

            <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-400">
              A growing body of practical work exploring cybersecurity,
              threat analysis, security automation, and intelligent systems.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {securityProjects.map((project) => {
              const Icon = project.icon

              return (
                <article
                  key={project.title}
                  className="p-7 rounded-2xl border border-slate-800 bg-slate-900 hover:border-cyan-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300"
                >
                  <Icon className="text-4xl text-cyan-400 mb-6" />

                  <div className="flex items-center justify-between gap-4 mb-4">
                    <h3 className="text-2xl font-bold">
                      {project.title}
                    </h3>

                    <span className="text-xs px-3 py-1 rounded-full border border-cyan-500/30 text-cyan-400">
                      {project.status}
                    </span>
                  </div>

                  <p className="text-sm font-medium text-slate-300 mb-5">
                    {project.subtitle}
                  </p>

                  <p className="text-slate-400 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div>
                    <p className="text-sm font-semibold text-white mb-3">
                      Focus
                    </p>

                    <ul className="space-y-2">
                      {project.focus.map((item) => (
                        <li
                          key={item}
                          className="text-sm text-slate-400 flex items-center gap-2"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              )
            })}
          </div>

        </div>
      </FadeInSection>
    </section>
  )
}

export default Vision
