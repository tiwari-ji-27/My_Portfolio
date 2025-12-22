// // import React from "react";
// // import {
// //   Github,
// //   Linkedin,
// //   Mail,
// //   Code,
// //   Server,
// //   Database,
// //   Trophy,
// //   ArrowRight,
// //   ChevronDown,
// //   Zap,
// //   GraduationCap,
// //   Cpu,
// // } from "lucide-react";
// // import SectionHeader from "../Common/SectionHeader";

// // /* ================= DATA ================= */

// // const skills = {
// //   Languages: ["Java", "Python", "JavaScript", "SQL", "HTML/CSS"],
// //   "Backend & Frameworks": [
// //     "Spring Boot",
// //     "Spring MVC",
// //     "Spring Data JPA",
// //     "Hibernate",
// //     "REST APIs",
// //   ],
// //   "Microservices & Cloud": [
// //     "Kafka",
// //     "Spring Cloud",
// //     "Eureka",
// //     "OpenFeign",
// //     "API Gateway",
// //     "OAuth 2.0",
// //     "JWT",
// //   ],
// //   Tools: ["Git", "GitHub", "Docker", "Postman", "Swagger"],
// //   "Core CS": ["DSA", "OOP", "DBMS", "OS", "Computer Networks"],
// // };

// // const achievements = [
// //   { rank: "AIR 115", event: "Amazon ML Challenge 2025", detail: "Among 6,000+ teams", icon: "🥈" },
// //   { rank: "1859", event: "LeetCode Knight Badge", detail: "720+ Problems Solved", icon: "⚡" },
// //   { rank: "1211", event: "Codeforces Pupil", detail: "Peak Rating", icon: "⭐" },
// //   { rank: "Top 5", event: "College Rank", detail: "Competitive Programming", icon: "🏆" },
// // ];

// // /* ================= COMPONENT ================= */

// // export default function Home() {
// //   return (
// //     <div className="pt-16">

// //       {/* ================= HERO ================= */}
// //       <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">

// //         {/* background glow */}
// //         <div className="absolute inset-0 opacity-40">
// //           <div className="absolute w-[420px] h-[420px] bg-purple-500/10 rounded-full blur-[110px] -top-32 -left-32 animate-pulse" />
// //           <div className="absolute w-[520px] h-[520px] bg-blue-500/10 rounded-full blur-[110px] -bottom-40 -right-40 animate-pulse" />
// //         </div>

// //         <div className="z-10 text-center space-y-8 max-w-4xl pt-16">

// //           {/* ===== AVATAR WITH 360 ROTATION ON HOVER ===== */}
// //           <div className="relative group">
// //             <div className="absolute inset-0 rounded-full blur-xl bg-gradient-to-r from-purple-500 to-blue-500 opacity-50"></div>

// //             <div
// //               className="relative w-40 h-40 mx-auto bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500
// //                          rounded-full flex items-center justify-center text-6xl font-bold
// //                          shadow-2xl ring-4 ring-gray-700/50
// //                          rotate-on-hover transition-transform duration-700 cursor-pointer"
// //             >
// //               DT
// //             </div>
// //           </div>

// //           {/* name */}
// //           <h1 className="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
// //             Divanshu Tiwari
// //           </h1>

// //           {/* animated underline */}
// //           <div className="mx-auto h-1 w-32 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse"></div>

// //           {/* roles */}
// //           <div className="flex items-center justify-center gap-4 flex-wrap">
// //             <span className="inline-flex items-center gap-2 bg-purple-600/20 px-4 py-2 rounded-full border border-purple-500/30 hover:scale-105 transition">
// //               <Code size={20} /> Java Backend Developer
// //             </span>
// //             <span className="inline-flex items-center gap-2 bg-blue-600/20 px-4 py-2 rounded-full border border-blue-500/30 hover:scale-105 transition">
// //               <Trophy size={20} /> Competitive Programmer
// //             </span>
// //           </div>

// //           {/* summary */}
// //           <p className="text-lg text-gray-100 max-w-2xl mx-auto leading-relaxed">
// //             Backend-focused developer specializing in{" "}
// //             <span className="text-white font-semibold">
// //               Java, Spring Boot, Microservices & Distributed Systems
// //             </span>.
// //             Passionate about scalable architectures, clean code, and
// //             performance-driven backend solutions.
// //           </p>

