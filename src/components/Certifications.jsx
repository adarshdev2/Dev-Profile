import { motion } from "framer-motion";
import { useState } from "react";
import { FaAward } from "react-icons/fa";

import fsjava from "../assets/fsjava.jpg";
import javabasic from "../assets/java-basic.png";
import pythonbasic from "../assets/python-basic.png";
import sqladvanced from "../assets/sql-advanced.png";
import internshipcert from "../assets/internship-cert.jpg";

function Certifications() {
  const [selectedImage, setSelectedImage] = useState(null);

  const certifications = [
    {
      title: "Full Stack Developer Internship",
      provider: "Spot World Wide Pvt. Ltd.",
      year: "2023",
      image: internshipcert,
    },
    {
      title: "Full Stack Java Development",
      provider: "Simplilearn",
      year: "2023",
      image: fsjava,
    },
    {
      title: "Java (Basic)",
      provider: "HackerRank",
      year: "2025",
      image: javabasic,
    },
    {
      title: "Python (Basic)",
      provider: "HackerRank",
      year: "2025",
      image: pythonbasic,
    },
    {
      title: "SQL (Advanced)",
      provider: "HackerRank",
      year: "2025",
      image: sqladvanced,
    },
  ];

  return (
    <section
      id="certifications"
      className="min-h-screen bg-black text-white px-6 py-24"
    >
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-20">
          <p className="text-cyan-400 uppercase tracking-[5px] mb-4">
            Certifications
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Learning & Achievements
          </h2>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              onClick={() => setSelectedImage(cert.image)}
              className="bg-[#0b0b0b] border border-gray-800 rounded-2xl p-6 text-center cursor-pointer transition duration-300 shadow-sm hover:shadow-md"
            >

              {/* ICON AREA (calm design) */}
              <div className="h-40 flex flex-col items-center justify-center rounded-xl mb-5 bg-black border border-gray-800">

                <FaAward className="text-4xl text-cyan-500 mb-3" />

                <p className="text-gray-400 text-sm">
                  Click to view certificate
                </p>

              </div>

              {/* TEXT */}
              <h3 className="text-lg font-semibold leading-snug">
                {cert.title}
              </h3>

              <p className="text-gray-500 mt-2 text-sm">
                {cert.provider}
              </p>

              <div className="mt-4 inline-block px-3 py-1 text-xs text-cyan-400 border border-gray-700 rounded-full">
                {cert.year}
              </div>

            </motion.div>
          ))}

        </div>
      </div>

      {/* MODAL */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/85 flex items-center justify-center z-50 p-6"
        >
          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.25 }}
            src={selectedImage}
            alt="Certificate"
            className="w-[90vw] max-w-[800px] max-h-[80vh] object-contain bg-black rounded-2xl border border-gray-700 p-3"
          />
        </div>
      )}

    </section>
  );
}

export default Certifications;