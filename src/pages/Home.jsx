// import React from "react";
// import {
//   Github,
//   Linkedin,
//   Mail,
//   Code,
//   Server,
//   Database,
//   Trophy,
//   ArrowRight,
//   ChevronDown,
//   Zap,
//   GraduationCap,
//   Cpu,
// } from "lucide-react";
// import SectionHeader from "../Common/SectionHeader";

// /* ================= DATA ================= */

// const skills = {
//   Languages: ["Java", "Python", "JavaScript", "SQL", "HTML/CSS"],
//   "Backend & Frameworks": [
//     "Spring Boot",
//     "Spring MVC",
//     "Spring Data JPA",
//     "Hibernate",
//     "REST APIs",
//   ],
//   "Microservices & Cloud": [
//     "Kafka",
//     "Spring Cloud",
//     "Eureka",
//     "OpenFeign",
//     "API Gateway",
//     "OAuth 2.0",
//     "JWT",
//   ],
//   Tools: ["Git", "GitHub", "Docker", "Postman", "Swagger"],
//   "Core CS": ["DSA", "OOP", "DBMS", "OS", "Computer Networks"],
// };

// const achievements = [
//   { rank: "AIR 115", event: "Amazon ML Challenge 2025", detail: "Among 6,000+ teams", icon: "🥈" },
//   { rank: "1859", event: "LeetCode Knight Badge", detail: "720+ Problems Solved", icon: "⚡" },
//   { rank: "1211", event: "Codeforces Pupil", detail: "Peak Rating", icon: "⭐" },
//   { rank: "Top 5", event: "College Rank", detail: "Competitive Programming", icon: "🏆" },
// ];

// /* ================= COMPONENT ================= */

// export default function Home() {
//   return (
//     <div className="pt-16">

//       {/* ================= HERO ================= */}
//       <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">

//         {/* background glow */}
//         <div className="absolute inset-0 opacity-40">
//           <div className="absolute w-[420px] h-[420px] bg-purple-500/10 rounded-full blur-[110px] -top-32 -left-32 animate-pulse" />
//           <div className="absolute w-[520px] h-[520px] bg-blue-500/10 rounded-full blur-[110px] -bottom-40 -right-40 animate-pulse" />
//         </div>

//         <div className="z-10 text-center space-y-8 max-w-4xl pt-16">

//           {/* ===== AVATAR WITH 360 ROTATION ON HOVER ===== */}
//           <div className="relative group">
//             <div className="absolute inset-0 rounded-full blur-xl bg-gradient-to-r from-purple-500 to-blue-500 opacity-50"></div>

//             <div
//               className="relative w-40 h-40 mx-auto bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500
//                          rounded-full flex items-center justify-center text-6xl font-bold
//                          shadow-2xl ring-4 ring-gray-700/50
//                          rotate-on-hover transition-transform duration-700 cursor-pointer"
//             >
//               DT
//             </div>
//           </div>

//           {/* name */}
//           <h1 className="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
//             Divanshu Tiwari
//           </h1>

//           {/* animated underline */}
//           <div className="mx-auto h-1 w-32 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse"></div>

//           {/* roles */}
//           <div className="flex items-center justify-center gap-4 flex-wrap">
//             <span className="inline-flex items-center gap-2 bg-purple-600/20 px-4 py-2 rounded-full border border-purple-500/30 hover:scale-105 transition">
//               <Code size={20} /> Java Backend Developer
//             </span>
//             <span className="inline-flex items-center gap-2 bg-blue-600/20 px-4 py-2 rounded-full border border-blue-500/30 hover:scale-105 transition">
//               <Trophy size={20} /> Competitive Programmer
//             </span>
//           </div>

//           {/* summary */}
//           <p className="text-lg text-gray-100 max-w-2xl mx-auto leading-relaxed">
//             Backend-focused developer specializing in{" "}
//             <span className="text-white font-semibold">
//               Java, Spring Boot, Microservices & Distributed Systems
//             </span>.
//             Passionate about scalable architectures, clean code, and
//             performance-driven backend solutions.
//           </p>

//           {/* CTA */}
//           <div className="flex flex-wrap gap-4 justify-center pt-6">
//             <a
//               href="/projects"
//               className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-2xl transition-transform hover:scale-110"
//             >
//               View Projects
//               <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
//             </a>
//             <a
//               href="/contact"
//               className="flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-full border border-gray-600 hover:scale-105 transition"
//             >
//               Contact Me <Zap size={18} />
//             </a>
//           </div>

