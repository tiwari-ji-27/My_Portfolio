// import { motion } from "framer-motion";
// import {
//   Github,
//   ExternalLink,
//   Cpu,
//   Cloud,
//   Ticket,
//   Briefcase,
//   CreditCard
// } from "lucide-react";

// /* ================= PROJECT DATA ================= */

// const projects = [
//   {
//     title: "SmartFit – AI Driven Fitness Platform",
//     icon: <Cpu size={36} />,
//     tech: "Java • Spring Boot • Microservices • Kafka • OAuth 2.0 • Spring AI",
//     description:
//       "An AI-powered fitness recommendation platform built on a scalable microservices architecture.",
//     features: [
//       "AI-based personalized fitness recommendations",
//       "Event-driven architecture using Kafka",
//       "Secure authentication with OAuth 2.0 & JWT",
//       "High-performance APIs with <200ms latency",
//     ],
//     points: [
//       "Designed 5+ independently scalable microservices",
//       "Handled 1000+ events/min using Kafka",
//       "Optimized DB performance by 40% using JPA",
//     ],
//     github: "https://github.com/tiwari-ji-27/fitness-meter",
//     live: null,
//   },
//   {
//     title: "CloudBean – Cloud File Storage System",
//     icon: <Cloud size={36} />,
//     tech: "Spring Boot • React • JPA • SQL • REST APIs",
//     description:
//       "A full-stack cloud-based file storage system with fast search and indexing.",
//     features: [
//       "Centralized cloud file storage",
//       "Fast search with custom indexing",
//       "Secure role-based access",
//       "RESTful file management APIs",
//     ],
//     points: [
//       "Built backend with Spring Boot and frontend with React",
//       "Optimized search latency for large directories",
//       "Designed scalable upload/download APIs",
//     ],
//     github: "https://github.com/tiwari-ji-27/CloudBean",
//     live: null,
//   },
//   {
//     title: "BookIt – Online Movie Ticket Booking System",
//     icon: <Ticket size={36} />,
//     tech: "Java • Spring Boot • Hibernate • SQL • REST APIs",
//     description:
//       "A backend-intensive ticket booking system with concurrency-safe reservations.",
//     features: [
//       "Concurrent seat booking handling",
//       "Auto-cancellation for unpaid bookings",
//       "Normalized relational DB design",
//       "Scalable REST APIs",
//     ],
//     points: [
//       "Managed 50+ movies with concurrent users",
//       "Implemented thread-safe booking logic",
//       "Scheduled jobs for booking expiry",
//     ],
//     github: "https://github.com/tiwari-ji-27/Booking_APP",
//     live: null,
//   },

//   /* ============ NEW PROJECTS ADDED ============ */

//   {
//     title: "SpringHireAI – ATS Tracker & Resume Analysis Platform",
//     icon: <Briefcase size={36} />,
//     tech: "Java • Spring Boot • Spring AI • NLP • REST APIs",
//     description:
//       "An AI-powered Applicant Tracking System that analyzes resumes against job descriptions to improve ATS scores.",
//     features: [
//       "ATS score calculation using AI & NLP",
//       "Resume vs Job Description matching",
//       "Keyword gap and optimization insights",
//       "Recruiter-friendly candidate filtering",
//     ],
//     points: [
//       "Built AI-based resume parsing and scoring engine",
//       "Improved resume-job match accuracy using NLP",
//       "Designed REST APIs for ATS analysis workflow",
//     ],
//     github: "https://github.com/tiwari-ji-27/SpringHireAI",
//     live: "https://atscheckerv1.netlify.app/", // Live button hidden automatically
//   },
//   {
//     title: "SpringPay-Connect – Secure Payment & Email Automation",
//     icon: <CreditCard size={36} />,
//     tech: "Java • Spring Boot • Razorpay • SMTP • REST APIs",
//     description:
//       "A secure payment gateway integration with automated email confirmation for successful transactions.",
//     features: [
//       "Razorpay payment gateway integration",
//       "Real-time payment verification",
//       "Automated email confirmation system",
//       "Secure transaction handling",
//     ],
//     points: [
//       "Integrated Razorpay checkout and webhook verification",
//       "Implemented transactional email service",
//       "Ensured payment consistency with backend validation",
//     ],
//     github: "https://github.com/tiwari-ji-27/SpringPay-Connect",
//     live: null,
//   },
// ];

