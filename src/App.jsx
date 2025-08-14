import { useTheme } from "./context/ThemeContext.jsx";
import { motion } from "framer-motion";
import Cursor from "./components/Cursor.jsx";
import StarsBackground from "./components/StarsBackground.jsx";
import ProjectStack from "./components/ProjectStack.jsx";
import GridBackground from "./components/GridBackground.jsx";

const user = {
  name: "Govind Mundhada",
  title: "Fullstack Developer",
  location: "Navi Mumbai, Maharashtra",
  bio: "Frontend-focused Software Developer with 2.8 years of experience building high-performance, scalable web apps with React.js and TypeScript. Experienced with micro-frontends, REST APIs, complex state, and production deployments using Docker, Kubernetes, and CI/CD.",
  email: "govind136m@gmail.com",
  phone: "+91-93219-09348",
  github: "https://github.com/Govind1306",
  linkedin: "https://www.linkedin.com/in/govind-136m",
  skills: [
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Redux",
    "Zustand",
    "Material UI",
    "Tailwind CSS",
    "Bootstrap",
    "Node.js",
    "REST API",
    "Micro-Frontends",
    "Spring Boot",
    "Microservices",
    "MySQL",
    "MongoDB",
    "NoSQL",
    "Supabase",
    "Kubernetes",
    "Docker",
    "Azure DevOps",
    "CI/CD",
    "Git/GitHub",
    "Java",
    "C++",
    "Python",
    "HTML5",
    "CSS3",
  ],
  experience: [
    {
      role: "Software Development Engineer",
      company: "Jio Platforms Limited",
      bullets: [
        "Built and maintained a fully responsive CRM using React.js, TypeScript, and Material UI.",
        "Improved frontend performance by ~30% via API debouncing, lazy loading, client-side pagination, and Redux optimizations.",
        "Architected micro-frontend modules to decompose a monolithic UI for scalability and maintainability.",
        "Automated CI/CD with Azure DevOps; reduced deployment cycles by ~40% with integrated tests and linting.",
        "Containerized apps with Docker for consistent local dev and deployments across environments.",
      ],
    },
  ],
  projects: [
    {
      name: "Today’s Menu",
      description:
        "Full‑stack app for tiffin providers and mess owners to manage menus, categories, reviews, and real‑time discovery.",
      link: "https://todays-menu-one.vercel.app/",
      tags: ["React", "TypeScript", "Tailwind", "Supabase", "Google Maps API"],
    },
  ],
  education: [
    {
      degree: "B.Tech, Electronics & Telecommunications",
      institution: "Government College of Engineering",
      location: "Amravati, Maharashtra",
      period: "08/2018 – 07/2022",
    },
  ],
};

// Theme toggle removed per request; theme remains managed by provider default

