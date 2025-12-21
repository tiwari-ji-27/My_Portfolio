// import { motion } from "framer-motion";
// import {
//   Code2,
//   Layers,
//   Cloud,
//   ShieldCheck,
// } from "lucide-react";

// /* ================= DATA ================= */

// const skillSections = [
//   {
//     title: "Programming Languages",
//     icon: <Code2 />,
//     skills: ["Java", "Python", "SQL", "JavaScript", "C++"],
//   },
//   {
//     title: "Frameworks & Libraries",
//     icon: <Layers />,
//     skills: [
//       "Spring Boot",
//       "Spring MVC",
//       "Spring Data JPA",
//       "Hibernate",
//       "Spring AI",
//       "React",
//       "JUnit 5",
//       "Mockito",
//     ],
//   },
//   {
//     title: "Microservices, Security & Cloud",
//     icon: <ShieldCheck />,
//     skills: [
//       "Spring Cloud",
//       "Apache Kafka",
//       "Eureka",
//       "OpenFeign",
//       "API Gateway",
//       "Spring Security",
//       "OAuth 2.0",
//       "JWT",
//       "Cloud Architecture",
//     ],
//   },
//   {
//     title: "Tools & Core Concepts",
//     icon: <Cloud />,
//     skills: [
//       "Docker",
//       "Git & GitHub",
//       "Postman",
//       "Swagger",
//       "MongoDB",
//       "MySQL",
//       "Design Patterns",
//       "DSA",
//     ],
//   },
// ];

// /* ================= COMPONENT ================= */

// const Skills = () => {
//   return (
//     <section className="px-16 py-20 relative overflow-hidden">

//       {/* Background glow */}
//       <div className="absolute inset-0 -z-10 opacity-40">
//         <div className="absolute w-[420px] h-[420px] bg-purple-500/10 rounded-full blur-[120px] -top-40 -left-40"></div>
//         <div className="absolute w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -bottom-40 -right-40"></div>
//       </div>

//       {/* Heading */}
//       <motion.h2
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="text-4xl md:text-5xl font-extrabold mb-14 text-center
//                    bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400
//                    bg-clip-text text-transparent"
//       >
//         Technical Skills
//       </motion.h2>

//       {/* Skill Cards */}
//       <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
//         {skillSections.map((section, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.15 }}
//             whileHover={{ scale: 1.03 }}
//             className="relative p-8 rounded-2xl border border-gray-700
//                        bg-gradient-to-br from-gray-900 to-black
//                        shadow-[0_20px_60px_-15px_rgba(124,58,237,0.35)]
//                        hover:shadow-[0_25px_80px_-10px_rgba(59,130,246,0.45)]
//                        transition-all"
//           >
//             {/* Subtle gradient border glow */}
//             <div className="absolute inset-0 rounded-2xl
//                             bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20
//                             opacity-0 hover:opacity-100 transition pointer-events-none"></div>

//             {/* Header */}
//             <div className="relative flex items-center gap-4 mb-6">
//               <div className="p-3 rounded-xl
//                               bg-gradient-to-br from-purple-600/30 to-blue-600/30
//                               text-purple-400 shadow-md">
//                 {section.icon}
//               </div>
//               <h3 className="text-2xl font-semibold text-white">
//                 {section.title}
//               </h3>
//             </div>

//             {/* Skills */}
//             <div className="relative flex flex-wrap gap-3">
//               {section.skills.map((skill, i) => (
//                 <motion.span
//                   key={i}
//                   whileHover={{ scale: 1.1 }}
//                   className="px-4 py-1.5 text-sm rounded-full
//                              bg-gray-800 text-gray-300
//                              border border-gray-600
//                              hover:border-purple-500
//                              hover:text-white
//                              transition"
//                 >
//                   {skill}
//                 </motion.span>
//               ))}
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Skills;
import { motion } from "framer-motion";
import {
  Code2,
  Layers,
  Cloud,
  ShieldCheck,
} from "lucide-react";

/* ================= DATA ================= */

const skillSections = [
  {
    title: "Backend & Core Engineering",
    subtitle: "Strong foundation in scalable backend systems",
    icon: <Code2 />,
    skills: [
      "Java",
      "Spring Boot",
      "Spring MVC",
      "Spring Data JPA",
      "Hibernate",
      "Spring AI",
      "Spring Security",
    ],
  },
  {
    title: "Microservices & Cloud",
    subtitle: "Distributed systems & cloud-native architecture",
    icon: <Cloud />,
    skills: [
      "Apache Kafka",
      "Spring Cloud",
      "Eureka",
      "OpenFeign",
      "API Gateway",
      "OAuth 2.0",
      "JWT",
      "Cloud Architecture",
    ],
  },
  {
    title: "Frontend & Databases",
    subtitle: "Data handling & UI integration",
    icon: <Layers />,
    skills: [
      "React",
      "JavaScript",
      "SQL",
      "MySQL",
      "MongoDB",
    ],
  },
  {
    title: "Tools & CS Foundations",
    subtitle: "Engineering practices & problem-solving core",
    icon: <ShieldCheck />,
    skills: [
      "Docker",
      "Git & GitHub",
      "Postman",
      "Swagger",
      "Design Patterns",
      "DSA",
      "JUnit 5",
      "Mockito",
    ],
  },
];

/* ================= COMPONENT ================= */

const Skills = () => {
  return (
    <section className="px-16 py-24 relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="absolute w-[450px] h-[450px] bg-purple-500/10 rounded-full blur-[140px] -top-40 -left-40"></div>
        <div className="absolute w-[520px] h-[520px] bg-blue-500/10 rounded-full blur-[140px] -bottom-40 -right-40"></div>
      </div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-extrabold mb-16 text-center
                   bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400
                   bg-clip-text text-transparent"
      >
        Skills & Expertise
      </motion.h2>

      {/* Skill Cards */}
      <div className="grid md:grid-cols-2 gap-14 max-w-7xl mx-auto">
        {skillSections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            whileHover={{ scale: 1.03 }}
            className="relative p-10 rounded-3xl border border-gray-700
                       bg-gradient-to-br from-gray-900 via-gray-900 to-black
                       shadow-[0_25px_70px_-15px_rgba(124,58,237,0.35)]
                       hover:shadow-[0_30px_90px_-10px_rgba(59,130,246,0.45)]
                       transition-all"
          >
            {/* Glow overlay */}
            <div className="absolute inset-0 rounded-3xl
                            bg-gradient-to-r from-purple-500/15 via-pink-500/15 to-blue-500/15
                            opacity-0 hover:opacity-100 transition pointer-events-none"></div>

            {/* Header */}
            <div className="relative flex items-center gap-4 mb-6">
              <div className="p-4 rounded-xl
                              bg-gradient-to-br from-purple-600/30 to-blue-600/30
                              text-purple-400 shadow-md">
                {section.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  {section.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {section.subtitle}
                </p>
              </div>
            </div>

            {/* Skill Pills */}
            <div className="relative flex flex-wrap gap-3">
              {section.skills.map((skill, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.12 }}
                  className="px-4 py-1.5 text-sm rounded-full
                             bg-gray-800 text-gray-300
                             border border-gray-600
                             hover:border-purple-500
                             hover:text-white
                             transition"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
