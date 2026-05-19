import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

function Education() {
  return (
    <section
      id="education"
      className="min-h-screen bg-black text-white px-4 sm:px-6 py-20"
    >
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-16">

          <p className="text-cyan-400 uppercase tracking-[5px] mb-4 text-sm">
            Education
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Academic Background
          </h2>

        </div>

        <div className="space-y-8">

          {/* MSc */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-card hover-box p-5 sm:p-7 md:p-10 relative overflow-hidden rounded-3xl"
          >

            {/* Glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 blur-3xl rounded-full"></div>

            <div className="flex flex-col items-center text-center gap-6 relative z-10">

              {/* ICON */}
              <div className="text-5xl sm:text-6xl text-cyan-400">
                <FaGraduationCap />
              </div>

              {/* CONTENT */}
              <div className="w-full">

                <h3 className="text-2xl sm:text-3xl font-bold leading-snug">
                  M.Sc Computer Science
                </h3>

                <p className="text-cyan-400 text-sm sm:text-lg mt-3">
                  Government Arts College, Coimbatore
                </p>

                <div className="inline-block mt-5 px-4 py-2 bg-black rounded-xl text-xs sm:text-sm text-gray-300 border border-gray-700">
                  2024 – 2026
                </div>

                <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed mt-6">
                  Completed postgraduate studies with focus on
                  software engineering, databases, Linux systems,
                  backend development and problem solving.
                </p>

              </div>

            </div>

          </motion.div>

          {/* BSc */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="glass-card hover-box p-5 sm:p-7 md:p-10 relative overflow-hidden rounded-3xl"
          >

            {/* Glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 blur-3xl rounded-full"></div>

            <div className="flex flex-col items-center text-center gap-6 relative z-10">

              {/* ICON */}
              <div className="text-5xl sm:text-6xl text-cyan-400">
                <FaGraduationCap />
              </div>

              {/* CONTENT */}
              <div className="w-full">

                <h3 className="text-2xl sm:text-3xl font-bold leading-snug">
                  B.Sc Computer Science
                </h3>

                <p className="text-cyan-400 text-sm sm:text-lg mt-3">
                  Government Arts College, Coimbatore
                </p>

                <div className="flex flex-wrap justify-center gap-3 mt-5">

                  <div className="px-4 py-2 bg-black rounded-xl text-xs sm:text-sm text-gray-300 border border-gray-700">
                    2020 – 2023
                  </div>

                  <div className="px-4 py-2 bg-cyan-500/10 rounded-xl text-xs sm:text-sm text-cyan-400 border border-cyan-500/30">
                    82.7%
                  </div>

                </div>

                <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed mt-6">
                  Completed undergraduate studies with strong
                  foundations in programming, databases,
                  algorithms and computer science concepts.
                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Education;