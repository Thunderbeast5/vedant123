import React from "react";
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
  export default Footer;
  /*
  import { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { Send, Instagram, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_50mrdik",
        "template_3hti6dh",
        e.target,
        "rLuwajQp5XZU-eq9U"
      )
      .then(() => {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => setSubmitStatus("error"))
      .finally(() => setIsSubmitting(false));
  };

  return (
    <div className="bg-black min-h-screen text-white flex flex-col items-center justify-center">
      <motion.h2
        className="text-3xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Me
      </motion.h2>

      <form onSubmit={handleSubmit} className="bg-gray-900 p-6 rounded-lg w-80">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full px-3 py-2 mb-4 bg-gray-800 border border-gray-700 rounded-md text-white"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="w-full px-3 py-2 mb-4 bg-gray-800 border border-gray-700 rounded-md text-white"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="4"
          required
          className="w-full px-3 py-2 mb-4 bg-gray-800 border border-gray-700 rounded-md text-white"
        ></textarea>
        
        <motion.button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 py-2 rounded-md text-white flex justify-center items-center"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {isSubmitting ? "Sending..." : <><Send size={18} className="mr-2" /> Send Message</>}
        </motion.button>

        {submitStatus === "success" && <p className="text-green-400 text-center mt-2">Message sent!</p>}
        {submitStatus === "error" && <p className="text-red-400 text-center mt-2">Failed to send message.</p>}
      </form>

      <div className="flex space-x-6 mt-6">
        <Instagram size={24} className="hover:text-pink-600 transition" />
        <Github size={24} className="hover:text-gray-400 transition" />
        <Linkedin size={24} className="hover:text-blue-600 transition" />
      </div>
    </div>
  );
};

export default ContactSection; */