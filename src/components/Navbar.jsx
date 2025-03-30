// import React, { useState, useEffect } from 'react';

// const Navbar = () => {
//   const [activeSection, setActiveSection] = useState('home');
//   const [isBlackBackground, setIsBlackBackground] = useState(false);

//   useEffect(() => {
//     const sections = ['home', 'about', 'projects', 'contact'];
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           setActiveSection(entry.target.id);
          
//           const isDark = entry.target.getAttribute('data-is-dark') === 'true';
//           if (isDark) {
//             setIsBlackBackground(true);
//           } else {
//             setIsBlackBackground(
//               entry.target.classList.contains('bg-black') || 
//               window.getComputedStyle(entry.target).backgroundColor === 'rgb(0, 0, 0)'
//             );
//           }
//         }
//       });
//     }, { threshold: 0.3 });

//     sections.forEach(section => {
//       const element = document.getElementById(section);
//       if (element) observer.observe(element);
//     });

//     return () => observer.disconnect();
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     });
//     setActiveSection('home');
//   };

//   return (
//     <nav className="fixed top-0 w-full bg-transparent z-50 transition-colors duration-300">
//       <div className="container mx-auto px-3 py-4 flex justify-between items-center">
//         <div 
//           className={`font-quicksand text-2xl font-bold cursor-pointer ${
//             isBlackBackground ? 'text-white' : 'text-gray-800'
//           }`}
//           style={{ fontFamily: "Quicksand" }}
//           onClick={scrollToTop}
//         >
//           Vedant Purkar
//         </div>
//         <div className="space-x-8 font-quicksand">
//           {['home', 'about', 'achievements', 'projects', 'contact'].map((item) => (
//             <a 
//               key={item}
//               href={`#${item}`}
//               className={`relative group transition-colors duration-300 ${
//                 isBlackBackground ? 'text-white hover:text-white' : 'text-gray-700 hover:text-black'
//               }`}
//             >
//               {item.charAt(0).toUpperCase() + item.slice(1)}
              
//               {/* Hover underline - expands from center */}
//               <span className={`
//                 absolute left-1/2 -bottom-1 h-0.5 
//                 transform -translate-x-1/2
//                 transition-all duration-300 
//                 ${isBlackBackground ? 'bg-white' : 'bg-black'}
//                 w-0 group-hover:w-full
//               `}></span>
              
//               {/* Active section indicator */}
//               {activeSection === item && (
//                 <span className={`
//                   absolute left-0 -bottom-1 w-full h-0.5 
//                   ${isBlackBackground ? 'bg-white' : 'bg-black'}
//                 `}></span>
//               )}
//             </a>
//           ))}
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Navbar;
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isBlackBackground, setIsBlackBackground] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const sections = ['home', 'about', 'projects', 'contact'];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
          
          const isDark = entry.target.getAttribute('data-is-dark') === 'true';
          if (isDark) {
            setIsBlackBackground(true);
          } else {
            setIsBlackBackground(
              entry.target.classList.contains('bg-black') || 
              window.getComputedStyle(entry.target).backgroundColor === 'rgb(0, 0, 0)'
            );
          }
        }
      });
    }, { threshold: 0.3 });

    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setActiveSection('home');
    setIsMenuOpen(false);
  };

  const handleNavClick = (section) => {
    setIsMenuOpen(false);
    setActiveSection(section);
  };

  return (
    <nav className={`fixed top-0 w-full ${isBlackBackground ? 'bg-black' : 'bg-white'} z-50 transition-colors duration-300 md:bg-transparent`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div 
          className={`font-quicksand text-2xl font-bold cursor-pointer ${
            isBlackBackground ? 'text-white' : 'text-gray-800'
          }`}
          style={{ fontFamily: "Quicksand" }}
          onClick={scrollToTop}
        >
          Vedant Purkar
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className={`h-6 w-6 ${isBlackBackground ? 'text-white' : 'text-gray-800'}`} />
          ) : (
            <Menu className={`h-6 w-6 ${isBlackBackground ? 'text-white' : 'text-gray-800'}`} />
          )}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4 lg:space-x-8 font-quicksand">
          {['home', 'about', 'achievements', 'projects', 'contact'].map((item) => (
            <a 
              key={item}
              href={`#${item}`}
              onClick={() => handleNavClick(item)}
              className={`relative group transition-colors duration-300 ${
                isBlackBackground ? 'text-white hover:text-white' : 'text-gray-700 hover:text-black'
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
              
              {/* Hover underline - expands from center */}
              <span className={`
                absolute left-1/2 -bottom-1 h-0.5 
                transform -translate-x-1/2
                transition-all duration-300 
                ${isBlackBackground ? 'bg-white' : 'bg-black'}
                w-0 group-hover:w-full
              `}></span>
              
              {/* Active section indicator */}
              {activeSection === item && (
                <span className={`
                  absolute left-0 -bottom-1 w-full h-0.5 
                  ${isBlackBackground ? 'bg-white' : 'bg-black'}
                `}></span>
              )}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className={`md:hidden ${isBlackBackground ? 'bg-black' : 'bg-white'} px-4 py-2`}>
          {['home', 'about', 'achievements', 'projects', 'contact'].map((item) => (
            <a 
              key={item}
              href={`#${item}`}
              onClick={() => handleNavClick(item)}
              className={`block py-2 px-4 rounded-lg transition-colors duration-300 ${
                activeSection === item 
                  ? (isBlackBackground ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black')
                  : (isBlackBackground ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100')
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar;