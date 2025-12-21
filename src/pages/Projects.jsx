import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  Cpu,
  Cloud,
  Ticket,
  Briefcase,
  CreditCard
} from "lucide-react";

/* ================= PROJECT DATA ================= */

const projects = [
  {
    title: "SmartFit – AI Driven Fitness Platform",
    icon: <Cpu size={36} />,
    tech: "Java • Spring Boot • Microservices • Kafka • OAuth 2.0 • Spring AI",
    description:
      "An AI-powered fitness recommendation platform built on a scalable microservices architecture.",
    features: [
      "AI-based personalized fitness recommendations",
      "Event-driven architecture using Kafka",
      "Secure authentication with OAuth 2.0 & JWT",
      "High-performance APIs with <200ms latency",
    ],
    points: [
      "Designed 5+ independently scalable microservices",
      "Handled 1000+ events/min using Kafka",
      "Optimized DB performance by 40% using JPA",
    ],
    github: "https://github.com/tiwari-ji-27/fitness-meter",
    live: null,
  },
  {
    title: "CloudBean – Cloud File Storage System",
    icon: <Cloud size={36} />,
    tech: "Spring Boot • React • JPA • SQL • REST APIs",
    description:
      "A full-stack cloud-based file storage system with fast search and indexing.",
    features: [
      "Centralized cloud file storage",
      "Fast search with custom indexing",
      "Secure role-based access",
      "RESTful file management APIs",
    ],
    points: [
      "Built backend with Spring Boot and frontend with React",
      "Optimized search latency for large directories",
      "Designed scalable upload/download APIs",
    ],
    github: "https://github.com/tiwari-ji-27/CloudBean",
    live: null,
  },
  {
    title: "BookIt – Online Movie Ticket Booking System",
    icon: <Ticket size={36} />,
    tech: "Java • Spring Boot • Hibernate • SQL • REST APIs",
    description:
      "A backend-intensive ticket booking system with concurrency-safe reservations.",
    features: [
      "Concurrent seat booking handling",
      "Auto-cancellation for unpaid bookings",
      "Normalized relational DB design",
      "Scalable REST APIs",
    ],
    points: [
      "Managed 50+ movies with concurrent users",
      "Implemented thread-safe booking logic",
      "Scheduled jobs for booking expiry",
    ],
    github: "https://github.com/tiwari-ji-27/Booking_APP",
    live: null,
  },

  /* ============ NEW PROJECTS ADDED ============ */

  {
    title: "SpringHireAI – ATS Tracker & Resume Analysis Platform",
    icon: <Briefcase size={36} />,
    tech: "Java • Spring Boot • Spring AI • NLP • REST APIs • MySQL",
    description:
      "An AI-powered Applicant Tracking System that analyzes resumes against job descriptions to improve ATS scores.",
    features: [
      "ATS score calculation using AI & NLP",
      "Resume vs Job Description matching",
      "Keyword gap and optimization insights",
      "Recruiter-friendly candidate filtering",
    ],
    points: [
      "Built AI-based resume parsing and scoring engine",
      "Improved resume-job match accuracy using NLP",
      "Designed REST APIs for ATS analysis workflow",
    ],
    github: "https://github.com/tiwari-ji-27/SpringHireAI",
    live: "https://atscheckerv1.netlify.app/", // Live button hidden automatically
  },
  {
    title: "SpringPay-Connect – Secure Payment & Email Automation",
    icon: <CreditCard size={36} />,
    tech: "Java • Spring Boot • Razorpay • SMTP • REST APIs",
    description:
      "A secure payment gateway integration with automated email confirmation for successful transactions.",
    features: [
      "Razorpay payment gateway integration",
      "Real-time payment verification",
      "Automated email confirmation system",
      "Secure transaction handling",
    ],
    points: [
      "Integrated Razorpay checkout and webhook verification",
      "Implemented transactional email service",
      "Ensured payment consistency with backend validation",
    ],
    github: "https://github.com/tiwari-ji-27/SpringPay-Connect",
    live: null,
  },
];

/* ================= COMPONENT ================= */

const Projects = () => {
  return (
    <section className="px-16 py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="absolute w-[450px] h-[450px] bg-purple-500/10 rounded-full blur-[120px] -top-40 -left-40"></div>
        <div className="absolute w-[520px] h-[520px] bg-blue-500/10 rounded-full blur-[120px] -bottom-40 -right-40"></div>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-extrabold mb-16 text-center
                   bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400
                   bg-clip-text text-transparent"
      >
        Projects
      </motion.h2>

      <div className="space-y-16 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="relative p-10 rounded-2xl border border-gray-700
                       bg-gradient-to-br from-gray-900 via-gray-900 to-black
                       shadow-[0_20px_60px_-15px_rgba(124,58,237,0.35)]
                       hover:shadow-[0_25px_80px_-10px_rgba(59,130,246,0.45)]
                       transition-all"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r
                            from-purple-500/20 via-pink-500/20 to-blue-500/20
                            opacity-0 hover:opacity-100 transition pointer-events-none"></div>

            <div className="relative flex items-center gap-4 mb-4">
              <motion.div
                whileHover={{ scale: 1.15 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="p-3 rounded-xl bg-gradient-to-br
                           from-purple-600/30 to-blue-600/30
                           text-purple-400 shadow-md"
              >
                {project.icon}
              </motion.div>

              <h3 className="text-2xl font-semibold text-white">
                {project.title}
              </h3>
            </div>

            <p className="relative text-gray-400 mb-4">
              {project.description}
            </p>

            <p className="relative text-sm mb-6
                          bg-gradient-to-r from-purple-400 to-blue-400
                          bg-clip-text text-transparent font-medium">
              {project.tech}
            </p>

            <div className="relative mb-6">
              <h4 className="font-semibold mb-2 text-white">Key Features</h4>
              <ul className="grid md:grid-cols-2 gap-2 list-disc list-inside text-gray-300">
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="relative mb-6">
              <h4 className="font-semibold mb-2 text-white">
                Implementation Highlights
              </h4>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                {project.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>

            <div className="relative flex gap-4 mt-8">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border
                           border-gray-600 text-gray-300
                           hover:bg-gray-800 hover:border-purple-500
                           transition"
              >
                <Github size={18} />
                Source Code
              </a>

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg
                             bg-gradient-to-r from-purple-600 to-blue-600
                             text-white shadow-lg
                             hover:scale-105 transition"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