// //           {/* CTA */}
// //           <div className="flex flex-wrap gap-4 justify-center pt-6">
// //             <a
// //               href="/projects"
// //               className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-2xl transition-transform hover:scale-110"
// //             >
// //               View Projects
// //               <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
// //             </a>
// //             <a
// //               href="/contact"
// //               className="flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-full border border-gray-600 hover:scale-105 transition"
// //             >
// //               Contact Me <Zap size={18} />
// //             </a>
// //           </div>

// //           {/* socials */}
// //           <div className="flex flex-wrap gap-6 justify-center pt-6">
// //             {[
// //               { icon: <Github />, link: "https://github.com/premmsharma122" },
// //               { icon: <Linkedin />, link: "https://www.linkedin.com/in/divanshu-tiwari-80a279322/" },
// //               { icon: <Mail />, link: "mailto:divanshutiwari2003@gmail.com" },
// //             ].map((s, i) => (
// //               <a
// //                 key={i}
// //                 href={s.link}
// //                 target="_blank"
// //                 className="p-3 rounded-full border hover:bg-gray-800 hover:shadow-lg hover:shadow-purple-500/40 transition"
// //               >
// //                 {s.icon}
// //               </a>
// //             ))}
// //           </div>
// //         </div>

// //         <div className="absolute bottom-10 animate-bounce">
// //           <ChevronDown size={32} className="text-gray-400" />
// //         </div>
// //       </section>

// //       {/* ================= ABOUT ================= */}
// //       <section className="py-20 px-4 md:px-8 bg-gray-900/50">
// //         <div className="max-w-5xl mx-auto text-center">
// //           <SectionHeader
// //             title="About Me"
// //             subtitle="Engineering mindset, backend focus"
// //             color="from-purple-400 to-blue-400"
// //           />

// //           <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
// //             I am a <span className="text-white font-semibold">B.Tech Computer Science</span> student
// //             with a CGPA of <span className="text-purple-400 font-semibold">8.52</span> from{" "}
// //             <span className="text-white font-semibold">GL Bajaj Group of Institutions</span>.
// //             My primary interest lies in backend engineering, system design,
// //             and microservices-based architectures.
// //           </p>

// //           <div className="grid md:grid-cols-3 gap-6 mt-14">
// //             {[
// //               {
// //                 icon: <Code />,
// //                 title: "Backend Engineering",
// //                 desc: "Java, Spring Boot, REST APIs, JPA, Hibernate",
// //               },
// //               {
// //                 icon: <Server />,
// //                 title: "Microservices",
// //                 desc: "Kafka, Spring Cloud, OAuth 2.0, API Gateway",
// //               },
// //               {
// //                 icon: <Cpu />,
// //                 title: "Core CS & DSA",
// //                 desc: "Data Structures, Algorithms, OS, DBMS, CN",
// //               },
// //             ].map((item) => (
// //               <div
// //                 key={item.title}
// //                 className="p-6 rounded-2xl border border-gray-700 hover:border-purple-500 hover:scale-105 transition shadow-xl"
// //                 style={{ background: "linear-gradient(145deg,#1f2937,#111827)" }}
// //               >
// //                 <div className="mx-auto mb-4 text-purple-400">{item.icon}</div>
// //                 <h3 className="font-semibold text-lg">{item.title}</h3>
// //                 <p className="text-sm text-gray-400 mt-2">{item.desc}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* ===== Remaining sections unchanged ===== */}
// //     </div>
// //   );
// // }
// import React from "react";
// import {
//   Github,
//   Linkedin,
//   Mail,
//   Code,
//   Server,
//   Trophy,
//   ArrowRight,
//   ChevronDown,
//   Zap,
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
//     <div className="pt-16 text-white">

//       {/* ================= HERO ================= */}
//       <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">

//         {/* background glow */}
//         <div className="absolute inset-0 opacity-40">
//           <div className="absolute w-[420px] h-[420px] bg-purple-500/10 rounded-full blur-[110px] -top-32 -left-32 animate-pulse" />
//           <div className="absolute w-[520px] h-[520px] bg-blue-500/10 rounded-full blur-[110px] -bottom-40 -right-40 animate-pulse" />
//         </div>

//         <div className="z-10 text-center space-y-8 max-w-4xl pt-16">

