"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedin, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<{ type: "idle" | "loading" | "success" | "error"; message: string }>({
    type: "idle",
    message: "",
  });

  // Gestion du changement des inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Gestion de l'envoi du formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({ type: "success", message: "Message envoyé avec succès !" });
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus({ type: "error", message: data.message || "Erreur lors de l'envoi." });
      }
    } catch (error) {
      setStatus({ type: "error", message: "Erreur lors de l'envoi." });
    }
  };

  return (
    <section className="relative container mx-auto px-4 md:px-8 lg:px-40 py-16"
      id="contact">
      {/* Titre principal */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-blue-400 mb-10"
      >
        // Me Contacter
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-12 items-center bg-[#0f1b2d] rounded-2xl p-8">
        
        {/* ====== Colonne gauche - Infos ====== */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white mb-2">Let's Talk</h2>
          <h3 className="text-3xl font-bold text-cyan-400 mb-4">We'd love to help</h3>
          <p className="text-gray-300 mb-8">
            Crafting innovative solutions to solve real-world problems
          </p>

          <div className="space-y-4">
            {/* Email */}
            <div className="flex items-center gap-3 text-gray-300">
              <FaEnvelope className="text-cyan-400 text-xl" />
              <a href="mailto:christopherdepasqual@icloud.com" className="hover:underline">
                christopherdepasqual@icloud.com
              </a>
            </div>
            {/* Téléphone */}
            <div className="flex items-center gap-3 text-gray-300">
              <FaPhone className="text-cyan-400 text-xl" />
              <a href="tel:+33776855577" className="hover:underline">
                +33 776855577
              </a>
            </div>
            {/* LinkedIn */}
            <div className="flex items-center gap-3 text-gray-300">
              <FaLinkedin className="text-cyan-400 text-xl" />
              <a
                href="https://www.linkedin.com/in/christopher-de-pasqual-5977132b1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </motion.div>

        {/* ====== Colonne droite - Formulaire ====== */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your name here"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-transparent border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your email address here"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-transparent border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <input
            type="text"
            name="subject"
            placeholder="Your subject here"
            value={form.subject}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-transparent border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <textarea
            name="message"
            placeholder="Your message here"
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-transparent border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          ></textarea>

          <button
            type="submit"
            disabled={status.type === "loading"}
            className="w-full p-3 bg-cyan-400 text-gray-900 rounded-lg font-semibold hover:bg-cyan-300 transition flex justify-center items-center gap-2"
          >
            {status.type === "loading" && (
              <svg
                className="animate-spin h-5 w-5 text-gray-900"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
            )}
            {status.type === "loading" ? "Sending..." : "Submit"}
          </button>

          {/* Message de statut avec animation */}
          {status.type !== "idle" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex items-center gap-2 text-sm justify-center ${
                status.type === "success"
                  ? "text-green-400"
                  : status.type === "error"
                  ? "text-red-400"
                  : "text-gray-400"
              }`}
            >
              {status.type === "success" && <FaCheckCircle />}
              {status.type === "error" && <FaTimesCircle />}
              <span>{status.message}</span>
            </motion.div>
          )}
        </motion.form>
      </div>
    </section>
  );
}
