import { motion } from "framer-motion";
import {
  FaJava,
  FaLinux,
  FaGitAlt,
  FaDatabase,
  FaCode,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiJavascript,
  SiMysql,
  SiPostman,
  SiReact,
} from "react-icons/si";

function Skills() {
  const skills = [
    {
      icon: <FaJava />,
      title: "Java",
      desc: "OOP, Collections, Exception Handling",
    },

    {
      icon: <SiSpringboot />,
      title: "Spring Boot",
      desc: "REST APIs & Backend Development",
    },

    {
      icon: <SiReact />,
      title: "React JS",
      desc: "Frontend UI & Component-Based Development",
    },

    {
      icon: <FaLinux />,
      title: "Linux",
      desc: "BOSS GNU/Linux & Arch Linux",
    },

    {
      icon: <FaDatabase />,
      title: "SQL",
      desc: "MySQL, SQLite & Queries",
    },

    {
      icon: <SiJavascript />,
      title: "JavaScript",
      desc: "Frontend Logic & Web Development",
    },

    {
      icon: <FaGitAlt />,
      title: "Git & GitHub",
      desc: "Version Control & Collaboration",
    },

    {
      icon: <SiPostman />,
      title: "API Testing",
      desc: "REST API Testing using Postman",
    },

    {
      icon: <FaCode />,
      title: "Problem Solving",
      desc: "Debugging & Software Engineering",
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-black text-white px-6 py-24"
    >
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-20">
          <p className="text-cyan-400 uppercase tracking-[5px] mb-4">
            Technical Skills
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Technologies & Expertise
          </h2>
        </div>

        {/* SKILLS GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:p-6 md:p-8">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card hover-box p-8 text-center"
            >
              <div className="text-6xl text-cyan-400 flex justify-center mb-6">
                {skill.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {skill.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {skill.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Skills;