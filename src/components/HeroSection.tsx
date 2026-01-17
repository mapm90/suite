import { motion, type Easing } from "framer-motion";
import { Code, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import perfil from "../medias/perfil.jpg";
import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiKotlin,
  SiTailwindcss,
  SiAndroidstudio,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiExpress,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiVercel,
  SiAndroid,
  SiVsco,
  SiTsnode,
  SiNextdotjs,
  SiJetpackcompose,
} from "react-icons/si";
import {} from "react-icons/si";

const technologies = [
  { icon: SiReact, name: "React", color: "text-vibrant-cyan" },
  { icon: SiTypescript, name: "TypeScript", color: "text-vibrant-purple" },
  { icon: SiNodedotjs, name: "Node.js", color: "text-vibrant-cyan" },
  { icon: SiKotlin, name: "Kotlin", color: "text-vibrant-orange" },
  { icon: SiTailwindcss, name: "Tailwind", color: "text-vibrant-cyan" },
  { icon: SiJavascript, name: "JavaScript", color: "text-vibrant-yellow" },
  { icon: SiHtml5, name: "HTML5", color: "text-vibrant-orange" },
  { icon: SiCss3, name: "CSS3", color: "text-vibrant-blue" },
  { icon: SiMongodb, name: "MongoDB", color: "text-vibrant-green" },
  { icon: SiExpress, name: "Express", color: "text-vibrant-gray" },
  { icon: SiPostgresql, name: "PostgreSQL", color: "text-vibrant-blue" },
  { icon: SiGit, name: "Git", color: "text-vibrant-red" },
  { icon: SiGithub, name: "GitHub", color: "text-vibrant-black" },
  { icon: SiVercel, name: "Vercel", color: "text-vibrant-black" },

  { icon: SiVsco, name: "VS Code", color: "text-vibrant-blue" },
  {
    icon: SiJetpackcompose,
    name: "Jetpack Compose",
    color: "text-vibrant-green",
  },
  {
    icon: SiAndroidstudio,
    name: "Android Studio",
    color: "text-vibrant-green",
  },
  { icon: SiAndroid, name: "Android", color: "text-vibrant-green" },
  { icon: SiTsnode, name: "TS Node", color: "text-vibrant-green" },
  { icon: SiNextdotjs, name: "Next.js", color: "text-vibrant-black" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut" as Easing,
    },
  },
};

const techVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.8 + i * 0.1,
      duration: 0.4,
      ease: "backOut" as Easing,
    },
  }),
};

const HeroSection = () => {
  return (
    <motion.section
      className="relative flex min-h-screen flex-col items-center justify-center px-4 py-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Animated Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-vibrant-purple/20 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-vibrant-cyan/20 blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-20 left-1/3 h-80 w-80 rounded-full bg-vibrant-pink/15 blur-3xl"
          animate={{
            x: [0, 40, 0],
            y: [0, -20, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Badge */}
      <motion.div
        className="inline-flex items-center gap-3 px-6 py-3 bg-white/20 border border-white/20 rounded-full text-base text-white font-semibold shadow-lg backdrop-blur-lg mb-7"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7, type: "spring" }}
      >
        <Code className="w-5 h-5 text-[#00c6ff]" />
        <span className="tracking-wide">Premium Full Stack Developer</span>
      </motion.div>

      {/* Animated Photo */}
      <motion.div variants={itemVariants} className="relative mb-8">
        {/* Glow effect behind photo */}
        <div className="glow-border animate-glow-rotate absolute -inset-1 rounded-full opacity-75 blur-sm" />
        <div className="glow-border animate-glow-rotate absolute -inset-2 rounded-full opacity-50 blur-md" />
        <div className="glow-border animate-glow-rotate absolute -inset-3 rounded-full opacity-30 blur-lg" />

        {/* Photo container */}
        <motion.div
          className="animate-pulse-glow relative h-40 w-40 overflow-hidden rounded-full border-4 border-background md:h-52 md:w-52"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={perfil}
            alt="Developer Profile"
            className="h-full w-full object-cover"
          />
        </motion.div>
      </motion.div>

      {/* Title */}
      <motion.h1
        className="text-6xl md:text-7xl font-extrabold mb-5 bg-gradient-to-r from-[#00c6ff] via-[#0072ff] to-[#f7971e] bg-clip-text text-transparent drop-shadow-xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
      >
        Elevate Your Experience
      </motion.h1>

      {/* Description */}
      <motion.p
        variants={itemVariants}
        className="mb-8 max-w-2xl text-center text-lg text-muted-foreground md:text-xl"
      >
        Discover a suite of modern, high-end web and Android applications
        crafted with precision, innovation, and a passion for technology.
      </motion.p>

      {/* Technology Icons */}
      <motion.div
        className="mb-10 flex flex-wrap items-center justify-center gap-4 md:gap-6"
        variants={containerVariants}
      >
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            custom={index}
            variants={techVariants}
            className="group relative"
            whileHover={{ scale: 1.2, y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col items-center gap-1">
              <div
                className={`rounded-xl bg-card/80 p-3 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:shadow-xl ${tech.color}`}
              >
                <tech.icon className="h-6 w-6 md:h-8 md:w-8" />
              </div>
              <span className="text-xs font-medium text-muted-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {tech.name}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="flex items-center justify-center gap-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8, type: "spring" }}
      >
        <a
          href="https://github.com/mapm90/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            size="lg"
            className="gap-2 bg-gradient-to-r from-[#00c6ff] to-[#f7971e] text-white font-semibold shadow-xl hover:from-[#0072ff] hover:to-[#ffd200] transition-all duration-300 border-0"
          >
            <Github className="w-5 h-5" />
            GitHub Profile
          </Button>
        </a>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
