import { motion } from "framer-motion";

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-black text-white px-6 py-20"
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-20">
          <p className="text-cyan-400 uppercase tracking-[5px] mb-4">
            Portfolio Projects
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Featured Engineering Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5 sm:p-7 md:p-10">

          {/* PROJECT 1 */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-card hover-box p-5 sm:p-6 md:p-8"
          >

            <p className="text-cyan-400 mb-3">
              Backend Engineering
            </p>

            <h3 className="text-3xl font-bold mb-5">
              Employee Management REST API
            </h3>

            <p className="text-gray-400 leading-relaxed text-lg">
              Designed and developed REST APIs supporting
              CRUD operations for employee management using
              Spring Boot, SQLite and Spring Data JPA.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">

              <span className="bg-black px-4 py-2 rounded-xl text-sm">
                Java
              </span>

              <span className="bg-black px-4 py-2 rounded-xl text-sm">
                Spring Boot
              </span>

              <span className="bg-black px-4 py-2 rounded-xl text-sm">
                SQLite
              </span>

              <span className="bg-black px-4 py-2 rounded-xl text-sm">
                REST APIs
              </span>

            </div>

          </motion.div>

          {/* PROJECT 2 */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="glass-card hover-box p-8"
          >

            <p className="text-cyan-400 mb-3">
              Linux Automation
            </p>

            <h3 className="text-3xl font-bold mb-5">
              Orbis Task Engine
            </h3>

            <p className="text-gray-400 leading-relaxed text-lg">
              Developed a Linux-based CLI automation tool
              using Bash scripting, cron jobs and SQLite
              for task scheduling and system operations.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">

              <span className="bg-black px-4 py-2 rounded-xl text-sm">
                Bash
              </span>

              <span className="bg-black px-4 py-2 rounded-xl text-sm">
                Linux
              </span>

              <span className="bg-black px-4 py-2 rounded-xl text-sm">
                SQLite
              </span>

              <span className="bg-black px-4 py-2 rounded-xl text-sm">
                Automation
              </span>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Projects;