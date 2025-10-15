import React from "react";
import { motion } from "framer-motion";

export const Projects = () => {
  return (
    <section id="projects" className="bg-gray-700 font-display text-gray-200 relative flex min-h-screen w-full flex-col overflow-x-hidden">

      {/* MAIN CONTENT */}
      <main className="flex flex-1 justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="w-full max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-10 lg:mb-12 text-center"  
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter text-white">
              Projects
            </h1>
            <p className="mt-2 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
              A selection of my featured work and innovative solutions.
            </p>
          </motion.div>

          {/* PROJECT CARDS */}
          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
                className="group flex flex-col overflow-hidden rounded-lg sm:rounded-xl bg-gray-800/50 border border-gray-600/20 transition-all duration-300 hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-400/10"
              >
                <div className="relative w-full aspect-video overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${project.image})` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>
                <div className="flex flex-1 flex-col p-4 sm:p-5 lg:p-6">
                   <h3 className="text-lg sm:text-xl font-semibold text-white">
                     {project.title}
                   </h3>
                   <p className="mt-2 flex-1 text-sm sm:text-base text-gray-300 leading-relaxed">
                     {project.description}
                   </p>
                  <div className="mt-4 flex items-center justify-center sm:justify-end gap-2 sm:gap-3">
                    <a
                      href="#"
                      className="rounded-full bg-blue-400/20 px-3 py-1.5 text-xs sm:text-sm font-semibold text-blue-400 hover:bg-blue-400/30 transition-colors flex items-center gap-1"
                    >
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                    <a
                      href="#"
                      className="rounded-full bg-green-400/20 px-3 py-1.5 text-xs sm:text-sm font-semibold text-green-400 hover:bg-green-400/30 transition-colors flex items-center gap-1"
                    >
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
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
            className="mt-12 sm:mt-16 flex flex-col items-center justify-center gap-3 sm:gap-4 sm:flex-row px-4"
          >
            <button className="flex w-full sm:w-auto items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-700 px-6 sm:px-8 py-3 text-sm sm:text-base font-bold text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              View All Projects
            </button>
            <button className="flex w-full sm:w-auto items-center justify-center rounded-lg bg-blue-400/20 hover:bg-blue-400/30 px-6 sm:px-8 py-3 text-sm sm:text-base font-bold text-blue-400 transition-colors">
              <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Me
            </button>
          </motion.div>
        </div>
      </main>
    </section>
  );
};