//           {/* Avatar */}
//           <div className="relative group">
//             <div className="absolute inset-0 rounded-full blur-xl bg-gradient-to-r from-purple-500 to-blue-500 opacity-50" />
//             <div className="relative w-40 h-40 mx-auto bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500
//                             rounded-full flex items-center justify-center text-6xl font-bold
//                             shadow-2xl ring-4 ring-gray-700/50
//                             rotate-on-hover transition-transform duration-700 cursor-pointer">
//               DT
//             </div>
//           </div>

//           {/* Name */}
//           <h1 className="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
//             Divanshu Tiwari
//           </h1>

//           <div className="mx-auto h-1 w-32 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse" />

//           {/* Roles */}
//           <div className="flex items-center justify-center gap-4 flex-wrap">
//             <span className="inline-flex items-center gap-2 bg-purple-600/20 px-4 py-2 rounded-full border border-purple-500/30 text-white hover:scale-105 transition">
//               <Code size={20} /> Java Backend Developer
//             </span>
//             <span className="inline-flex items-center gap-2 bg-blue-600/20 px-4 py-2 rounded-full border border-blue-500/30 text-white hover:scale-105 transition">
//               <Trophy size={20} /> Competitive Programmer
//             </span>
//           </div>

//           {/* Summary */}
//           <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
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

//           {/* Socials */}
//           <div className="flex flex-wrap gap-6 justify-center pt-6">
//             {[
//               { icon: <Github />, link: "https://github.com/tiwari-ji-27" },
//               { icon: <Linkedin />, link: "https://www.linkedin.com/in/divanshu-tiwari-80a279322/" },
//               { icon: <Mail />, link: "mailto:divanshutiwari2003@gmail.com" },
//             ].map((s, i) => (
//               <a
//                 key={i}
//                 href={s.link}
//                 target="_blank"
//                 className="p-3 rounded-full border border-gray-600 text-white
//                            hover:bg-gray-800 hover:shadow-lg hover:shadow-purple-500/40 transition"
//               >
//                 {s.icon}
//               </a>
//             ))}
//           </div>
//         </div>

//         <div className="absolute bottom-10 animate-bounce">
//           <ChevronDown size={32} className="text-gray-300" />
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

//           <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
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
//                 <h3 className="font-semibold text-lg text-white">{item.title}</h3>
//                 <p className="text-sm text-gray-400 mt-2">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//     </div>
//   );
// }




// import React from "react";
// import { Github, Linkedin, Mail, Code, Server, Trophy, ArrowRight, ChevronDown, Zap, Cpu } from "lucide-react";
// import SectionHeader from "../Common/SectionHeader";
// import { Link } from "react-router-dom"; // Use Link to avoid page reloads

// export default function Home() {
//   return (
//     <div className="text-white overflow-x-hidden">
//       {/* ================= HERO ================= */}
//       <section className="min-h-screen flex flex-col items-center justify-center relative px-6 md:px-10">
//         {/* background glow */}
//         <div className="absolute inset-0 opacity-40 pointer-events-none">
//           <div className="absolute w-[300px] md:w-[420px] h-[300px] md:h-[420px] bg-purple-500/10 rounded-full blur-[80px] md:blur-[110px] -top-20 -left-20 animate-pulse" />
//           <div className="absolute w-[350px] md:w-[520px] h-[350px] md:h-[520px] bg-blue-500/10 rounded-full blur-[80px] md:blur-[110px] -bottom-20 -right-20 animate-pulse" />
//         </div>

//         <div className="z-10 text-center space-y-6 md:space-y-8 max-w-4xl pt-10">
//           {/* Avatar */}
//           <div className="relative group">
//             <div className="absolute inset-0 rounded-full blur-xl bg-gradient-to-r from-purple-500 to-blue-500 opacity-50" />
//             <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-full flex items-center justify-center text-5xl md:text-6xl font-bold shadow-2xl ring-4 ring-gray-700/50 transition-transform duration-700 cursor-pointer hover:rotate-[360deg]">
//               DT
//             </div>
//           </div>

//           {/* Name */}
//           <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent leading-tight">
//             Divanshu Tiwari
//           </h1>

//           <div className="mx-auto h-1 w-24 md:w-32 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse" />

