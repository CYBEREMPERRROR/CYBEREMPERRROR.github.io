import FadeInSection from "./FadeInSection"
import { FaCalendarAlt, FaClipboardCheck, FaRobot } from "react-icons/fa"

const projects = [
  {
    icon: FaCalendarAlt,
    title: "Lecture Scheduling System",
    category: "Production Web System",
    problem:
      "Designed to solve lecture clashes and improve scheduling across a university environment.",
    built:
      "A scheduling platform with conflict detection, authenticated lecturer access, structured database storage, and controlled scheduling functionality.",
    security:
      "Authentication and controlled access prevent students from accessing lecturer scheduling functionality, while backend logic validates scheduling conflicts.",
    impact:
      "Reduced lecture clashes by over 90% and enabled lectures to be scheduled up to four weeks in advance.",
  },
  {
    icon: FaClipboardCheck,
    title: "Exam Scheduling System",
    category: "Role-Based Management System",
    problem:
      "Designed to help exam officers coordinate examinations without overlapping schedules or conflicting entries.",
    built:
      "A role-based scheduling system with secure exam officer login, timetable generation, duplicate-entry prevention, and downloadable invigilator lists.",
    security:
      "Role separation and controlled permissions ensure that different exam officers can perform only the actions assigned to their responsibilities.",
    impact:
      "Made examination scheduling more efficient, structured, and reliable for the school examination unit.",
  },
  {
    icon: FaRobot,
    title: "Dr. Akanbi's Tech Hub",
    category: "AI-Powered Academic Platform",
    problem:
      "Created to give students easier access to academic resources while providing tools for networking and project generation.",
    built:
      "A web platform combining study materials, event discovery through APIs, AI-powered project and case-study generation, and controlled paid access.",
    security:
      "The system required controlled access to academic resources and integration with external APIs while protecting application functionality and data.",
    impact:
      "Centralized academic resources, networking opportunities, and AI-powered learning tools into a single platform.",
  },
]

function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 bg-slate-100"
    >
      <FadeInSection>
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-[0.3em] uppercase text-cyan-600 mb-4">
              Featured Projects
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              Real Systems. Real Problems. Real Users.
            </h2>

            <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-600">
              Production-oriented systems built to solve practical problems
              within a real university environment.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project) => {
              const Icon = project.icon

              return (
                <article
                  key={project.title}
                  className="group bg-white rounded-2xl border border-slate-200 p-7 shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
                >
                  <Icon className="text-4xl text-cyan-600 mb-6" />

                  <p className="text-sm font-semibold uppercase tracking-wider text-cyan-600 mb-3">
                    {project.category}
                  </p>

                  <h3 className="text-2xl font-bold text-slate-900 mb-6">
                    {project.title}
                  </h3>

                  <div className="space-y-5 text-slate-600 leading-relaxed">

                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">
                        Problem
                      </h4>
                      <p>{project.problem}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">
                        What I Built
                      </h4>
                      <p>{project.built}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">
                        Security Considerations
                      </h4>
                      <p>{project.security}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">
                        Impact
                      </h4>
                      <p>{project.impact}</p>
                    </div>

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

export default Projects
