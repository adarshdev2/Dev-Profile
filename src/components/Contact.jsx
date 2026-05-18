import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white flex items-center px-6 py-20"
    >
      <div className="max-w-4xl mx-auto text-center">

        <p className="text-cyan-400 uppercase tracking-[4px] mb-4">
          Contact
        </p>

        <h2 className="text-4xl md:text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
          Let's Connect
        </h2>

        <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
          Feel free to connect with me for opportunities,
          collaborations or technical discussions.
        </p>

        <div className="flex justify-center gap-5 sm:p-6 md:p-8 mt-12 text-5xl">

          <a
            href="https://github.com/adarshdev2"
            target="_blank"
            className="hover:text-cyan-400 hover:scale-110 transition duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/adarsh-p-b18480271"
            target="_blank"
            className="hover:text-cyan-400 hover:scale-110 transition duration-300"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:adarsh.prakash.rm@outlook.com"
            className="hover:text-cyan-400 hover:scale-110 transition duration-300"
          >
            <FaEnvelope />
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;