// /* ================= COMPONENT ================= */

// const Projects = () => {
//   return (
//     <section className="px-16 py-20 relative overflow-hidden">
//       <div className="absolute inset-0 -z-10 opacity-40">
//         <div className="absolute w-[450px] h-[450px] bg-purple-500/10 rounded-full blur-[120px] -top-40 -left-40"></div>
//         <div className="absolute w-[520px] h-[520px] bg-blue-500/10 rounded-full blur-[120px] -bottom-40 -right-40"></div>
//       </div>

//       <motion.h2
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="text-4xl md:text-5xl font-extrabold mb-16 text-center
//                    bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400
//                    bg-clip-text text-transparent"
//       >
//         Projects
//       </motion.h2>

//       <div className="space-y-16 max-w-6xl mx-auto">
//         {projects.map((project, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.2 }}
//             whileHover={{ scale: 1.02 }}
//             className="relative p-10 rounded-2xl border border-gray-700
//                        bg-gradient-to-br from-gray-900 via-gray-900 to-black
//                        shadow-[0_20px_60px_-15px_rgba(124,58,237,0.35)]
//                        hover:shadow-[0_25px_80px_-10px_rgba(59,130,246,0.45)]
//                        transition-all"
//           >
//             <div className="absolute inset-0 rounded-2xl bg-gradient-to-r
//                             from-purple-500/20 via-pink-500/20 to-blue-500/20
//                             opacity-0 hover:opacity-100 transition pointer-events-none"></div>

//             <div className="relative flex items-center gap-4 mb-4">
//               <motion.div
//                 whileHover={{ scale: 1.15 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//                 className="p-3 rounded-xl bg-gradient-to-br
//                            from-purple-600/30 to-blue-600/30
//                            text-purple-400 shadow-md"
//               >
//                 {project.icon}
//               </motion.div>

//               <h3 className="text-2xl font-semibold text-white">
//                 {project.title}
//               </h3>
//             </div>

//             <p className="relative text-gray-400 mb-4">
//               {project.description}
//             </p>

//             <p className="relative text-sm mb-6
//                           bg-gradient-to-r from-purple-400 to-blue-400
//                           bg-clip-text text-transparent font-medium">
//               {project.tech}
//             </p>

//             <div className="relative mb-6">
//               <h4 className="font-semibold mb-2 text-white">Key Features</h4>
//               <ul className="grid md:grid-cols-2 gap-2 list-disc list-inside text-gray-300">
//                 {project.features.map((feature, i) => (
//                   <li key={i}>{feature}</li>
//                 ))}
//               </ul>
//             </div>

//             <div className="relative mb-6">
//               <h4 className="font-semibold mb-2 text-white">
//                 Implementation Highlights
//               </h4>
//               <ul className="list-disc list-inside space-y-1 text-gray-300">
//                 {project.points.map((point, i) => (
//                   <li key={i}>{point}</li>
//                 ))}
//               </ul>
//             </div>

//             <div className="relative flex gap-4 mt-8">
//               <a
//                 href={project.github}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-2 px-4 py-2 rounded-lg border
//                            border-gray-600 text-gray-300
//                            hover:bg-gray-800 hover:border-purple-500
//                            transition"
//               >
//                 <Github size={18} />
//                 Source Code
//               </a>

//               {project.live && (
//                 <a
//                   href={project.live}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2 px-4 py-2 rounded-lg
//                              bg-gradient-to-r from-purple-600 to-blue-600
//                              text-white shadow-lg
//                              hover:scale-105 transition"
//                 >
//                   <ExternalLink size={18} />
//                   Live Demo
//                 </a>
//               )}
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;



