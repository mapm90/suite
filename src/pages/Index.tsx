import { motion } from "framer-motion";
import { Github, ExternalLink, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import preview from '../medias/previw.png';
import previewdc from '../medias/previw data calc.png';
import previewcalc from '../medias/previw calc.png';
import previewcalorias from '../medias/previw calorias.png';
import previewcalculadoraIMC from '../medias/previw calculadora IMC.png';
import unidos from '../medias/unidos.png';
import playmusic from '../medias/playmusic.png';


const applications = [
  // ... (igual que antes)
  {
    id: 1,
    name: "SMS adapt",
    description: "A simple yet innovative android SMS management application that transforms text by applying customized linguistic rules to reduce characters without affecting readability or comprehension. Designed for environments where efficiency is essential, it integrates artificial intelligence principles to adapt to continuous use.",
    image: unidos,
    vercelUrl: "https://smscard.vercel.app/",
    githubUrl: "https://github.com/mapm90/smacard",
    tags: ["Kotlin", "Jetpack Compose"]
  },
  {
    id: 2,
    name: "Elapsed time between two dates",
    description: "Quickly calculate the time elapsed between two dates, showing the difference in years, months, days, and more.",
    image: previewdc,
    vercelUrl: "https://databetwen.vercel.app/",
    githubUrl: "https://github.com/mapm90/data_time",
    tags: ["React", "TypeScript", "Tailwind CSS"]
  },
  {
    id: 3,
    name: "Scientific Calculator",
    description: "A versatile calculator for accurate mathematical operations, offering a smooth and intuitive user experience.",
    image: previewcalc,
    vercelUrl: "https://supcalculator.vercel.app/",
    githubUrl: "https://github.com/mapm90/calculator",
    tags: ["React","TypeScript", "Tailwind CSS3"]
  },
  {
    id: 4,
    name: "Calorie Calculator",
    description: "This Calorie Calculator helps you estimate the number of calories burned or required based on your activity and goals.",
    image: previewcalorias,
    vercelUrl: "https://caloriesreduct.vercel.app/",
    githubUrl: "https://github.com/mapm90/caloriesreduct",
    tags: ["React","TypeScript", "Tailwind CSS3"]
  },
  {
    id: 5,
    name: "Body Mass Index Calculator (BMI Calculator)",
    description: "Quickly calculate your BMI to check your weight category and track your fitness.",
    image: previewcalculadoraIMC,
    vercelUrl: "https://bmicalculators.vercel.app/",
    githubUrl: "https://github.com/mapm90/bmicalculator",
    tags: ["React","TypeScript", "Tailwind CSS3"]
  },
  {
    id: 6,
    name: "Clima Mundial",
    description: "Stay updated with real-time weather data. Check temperature, humidity, wind, forecasts, easily. Your complete weather companion, anytime, anywhere..",
    image: preview,
    vercelUrl: "https://geo-clima.vercel.app/",
    githubUrl: "https://github.com/mapm90/geo_clima",
    tags: ["React", "TypeScript", "API Integration", "Tailwind CSS"]
  },
  {
    id: 7,
    name: "Music Player",
    description: "A modern music player application that allows you to search, play, and manage your favorite songs with a sleek interface and smooth performance.",
    image: playmusic, // Reemplazar con la imagen del reproductor de música     
    vercelUrl: "https://playamusic.vercel.app/",
    githubUrl: "https://github.com/mapm90/playmusic",
    tags: ["React", "TypeScript", "API Integration", "Tailwind CSS"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#232526] to-[#1a2980] relative">
      {/* Fondo premium animado */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-gradient-to-br from-[#00c6ff]/40 via-[#0072ff]/30 to-[#f7971e]/10 blur-[120px] opacity-70 animate-pulse" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[#f7971e]/40 via-[#ffd200]/20 to-[#232526]/0 blur-2xl opacity-50 animate-pulse" />
        <div className="absolute top-1/3 left-0 w-[300px] h-[300px] rounded-full bg-gradient-to-br from-[#fff]/10 via-[#00c6ff]/10 to-transparent blur-2xl opacity-30" />
      </div>

      {/* Hero Section */}
      <motion.section
        className="relative py-20 px-6 text-center flex flex-col items-center justify-center min-h-[55vh] overflow-hidden z-10"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="inline-flex items-center gap-3 px-6 py-3 bg-white/20 border border-white/20 rounded-full text-base text-white font-semibold shadow-lg backdrop-blur-lg mb-7"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7, type: "spring" }}
        >
          <Code className="w-5 h-5 text-[#00c6ff]" />
          <span className="tracking-wide">Premium Full Stack Developer</span>
        </motion.div>

        <motion.h1
          className="text-6xl md:text-7xl font-extrabold mb-5 bg-gradient-to-r from-[#00c6ff] via-[#0072ff] to-[#f7971e] bg-clip-text text-transparent drop-shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
        >
          Elevate Your Experience
        </motion.h1>

        <motion.p
          className="text-2xl md:text-3xl text-white/90 mb-8 max-w-2xl mx-auto font-light drop-shadow"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
        >
          Discover a suite of modern, high-end web and android applications crafted with precision, innovation, and a passion for technology.
        </motion.p>

        <motion.div
          className="flex items-center justify-center gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, type: "spring" }}
        >
          <a href="https://github.com/mapm90/" target="_blank" rel="noopener noreferrer">
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

      {/* Menor espacio entre hero y grid */}
      <section className="py-4 px-6 z-10 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white drop-shadow-lg">Featured Projects</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Explore my latest applications, each crafted with attention to detail and modern development practices.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {applications.map((app) => (
              <motion.div
                key={app.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="group overflow-hidden border-0 shadow-2xl hover:shadow-[0_8px_32px_0_rgba(0,198,255,0.25)] transition-all duration-300 bg-gradient-to-br from-[#232526]/80 via-[#1a2980]/70 to-[#00c6ff]/30 backdrop-blur-lg rounded-2xl relative border border-[#00c6ff]/30 hover:border-[#ffd200]/60 ring-1 ring-[#fff]/10">
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={app.image}
                      alt={app.name}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105 rounded-t-2xl"
                      whileHover={{ scale: 1.05 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300 rounded-t-2xl" />

                    <div className="absolute top-4 right-4 flex gap-2 z-10">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          size="sm"
                          variant="secondary"
                          className="h-8 w-8 p-0 bg-white/30 backdrop-blur border-0 hover:bg-white/40"
                          asChild
                        >
                          <a href={app.vercelUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-3 h-3 text-[#00c6ff]" />
                          </a>
                        </Button>
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          size="sm"
                          variant="secondary"
                          className="h-8 w-8 p-0 bg-white/30 backdrop-blur border-0 hover:bg-white/40"
                          asChild
                        >
                          <a href={app.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-3 h-3 text-[#ffd200]" />
                          </a>
                        </Button>
                      </motion.div>
                    </div>
                  </div>

                  <CardHeader className="pb-2 pt-4">
                    <CardTitle className="text-xl font-bold text-white group-hover:text-[#ffd200] transition-colors drop-shadow">
                      {app.name}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed text-white/80 font-medium drop-shadow-sm">
                      {app.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {app.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs font-semibold bg-gradient-to-r from-[#00c6ff]/60 to-[#ffd200]/60 text-white rounded-full shadow"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        className="flex-1 gap-1.5 bg-gradient-to-r from-[#00c6ff] to-[#ffd200] text-white font-semibold shadow hover:from-[#0072ff] hover:to-[#ffd200] border-0"
                        asChild
                      >
                        <a href={app.vercelUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3 h-3" />
                          Demo
                        </a>
                      </Button>

                        <Button
                        size="sm"
                        variant="ghost"
                        className="flex-1 gap-1.5 bg-gradient-to-r from-[#232526]/80 to-[#00c6ff]/30 text-white font-semibold border-0 hover:from-[#ffd200]/70 hover:to-[#00c6ff]/80 hover:text-black transition-all duration-300"
                        asChild
                        >
                        <a href={app.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-3 h-3" />
                          Source
                        </a>
                        </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        className="py-10 px-6 border-t border-white/10 bg-gradient-to-t from-[#232526]/70 via-[#1a2980]/40 to-transparent z-10 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white/70 mb-2 font-medium">
            Built with React, TypeScript, Tailwind CSS, and Framer Motion
          </p>
        </div>
      </motion.footer>
    </div>
  );
};

export default Index;
