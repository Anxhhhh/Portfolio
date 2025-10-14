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
    <section id="portfolio" className="bg-gray-800 font-display text-gray-200 min-h-screen w-full flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 transition-colors duration-500">
      <div className="w-full max-w-4xl space-y-12">
        {/* Profile Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6 text-center"
        >
          <div className="relative">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-32 w-32 rounded-full bg-cover bg-center glow"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDuhixyJwPhP4zo_-wdwmEdxsA-n83GatNUJlYDhKK4SFUSSIb14mOF2PTbKQHbRR-Ndh2hi9hYe0l-EJk4_XeZqv1Y-c5Jx3jpmljZmhb4R0Dr_3SVkOJa-bO3K58Dib4nTG03U5xtEPXsF5-L5UUehANd7xaBeELx_fybFqrmNnyXwBbVbj3XD1hwW1RZCaJByeBC7lU5rp3MYSXLghsROcmg94VF0SVS0Vsl8JtYjoY_wYS6F6jCBAqUGXcpY2R_yD1BSi29-MtK")',
              }}
            ></motion.div>
            <span className="absolute bottom-1 right-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary ring-4 ring-background-light dark:ring-background-dark">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/50 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary/80"></span>
              </span>
            </span>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Anshraj Singh Thakur
            </h1>
            <p className="text-lg text-primary">
              AI & ML Engineer | Full Stack Developer
            </p>
            <p className="max-w-2xl text-gray-600 dark:text-gray-400">
              B.Tech in AI & ML with a passion for building intelligent web
              solutions. Strong skills in both frontend and backend development,
              creating seamless and smart user experiences.
            </p>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
            Core Skills
          </h2>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="skill-card group flex flex-col items-center gap-3 rounded-xl p-6 transition-all duration-300"
              >
                <div className="text-4xl text-primary">
                  <span className="material-symbols-outlined">
                    {skill.icon}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                  {skill.name}
                </h3>
                <div className="h-1 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all duration-700"
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Enhanced styling */}
      <style jsx>{`
        .glow {
          box-shadow: 0 0 20px rgba(13, 166, 242, 0.3), 0 0 40px rgba(13, 166, 242, 0.2), 0 0 60px rgba(13, 166, 242, 0.1);
          transition: all 0.3s ease;
        }
        
        .glow:hover {
          box-shadow: 0 0 30px rgba(13, 166, 242, 0.5), 0 0 60px rgba(13, 166, 242, 0.3), 0 0 90px rgba(13, 166, 242, 0.2);
          transform: scale(1.05);
        }
        
        .skill-card {
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }
        
        .skill-card:hover {
          background: rgba(13, 166, 242, 0.1);
          border-color: rgba(13, 166, 242, 0.3);
          transform: translateY(-5px);
        }
      `}</style>
    </section>
  );
};
