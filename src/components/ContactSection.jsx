// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Instagram as InstagramIcon, Github, Linkedin, Send, Phone } from "lucide-react";
// import emailjs from "emailjs-com";

// const ContactSection = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: ""
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     try {
//       await emailjs.sendForm(
//         "service_50mrdik",
//         "template_3hti6dh",
//         e.target,
//         "rLuwajQp5XZU-eq9U"
//       );
      
//       setSubmitStatus("success");
//       setFormData({ name: "", email: "", message: "" });
//     } catch (error) {
//       setSubmitStatus("error");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section id="contact" data-is-dark="true" className="relative bg-gray-50 pb-8">
//       {/* Black section (75%) with more rounded corners */}
//       <div className="bg-black text-white py-16 px-4 rounded-b-[6rem] mb-8">
//         <div className="container mx-auto">
//           <motion.h2 
//             className="text-3xl font-bold text-center mb-12"
//             initial={{ opacity: 0, y: -20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             Contact Me
//           </motion.h2>
          
//           <div className="max-w-md mx-auto">
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <input 
//                   type="text" 
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Your Name" 
//                   required
//                   className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-2xl 
//                            text-white placeholder-gray-400 focus:outline-none focus:ring-2 
//                            focus:ring-white focus:border-transparent"
//                 />
//               </div>
              
//               <div>
//                 <input 
//                   type="email" 
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Your Email" 
//                   required
//                   className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-2xl 
//                            text-white placeholder-gray-400 focus:outline-none focus:ring-2 
//                            focus:ring-white focus:border-transparent"
//                 />
//               </div>
              
//               <div>
//                 <textarea 
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   placeholder="Your Message" 
//                   rows="4" 
//                   required
//                   className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-2xl 
//                            text-white placeholder-gray-400 focus:outline-none focus:ring-2 
//                            focus:ring-white focus:border-transparent"
//                 ></textarea>
//               </div>
              
//               <div className="flex justify-center">
//                 <motion.button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="relative transform"
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <div className="relative group border border-gray-700 px-6 py-3 rounded-full overflow-hidden transition-colors duration-300">
//                     <div className="absolute inset-0 bg-white transition-transform duration-300 transform -translate-x-full group-hover:translate-x-0"></div>
                    
//                     <span className="relative text-gray-300 text-sm transition-colors duration-300 group-hover:text-black block text-center" style={{ fontFamily: "Quicksand" }}>
//                       {isSubmitting ? "Sending..." : "SEND MESSAGE"}
//                     </span>
//                   </div>
//                 </motion.button>
//               </div>
              
//               {submitStatus === "success" && (
//                 <div className="text-green-400 text-center py-2">
//                   Message sent successfully!
//                 </div>
//               )}
              
//               {submitStatus === "error" && (
//                 <div className="text-red-400 text-center py-2">
//                   Failed to send message. Please try again.
//                 </div>
//               )}
//             </form>
//           </div>
//         </div>
//       </div>
      
//       {/* Social media section */}
//       <div className="container mx-auto px-3">
//         <div className="flex flex-col items-center">
//           {/* Social Media Icons */}
//           <div className="flex space-x-6 mb-6">
//             <motion.a 
//               href="https://instagram.com/veeeedanttttt" 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="text-gray-800 hover:text-pink-600 transition-colors duration-300"
//               whileHover={{ scale: 1.2 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <InstagramIcon size={24} />
//             </motion.a>
            
//             <motion.a 
//               href="https://github.com/Thunderbeast5" 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="text-gray-800 hover:text-gray-600 transition-colors duration-300"
//               whileHover={{ scale: 1.2 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <Github size={24} />
//             </motion.a>
            
//             <motion.a 
//               href="https://www.linkedin.com/in/vedant-purkar-1b613728b/" 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="text-gray-800 hover:text-blue-600 transition-colors duration-300"
//               whileHover={{ scale: 1.2 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <Linkedin size={24} />
//             </motion.a>
            
//             <motion.a 
//               href="tel:+918446995092" 
//               className="text-gray-800 hover:text-green-600 transition-colors duration-300"
//               whileHover={{ scale: 1.2 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <Phone size={24} />
//             </motion.a>
//           </div>
          
//           {/* Copyright */}
//           <div className="text-gray-600 text-sm">
//             &copy; {new Date().getFullYear()} . Vedant . All Rights Reserved
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Instagram as InstagramIcon, Github, Linkedin, Send, Phone } from "lucide-react";
import emailjs from "emailjs-com";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await emailjs.sendForm(
        "service_50mrdik",
        "template_3hti6dh",
        e.target,
        "rLuwajQp5XZU-eq9U"
      );
      
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" data-is-dark="true" className="relative bg-gray-50 pb-8">
      {/* Black section (75%) with more rounded corners */}
      <div className="bg-black text-white py-12 md:py-16 px-4 rounded-b-[4rem] md:rounded-b-[6rem] mb-6 md:mb-8">
        <div className="container mx-auto">
          <motion.h2 
            className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contact Me
          </motion.h2>
          
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name" 
                  required
                  className="w-full px-4 py-2 md:py-3 bg-gray-900 border border-gray-800 rounded-xl md:rounded-2xl 
                           text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                           focus:ring-white focus:border-transparent text-sm md:text-base"
                />
              </div>
              
              <div>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email" 
                  required
                  className="w-full px-4 py-2 md:py-3 bg-gray-900 border border-gray-800 rounded-xl md:rounded-2xl 
                           text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                           focus:ring-white focus:border-transparent text-sm md:text-base"
                />
              </div>
              
              <div>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message" 
                  rows="4" 
                  required
                  className="w-full px-4 py-2 md:py-3 bg-gray-900 border border-gray-800 rounded-xl md:rounded-2xl 
                           text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                           focus:ring-white focus:border-transparent text-sm md:text-base"
                ></textarea>
              </div>
              
              <div className="flex justify-center">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative transform"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="relative group border border-gray-700 px-6 py-2 md:py-3 rounded-full overflow-hidden transition-colors duration-300">
                    <div className="absolute inset-0 bg-white transition-transform duration-300 transform -translate-x-full group-hover:translate-x-0"></div>
                    
                    <span className="relative text-gray-300 text-sm transition-colors duration-300 group-hover:text-black block text-center" style={{ fontFamily: "Quicksand" }}>
                      {isSubmitting ? "Sending..." : "SEND MESSAGE"}
                    </span>
                  </div>
                </motion.button>
              </div>
              
              {submitStatus === "success" && (
                <div className="text-green-400 text-center py-2 text-sm md:text-base">
                  Message sent successfully!
                </div>
              )}
              
              {submitStatus === "error" && (
                <div className="text-red-400 text-center py-2 text-sm md:text-base">
                  Failed to send message. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
      
      {/* Social media section */}
      <div className="container mx-auto px-3">
        <div className="flex flex-col items-center">
          {/* Social Media Icons */}
          <div className="flex space-x-4 md:space-x-6 mb-4 md:mb-6">
            <motion.a 
              href="https://instagram.com/veeeedanttttt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-pink-600 transition-colors duration-300"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <InstagramIcon size={20} className="md:h-6 md:w-6" />
            </motion.a>
            
            <motion.a 
              href="https://github.com/Thunderbeast5" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-600 transition-colors duration-300"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={20} className="md:h-6 md:w-6" />
            </motion.a>
            
            <motion.a 
              href="https://www.linkedin.com/in/vedant-purkar-1b613728b/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-blue-600 transition-colors duration-300"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin size={20} className="md:h-6 md:w-6" />
            </motion.a>
            
            <motion.a 
              href="tel:+918446995092" 
              className="text-gray-800 hover:text-green-600 transition-colors duration-300"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Phone size={20} className="md:h-6 md:w-6" />
            </motion.a>
          </div>
          
          {/* Copyright */}
          <div className="text-gray-600 text-xs md:text-sm">
            &copy; {new Date().getFullYear()} . Vedant . All Rights Reserved
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;