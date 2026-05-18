import { motion } from "framer-motion";
function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-black text-white flex items-center px-6 py-20"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT SIDE */}
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
        >
          <p className="text-cyan-400 uppercase tracking-[4px] mb-4">
            About Me
          </p>

          <h2 className="text-4xl md:text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Passionate About Technology & Development
          </h2>

          <p className="text-gray-400 mt-8 leading-relaxed text-lg">
            I am an MSc Computer Science postgraduate with strong
            foundations in Java, Linux, REST APIs, SQL, debugging
            and automation.

            I enjoy developing backend applications, Linux-based
            automation tools and solving practical software
            engineering problems using clean and scalable solutions.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            
            <div className="glass-card hover-box px-6 py-3 rounded-2xl">
              Java
            </div>

            <div className="glass-card hover-box px-6 py-3 rounded-2xl">
              Linux
            </div>

            <div className="glass-card hover-box px-6 py-3 rounded-2xl">
              REST APIs
            </div>

            <div className="glass-card hover-box px-6 py-3 rounded-2xl">
              Spring Boot
            </div>

            <div className="glass-card hover-box px-6 py-3 rounded-2xl">
              SQL
            </div>

            <div className="glass-card hover-box px-6 py-3 rounded-2xl">
              Automation
            </div>

          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-card hover-box p-5 sm:p-7 md:p-10"
        >
          
          <h3 className="text-3xl font-bold text-cyan-400 mb-8">
            Quick Details
          </h3>

          <div className="space-y-6 text-gray-300 text-lg">
          <p>🎓 MSc Computer Science</p>

          <p>💻 Backend Developer</p>

          <p>🐧 Linux Enthusiast</p>

          <p>⚙ REST API Development</p>

          <p>🗄 SQL & Database Systems</p>

          <p>🚀 Automation & Problem Solving</p>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default About;