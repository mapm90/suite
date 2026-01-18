import { motion, type Easing } from "framer-motion";
import { Code, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import perfil from "../medias/perfil.jpg";
import SplashCursor from "./SplashCursor";
import { Mail, Phone, MapPin, Cake } from "lucide-react";

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
const circleId = "circlePath-profile";

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
/**
 * Calcula la edad según año y mes de nacimiento
 * @param birthYear Año de nacimiento
 * @param birthMonth Mes de nacimiento (0 = enero, 11 = diciembre)
 * @returns Edad actual
 */
function calculateAge(birthYear: number, birthMonth: number): number {
  const today = new Date();
  let age = today.getFullYear() - birthYear;

  // Si aún no ha llegado el mes de cumpleaños, restamos 1
  if (today.getMonth() < birthMonth) {
    age--;
  }

  return age;
}

const age = calculateAge(1990, 10);
const ageprof = calculateAge(2015, 5);

const HeroSection = () => {
  return (
    <motion.section
      className="relative flex min-h-screen flex-col items-center justify-center px-4 py-5"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <SplashCursor />
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
        <span className="tracking-wide">
          Premium Full Stack Developer + {ageprof} years of experience in IT
        </span>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="relative mb-12 group flex flex-col items-center "
      >
        {/* Glow de colores dinámico */}
        <div className="absolute -inset-2 rounded-full opacity-60 blur-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 animate-glow-rotate"></div>
        <div className="absolute -inset-3 rounded-full opacity-30 blur-2xl bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 animate-glow-rotate animation-delay-2000"></div>

        {/* Avatar con borde sutil */}
        <motion.div
          className="relative z-10 h-52 w-52 md:h-52 md:w-52 overflow-hidden rounded-full border-4 border-white/30 bg-background"
          whileHover={{ scale: 1.08 }}
          transition={{ type: "spring", stiffness: 230, damping: 16 }}
        >
          <img
            src={perfil}
            alt="Miguel Pérez"
            className="h-full w-full object-cover"
          />
        </motion.div>

        {/* Badge pequeño de firma */}
        <motion.div
          className="
    absolute top-3 right-3 z-30
    rounded-full
    bg-black/50
    px-1 py-1
    text-xs font-semibold
    pointer-events-none
    text-white
    shadow-[0_0_8px_rgba(255,255,255,0.5)]   /* halo brillante */
  "
        >
          migueDEV
        </motion.div>
      </motion.div>

      {/* Title */}
      <motion.h1
        className="text-6xl text-center -mt-10 md:text-7xl font-extrabold mb-5 bg-gradient-to-r from-[#00c6ff] via-[#0072ff] to-[#f7971e] bg-clip-text text-transparent drop-shadow-xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 0.8, ease: "easeInOut" }}
        whileHover={{ y: -2, scale: 1.02 }}
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

      {/* Personal Info */}
      <motion.div
        variants={itemVariants}
        className="mb-10 flex flex-wrap justify-center gap-4 text-sm md:text-base"
      >
        <div className="flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 backdrop-blur-md border border-white/10">
          <Mail className="h-4 w-4 text-[#00c6ff]" />
          <span className="text-white">
            <a href="mailto:mpmorales05@gmail.com">mpmorales05@gmail.com</a>
          </span>
        </div>

        <div className="flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 backdrop-blur-md border border-white/10">
          <Phone className="h-4 w-4 text-[#f7971e]" />
          <span className="text-white">
            <a href="tel:+34600000000">+34 314479919</a>
          </span>
        </div>

        <div className="flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 backdrop-blur-md border border-white/10">
          <Cake className="h-4 w-4 text-[#ff5edf]" />
          <span className="text-white">{age} años</span>
        </div>

        <div className="flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 backdrop-blur-md border border-white/10">
          <MapPin className="h-4 w-4 text-[#00ff99]" />
          <span className="text-white">España</span>
        </div>
      </motion.div>

      {/* Technology Icons */}
      <motion.div
        className="p-5  border-border pt-8 mb-10 flex flex-wrap justify-center gap-4 md:gap-6"
        variants={containerVariants}
      >
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            custom={index}
            variants={techVariants}
            className="group relative flex  items-center justify-center w-14 md:w-14"
            whileHover={{ scale: 1.2, y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center gap-1 w-14">
              <div
                className={`rounded-xl bg-card/80 p-2 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:shadow-xl ${tech.color} flex items-center justify-center w-14 h-14 md:h-14`}
              >
                <tech.icon className="h-14 w-14 md:h-14 md:w-14" />
              </div>
              <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10 text-center">
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