//           {/* socials */}
//           <div className="flex flex-wrap gap-6 justify-center pt-6">
//             {[
//               { icon: <Github />, link: "https://github.com/premmsharma122" },
//               { icon: <Linkedin />, link: "https://www.linkedin.com/in/divanshu-tiwari-80a279322/" },
//               { icon: <Mail />, link: "mailto:divanshutiwari2003@gmail.com" },
//             ].map((s, i) => (
//               <a
//                 key={i}
//                 href={s.link}
//                 target="_blank"
//                 className="p-3 rounded-full border hover:bg-gray-800 hover:shadow-lg hover:shadow-purple-500/40 transition"
//               >
//                 {s.icon}
//               </a>
//             ))}
//           </div>
//         </div>

//         <div className="absolute bottom-10 animate-bounce">
//           <ChevronDown size={32} className="text-gray-400" />
//         </div>
//       </section>

//       {/* ================= ABOUT ================= */}
//       <section className="py-20 px-4 md:px-8 bg-gray-900/50">
//         <div className="max-w-5xl mx-auto text-center">
//           <SectionHeader
//             title="About Me"
//             subtitle="Engineering mindset, backend focus"
//             color="from-purple-400 to-blue-400"
//           />

//           <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
//             I am a <span className="text-white font-semibold">B.Tech Computer Science</span> student
//             with a CGPA of <span className="text-purple-400 font-semibold">8.52</span> from{" "}
//             <span className="text-white font-semibold">GL Bajaj Group of Institutions</span>.
//             My primary interest lies in backend engineering, system design,
//             and microservices-based architectures.
//           </p>

//           <div className="grid md:grid-cols-3 gap-6 mt-14">
//             {[
//               {
//                 icon: <Code />,
//                 title: "Backend Engineering",
//                 desc: "Java, Spring Boot, REST APIs, JPA, Hibernate",
//               },
//               {
//                 icon: <Server />,
//                 title: "Microservices",
//                 desc: "Kafka, Spring Cloud, OAuth 2.0, API Gateway",
//               },
//               {
//                 icon: <Cpu />,
//                 title: "Core CS & DSA",
//                 desc: "Data Structures, Algorithms, OS, DBMS, CN",
//               },
//             ].map((item) => (
//               <div
//                 key={item.title}
//                 className="p-6 rounded-2xl border border-gray-700 hover:border-purple-500 hover:scale-105 transition shadow-xl"
//                 style={{ background: "linear-gradient(145deg,#1f2937,#111827)" }}
//               >
//                 <div className="mx-auto mb-4 text-purple-400">{item.icon}</div>
//                 <h3 className="font-semibold text-lg">{item.title}</h3>
//                 <p className="text-sm text-gray-400 mt-2">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ===== Remaining sections unchanged ===== */}
//     </div>
//   );
// }
import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  Code,
  Server,
  Trophy,
  ArrowRight,
  ChevronDown,
  Zap,
  Cpu,
} from "lucide-react";
import SectionHeader from "../Common/SectionHeader";

/* ================= DATA ================= */

const skills = {
  Languages: ["Java", "Python", "JavaScript", "SQL", "HTML/CSS"],
  "Backend & Frameworks": [
    "Spring Boot",
    "Spring MVC",
    "Spring Data JPA",
    "Hibernate",
    "REST APIs",
  ],
  "Microservices & Cloud": [
    "Kafka",
    "Spring Cloud",
    "Eureka",
    "OpenFeign",
    "API Gateway",
    "OAuth 2.0",
    "JWT",
  ],
  Tools: ["Git", "GitHub", "Docker", "Postman", "Swagger"],
  "Core CS": ["DSA", "OOP", "DBMS", "OS", "Computer Networks"],
};

const achievements = [
  { rank: "AIR 115", event: "Amazon ML Challenge 2025", detail: "Among 6,000+ teams", icon: "🥈" },
  { rank: "1859", event: "LeetCode Knight Badge", detail: "720+ Problems Solved", icon: "⚡" },
  { rank: "1211", event: "Codeforces Pupil", detail: "Peak Rating", icon: "⭐" },
  { rank: "Top 5", event: "College Rank", detail: "Competitive Programming", icon: "🏆" },
];

/* ================= COMPONENT ================= */

