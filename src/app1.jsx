import React ,{ useRef,useState, useEffect } from 'react';
import { loadSlim } from "tsparticles-slim";
import Particles from "react-particles";
import { motion, useScroll, useTransform } from 'framer-motion';
import '@fontsource/quicksand/300.css';
import '@fontsource/quicksand/400.css';
import '@fontsource/quicksand/500.css';
import '@fontsource/quicksand/600.css';
import '@fontsource/quicksand/700.css';
const ParticleBackground = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "transparent"
          }
        },
        fullScreen: {
          enable: true,
          zIndex: -1
        },
        particles: {
          color: {
            value: ["#000000", "#000000", "#000000"]
          },
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800
            }
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 0.5,
              sync: false
            }
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#000000",
            opacity: 0.4,
            width: 1
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "repulse"
            },
            onclick: {
              enable: true,
              mode: "push"
            },
            resize: true
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            }
          }
        },
        retina_detect: true
      }}
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        zIndex: -1
      }}
    />
  );
};

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isBlackBackground, setIsBlackBackground] = useState(false);

  useEffect(() => {
    const sections = ['home', 'about', 'projects', 'contact'];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
          // Check if the section has a black background
          setIsBlackBackground(
            entry.target.classList.contains('bg-black') || 
            window.getComputedStyle(entry.target).backgroundColor === 'rgb(0, 0, 0)'
          );
        }
      });
    }, {
      threshold: 0.5 // Trigger when 50% of the section is visible
    });

    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <nav 
      className="fixed top-0 w-full bg-transparent z-50 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div 
          className={`font-quicksand text-2xl font-bold ${
            isBlackBackground ? 'text-white' : 'text-gray-800'
          }`}
          style={{ fontFamily: "Quicksand" }}
        >
          KatherRine Le
        </div>
        <div className="space-x-4 font-quicksand">
          <a 
            href="#home" 
            className={`hover:text-blue-600 transition ${
              isBlackBackground 
                ? 'text-white' 
                : 'text-gray-700'
            }`}
          >
            Home
          </a>
          <a 
            href="#about" 
            className={`hover:text-blue-600 transition ${
              isBlackBackground 
                ? 'text-white' 
                : 'text-gray-700'
            }`}
          >
            About
          </a>
          <a 
            href="#projects" 
            className={`hover:text-blue-600 transition ${
              isBlackBackground 
                ? 'text-white' 
                : 'text-gray-700'
            }`}
          >
            Projects
          </a>
          <a 
            href="#contact" 
            className={`hover:text-blue-600 transition ${
              isBlackBackground 
                ? 'text-white' 
                : 'text-gray-700'
            }`}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
};



const HeroSection = () => (
  <section id="home" className="min-h-screen flex items-center justify-center bg-transparent pt-16 relative">
    <div className="text-center">
      <h1 className="text-5xl font-bold text-gray-900 mb-4">Katherine Le</h1>
      <p className="text-xl text-gray-600 mb-8">Software Engineer | Creative Developer</p>
      <div className="flex justify-center space-x-4 mb-12">
      </div>
    </div>
    
    {/* Scroll to Explore Button */}
    <motion.a 
      href="#about" 
      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 pb-8" 
      whileHover={{ scale: 1.1 }} 
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative group border border-gray-700 px-6 py-3 rounded-full overflow-hidden transition-colors duration-300">
        {/* Background that enters and exits smoothly */}
        <div className="absolute inset-0 bg-black transition-transform duration-300 transform -translate-x-full group-hover:translate-x-0"></div>
        
        {/* Text that turns white on hover */}
        <span className="relative text-gray-900 text-sm transition-colors duration-300 group-hover:text-white block text-center" style={{ fontFamily: "Quicksand" }}>
          SCROLL TO EXPLORE
        </span>
      </div>
    </motion.a>
  </section>
);

// export default HeroSection;

// export default HeroSection;


const AboutSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Create parallax and opacity effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  // More aggressive corner transformation
  const topLeftRadius = useTransform(scrollYProgress, [0, 0.2], ['32px', '0px']);
  const topRightRadius = useTransform(scrollYProgress, [0, 0.2], ['32px', '0px']);

  return (
    <motion.section 
      ref={ref}
      id="about" 
      className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden"
      style={{ 
        y: textY,
        opacity: opacity,
        borderTopLeftRadius: topLeftRadius,
        borderTopRightRadius: topRightRadius
      }}
    >
      {/* Background particle-like effect */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ 
          backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)',
          y: backgroundY
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto flex items-center space-x-8">
          <div className="w-1/2">
            <motion.img 
              src="/images/IMG-0391.png" 
              alt="Katherine Le" 
              className="rounded-lg shadow-lg"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
            />
          </div>
          <div className="w-1/2 space-y-6">
            <motion.h2 
              className="text-4xl font-bold mb-4"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              About Me
            </motion.h2>
            <motion.p 
              className="text-gray-300 text-lg mb-6"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Hi, I'm Katherine! I'm a passionate software engineer with expertise in web development, 
              design, and creating innovative digital experiences. My journey in tech is driven by 
              curiosity, creativity, and a desire to solve complex problems.
            </motion.p>

            <div className="grid grid-cols-2 gap-6">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <h3 className="text-xl font-semibold mb-3">Skills</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>React</li>
                  <li>Tailwind CSS</li>
                  <li>JavaScript</li>
                  <li>Node.js</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                <h3 className="text-xl font-semibold mb-3">Tools</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>Git</li>
                  <li>Figma</li>
                  <li>VS Code</li>
                  <li>Webpack</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0.5 }}
        animate={{ 
          opacity: [0.5, 1, 0.5],
          y: [-10, 0, -10]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="40" 
          height="40" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-white"
        >
          <path d="M12 5v14"/>
          <path d="m19 12-7 7-7-7"/>
        </svg>
      </motion.div>
    </motion.section>
  )
}



const ProjectsSection = () => {
  const projects = [
    {
      title: "Project One",
      description: "A web application that solves real-world problems.",
      technologies: ["React", "Tailwind", "Node.js"],
      image: "/api/placeholder/600/400"
    },
    {
      title: "Project Two", 
      description: "An innovative mobile-first design solution.",
      technologies: ["React Native", "GraphQL"],
      image: "/api/placeholder/600/400"
    }
  ]

  return (
    <section id="projects" className="bg-white/90 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex space-x-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const ContactSection = () => (
  <section id="contact" className="container mx-auto px-4 py-16 bg-white/90">
    <h2 className="text-3xl font-bold text-center mb-12">Contact Me</h2>
    <div className="max-w-md mx-auto">
      <form className="space-y-4">
        <input 
          type="text" 
          placeholder="Your Name" 
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input 
          type="email" 
          placeholder="Your Email" 
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea 
          placeholder="Your Message" 
          rows="4" 
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <button 
          type="submit" 
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  </section>
)

const Footer = () => (
  <footer className="bg-gray-900 text-white py-8 text-center">
    <div className="container mx-auto px-4">
      <div className="flex justify-center space-x-6 mb-4">
        <a href="#" className="hover:text-blue-400">LinkedIn</a>
        <a href="#" className="hover:text-blue-400">GitHub</a>
        <a href="#" className="hover:text-blue-400">Twitter</a>
      </div>
      <p className="text-gray-400">&copy; 2024 Katherine Le. All Rights Reserved.</p>
    </div>
  </footer>
)

function App() {
  return (
    <div className="relative min-h-screen bg-transparent">
      <ParticleBackground  />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App;