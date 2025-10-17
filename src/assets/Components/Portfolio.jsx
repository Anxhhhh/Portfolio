import React from "react";
import { motion } from "framer-motion";

export const Portfolio = () => {
  const skills = [
    { icon: "hub", name: "React", level: "90%" },
    { icon: "data_object", name: "Node.js", level: "85%" },
    { icon: "settings_ethernet", name: "Express", level: "80%" },
    { icon: "database", name: "MongoDB", level: "75%" },
    { icon: "code", name: "Python", level: "95%" },
    { icon: "psychology", name: "Machine Learning", level: "85%" },
    { icon: "model_training", name: "TensorFlow", level: "70%" },
    { icon: "cloud", name: "Cloud Tech", level: "65%" },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Profile Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-32 h-32 rounded-full bg-cover bg-center mx-auto mb-6 border-4 border-blue-500"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDuhixyJwPhP4zo_-wdwmEdxsA-n83GatNUJlYDhKK4SFUSSIb14mOF2PTbKQHbRR-Ndh2hi9hYe0l-EJk4_XeZqv1Y-c5Jx3jpmljZmhb4R0Dr_3SVkOJa-bO3K58Dib4nTG03U5xtEPXsF5-L5UUehANd7xaBeELx_fybFqrmNnyXwBbVbj3XD1hwW1RZCaJByeBC7lU5rp3MYSXLghsROcmg94VF0SVS0Vsl8JtYjoY_wYS6F6jCBAqUGXcpY2R_yD1BSi29-MtK")',
            }}
          />

          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Anshraj Singh Thakur
          </h1>
          <p className="text-lg text-blue-300 mb-6">
            AI & ML Engineer | Full Stack Developer
          </p>
          <p className="max-w-2xl mx-auto text-gray-300 leading-relaxed">
            B.Tech in AI & ML with a passion for building intelligent web
            solutions. Strong skills in both frontend and backend development,
            creating seamless and smart user experiences.
          </p>
        </motion.div>

        {/* Skills Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Core Skills
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-700 rounded-lg p-6 text-center hover:bg-gray-600 transition-colors duration-300"
              >
                <div className="text-3xl text-blue-400 mb-4">
                  <span className="material-symbols-outlined">
                    {skill.icon}
                  </span>
                </div>
                <h3 className="font-semibold mb-3">
                  {skill.name}
                </h3>
                <div className="w-full bg-gray-600 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.level }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-blue-500 h-2 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
