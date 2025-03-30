// import React, { useRef } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';
// import { Code, Layers, Globe,Camera } from 'lucide-react';

// const AboutSection = () => {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end start"]
//   });

//   // Create parallax and opacity effects
//   const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
//   const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
//   const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

//   // Description constant
// const description = "Hi, I’m Vedant Purkar! I’m a passionate developer with expertise in AI, web development, and creating innovative digital solutions. My journey in tech is fueled by curiosity, creativity, and a drive to build impactful experiences."
//   // Skill cards data with descriptions
//   const skillCards = [
//     {
//       title: "Programming",
//       icon: Code,
//       skills: ["C","C++","Python","Java"],
//       description: "Expertise in core languages with focus on algorithms and system design."
//     },
//     {
//       title: "Web Tech",
//       icon: Globe,
//       skills: ["React", "JavaScript", "Node.js", "HTML/CSS"],
//       description: "Full-stack development with modern frameworks and responsive design."
//     },
//     {
//       title: "Tools",
//       icon: Layers,
//       skills: ["Git", "Canva", "Blender", "Figma"],
//       description: "Modern development workflow tools and collaborative design processes."
//     },
//     {
//       title: "Photography",
//       icon: Camera,  // Use an appropriate icon
//       skills: ["Lightroom", "Photoshop", "Premier Pro", "Color Grading"],
//       description: "Capturing and enhancing visuals with professional editing techniques."
//     }
//   ];

//   const scrollToAchievements = () => {
//     document.getElementById("achievements").scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <motion.section 
//       ref={ref}
//       id="about" 
//       className="relative py-16 px-6 bg-black text-white min-h-screen flex items-center justify-center"
//     >
//       <motion.div 
//         className="absolute inset-0 z-0"
//         style={{ 
//           backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)',
//           y: backgroundY
//         }}
//       />

//       <div className="container mx-auto max-w-5xl relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Left Side: Image and Description */}
//           <div className="space-y-8 self-center">
//             <motion.img 
//               src="/images/IMG-0391.png" 
//               alt="Profile" 
//               className="rounded-lg shadow-lg"
//               style={{ width: '250px', height: '250px', objectFit: 'cover' }}
//               initial={{ scale: 0.9, opacity: 0 }}
//               whileInView={{ scale: 1, opacity: 1 }}
//               transition={{ duration: 0.7 }}
//             />
            
//             <motion.p 
//               className="text-gray-300 text-lg"
//               initial={{ x: 50, opacity: 0 }}
//               whileInView={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.7, delay: 0.3 }}
//             >
//               {description}
//             </motion.p>
//           </div>

//           {/* Right Side: Skills Cards */}
//           <div className="space-y-5 self-center">
//             <motion.h2 
//               className="text-3xl font-bold mb-8"
              
//               initial={{ x: -50, opacity: 0 }}
//               whileInView={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.7, delay: 0.2 }}
//             >
//               My Skills
//             </motion.h2>

//             <div className="grid grid-cols-2 gap-6" >
//               {skillCards.map((card, index) => (
//                 <motion.div
//                   key={card.title}
//                   className="relative h-48 w-full"
//                   initial={{ y: 50, opacity: 0 }}
//                   whileInView={{ y: 0, opacity: 1 }}
//                   transition={{ 
//                     duration: 0.7, 
//                     delay: 0.3 + (index * 0.2) 
//                   }}
//                 >
//                   {/* Flip container */}
//                   <motion.div
//                     className="w-full h-full"
//                     style={{
//                       perspective: 1000,
//                       transformStyle: 'preserve-3d'
//                     }}
//                     whileHover={{ rotateY: 180 }}
//                     transition={{ type: "spring", stiffness: 300, damping: 20 }}
//                   >
//                     {/* Front Side */}
//                     <div className="absolute inset-0 bg-gray-800 rounded-lg p-6 shadow-lg backface-hidden flex flex-col">
//                       <h1 className="text-lg font-semibold mb-4 text-white flex items-center">
//                         <card.icon className="mr-2 text-blue-400" size={20} />
//                         {card.title}
//                       </h1>
//                       <ul className="space-y-2 text-gray-300">
//                         {card.skills.map(skill => (
//                           <li key={skill} className="flex items-center text-sm">
//                             <svg 
//                               className="w-4 h-4 mr-2 text-blue-400" 
//                               fill="currentColor" 
//                               viewBox="0 0 20 20"
//                             >
//                               <path 
//                                 fillRule="evenodd" 
//                                 d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" 
//                                 clipRule="evenodd" 
//                               />
//                             </svg>
//                             {skill}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>

//                     {/* Back Side */}
//                     <div className="absolute inset-0 bg-gray-800 rounded-lg p-6 shadow-lg backface-hidden backface-rotate flex items-center justify-center">
//                       <p className="text-gray-300 text-sm p-2 text-center">
//                         {card.description}
//                       </p>
//                     </div>
//                   </motion.div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Achievements Button */}
//         <motion.button
//           onClick={scrollToAchievements}
//           className="relative transform mt-12 mx-auto block"
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <div className="relative group border border-gray-700 px-6 py-3 rounded-full overflow-hidden transition-colors duration-300">
//             <div className="absolute inset-0 bg-white transition-transform duration-300 transform -translate-x-full group-hover:translate-x-0"></div>
//             <span className="relative text-gray-300 text-sm transition-colors duration-300 group-hover:text-black block text-center" style={{ fontFamily: "Quicksand" }}>
//               MY ACHIEVEMENTS
//             </span>
//           </div>
//         </motion.button>
//       </div>

