import { motion } from "framer-motion";
import profile from "../assets/profile.png";

function Hero() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden px-6 pt-24 sm:pt-28 md:pt-20">

      {/* Animated Glow Background */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl"
      />

      <div className="max-w-5xl mx-auto text-center relative z-10">

        {/* PROFILE IMAGE */}
        <div className="flex justify-center mb-6">

          <div className="relative">

            {/* glow ring */}
            <div className="absolute inset-0 bg-cyan-500/30 blur-2xl rounded-full"></div>

            <img
              src={profile}
              alt="Profile"
              className="w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-48 lg:h-48 object-cover rounded-full border-4 border-cyan-500 relative z-10"
            />

          </div>

        </div>

        <p className="text-cyan-400 uppercase tracking-[5px] mb-5 text-sm sm:text-base">
          Graduate Software Engineer
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
          ADARSH{" "}
          <span className="text-cyan-400">P</span>
        </h1>

        <p className="text-gray-400 text-sm sm:text-base md:text-xl mt-6 leading-relaxed max-w-4xl mx-auto px-2">
          MSc Computer Science postgraduate passionate about
          Linux systems, backend development, REST APIs,
          automation and building efficient software solutions.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">

          <a
            href="#projects"
            className="px-6 py-3 text-sm sm:text-base bg-cyan-500 rounded-2xl hover:scale-105 transition duration-300 font-semibold"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 text-sm sm:text-base border border-cyan-500 rounded-2xl hover:bg-cyan-500 transition duration-300 font-semibold"
          >
            Contact Me
          </a>

        </div>

      </div>
    </section>
  );
}

export default Hero;