//           {/* Roles */}
//           <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
//             <span className="inline-flex items-center gap-2 bg-purple-600/20 px-4 py-2 rounded-full border border-purple-500/30 text-sm md:text-base hover:scale-105 transition w-fit">
//               <Code size={18} /> Java Backend Developer
//             </span>
//             <span className="inline-flex items-center gap-2 bg-blue-600/20 px-4 py-2 rounded-full border border-blue-500/30 text-sm md:text-base hover:scale-105 transition w-fit">
//               <Trophy size={18} /> Competitive Programmer
//             </span>
//           </div>

//           {/* Summary */}
//           <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed px-2">
//             Backend-focused developer specializing in{" "}
//             <span className="text-white font-semibold">Java, Spring Boot, Microservices & Distributed Systems</span>. 
//             Passionate about scalable architectures and performance-driven solutions.
//           </p>

//           {/* CTA - Fixed Netlify redirection using Link */}
//           <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
//             <Link
//               to="/projects"
//               className="group flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-2xl transition-transform hover:scale-105 active:scale-95"
//             >
//               View Projects
//               <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
//             </Link>
//             <Link
//               to="/contact"
//               className="flex items-center justify-center gap-2 px-8 py-3 bg-gray-800 hover:bg-gray-700 rounded-full border border-gray-600 transition-transform hover:scale-105 active:scale-95"
//             >
//               Contact Me <Zap size={18} />
//             </Link>
//           </div>

//           {/* Socials */}
//           <div className="flex gap-4 md:gap-6 justify-center pt-4">
//             {[
//               { icon: <Github size={20} />, link: "https://github.com/tiwari-ji-27" },
//               { icon: <Linkedin size={20} />, link: "https://www.linkedin.com/in/divanshu-tiwari-80a279322/" },
//               { icon: <Mail size={20} />, link: "mailto:divanshutiwari2003@gmail.com" },
//             ].map((s, i) => (
//               <a
//                 key={i}
//                 href={s.link}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="p-3 rounded-full border border-gray-600 text-white hover:bg-gray-800 hover:shadow-lg hover:shadow-purple-500/40 transition"
//               >
//                 {s.icon}
//               </a>
//             ))}
//           </div>
//         </div>

//         <div className="absolute bottom-6 md:bottom-10 animate-bounce hidden sm:block">
//           <ChevronDown size={32} className="text-gray-400" />
//         </div>
//       </section>

//       {/* ================= ABOUT ================= */}
//       <section className="py-16 md:py-24 px-6 md:px-10 bg-gray-900/50">
//         <div className="max-w-5xl mx-auto text-center">
//           <SectionHeader
//             title="About Me"
//             subtitle="Engineering mindset, backend focus"
//             color="from-purple-400 to-blue-400"
//           />

//           <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed mt-6">
//             I am a <span className="text-white font-semibold">B.Tech Computer Science</span> student
//             with a CGPA of <span className="text-purple-400 font-semibold">8.52</span>.
//             My primary interest lies in backend engineering and system design.
//           </p>

//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12 md:mt-16">
//             {[
//               { icon: <Code />, title: "Backend Engineering", desc: "Java, Spring Boot, REST APIs" },
//               { icon: <Server />, title: "Microservices", desc: "Kafka, Cloud, OAuth 2.0" },
//               { icon: <Cpu />, title: "Core CS & DSA", desc: "Structures, Algos, DBMS" },
//             ].map((item) => (
//               <div
//                 key={item.title}
//                 className="p-6 rounded-2xl border border-gray-700 bg-gray-800/40 hover:border-purple-500 transition shadow-xl"
//               >
//                 <div className="mx-auto mb-4 text-purple-400 flex justify-center">{item.icon}</div>
//                 <h3 className="font-semibold text-lg text-white">{item.title}</h3>
//                 <p className="text-sm text-gray-400 mt-2">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }



import React from "react";
import { Github, Linkedin, Mail, Code, Server, Trophy, ArrowRight, ChevronDown, Zap, Cpu } from "lucide-react";
import SectionHeader from "../Common/SectionHeader";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="text-white overflow-x-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="min-h-screen flex flex-col items-center justify-center relative px-6 md:px-10">
        
        {/* Background Decorative Glows */}
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute w-[300px] md:w-[420px] h-[300px] md:h-[420px] bg-purple-500/10 rounded-full blur-[80px] md:blur-[110px] -top-20 -left-20 animate-pulse" />
          <div className="absolute w-[350px] md:w-[520px] h-[350px] md:h-[520px] bg-blue-500/10 rounded-full blur-[80px] md:blur-[110px] -bottom-20 -right-20 animate-pulse" />
        </div>

        <div className="z-10 text-center space-y-6 md:space-y-8 max-w-4xl pt-10">
          
          {/* Avatar / Initials */}