export default function Home() {
  return (
    <div className="pt-16 text-white">

      {/* ================= HERO ================= */}
      <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">

        {/* background glow */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute w-[420px] h-[420px] bg-purple-500/10 rounded-full blur-[110px] -top-32 -left-32 animate-pulse" />
          <div className="absolute w-[520px] h-[520px] bg-blue-500/10 rounded-full blur-[110px] -bottom-40 -right-40 animate-pulse" />
        </div>

        <div className="z-10 text-center space-y-8 max-w-4xl pt-16">

          {/* Avatar */}
          <div className="relative group">
            <div className="absolute inset-0 rounded-full blur-xl bg-gradient-to-r from-purple-500 to-blue-500 opacity-50" />
            <div className="relative w-40 h-40 mx-auto bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500
                            rounded-full flex items-center justify-center text-6xl font-bold
                            shadow-2xl ring-4 ring-gray-700/50
                            rotate-on-hover transition-transform duration-700 cursor-pointer">
              DT
            </div>
          </div>

          {/* Name */}
          <h1 className="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Divanshu Tiwari
          </h1>

          <div className="mx-auto h-1 w-32 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse" />

          {/* Roles */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <span className="inline-flex items-center gap-2 bg-purple-600/20 px-4 py-2 rounded-full border border-purple-500/30 text-white hover:scale-105 transition">
              <Code size={20} /> Java Backend Developer
            </span>
            <span className="inline-flex items-center gap-2 bg-blue-600/20 px-4 py-2 rounded-full border border-blue-500/30 text-white hover:scale-105 transition">
              <Trophy size={20} /> Competitive Programmer
            </span>
          </div>

          {/* Summary */}
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Backend-focused developer specializing in{" "}
            <span className="text-white font-semibold">
              Java, Spring Boot, Microservices & Distributed Systems
            </span>.
            Passionate about scalable architectures, clean code, and
            performance-driven backend solutions.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-4 justify-center pt-6">
            <a
              href="/projects"
              className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-2xl transition-transform hover:scale-110"
            >
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
            </a>
            <a
              href="/contact"
              className="flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-full border border-gray-600 hover:scale-105 transition"
            >
              Contact Me <Zap size={18} />
            </a>
          </div>

          {/* Socials */}
          <div className="flex flex-wrap gap-6 justify-center pt-6">
            {[
              { icon: <Github />, link: "https://github.com/tiwari-ji-27" },
              { icon: <Linkedin />, link: "https://www.linkedin.com/in/divanshu-tiwari-80a279322/" },
              { icon: <Mail />, link: "mailto:divanshutiwari2003@gmail.com" },
            ].map((s, i) => (
              <a
                key={i}
                href={s.link}
                target="_blank"
                className="p-3 rounded-full border border-gray-600 text-white
                           hover:bg-gray-800 hover:shadow-lg hover:shadow-purple-500/40 transition"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="absolute bottom-10 animate-bounce">
          <ChevronDown size={32} className="text-gray-300" />
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-20 px-4 md:px-8 bg-gray-900/50">
        <div className="max-w-5xl mx-auto text-center">
          <SectionHeader
            title="About Me"
            subtitle="Engineering mindset, backend focus"
            color="from-purple-400 to-blue-400"
          />

          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            I am a <span className="text-white font-semibold">B.Tech Computer Science</span> student
            with a CGPA of <span className="text-purple-400 font-semibold">8.52</span> from{" "}
            <span className="text-white font-semibold">GL Bajaj Group of Institutions</span>.
            My primary interest lies in backend engineering, system design,
            and microservices-based architectures.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {[
              {
                icon: <Code />,
                title: "Backend Engineering",
                desc: "Java, Spring Boot, REST APIs, JPA, Hibernate",
              },
              {
                icon: <Server />,
                title: "Microservices",
                desc: "Kafka, Spring Cloud, OAuth 2.0, API Gateway",
              },
              {
                icon: <Cpu />,
                title: "Core CS & DSA",
                desc: "Data Structures, Algorithms, OS, DBMS, CN",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl border border-gray-700 hover:border-purple-500 hover:scale-105 transition shadow-xl"
                style={{ background: "linear-gradient(145deg,#1f2937,#111827)" }}
              >
                <div className="mx-auto mb-4 text-purple-400">{item.icon}</div>
                <h3 className="font-semibold text-lg text-white">{item.title}</h3>
                <p className="text-sm text-gray-400 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