//       {/* Add these styles for the flip effect */}
//       <style jsx>{`
//         .backface-hidden {
//           backface-visibility: hidden;
//         }
//         .backface-rotate {
//           transform: rotateY(180deg);
//         }
//       `}</style>
//     </motion.section>
//   )
// }

// export default AboutSection;
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Code, Layers, Globe, Camera } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const description = "Hi, I'm Vedant Purkar! I'm a passionate developer with expertise in AI, web development, and creating innovative digital solutions. My journey in tech is fueled by curiosity, creativity, and a drive to build impactful experiences."

  const skillCards = [
    {
      title: "Programming",
      icon: Code,
      skills: ["C","C++","Python","Java"],
      description: "Expertise in core languages with focus on algorithms and system design."
    },
    {
      title: "Web Tech",
      icon: Globe,
      skills: ["React", "JavaScript", "Node.js", "HTML/CSS"],
      description: "Full-stack development with modern frameworks and responsive design."
    },
    {
      title: "Tools",
      icon: Layers,
      skills: ["Git", "Canva", "Blender", "Figma"],
      description: "Modern development workflow tools and collaborative design processes."
    },
    {
      title: "Photography",
      icon: Camera,
      skills: ["Lightroom", "Photoshop", "Premier Pro", "Color Grading"],
      description: "Capturing and enhancing visuals with professional editing techniques."
    }
  ];

  const scrollToAchievements = () => {
    document.getElementById("achievements").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.section 
      ref={ref}
      id="about" 
      className="relative py-16 px-4 md:px-6 bg-black text-white min-h-screen flex items-center justify-center"
    >
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ 
          backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)',
          y: backgroundY
        }}
      />

      <div className="container mx-auto max-w-5xl relative z-10 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Left Side: Image and Description */}
          <div className="space-y-6 md:space-y-8 self-center">
            <motion.img 
              src="/images/IMG-0391.png" 
              alt="Profile" 
              className="rounded-lg shadow-lg mx-auto md:mx-0"
              style={{ width: '200px', height: '200px', objectFit: 'cover' }}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
            />
            
            <motion.p 
              className="text-gray-300 text-base md:text-lg"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              {description}
            </motion.p>
          </div>

          {/* Right Side: Skills Cards */}
          <div className="space-y-5 self-center">
            <motion.h2 
              className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center md:text-left"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              My Skills
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {skillCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  className="relative h-40 w-full"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ 
                    duration: 0.7, 
                    delay: 0.3 + (index * 0.2) 
                  }}
                >
                  <motion.div
                    className="w-full h-full"
                    style={{
                      perspective: 1000,
                      transformStyle: 'preserve-3d'
                    }}
                    whileHover={{ rotateY: 180 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {/* Front Side */}
                    <div className="absolute inset-0 bg-gray-800 rounded-lg p-4 md:p-6 shadow-lg backface-hidden flex flex-col">
                      <h1 className="text-base md:text-lg font-semibold mb-2 md:mb-4 text-white flex items-center">
                        <card.icon className="mr-2 text-blue-400" size={18} />
                        {card.title}
                      </h1>
                      <ul className="space-y-1 md:space-y-2 text-gray-300">
                        {card.skills.map(skill => (
                          <li key={skill} className="flex items-center text-xs md:text-sm">
                            <svg 
                              className="w-3 h-3 md:w-4 md:h-4 mr-2 text-blue-400" 
                              fill="currentColor" 
                              viewBox="0 0 20 20"
                            >
                              <path 
                                fillRule="evenodd" 
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" 
                                clipRule="evenodd" 
                              />
                            </svg>
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Back Side */}
                    <div className="absolute inset-0 bg-gray-800 rounded-lg p-4 md:p-6 shadow-lg backface-hidden backface-rotate flex items-center justify-center">
                      <p className="text-gray-300 text-xs md:text-sm p-2 text-center">
                        {card.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements Button */}
        <motion.button
          onClick={scrollToAchievements}
          className="relative transform mt-8 md:mt-12 mx-auto block"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div className="relative group border border-gray-700 px-6 py-3 rounded-full overflow-hidden transition-colors duration-300">
            <div className="absolute inset-0 bg-white transition-transform duration-300 transform -translate-x-full group-hover:translate-x-0"></div>
            <span className="relative text-gray-300 text-sm transition-colors duration-300 group-hover:text-black block text-center" style={{ fontFamily: "Quicksand" }}>
              MY ACHIEVEMENTS
            </span>
          </div>
        </motion.button>
      </div>

      <style jsx>{`
        .backface-hidden {
          backface-visibility: hidden;
        }
        .backface-rotate {
          transform: rotateY(180deg);
        }
      `}</style>
    </motion.section>
  )
}

export default AboutSection;