<div className="relative group">
  <div className="absolute inset-0 rounded-full blur-xl bg-gradient-to-r from-purple-500 to-blue-500 opacity-50" />
  
  {/* Added 'active:rotate-[360deg]' for mobile tap support */}
  <div 
    className="relative w-32 h-32 md:w-40 md:h-40 mx-auto bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 
               rounded-full flex items-center justify-center text-5xl md:text-6xl font-bold 
               shadow-2xl ring-4 ring-gray-700/50 cursor-pointer 
               transition-transform duration-1000 ease-in-out
               hover:rotate-[360deg] active:rotate-[360deg]"
  >
    DT
  </div>
</div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent leading-tight">
            Divanshu Tiwari
          </h1>

          <div className="mx-auto h-1 w-24 md:w-32 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse" />

          {/* Roles / Badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
            <span className="inline-flex items-center gap-2 bg-purple-600/20 px-4 py-2 rounded-full border border-purple-500/30 text-sm md:text-base hover:scale-105 transition-all w-fit">
              <Code size={18} /> Java Backend Developer
            </span>
            <span className="inline-flex items-center gap-2 bg-blue-600/20 px-4 py-2 rounded-full border border-blue-500/30 text-sm md:text-base hover:scale-105 transition-all w-fit">
              <Trophy size={18} /> Competitive Programmer
            </span>
          </div>

          {/* Professional Summary */}
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed px-2">
            Backend-focused developer specializing in{" "}
            <span className="text-white font-semibold">Java, Spring Boot, Microservices & Distributed Systems</span>. 
            Passionate about building scalable architectures and clean, performance-driven code.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              to="/projects"
              className="group flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-2xl transition-transform hover:scale-105 active:scale-95"
            >
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 px-8 py-3 bg-gray-800 hover:bg-gray-700 rounded-full border border-gray-600 transition-transform hover:scale-105 active:scale-95"
            >
              Contact Me <Zap size={18} />
            </Link>
          </div>

          {/* Social Links (External) */}
          <div className="flex gap-4 md:gap-6 justify-center pt-4">
            {[
              { icon: <Github size={20} />, link: "https://github.com/tiwari-ji-27" },
              { icon: <Linkedin size={20} />, link: "https://www.linkedin.com/in/divanshu-tiwari-80a279322/" },
              { icon: <Mail size={20} />, link: "mailto:divanshutiwari2003@gmail.com" },
            ].map((s, i) => (
              <a
                key={i}
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-gray-600 text-white hover:bg-gray-800 hover:shadow-lg hover:shadow-purple-500/40 transition-all"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 md:bottom-10 animate-bounce hidden sm:block">
          <ChevronDown size={32} className="text-gray-400" />
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="py-16 md:py-24 px-6 md:px-10 bg-gray-900/50">
        <div className="max-w-5xl mx-auto text-center">
          <SectionHeader
            title="About Me"
            subtitle="Engineering mindset, backend focus"
            color="from-purple-400 to-blue-400"
          />

          <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed mt-6">
            I am a <span className="text-white font-semibold">B.Tech Computer Science</span> student
            with a CGPA of <span className="text-purple-400 font-semibold">8.52</span>.
            My primary interest lies in backend engineering, distributed systems, and modern microservices-based architectures.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12 md:mt-16">
            {[
              { 
                icon: <Code />, 
                title: "Backend Engineering", 
                desc: "Java, Spring Boot, REST APIs, JPA, Hibernate" 
              },
              { 
                icon: <Server />, 
                title: "Microservices", 
                desc: "Kafka, Spring Cloud, OAuth 2.0, API Gateways" 
              },
              { 
                icon: <Cpu />, 
                title: "Core CS & DSA", 
                desc: "Data Structures, Algorithms, OS, DBMS, Networks" 
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl border border-gray-700 bg-gray-800/40 hover:border-purple-500 transition-all shadow-xl flex flex-col items-center"
              >
                <div className="mb-4 text-purple-400">{item.icon}</div>
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