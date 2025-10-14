import React from "react";
import { motion } from "framer-motion";

export const Projects = () => {
  return (
    <section id="projects" className="bg-gray-700 font-display text-gray-200 relative flex min-h-screen w-full flex-col overflow-x-hidden">

      {/* MAIN CONTENT */}
      <main className="flex flex-1 justify-center px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="w-full max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mb-10 sm:mb-12"  
          >
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter text-white">
              Projects
            </h1>
            <p className="mt-2 text-lg text-gray-300">
              A selection of my featured work.
            </p>
          </motion.div>

          {/* PROJECT CARDS */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "AI-Powered Chatbot",
                description:
                  "A conversational AI assistant for customer support, leveraging natural language processing.",
                image:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuCjtMJsQ7Zpo8n6glyIAtm9lE3xJoJvYTXFZ0r0aU6_cNTUIZITtNLWLmiPFta7oH3-8i8OxLH6g364wROtWXU8uiBnOdwXva1A4poJoyjsiYZw196HurgL9G5b_EkQK8yRcevNoOhxqTgek_U7Mh8AB1uckZ6BQWS0tYZe5ScYh-UuCpHtIP1jfbNBlJoF-GE5rQwGaehWnq_Vf7WwTLaRwHiETJ0tbL0vgVP2D0e6nYitsQbNlKfethx4hO4GNQTM3w4al5M9jqcE",
              },
              {
                title: "E-commerce Platform",
                description:
                  "A full-featured online store with user authentication and payment integration.",
                image:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuA7_XpBhI6fDY1dkngNn9ERRVSohj0SsZPaz1eqG4VRfgc6c-vPzJMvXz8mUDeb5BPROcC-MzCZmMt43qY2nAOIEnt_NsZuNg33DrhkT7gYUlEJHyF28Yb1E_nyCoJhQFcsokW7B_mqP5cxLuSdxJZRKz6t_7u-O09YVtNL-G3X08z2qvEthyrK3S2BLsPIXCkqOxqTeM3-ToaYUYldGvD3DYdNIT7l3g6TxTci6WCe_JeCusLy_FTcKf8OWzuTfrTVQFnotMeV81VC",
              },
              {
                title: "Data Analysis Dashboard",
                description:
                  "An interactive dashboard for visualizing and analyzing large datasets.",
                image:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuBj70n51D5OYm9fI5PqeooMEGXYJOG-YWjVvWstxGmNidqE4L9L9LbJOBJljW3dd8CLX3i-A4PjcD8nlnFXxxqbHpiCXpgfCab8eCTdEyIWkEyCY0yQSgz0QTH9EaBY83xK_NKqMKP-Tp9v46a2iEl-VUxfSvPIPxM_b83BCKLJFWI_lLb91VjsROiKHY0iPu8WP8BuQoWTmaj-5bYpPgqRCjx2dGsXsHyGYOoai5dDxOBF4UyGDULF3lYSUAifk3XfGp3pnmiHB3Y9",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group flex flex-col overflow-hidden rounded-lg bg-gray-800/50 border border-gray-600/20 transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10"
              >
                <div className="relative w-full aspect-video overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${project.image})` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                   <h3 className="text-xl font-semibold text-white">
                     {project.title}
                   </h3>
                   <p className="mt-2 flex-1 text-sm text-gray-300">
                     {project.description}
                   </p>
                  <div className="mt-4 flex items-center justify-end gap-2">
                    <a
                      href="#"
                      className="rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-primary hover:bg-primary/30 transition-colors"
                    >
                      GitHub
                    </a>
                    <a
                      href="#"
                      className="rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-primary hover:bg-primary/30 transition-colors"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* BUTTONS */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <button className="flex w-full sm:w-auto items-center justify-center rounded-lg bg-primary px-8 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_0_15px_rgba(13,166,242,0.7)]">
              View All Projects
            </button>
            <button className="flex w-full sm:w-auto items-center justify-center rounded-lg bg-primary/20 px-8 py-3 text-sm font-bold text-primary transition-colors hover:bg-primary/30">
              Contact Me
            </button>
          </motion.div>
        </div>
      </main>
    </section>
  );
};