function App() {
  const { theme } = useTheme();
  const telHref = `tel:${(user.phone || "").replace(/\s+/g, "")}`;

  return (
    <>
      <Cursor />
      <GridBackground theme={theme} />
      <StarsBackground theme={theme} />

      <div
        className={`fixed top-0 left-0 w-full h-full -z-20 transition-colors duration-500 ${
          theme === "light" ? "bg-gray-50" : "bg-[#0B1120]"
        }`}
      />

      {/* Aurora gradient background layer */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div
          className="absolute inset-0 animate-aurora opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(120deg, rgba(236,72,153,0.6), rgba(168,85,247,0.6), rgba(34,211,238,0.6), rgba(59,130,246,0.6))",
            backgroundSize: "300% 300%",
            filter: "blur(60px)",
            maskImage:
              "radial-gradient(ellipse at center, black 40%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 40%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 text-gray-900 dark:text-gray-200">
        <main className="max-w-5xl mx-auto p-6 md:p-8">
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative text-center my-20 md:my-32"
          >
            <h1 className="font-display tracking-tight text-6xl md:text-8xl font-extrabold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-300 dark:from-fuchsia-300 dark:via-violet-300 dark:to-cyan-200 drop-shadow-[0_4px_24px_rgba(168,85,247,0.25)]">
              {user.name}
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 opacity-90">
              {user.title}
            </h2>

            <div className="mb-6 flex items-center justify-center gap-3">
              <a
                href={`mailto:${user.email}`}
                aria-label="Email"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/60 text-gray-900 dark:bg-white/10 dark:text-white border border-white/20 dark:border-white/10 hover:bg-white/70 dark:hover:bg-white/15 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M1.5 6.75A2.25 2.25 0 0 1 3.75 4.5h16.5a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 20.25 19.5H3.75A2.25 2.25 0 0 1 1.5 17.25V6.75Zm2.44-.75a.75.75 0 0 0-.69.46l8.25 5.25 8.25-5.25a.75.75 0 0 0-.69-.46H3.94Zm16.31 2.14-7.86 5.01a.75.75 0 0 1-.78 0L3.75 8.14v9.11c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75V8.14Z" />
                </svg>
                <span className="sr-only">Email</span>
              </a>
              {user.phone && (
                <a
                  href={telHref}
                  aria-label="Call"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/60 text-gray-900 dark:bg-white/10 dark:text-white border border-white/20 dark:border-white/10 hover:bg-white/70 dark:hover:bg-white/15 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path d="M2.25 5.25a2.25 2.25 0 0 1 2.25-2.25h2.007a1.5 1.5 0 0 1 1.44 1.08l.8 2.8a1.5 1.5 0 0 1-.386 1.47l-1.21 1.21a15.96 15.96 0 0 0 6.78 6.78l1.21-1.21a1.5 1.5 0 0 1 1.47-.386l2.8.8a1.5 1.5 0 0 1 1.08 1.44V19.5A2.25 2.25 0 0 1 18.75 21.75h-1.5C9.708 21.75 2.25 14.292 2.25 6.75v-1.5Z" />
                  </svg>
                  <span className="sr-only">Call</span>
                </a>
              )}
              {user.linkedin && (
                <a
                  href={user.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/60 text-gray-900 dark:bg-white/10 dark:text-white border border-white/20 dark:border-white/10 hover:bg-white/70 dark:hover:bg-white/15 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path d="M4.983 3.5C4.983 4.604 4.09 5.5 2.988 5.5 1.886 5.5.993 4.604.993 3.5.993 2.396 1.886 1.5 2.988 1.5c1.102 0 1.995.896 1.995 2Zm.017 4H1v15h4V7.5Zm5.5 0H7V22.5h4v-8.205c0-2.2 2.845-2.376 2.845 0V22.5h4v-9.5c0-5.86-6.68-5.645-8.345-2.76V7.5Z" />
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </a>
              )}
              {user.github && (
                <a
                  href={user.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/60 text-gray-900 dark:bg-white/10 dark:text-white border border-white/20 dark:border-white/10 hover:bg-white/70 dark:hover:bg-white/15 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.486 2 12.021c0 4.427 2.865 8.18 6.839 9.5.5.093.683-.217.683-.483 0-.237-.009-.866-.013-1.7-2.782.605-3.37-1.343-3.37-1.343-.455-1.155-1.11-1.464-1.11-1.464-.907-.62.068-.607.068-.607 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.833.091-.648.35-1.088.636-1.339-2.221-.253-4.556-1.114-4.556-4.958 0-1.095.39-1.99 1.03-2.692-.104-.253-.447-1.274.098-2.656 0 0 .84-.27 2.75 1.028A9.564 9.564 0 0 1 12 7.07c.85.004 1.705.115 2.503.337 1.909-1.298 2.748-1.028 2.748-1.028.546 1.382.203 2.403.1 2.656.64.702 1.029 1.597 1.029 2.692 0 3.854-2.338 4.703-4.566 4.951.359.31.678.921.678 1.855 0 1.338-.012 2.418-.012 2.747 0 .268.18.58.688.481A10.025 10.025 0 0 0 22 12.02C22 6.486 17.523 2 12 2Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">GitHub</span>
                </a>
              )}
            </div>

            <p className="max-w-2xl mx-auto text-lg md:text-xl">{user.bio}</p>

            {/* Floating keyword badges inspired by react.gg visuals */}
            <div className="hidden md:block">
              <motion.span
                className="absolute left-8 -top-6 px-4 py-1 rounded-full text-sm font-semibold bg-white/70 dark:bg-white/10 border border-white/40 dark:border-white/10 backdrop-blur-md"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                useState
              </motion.span>
              <motion.span
                className="absolute right-8 -top-10 px-4 py-1 rounded-full text-sm font-semibold bg-white/70 dark:bg-white/10 border border-white/40 dark:border-white/10 backdrop-blur-md"
                animate={{ y: [0, -14, 0] }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Props
              </motion.span>
              <motion.span
                className="absolute -left-6 top-24 px-4 py-1 rounded-full text-sm font-semibold bg-white/70 dark:bg-white/10 border border-white/40 dark:border-white/10 backdrop-blur-md"
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Components
              </motion.span>
              <motion.span
                className="absolute -right-4 top-28 px-4 py-1 rounded-full text-sm font-semibold bg-white/70 dark:bg-white/10 border border-white/40 dark:border-white/10 backdrop-blur-md"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 6.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                useEffect
              </motion.span>
            </div>

            <div className="mt-8 flex items-center justify-center gap-4">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg"
              >
                View Work
                <span aria-hidden>→</span>
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold border border-white/30 bg-white/60 text-gray-900 backdrop-blur-md dark:bg-white/10 dark:text-white dark:border-white/10"
              >
                Get in touch
              </motion.a>
            </div>
          </motion.section>

          <motion.section className="my-20 md:my-32">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-center mb-12"
            >
              Skills
            </motion.h2>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
              {user.skills.map((skill, i) => (
                <div
                  key={skill}
                  className="px-4 py-1.5 sm:px-5 sm:py-2 bg-white/60 text-gray-900 dark:text-white dark:bg-white/10 backdrop-blur-md rounded-full shadow-lg border border-white/20 dark:border-white/10 animate-fadeUp"
                  style={{ animationDelay: `${i * 120}ms` }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section className="my-20 md:my-32">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-center mb-12"
            >
              Experience
            </motion.h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {user.experience?.map((exp) => (
                <div
                  key={exp.company}
                  className="rounded-2xl p-[1px] bg-gradient-to-br from-fuchsia-500/60 via-violet-500/60 to-cyan-400/60"
                >
                  <div className="rounded-2xl bg-white/70 dark:bg-[#0B1120]/60 backdrop-blur-xl border border-white/20 dark:border-white/10 p-6 md:p-8">
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-4">
                      <h3 className="text-2xl font-bold">{exp.role}</h3>
                      <span className="text-sm opacity-80">{exp.company}</span>
                    </div>
                    <ul className="list-disc pl-5 space-y-2">
                      {exp.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section id="projects" className="my-16 md:my-28">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-center mb-10 md:mb-12"
            >
              Projects
            </motion.h2>
            <div className="hidden md:block">
              <div className="max-w-3xl mx-auto px-4">
                <ProjectStack projects={user.projects} />
              </div>
            </div>
            <div className="grid gap-6 md:hidden px-4 max-w-3xl mx-auto w-full">
              {user.projects.map((project) => (
                <div
                  key={project.name}
                  className="relative rounded-2xl p-[1px] bg-gradient-to-br from-blue-500/60 via-fuchsia-500/60 to-cyan-400/60 shadow-xl overflow-hidden"
                >
                  <div className="rounded-2xl bg-white/70 dark:bg-[#0B1120]/60 backdrop-blur-xl border border-white/20 dark:border-white/10 p-6">
                    <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                    <p className="mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-blue-100 text-blue-900 dark:bg-blue-500/20 dark:text-blue-200 rounded-full text-xs font-semibold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      className="inline-flex items-center gap-1 font-semibold text-blue-700 dark:text-blue-300 hover:underline"
                    >
                      View Project <span aria-hidden>→</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            id="contact"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center my-20 md:my-32"
          >
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg mb-8">
              I'm currently available for opportunities. Reach me at{" "}
              <a
                className="underline font-semibold"
                href={`mailto:${user.email}`}
              >
                {user.email}
              </a>{" "}
              or{" "}
              {user.phone && (
                <a className="underline font-semibold" href={telHref}>
                  {user.phone}
                </a>
              )}
              {user.linkedin && (
                <>
                  {" "}
                  ·{" "}
                  <a
                    className="underline font-semibold"
                    href={user.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </>
              )}
              {user.github && (
                <>
                  {" "}
                  ·{" "}
                  <a
                    className="underline font-semibold"
                    href={user.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </>
              )}
              .
            </p>
            <motion.a
              href={`mailto:${user.email}`}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 30px rgba(109, 40, 217, 0.7)",
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg"
            >
              Say Hello
            </motion.a>
          </motion.section>
        </main>
      </div>
    </>
  );
}

export default App;
