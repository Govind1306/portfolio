import { useTheme } from "./context/ThemeContext.jsx";
import { motion } from "framer-motion";
import Cursor from './components/Cursor.jsx';
import StarsBackground from './components/StarsBackground.jsx';

const user = {
    name: "Jane Doe",
    title: "Frontend Developer & UI Architect",
    location: "San Francisco, CA",
    bio: "I craft beautiful, intuitive, and performant web experiences. My passion lies at the intersection of design and technology.",
    email: "jane.doe@email.com",
    github: "janedoe",
    linkedin: "janedoe",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vue", "Figma", "Node.js"],
    projects: [
        { name: "Project Alpha", description: "A cutting-edge e-commerce platform.", link: "#", tags: ["React", "Next.js", "Tailwind"] },
        { name: "Project Beta", description: "An interactive data visualization dashboard.", link: "#", tags: ["Vue", "TypeScript", "D3.js"] },
        { name: "Project Gamma", description: "A sleek and modern marketing website.", link: "#", tags: ["React", "Framer Motion"] },
        { name: "Project Delta", description: "A mobile-first social networking app.", link: "#", tags: ["React Native", "Firebase"] },
    ],
};

function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();
    return (
        <div
            className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors ${
                theme === 'light' ? 'bg-gray-300' : 'bg-blue-500'
            }`}
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
            <motion.div
                className="w-6 h-6 bg-white rounded-full shadow-md"
                layout
                transition={{ type: "spring", stiffness: 700, damping: 30 }}
                style={{ marginLeft: theme === 'dark' ? 'auto' : '0' }}
            />
        </div>
    );
}

function App() {
    const { theme } = useTheme();

    return (
        <>
            <Cursor />
            <StarsBackground theme={theme} />

            <div 
              className={`fixed top-0 left-0 w-full h-full -z-10 transition-colors duration-500 ${
                theme === 'light' ? 'bg-gray-50' : 'bg-[#0B1120]'
              }`}
            />
            
            {/* --- THIS IS THE FIX --- */}
            {/* We add the base text colors here. Dark text for light mode, light text for dark mode. */}
            <div className="relative z-10 text-gray-800 dark:text-gray-200">
                <header className="flex items-center justify-between p-6 md:p-8">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xl font-bold tracking-wider uppercase">{user.name}</motion.div>
                    <ThemeSwitcher />
                </header>

                <main className="max-w-4xl mx-auto p-6 md:p-8">
                    <motion.section 
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center my-20 md:my-32"
                    >
                        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 pb-2">
                            {user.title}
                        </h1>
                        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-300">{user.bio}</p>
                    </motion.section>

                    <motion.section className="my-20 md:my-32">
                        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-4xl font-bold text-center mb-12">Skills</motion.h2>
                        <div className="flex flex-wrap justify-center gap-4">
                            {user.skills.map((skill, i) => (
                                <motion.div 
                                    key={skill}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="px-5 py-2 text-lg text-gray-700 dark:text-gray-900 bg-white/50 dark:bg-white/10 backdrop-blur-md rounded-full shadow-lg border border-white/20 dark:border-white/10"
                                >
                                    {skill}
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    <motion.section className="my-20 md:my-32">
                        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-4xl font-bold text-center mb-16">Projects</motion.h2>
                        <div className="grid md:grid-cols-2 gap-10">
                            {user.projects.map((project, i) => (
                                <motion.div 
                                    key={project.name}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.15 }}
                                    className="bg-white/40 dark:bg-white/5 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 dark:border-white/10 overflow-hidden group"
                                >
                                    <div className="p-6 md:p-8">
                                        <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                                        <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-500/20 dark:text-blue-200 rounded-full text-xs font-semibold">{tag}</span>
                                            ))}
                                        </div>
                                        <a href={project.link} className="font-semibold text-blue-600 dark:text-blue-400 group-hover:underline">View Project &rarr;</a>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center my-20 md:my-32">
                        <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">I'm currently available for freelance work and open to new opportunities.</p>
                        <motion.a href={`mailto:${user.email}`} whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px rgba(109, 40, 217, 0.7)" }} whileTap={{ scale: 0.95 }} className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg">
                            Say Hello
                        </motion.a>
                    </motion.section>
                </main>
            </div>
        </>
    );
}

export default App;