// import { motion } from "framer-motion";
// import { Github, ExternalLink, Cpu, Cloud, Ticket, Briefcase, CreditCard } from "lucide-react";

// // Project data remains the same... (Skipping for brevity)

// const Projects = () => {
//   return (
//     <section className="px-6 md:px-16 py-12 md:py-20 relative overflow-hidden">
//       {/* Background Glows */}
//       <div className="absolute inset-0 -z-10 opacity-30">
//         <div className="absolute w-[300px] md:w-[450px] h-[300px] md:h-[450px] bg-purple-500/10 rounded-full blur-[100px] -top-20 -left-20"></div>
//         <div className="absolute w-[350px] md:w-[520px] h-[350px] md:h-[520px] bg-blue-500/10 rounded-full blur-[100px] -bottom-20 -right-20"></div>
//       </div>

//       <motion.h2
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         className="text-3xl md:text-5xl font-extrabold mb-10 md:mb-16 text-center bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
//       >
//         Projects
//       </motion.h2>

//       <div className="space-y-10 md:space-y-16 max-w-6xl mx-auto">
//         {projects.map((project, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="relative p-6 md:p-10 rounded-2xl border border-gray-800 bg-gray-900/80 shadow-2xl transition-all hover:border-gray-600"
//           >
//             {/* Header: Icon + Title */}
//             <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
//               <div className="p-3 w-fit rounded-xl bg-purple-600/20 text-purple-400 shadow-md">
//                 {project.icon}
//               </div>
//               <h3 className="text-xl md:text-2xl font-bold text-white">{project.title}</h3>
//             </div>

//             <p className="text-gray-400 mb-4 text-sm md:text-base leading-relaxed">{project.description}</p>

//             <p className="text-xs md:text-sm mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-bold tracking-wide uppercase">
//               {project.tech}
//             </p>

//             {/* Content Grids */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//               <div>
//                 <h4 className="font-semibold mb-3 text-white text-sm md:text-base">Key Features</h4>
//                 <ul className="space-y-1 text-gray-400 text-sm">
//                   {project.features.map((feature, i) => (
//                     <li key={i} className="flex gap-2"><span>•</span> {feature}</li>
//                   ))}
//                 </ul>
//               </div>
//               <div>
//                 <h4 className="font-semibold mb-3 text-white text-sm md:text-base">Implementation</h4>
//                 <ul className="space-y-1 text-gray-400 text-sm">
//                   {project.points.map((point, i) => (
//                     <li key={i} className="flex gap-2"><span>•</span> {point}</li>
//                   ))}
//                 </ul>
//               </div>
//             </div>

//             {/* Buttons */}
//             <div className="flex flex-wrap gap-4">
//               <a
//                 href={project.github}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="flex flex-1 sm:flex-none items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-800 transition text-sm"
//               >
//                 <Github size={18} /> Source
//               </a>
//               {project.live && (
//                 <a
//                   href={project.live}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="flex flex-1 sm:flex-none items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg hover:scale-105 transition text-sm"
//                 >
//                   <ExternalLink size={18} /> Live Demo
//                 </a>
//               )}
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;





