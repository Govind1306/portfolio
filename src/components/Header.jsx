import { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../theme-context.js";

function ThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext);

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setTheme("light")}
        className={`w-14 h-8 rounded-full flex items-center justify-center focus:outline-none ${
          theme === "light" ? "bg-blue-500" : "bg-gray-700"
        }`}
      >
        <span className="text-white text-xs">Light</span>
      </button>
      <div
        className="w-16 h-8 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center p-1 cursor-pointer"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <motion.div
          className="w-6 h-6 bg-white rounded-full shadow-md"
          layout
          transition={spring}
          style={{ x: theme === "dark" ? 28 : 0 }}
        />
      </div>
      <button
        onClick={() => setTheme("dark")}
        className={`w-14 h-8 rounded-full flex items-center justify-center focus:outline-none ${
          theme === "dark" ? "bg-indigo-500" : "bg-gray-700"
        }`}
      >
        <span className="text-white text-xs">Dark</span>
      </button>
    </div>
  );
}


export default function Header({ user }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring" } },
  };

  return (
    <motion.header
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-start md:items-center justify-between p-8 border-b border-gray-200 dark:border-gray-800"
    >
      <motion.div variants={itemVariants} className="text-left mb-6 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-400 pb-2">
          {user.name}
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-semibold">
          {user.title}
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          {user.location}
        </p>
      </motion.div>
      <motion.div variants={itemVariants}>
        <ThemeSwitcher />
      </motion.div>
    </motion.header>
  );
}