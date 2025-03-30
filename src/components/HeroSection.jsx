// import React from 'react';
// import { motion } from 'framer-motion';
// import '@fontsource/quicksand/300.css';
// import '@fontsource/quicksand/400.css';
// import '@fontsource/quicksand/500.css';
// import '@fontsource/quicksand/600.css';
// import '@fontsource/quicksand/700.css';

// const HeroSection = () => (
//   <section id="home" className="min-h-screen flex flex-col items-center justify-between bg-transparent pt-16 pb-8 relative">
//     {/* Main Content */}
//     <div className="flex-grow flex items-center justify-center">
//       <div className="text-center">
//         <h1 className="text-5xl font-bold text-gray-900 mb-4">Vedant Purkar</h1>
//         <p className="text-xl text-gray-600 mb-8">Computer Engineer | Creative Developer</p>
//       </div>
//     </div>

//     {/* Bottom Elements Container */}
//     <div className="w-full flex flex-col items-center">
//       {/* Scroll to Explore Button */}
//       <motion.a 
//         href="#about" 
//         className="mb-6" // Added margin bottom to separate from social links
//         whileHover={{ scale: 1.1 }} 
//         whileTap={{ scale: 0.95 }}
//       >
//         <div className="relative group border border-gray-700 px-6 py-3 rounded-full overflow-hidden transition-colors duration-300">
//           <div className="absolute inset-0 bg-black transition-transform duration-300 transform -translate-x-full group-hover:translate-x-0"></div>
//           <span className="relative text-gray-900 text-sm transition-colors duration-300 group-hover:text-white block text-center" style={{ fontFamily: "Quicksand" }}>
//             SCROLL TO EXPLORE
//           </span>
//         </div>
//       </motion.a>

//       {/* Social Links - Sticky to Bottom */}
//       <div className="w-full py-4">
//         <div className="flex justify-center space-x-50" style={{ fontFamily: "Quicksand" }}>
//           <a 
//             href="https://www.linkedin.com/in/vedant-purkar-1b613728b/" 
//             target="_blank" 
//             rel="noopener noreferrer"
//             className="text-gray-700 hover:text-black transition-colors duration-300 font-medium"
//           >
//             LINKED IN
//           </a>
//           <a 
//             href="https://github.com/Thunderbeast5" 
//             target="_blank" 
//             rel="noopener noreferrer"
//             className="text-gray-700 hover:text-black transition-colors duration-300 font-medium"
//           >
//             GITHUB
//           </a>
//           <a 
//             href="https://instagram.com/veeeedanttttt" 
//             target="_blank" 
//             rel="noopener noreferrer"
//             className="text-gray-700 hover:text-black transition-colors duration-300 font-medium"
//           >
//             INSTAGRAM
//           </a>
//         </div>
//       </div>
//     </div>
//   </section>
// );

// export default HeroSection;
import React from 'react';
import { motion } from 'framer-motion';
import '@fontsource/quicksand/300.css';
import '@fontsource/quicksand/400.css';
import '@fontsource/quicksand/500.css';
import '@fontsource/quicksand/600.css';
import '@fontsource/quicksand/700.css';

const HeroSection = () => (
  <section id="home" className="min-h-screen flex flex-col items-center justify-between bg-transparent pt-24 pb-8 md:pt-16 relative">
    {/* Main Content */}
    <div className="flex-grow flex items-center justify-center w-full px-4">
      <div className="text-center max-w-2xl">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Vedant Purkar
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl text-gray-600 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Computer Engineer | Creative Developer
        </motion.p>
      </div>
    </div>

    {/* Bottom Elements Container */}
    <div className="w-full flex flex-col items-center px-4">
      {/* Scroll to Explore Button */}
      <motion.a 
        href="#about" 
        className="mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        whileHover={{ scale: 1.1 }} 
        whileTap={{ scale: 0.95 }}
      >
        <div className="relative group border border-gray-700 px-6 py-3 rounded-full overflow-hidden transition-colors duration-300">
          <div className="absolute inset-0 bg-black transition-transform duration-300 transform -translate-x-full group-hover:translate-x-0"></div>
          <span className="relative text-gray-900 text-sm transition-colors duration-300 group-hover:text-white block text-center" style={{ fontFamily: "Quicksand" }}>
            SCROLL TO EXPLORE
          </span>
        </div>
      </motion.a>

      {/* Social Links - Sticky to Bottom */}
      <motion.div 
        className="w-full py-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="flex justify-center space-x-6 md:space-x-8" style={{ fontFamily: "Quicksand" }}>
          <a 
            href="https://www.linkedin.com/in/vedant-purkar-1b613728b/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-black transition-colors duration-300 font-medium text-sm md:text-base"
          >
            LINKED IN
          </a>
          <a 
            href="https://github.com/Thunderbeast5" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-black transition-colors duration-300 font-medium text-sm md:text-base"
          >
            GITHUB
          </a>
          <a 
            href="https://instagram.com/veeeedanttttt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-black transition-colors duration-300 font-medium text-sm md:text-base"
          >
            INSTAGRAM
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;