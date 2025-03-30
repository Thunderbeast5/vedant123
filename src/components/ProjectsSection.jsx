// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Link as LinkIcon } from "lucide-react";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader
// } from "./ui/card";

// const ProjectsSection = () => {
//   const [showAll, setShowAll] = useState(false);
  
//   const projects = [
//     {
//       title: "Indic",
//       description: "INDIC – Making language learning fun and interactive with AI!",
//       technologies: ["React", "Tailwind", "Node.js", "Python"],
//       image: "/images/ind.png",
//       link: "https://vedant-ajlz.onrender.com/", // Add your project link here
//       date: "March 2025"
//     },
//     {
//       title: "Predictor गुरू", 
//       description: "Predictor Guru – Your smart guide to the perfect college!",
//       technologies: ["Python", "ML","Flask","HTML"],
//       image: "/images/pred.png",
//       link: "https://example.com/project-two", // Add your project link here
//       date: "January 2025"
//     },
//     {
//       title: "Sorting Algorithm Visualizer", 
//       description: "A full-stack application with real-time updates.",
//       technologies: ["Python", "TKinter",],
//       image: "/api/placeholder/600/400",
//       link: "/images/sort.png", // Add your project link here
//       date: "November 2024"
//     },
//     {
//       title: "Wild Oasis", 
//       description: "An AI-powered content management system.",
//       technologies: ["React","Tailwind"],
//       image: "/api/placeholder/600/400",
//       link: "https://example.com/project-four", // Add your project link here
//       date: "September 2024"
//     }
//   ];

//   const displayedProjects = showAll ? projects : projects.slice(0, 2);

//   return (
//     <section id="projects" className="bg-black text-white py-16 relative">
//       <div className="container mx-auto px-4">
//         <motion.h2 
//           className="text-3xl font-bold text-center mb-16"
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, ease: "easeOut" }}
//         >
//           My Projects
//         </motion.h2>
        
//         {/* Timeline line - SHORTENED */}
//         <div className="absolute left-1/2 transform -translate-x-1/2 h-3/4 top-32 w-1 bg-gray-700 rounded-full"></div>
        
//         <div className="relative">
//           {displayedProjects.map((project, index) => (
//             <motion.div 
//               key={index}
//               className={`mb-16 flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'} relative`}
//               initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
//             >
//               {/* Timeline date marker */}
//               <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full z-10 mt-4 border-4 border-black"></div>
              
//               {/* Date label */}
//               <div className={`absolute left-1/2 transform ${index % 2 === 0 ? '-translate-x-[calc(100%+2rem)]' : 'translate-x-8'} mt-7 text-sm font-medium text-gray-400`}>
//                 {project.date}
//               </div>
              
//               {/* Project card - using the same Card component */}
//               <div className={`w-4/12 ${index % 2 === 0 ? 'mr-16' : 'ml-16'}`}>
//                 <Card className="relative bg-gray-950 border border-gray-700 shadow-lg overflow-hidden transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-2xl h-full flex flex-col text-white">
//                   {/* Project Image */}
//                   <div className="relative h-40 overflow-hidden">
//                     <img 
//                       src={project.image} 
//                       alt={project.title} 
//                       className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                     />
//                     <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//                       <button className="bg-white text-black px-4 py-2 rounded-full font-medium transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-sm">
//                         View Details
//                       </button>
//                     </div>
//                   </div>
                  
//                   {/* Project Details */}
//                   <CardHeader className="p-4 pb-2">
//                     <h3 className="text-lg font-semibold text-white mb-1">
//                       {project.title}
//                     </h3>
//                   </CardHeader>
                  
//                   <CardContent className="p-4 pt-0 flex-grow">
//                     <p className="text-gray-300 text-sm mb-3">
//                       {project.description}
//                     </p>
//                     <div className="flex flex-wrap gap-2">
//                       {project.technologies.map((tech, techIndex) => (
//                         <span 
//                           key={techIndex} 
//                           className="bg-gray-800 text-white px-2 py-1 rounded-full text-xs"
//                         >
//                           {tech}
//                         </span>
//                       ))}
//                     </div>
//                   </CardContent>
                  
//                   <CardFooter className="p-4 pt-0">
//                     <a 
//                       href={project.link} 
//                       target="_blank" 
//                       rel="noopener noreferrer"
//                       className="text-blue-400 hover:text-blue-300 flex items-center justify-end w-full text-sm"
//                     >
//                       <LinkIcon className="mr-1" size={16} />
//                       View Project
//                     </a>
//                   </CardFooter>
//                 </Card>
                
//                 {/* Timeline connector - SHORTENED */}
//                 <div 
//                   className={`absolute top-8 h-0.5 w-12 ${
//                     index % 2 === 0 ? 'left-0 -translate-x-full' : 'right-0 translate-x-full'
//                   }`}
//                 ></div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
        