import React from "react";
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
    icon: <Cpu size={32} />,
    tech: "Java • Spring Boot • Microservices • Kafka • OAuth 2.0",
    description: "An AI-powered fitness recommendation platform built on a scalable microservices architecture.",
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
    title: "SpringHireAI – ATS Tracker",
    icon: <Briefcase size={32} />,
    tech: "Java • Spring Boot • Spring AI • NLP • REST APIs",
    description: "An AI-powered Applicant Tracking System that analyzes resumes against job descriptions to improve ATS scores.",
    features: [
      "ATS score calculation using AI & NLP",
      "Resume vs Job Description matching",
      "Keyword gap and optimization insights",
      "Recruiter-friendly candidate filtering",
    ],
    points: [
      "Built AI-based resume parsing engine",
      "Improved resume-job match accuracy using NLP",
      "Designed REST APIs for ATS analysis workflow",
    ],
    github: "https://github.com/tiwari-ji-27/SpringHireAI",
    live: "https://atscheckerv1.netlify.app/",
  },
  {
    title: "CloudBean – Cloud Storage",
    icon: <Cloud size={32} />,
    tech: "Spring Boot • React • JPA • SQL • REST APIs",
    description: "A full-stack cloud-based file storage system with fast search and indexing.",
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
    title: "BookIt – Movie Ticket Booking",
    icon: <Ticket size={32} />,
    tech: "Java • Spring Boot • Hibernate • SQL • REST APIs",
    description: "A backend-intensive ticket booking system with concurrency-safe reservations.",
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
  {
    title: "SpringPay-Connect",
    icon: <CreditCard size={32} />,
    tech: "Java • Spring Boot • Razorpay • SMTP • REST APIs",
    description: "A secure payment gateway integration with automated email confirmation.",
    features: [
      "Razorpay payment gateway integration",
      "Real-time payment verification",
      "Automated email confirmation system",
      "Secure transaction handling",
    ],
    points: [
      "Integrated Razorpay checkout and webhooks",
      "Implemented transactional email service",
      "Ensured payment consistency with validation",
    ],
    github: "https://github.com/tiwari-ji-27/SpringPay-Connect",
    live: null,
  },
];

/* ================= COMPONENT ================= */
const Projects = () => {
  return (
    <section className="px-6 md:px-16 py-12 md:py-20 relative overflow-hidden">
      {/* Background glow - Responsive opacity */}
      <div className="absolute inset-0 -z-10 opacity-30 md:opacity-40">
        <div className="absolute w-[300px] md:w-[450px] h-[300px] md:h-[450px] bg-purple-500/10 rounded-full blur-[80px] md:blur-[120px] -top-20 -left-20"></div>
        <div className="absolute w-[350px] md:w-[520px] h-[350px] md:h-[520px] bg-blue-500/10 rounded-full blur-[80px] md:blur-[120px] -bottom-20 -right-20"></div>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-extrabold mb-10 md:mb-16 text-center bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
      >
        Projects
      </motion.h2>

      <div className="space-y-10 md:space-y-16 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative p-6 md:p-10 rounded-2xl border border-gray-800 bg-gray-900/80 shadow-2xl transition-all hover:border-gray-600 group"
          >
            {/* Header: Icon + Title */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
              <div className="p-3 w-fit rounded-xl bg-purple-600/20 text-purple-400 shadow-md group-hover:scale-110 transition-transform">
                {project.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white">{project.title}</h3>
            </div>

            <p className="text-gray-400 mb-4 text-sm md:text-base leading-relaxed">
              {project.description}
            </p>

            <p className="text-xs md:text-sm mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-bold tracking-wide uppercase">
              {project.tech}
            </p>

            {/* Grid for Features and Implementation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-semibold mb-3 text-white text-sm md:text-base border-l-2 border-purple-500 pl-2">Key Features</h4>
                <ul className="space-y-1 text-gray-400 text-xs md:text-sm">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex gap-2"><span>•</span> {feature}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-white text-sm md:text-base border-l-2 border-blue-500 pl-2">Highlights</h4>
                <ul className="space-y-1 text-gray-400 text-xs md:text-sm">
                  {project.points.map((point, i) => (
                    <li key={i} className="flex gap-2"><span>•</span> {point}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mt-auto">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex flex-1 sm:flex-none items-center justify-center gap-2 px-6 py-2.5 rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-800 transition-all text-sm font-medium"
              >
                <Github size={18} /> Source Code
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-1 sm:flex-none items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg hover:scale-105 transition-all text-sm font-bold"
                >
                  <ExternalLink size={18} /> Live Demo
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