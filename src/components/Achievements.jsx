// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Medal, Link as LinkIcon, ChevronDown } from "lucide-react";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader
// } from "./ui/card";

// const achievements = [
//   {
//     "title": "NASA Space Apps Challenge Global Finalist",
//     "description": "Recognized as a Global Finalist in the NASA Space Apps Challenge, competing among thousands of participants worldwide for innovative problem-solving in space and Earth sciences.",
//     "date": "2025",
//     "image": "/images/IMG_8649.JPG",  
//     "linkedinLink": "https://www.linkedin.com/posts/vedant-purkar-1b613728b_nasa-spaceapps-hackathon-activity-7249829638888194048-YU9p?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZSH1oB944qpIBCpSE6s1Z94yWSarzf2kU",
//     "badge": "gold"
//   },
//   {
//     "title": "Innov-era National Level Hackathon",
//     "description": "Secured first place at the Innov-era National Level Hackathon, competing against hundreds of teams across India with a cutting-edge tech solution.",
//     "date": "2025",
//     "image": "/images/innovera.jpeg",  
//     "linkedinLink": "https://www.linkedin.com/posts/vedant-purkar-1b613728b_hackathon-innovation-teamwork-activity-7303811723977744384-hP4h?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZSH1oB944qpIBCpSE6s1Z94yWSarzf2kU",
//     "badge": "gold"
//   },
//   {
//     "title": "NASA Space Apps Challenge Local Event",
//     "description": "Achieved Runner-Up position in the NASA Space Apps Challenge 2024 at Sandip University, Nashik, showcasing innovation in space and environmental technology.",
//     "date": "2024",
//     "image": "/images/nasa1.jpeg",  
//     "linkedinLink": "https://www.linkedin.com/posts/vedant-purkar-1b613728b_nasa-spaceapps-hackathon-activity-7249829638888194048-YU9p?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZSH1oB944qpIBCpSE6s1Z94yWSarzf2kU",
//     "badge": "silver"
//   },
//   {
//     "title": "Python Mini Project Competition",
//     "description": "Demonstrated expertise in Python development by securing a top position in the Python Mini Project Competition, showcasing innovative problem-solving skills.",
//     "date": "2024",
//     "image": "/images/mini.jpeg",  
//     "linkedinLink": "https://www.linkedin.com/posts/vedant-purkar-1b613728b_python-firstprize-kkwieer-activity-7247288749292765184-CR7m?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZSH1oB944qpIBCpSE6s1Z94yWSarzf2kU",
//     "badge": "gold"
//   },
//   {
//     "title": "Kumbathon",
//     "description": "Successfully completed the Kumbathon startup incubation program under the mentorship of Sudhir Kadam Sir, gaining insights into entrepreneurship and innovation.",
//     "date": "2024",
//     "image": "/images/kumb.jpeg",  
//     "linkedinLink": "https://www.linkedin.com/posts/vedant-purkar-1b613728b_innovation-entrepreneurship-startupjourney-activity-7308535070699479042-6Wqp?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZSH1oB944qpIBCpSE6s1Z94yWSarzf2kU",
//     "badge": "gold"
//   },
//   {
//     "title": "Campus to Corporate",
//     "description": "Selected among the top 10 contestants in the 'Campus to Corporate' competition, demonstrating strong industry readiness and professional skills.",
//     "date": "2024",
//     "image": "/images/c2c.png",  
//     "linkedinLink": "https://www.linkedin.com/posts/your-profile/personal-growth",
//     "badge": "bronze"
//   }
// ];

// const MedalBadge = ({ type }) => {
//   const badgeStyles = {
//     gold: {
//       background: "bg-gradient-to-br from-yellow-500 to-yellow-700",
//       text: "text-white",
//       icon: "text-white"
//     },
//     silver: {
//       background: "bg-gradient-to-br from-gray-400 to-gray-600",
//       text: "text-white",
//       icon: "text-white"
//     },
//     bronze: {
//       background: "bg-gradient-to-br from-[#CD7F32] to-[#8B4513]",
//       text: "text-white",
//       icon: "text-white"
//     }
//   };

//   const styles = badgeStyles[type];

//   return (
//     <div className={`absolute top-4 right-4 z-10 w-12 h-12 rounded-full ${styles.background} flex items-center justify-center shadow-lg`}>
//       <Medal size={20} className={`${styles.icon}`} />
//     </div>
//   );
// };

// const Achievements = () => {
//   const [showAll, setShowAll] = useState(false);
//   const displayedAchievements = showAll ? achievements : achievements.slice(0, 3);

