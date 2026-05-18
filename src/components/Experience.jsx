import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen bg-black text-white px-6 py-24"
    >
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-20">

          <p className="text-cyan-400 uppercase tracking-[5px] mb-4">
            Experience
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Internship Experience
          </h2>

        </div>

        {/* EXPERIENCE CARD */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-card hover-box p-5 sm:p-7 md:p-10 relative overflow-hidden"
        >

          {/* Glow */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 blur-3xl rounded-full"></div>

          <div className="flex items-center gap-5 mb-8">

            <div className="text-5xl text-cyan-400">
              <FaBriefcase />
            </div>

           <div>
            <h3 className="text-3xl font-bold">
              Full Stack Developer Intern
            </h3>

            <p className="text-cyan-400 text-lg mt-2">
              Spot World Wide Pvt. Ltd.
            </p>

            <div className="inline-block mt-4 px-4 py-2 bg-black rounded-xl text-sm text-gray-300 border border-gray-700">
              Jun 2023 – Jul 2023
            </div>
          </div>

          </div>

          <p className="text-gray-400 text-lg leading-relaxed">
            Worked on frontend development, debugging,
            feature implementation and deployment activities
            using HTML, CSS, JavaScript and Git.

            Collaborated with developers during software
            testing and troubleshooting while improving
            application stability and user experience.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">

            <span className="bg-black px-5 py-3 rounded-2xl text-sm">
              HTML
            </span>

            <span className="bg-black px-5 py-3 rounded-2xl text-sm">
              CSS
            </span>

            <span className="bg-black px-5 py-3 rounded-2xl text-sm">
              JavaScript
            </span>

            <span className="bg-black px-5 py-3 rounded-2xl text-sm">
              Git
            </span>

            <span className="bg-black px-5 py-3 rounded-2xl text-sm">
              Debugging
            </span>

          </div>

        </motion.div>
      </div>
    </section>
  );
}

export default Experience;