//         {/* Toggle Projects Button (Show More/Show Less) */}
//         <div className="flex justify-center mt-8 relative z-10">
//           <motion.button
//             onClick={() => setShowAll(!showAll)}
//             className="relative transform"
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <div className="relative group border border-gray-700 px-6 py-3 rounded-full overflow-hidden transition-colors duration-300">
//               <div className="absolute inset-0 bg-white transition-transform duration-300 transform -translate-x-full group-hover:translate-x-0"></div>
//               <span className="relative text-gray-300 text-sm transition-colors duration-300 group-hover:text-black block text-center" style={{ fontFamily: "Quicksand" }}>
//                 {showAll ? "SHOW LESS" : "SHOW MORE"}
//               </span>
//             </div>
//           </motion.button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectsSection;
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link as LinkIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from "./ui/card";

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  
  const projects = [
    {
      title: "Indic",
      description: "INDIC – Making language learning fun and interactive with AI!",
      technologies: ["React", "Tailwind", "Node.js", "Python"],
      image: "/images/ind.png",
      link: "https://vedant-ajlz.onrender.com/",
      date: "March 2025"
    },
    {
      title: "Predictor गुरू", 
      description: "Predictor Guru – Your smart guide to the perfect college!",
      technologies: ["Python", "ML","Flask","HTML"],
      image: "/images/pred.png",
      link: "https://example.com/project-two",
      date: "January 2025"
    },
    {
      title: "Sorting Algorithm Visualizer", 
      description: "A full-stack application with real-time updates.",
      technologies: ["Python", "TKinter"],
      image: "/images/sort.png",
      link: "/images/sort.png",
      date: "November 2024"
    },
    {
      title: "Wild Oasis", 
      description: "An AI-powered content management system.",
      technologies: ["React","Tailwind"],
      image: "/api/placeholder/600/400",
      link: "https://example.com/project-four",
      date: "September 2024"
    }
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 2);

  return (
    <section id="projects" className="bg-black text-white py-16 px-4 relative">
      <div className="container mx-auto">
        <motion.h2 
          className="text-2xl md:text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          My Projects
        </motion.h2>
        
        {/* Timeline line - Only show on medium screens and up */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-3/4 top-32 w-1 bg-gray-700 rounded-full"></div>
        
        <div className="relative">
          {displayedProjects.map((project, index) => (
            <motion.div 
              key={index}
              className={`mb-12 md:mb-16 flex flex-col md:flex-row ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'} relative`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
            >
              {/* Timeline date marker - Only show on medium screens and up */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full z-10 mt-4 border-4 border-black"></div>
              
              {/* Date label */}
              <div className={`text-sm font-medium text-gray-400 mb-2 md:absolute md:left-1/2 md:transform ${
                index % 2 === 0 ? 'md:-translate-x-[calc(100%+2rem)]' : 'md:translate-x-8'
              } md:mt-7`}>
                {project.date}
              </div>
              
              {/* Project card */}
              <div className={`w-full md:w-10/12 lg:w-4/12 ${index % 2 === 0 ? 'md:mr-16' : 'md:ml-16'}`}>
                <Card className="relative bg-gray-950 border border-gray-700 shadow-lg overflow-hidden transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-2xl h-full flex flex-col text-white">
                  {/* Project Image */}
                  <div className="relative h-40 md:h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button className="bg-white text-black px-4 py-2 rounded-full font-medium transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-sm">
                        View Details
                      </button>
                    </div>
                  </div>
                  
                  {/* Project Details */}
                  <CardHeader className="p-4 pb-2">
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {project.title}
                    </h3>
                  </CardHeader>
                  
                  <CardContent className="p-4 pt-0 flex-grow">
                    <p className="text-gray-300 text-sm mb-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="bg-gray-800 text-white px-2 py-1 rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  
                  <CardFooter className="p-4 pt-0">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 flex items-center justify-end w-full text-sm"
                    >
                      <LinkIcon className="mr-1" size={16} />
                      View Project
                    </a>
                  </CardFooter>
                </Card>
                
                {/* Timeline connector - Only show on medium screens and up */}
                <div 
                  className={`hidden md:block absolute top-8 h-0.5 w-12 ${
                    index % 2 === 0 ? 'left-0 -translate-x-full' : 'right-0 translate-x-full'
                  }`}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Toggle Projects Button (Show More/Show Less) */}
        <div className="flex justify-center mt-8 relative z-10">
          <motion.button
            onClick={() => setShowAll(!showAll)}
            className="relative transform"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative group border border-gray-700 px-6 py-3 rounded-full overflow-hidden transition-colors duration-300">
              <div className="absolute inset-0 bg-white transition-transform duration-300 transform -translate-x-full group-hover:translate-x-0"></div>
              <span className="relative text-gray-300 text-sm transition-colors duration-300 group-hover:text-black block text-center" style={{ fontFamily: "Quicksand" }}>
                {showAll ? "SHOW LESS" : "SHOW MORE"}
              </span>
            </div>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;