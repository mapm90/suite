
import { motion } from "framer-motion";
import { Github, ExternalLink, Code, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import preview from '../medias/previw.png';
import previewdc from '../medias/previw data calc.png';
import previewcalc from '../medias/previw calc.png';
import previewcalorias from '../medias/previw calorias.png';
import previewcalculadoraIMC from '../medias/previw calculadora IMC.png';
import unidos from '../medias/unidos.png';
const applications = [
{
    id: 1,
    name: "SMS adapt",
    description: "A simple yet innovative SMS management application that transforms text by applying customized linguistic rules to reduce characters without affecting readability or comprehension. Designed for environments where efficiency is essential, it integrates artificial intelligence principles to adapt to continuous use.",
    image: unidos,
    vercelUrl: "https://smscard.vercel.app/",
    githubUrl: "https://github.com/mapm90/sms_shorter",
    tags: ["Kotlin", "Jetpack Compose"]
  }  
  ,
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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <motion.section 
        className="relative py-20 px-6 text-center bg-gradient-to-br from-background via-secondary/20 to-background"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-full text-sm text-muted-foreground mb-6"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Code className="w-4 h-4" />
            Full Stack Developer
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            My Applications
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            A curated collection of modern web applications built with cutting-edge technologies and deployed on Vercel.
          </motion.p>
          
          <motion.div
            className="flex items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <a href="https://github.com/mapm90/" target="_blank" rel="noopener noreferrer">
                 <Button  size="lg" className="gap-2">
                    <Github className="w-4 h-4" />
                           GitHub Profile
                 </Button>
                      </a>
          </motion.div>
        </div>
      </motion.section>

      {/* Applications Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
                  className="text-center mb-16"
                     initial={{ opacity: 0, y: 20 }}
                       whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
                <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-card/50 backdrop-blur">
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={app.image}
                      alt={app.name}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      whileHover={{ scale: 1.05 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="absolute top-4 right-4 flex gap-2">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          size="sm"
                          variant="secondary"
                          className="h-8 w-8 p-0 bg-white/20 backdrop-blur border-0 hover:bg-white/30"
                          asChild
                        >
                          <a href={app.vercelUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-3 h-3" />
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
                          className="h-8 w-8 p-0 bg-white/20 backdrop-blur border-0 hover:bg-white/30"
                          asChild
                        >
                          <a href={app.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-3 h-3" />
                          </a>
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {app.name}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {app.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {app.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs bg-secondary/50 text-muted-foreground rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        className="flex-1 gap-1.5" 
                        asChild
                      >
                        <a href={app.vercelUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3 h-3" />
                          Live Demo
                        </a>
                      </Button>
                      
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="flex-1 gap-1.5" 
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
        className="py-12 px-6 border-t bg-secondary/20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground mb-4">
            Built with React, TypeScript, Tailwind CSS, and Framer Motion
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="ghost" size="sm" className="gap-2">
              <Github className="w-4 h-4" />
              GitHub
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <ExternalLink className="w-4 h-4" />
              Portfolio
            </Button>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Index;