//   const scrollToProjects = () => {
//     document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <section id="achievements" className="py-16 px-6 bg-black text-white min-h-screen flex items-center justify-center">
//       <div className="container mx-auto max-w-5xl">
//         <motion.h2
//           className="text-4xl font-bold mb-12 text-center"
//           initial={{ x: -50, opacity: 0 }}
//           whileInView={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.7, ease: "easeOut" }}
//         >
//           Achievements 
//         </motion.h2>
        
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {displayedAchievements.map((achievement, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
//               className="group"
//             >
//               <Card className="relative bg-gray-950 border border-gray-700 shadow-lg overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl h-full flex flex-col text-white">
//                 {/* Medal Badge */}
//                 <MedalBadge type={achievement.badge} />
                
//                 {/* Achievement Image */}
//                 <div className="relative h-40 overflow-hidden">
//                   <img 
//                     src={achievement.image} 
//                     alt={achievement.title} 
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
                
//                 {/* Achievement Details */}
//                 <CardHeader className="p-4 pb-2">
//                   <h3 className="text-lg font-semibold text-white mb-1">
//                     {achievement.title}
//                   </h3>
//                 </CardHeader>
                
//                 <CardContent className="p-4 pt-0 flex-grow">
//                   <p className="text-gray-300 text-sm line-clamp-3">
//                     {achievement.description}
//                   </p>
                  
//                   <div className="text-gray-400 text-xs mt-2">
//                     {achievement.date}
//                   </div>
//                 </CardContent>
                
//                 <CardFooter className="p-4 pt-0">
//                   <a 
//                     href={achievement.linkedinLink} 
//                     target="_blank" 
//                     rel="noopener noreferrer"
//                     className="text-blue-400 hover:text-blue-300 flex items-center justify-end w-full text-sm"
//                   >
//                     <LinkIcon className="mr-1" size={16} />
//                     View on LinkedIn
//                   </a>
//                 </CardFooter>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
        
//         {/* Button Row with Show More/Less and Projects Button */}
//         <div className="flex justify-center mt-12 gap-4 relative">
//           {/* Show More/Less Button */}
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
          
//           {/* Projects Button */}
//           <motion.button
//             onClick={scrollToProjects}
//             className="relative transform"
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <div className="relative group border border-gray-700 px-6 py-3 rounded-full overflow-hidden transition-colors duration-300">
//               <div className="absolute inset-0 bg-white transition-transform duration-300 transform -translate-x-full group-hover:translate-x-0"></div>
//               <span className="relative text-gray-300 text-sm transition-colors duration-300 group-hover:text-black block text-center" style={{ fontFamily: "Quicksand" }}>
//                 MY PROJECTS
//               </span>
//             </div>
//           </motion.button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Achievements;
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Medal, Link as LinkIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from "./ui/card";

const achievements = [
  {
    "title": "NASA Space Apps Challenge Global Finalist",
    "description": "Recognized as a Global Finalist in the NASA Space Apps Challenge, competing among thousands of participants worldwide for innovative problem-solving in space and Earth sciences.",
    "date": "2025",
    "image": "/images/IMG_8649.JPG",  
    "linkedinLink": "https://www.linkedin.com/posts/vedant-purkar-1b613728b_nasa-spaceapps-hackathon-activity-7249829638888194048-YU9p?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZSH1oB944qpIBCpSE6s1Z94yWSarzf2kU",
    "badge": "gold"
  },
  {
    "title": "Innov-era National Level Hackathon",
    "description": "Secured first place at the Innov-era National Level Hackathon, competing against hundreds of teams across India with a cutting-edge tech solution.",
    "date": "2025",
    "image": "/images/innovera.jpeg",  
    "linkedinLink": "https://www.linkedin.com/posts/vedant-purkar-1b613728b_hackathon-innovation-teamwork-activity-7303811723977744384-hP4h?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZSH1oB944qpIBCpSE6s1Z94yWSarzf2kU",
    "badge": "gold"
  },
  {
    "title": "NASA Space Apps Challenge Local Event",
    "description": "Achieved Runner-Up position in the NASA Space Apps Challenge 2024 at Sandip University, Nashik, showcasing innovation in space and environmental technology.",
    "date": "2024",
    "image": "/images/nasa1.jpeg",  
    "linkedinLink": "https://www.linkedin.com/posts/vedant-purkar-1b613728b_nasa-spaceapps-hackathon-activity-7249829638888194048-YU9p?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZSH1oB944qpIBCpSE6s1Z94yWSarzf2kU",
    "badge": "silver"
  },
  {
    "title": "Python Mini Project Competition",
    "description": "Demonstrated expertise in Python development by securing a top position in the Python Mini Project Competition, showcasing innovative problem-solving skills.",
    "date": "2024",
    "image": "/images/mini.jpeg",  
    "linkedinLink": "https://www.linkedin.com/posts/vedant-purkar-1b613728b_python-firstprize-kkwieer-activity-7247288749292765184-CR7m?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZSH1oB944qpIBCpSE6s1Z94yWSarzf2kU",
    "badge": "gold"
  },
  {
    "title": "Kumbathon",
    "description": "Successfully completed the Kumbathon startup incubation program under the mentorship of Sudhir Kadam Sir, gaining insights into entrepreneurship and innovation.",
    "date": "2024",
    "image": "/images/kumb.jpeg",  
    "linkedinLink": "https://www.linkedin.com/posts/vedant-purkar-1b613728b_innovation-entrepreneurship-startupjourney-activity-7308535070699479042-6Wqp?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZSH1oB944qpIBCpSE6s1Z94yWSarzf2kU",
    "badge": "gold"
  },
  {
    "title": "Campus to Corporate",
    "description": "Selected among the top 10 contestants in the 'Campus to Corporate' competition, demonstrating strong industry readiness and professional skills.",
    "date": "2024",
    "image": "/images/c2c.png",  
    "linkedinLink": "https://www.linkedin.com/posts/your-profile/personal-growth",
    "badge": "bronze"
  }
];

const MedalBadge = ({ type }) => {
  const badgeStyles = {
    gold: {
      background: "bg-gradient-to-br from-yellow-500 to-yellow-700",
      text: "text-white",
      icon: "text-white"
    },
    silver: {
      background: "bg-gradient-to-br from-gray-400 to-gray-600",
      text: "text-white",
      icon: "text-white"
    },
    bronze: {
      background: "bg-gradient-to-br from-[#CD7F32] to-[#8B4513]",
      text: "text-white",
      icon: "text-white"
    }
  };

  const styles = badgeStyles[type];

  return (
    <div className={`absolute top-4 right-4 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full ${styles.background} flex items-center justify-center shadow-lg`}>
      <Medal size={18} className={`${styles.icon}`} />
    </div>
  );
};

const Achievements = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedAchievements = showAll ? achievements : achievements.slice(0, 3);

  const scrollToProjects = () => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="achievements" className="py-16 px-4 md:px-6 bg-black text-white min-h-screen flex items-center justify-center">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Achievements 
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {displayedAchievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="group"
            >
              <Card className="relative bg-gray-950 border border-gray-700 shadow-lg overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl h-full flex flex-col text-white">
                {/* Medal Badge */}
                <MedalBadge type={achievement.badge} />
                
                {/* Achievement Image */}
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={achievement.image} 
                    alt={achievement.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Achievement Details */}
                <CardHeader className="p-4 pb-2">
                  <h3 className="text-base md:text-lg font-semibold text-white mb-1">
                    {achievement.title}
                  </h3>
                </CardHeader>
                
                <CardContent className="p-4 pt-0 flex-grow">
                  <p className="text-gray-300 text-xs md:text-sm line-clamp-3">
                    {achievement.description}
                  </p>
                  
                  <div className="text-gray-400 text-xs mt-2">
                    {achievement.date}
                  </div>
                </CardContent>
                
                <CardFooter className="p-4 pt-0">
                  <a 
                    href={achievement.linkedinLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 flex items-center justify-end w-full text-xs md:text-sm"
                  >
                    <LinkIcon className="mr-1" size={14} />
                    View on LinkedIn
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* Button Row with Show More/Less and Projects Button */}
        <div className="flex flex-col sm:flex-row justify-center mt-8 md:mt-12 gap-3 md:gap-4 relative">
          {/* Show More/Less Button */}
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
          
          {/* Projects Button */}
          <motion.button
            onClick={scrollToProjects}
            className="relative transform"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative group border border-gray-700 px-6 py-3 rounded-full overflow-hidden transition-colors duration-300">
              <div className="absolute inset-0 bg-white transition-transform duration-300 transform -translate-x-full group-hover:translate-x-0"></div>
              <span className="relative text-gray-300 text-sm transition-colors duration-300 group-hover:text-black block text-center" style={{ fontFamily: "Quicksand" }}>
                MY PROJECTS
              </span>
            </div>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Achievements;