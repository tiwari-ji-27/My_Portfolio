// // import { motion } from "framer-motion";
// // import {
// //   Trophy,
// //   Flame,
// //   BarChart3,
// //   CalendarCheck,
// //   Github,
// //   ExternalLink,
// // } from "lucide-react";

// // /* ================= DATA ================= */

// // const achievements = [
// //   {
// //     title: "Amazon ML Challenge 2025",
// //     value: "AIR 115",
// //     desc: "Ranked among 6,000+ teams with strong ML performance",
// //   },
// //   {
// //     title: "LeetCode Knight Badge",
// //     value: "1859 Rating",
// //     desc: "Solved 720+ problems across platforms",
// //   },
// //   {
// //     title: "Codeforces",
// //     value: "Pupil (1211)",
// //     desc: "Consistent competitive programming performance",
// //   },
// //   {
// //     title: "Java Certification",
// //     value: "IIT Kharagpur",
// //     desc: "NPTEL certified Java Developer",
// //   },
// //   {
// //     title: "College Rank",
// //     value: "Top 5",
// //     desc: "Among top competitive programmers at college",
// //   },
// // ];

// // const stats = [
// //   { label: "Total Problems", value: "720+", icon: <BarChart3 /> },
// //   { label: "Max Streak", value: "111 Days", icon: <Flame /> },
// //   { label: "Active Days", value: "345+", icon: <CalendarCheck /> },
// //   { label: "Total Contests", value: "33+", icon: <Trophy /> },
// // ];

// // const profiles = [
// //   {
// //     name: "LeetCode",
// //     link: "https://leetcode.com/u/divanshu___tiwari/",
// //   },
// //   {
// //     name: "Codeforces",
// //     link: "https://codeforces.com/profile/tiwari__ji",
// //   },
// //   {
// //     name: "GeeksforGeeks",
// //     link: "https://www.geeksforgeeks.org/profile/divanshuti0kpu",
// //   },
// //   {
// //     name: "GitHub",
// //     link: "https://github.com/tiwari-ji-27",
// //   },
// // ];

// // /* ================= COMPONENT ================= */

// // const Achievements = () => {
// //   return (
// //     <section className="px-16 py-20 relative overflow-hidden">

// //       {/* Background glow */}
// //       <div className="absolute inset-0 -z-10 opacity-40">
// //         <div className="absolute w-[450px] h-[450px] bg-purple-500/10 rounded-full blur-[120px] -top-40 -left-40"></div>
// //         <div className="absolute w-[520px] h-[520px] bg-blue-500/10 rounded-full blur-[120px] -bottom-40 -right-40"></div>
// //       </div>

// //       {/* Heading */}
// //       <motion.h2
// //         initial={{ opacity: 0, y: 20 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         className="text-4xl md:text-5xl font-extrabold mb-14 text-center
// //                    bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400
// //                    bg-clip-text text-transparent"
// //       >
// //         Achievements & Coding Journey
// //       </motion.h2>

// //       {/* ================= STATS ================= */}
// //       <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
// //         {stats.map((stat, index) => (
// //           <motion.div
// //             key={index}
// //             whileHover={{ y: -8 }}
// //             className="p-6 rounded-2xl border border-gray-700
// //                        bg-gradient-to-br from-gray-900 to-black
// //                        shadow-[0_20px_60px_-15px_rgba(124,58,237,0.35)]
// //                        text-center transition"
// //           >
// //             <div className="mx-auto mb-3 text-purple-400">
// //               {stat.icon}
// //             </div>
// //             <div className="text-2xl font-bold text-white">
// //               {stat.value}
// //             </div>
// //             <div className="text-sm text-gray-400">
// //               {stat.label}
// //             </div>
// //           </motion.div>
// //         ))}
// //       </div>

// //       {/* ================= ACHIEVEMENT CARDS ================= */}
// //       <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
// //         {achievements.map((item, index) => (
// //           <motion.div
// //             key={index}
// //             initial={{ opacity: 0, y: 30 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ delay: index * 0.15 }}
// //             whileHover={{ y: -10 }}
// //             className="p-8 rounded-2xl border border-gray-700
// //                        bg-gradient-to-br from-gray-900 to-black
// //                        hover:shadow-[0_25px_80px_-10px_rgba(59,130,246,0.45)]
// //                        transition-all"
// //           >
// //             <h3 className="text-xl font-semibold mb-1 text-white">
// //               {item.title}
// //             </h3>
// //             <p className="text-2xl font-bold
// //                           bg-gradient-to-r from-purple-400 to-blue-400
// //                           bg-clip-text text-transparent mb-2">
// //               {item.value}
// //             </p>
// //             <p className="text-gray-400">
// //               {item.desc}
// //             </p>
// //           </motion.div>
// //         ))}
// //       </div>

// //       {/* ================= LEETCODE VISUALS ================= */}
// //       <div className="max-w-6xl mx-auto mb-20">
// //         <h3 className="text-2xl font-semibold text-white mb-6 text-center">
// //           LeetCode Performance
// //         </h3>

// //         <div className="grid md:grid-cols-2 gap-8">
// //           {/* Streak Chart Placeholder */}
// //           <div className="p-6 rounded-2xl border border-gray-700
// //                           bg-gradient-to-br from-gray-900 to-black
// //                           text-center">
// //             <p className="text-gray-400 mb-3">LeetCode Streak Chart</p>
// //             {/* Replace src after upload */}
// //             <img
// //               src="/leetcode-streak.png"
// //               alt="LeetCode Streak"
// //               className="rounded-lg mx-auto"
// //             />
// //           </div>

// //           {/* Rating Screenshot Placeholder */}
// //           <div className="p-6 rounded-2xl border border-gray-700
// //                           bg-gradient-to-br from-gray-900 to-black
// //                           text-center">
// //             <p className="text-gray-400 mb-3">LeetCode Rating Snapshot</p>
// //             <img
// //               src="/leetcode-rating.png"
// //               alt="LeetCode Rating"
// //               className="rounded-lg mx-auto"
// //             />
// //           </div>
// //         </div>
// //       </div>

// //       {/* ================= CODING PROFILES ================= */}
// //       <div className="max-w-4xl mx-auto text-center">
// //         <h3 className="text-2xl font-semibold text-white mb-6">
// //           Coding Profiles
// //         </h3>

// //         <div className="flex flex-wrap justify-center gap-4">
// //           {profiles.map((profile, index) => (
// //             <a
// //               key={index}
// //               href={profile.link}
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="flex items-center gap-2 px-5 py-3 rounded-full
// //                          border border-gray-600 text-gray-300
// //                          hover:border-purple-500 hover:bg-gray-800
// //                          transition"
// //             >
// //               <ExternalLink size={18} />
// //               {profile.name}
// //             </a>
// //           ))}

// //           <a
// //             href="https://github.com/tiwari-ji-27"
// //             target="_blank"
// //             className="flex items-center gap-2 px-5 py-3 rounded-full
// //                        bg-gradient-to-r from-purple-600 to-blue-600
// //                        text-white shadow-lg hover:scale-105 transition"
// //           >
// //             <Github size={18} />
// //             GitHub
// //           </a>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Achievements;

// import { motion } from "framer-motion";
// import {
//   Trophy,
//   Flame,
//   BarChart3,
//   CalendarCheck,
//   Github,
//   ExternalLink,
//   ShieldCheck,
// } from "lucide-react";

// /* ================= DATA ================= */

// const achievements = [
//   {
//     title: "Amazon ML Challenge 2025",
//     value: "AIR 115",
//     desc: "Ranked among 6,000+ teams with strong ML performance",
//   },
//   {
//     title: "LeetCode Knight Badge",
//     value: "1859 Rating",
//     desc: "Solved 720+ problems across platforms",
//   },
//   {
//     title: "Codeforces",
//     value: "Pupil (1211)",
//     desc: "Consistent competitive programming performance",
//   },
//   {
//     title: "Java Certification",
//     value: "IIT Kharagpur",
//     desc: "NPTEL certified Java Developer",
//   },
//   {
//     title: "College Rank",
//     value: "Top 5",
//     desc: "Among top competitive programmers at college",
//   },
// ];

// const stats = [
//   { label: "Total Problems", value: "720+", icon: <BarChart3 /> },
//   { label: "Max Streak", value: "111 Days", icon: <Flame /> },
//   { label: "Active Days", value: "345+", icon: <CalendarCheck /> },
//   { label: "Total Contests", value: "33+", icon: <Trophy /> },
// ];

// const profiles = [
//   { name: "LeetCode", link: "https://leetcode.com/u/divanshu___tiwari/" },
//   { name: "Codeforces", link: "https://codeforces.com/profile/tiwari__ji" },
//   { name: "GeeksforGeeks", link: "https://www.geeksforgeeks.org/profile/divanshuti0kpu" },
// ];

// /* ================= COMPONENT ================= */

// const Achievements = () => {
//   return (
//     <section className="px-16 py-20 relative overflow-hidden">

//       {/* Background glow */}
//       <div className="absolute inset-0 -z-10 opacity-40">
//         <div className="absolute w-[450px] h-[450px] bg-purple-500/10 rounded-full blur-[120px] -top-40 -left-40"></div>
//         <div className="absolute w-[520px] h-[520px] bg-blue-500/10 rounded-full blur-[120px] -bottom-40 -right-40"></div>
//       </div>

//       {/* Heading */}
//       <motion.h2
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="text-4xl md:text-5xl font-extrabold mb-14 text-center
//                    bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400
//                    bg-clip-text text-transparent"
//       >
//         Achievements & Coding Journey
//       </motion.h2>

//       {/* ================= LEETCODE PERFORMANCE (TOP) ================= */}
//       <div className="max-w-6xl mx-auto mb-20">
//         <div className="flex items-center justify-center gap-4 mb-8">
//           <ShieldCheck className="text-purple-400" size={28} />
//           <h3 className="text-2xl font-semibold text-white">
//             LeetCode Performance
//           </h3>
//         </div>

//         {/* Knight Badge */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           whileHover={{ scale: 1.05 }}
//           className="mx-auto mb-10 w-fit p-6 rounded-2xl border border-gray-700
//                      bg-gradient-to-br from-gray-900 to-black
//                      shadow-[0_20px_60px_-15px_rgba(124,58,237,0.45)]"
//         >
//           <img
//             src="/knight.png"
//             alt="LeetCode Knight Badge"
//             className="w-40 mx-auto"
//           />
//           <p className="text-center mt-3
//                         bg-gradient-to-r from-purple-400 to-blue-400
//                         bg-clip-text text-transparent font-semibold">
//             Knight Badge • 1859 Rating
//           </p>
//         </motion.div>

//         {/* Screenshots */}
//         <div className="grid md:grid-cols-2 gap-8">
//           {/* Streak */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             whileHover={{ scale: 1.03 }}
//             className="p-6 rounded-2xl border border-gray-700
//                        bg-gradient-to-br from-gray-900 to-black
//                        hover:shadow-[0_25px_80px_-10px_rgba(59,130,246,0.45)]
//                        transition"
//           >
//             <p className="text-gray-400 mb-3 text-center">
//               LeetCode Streak
//             </p>
//             <img
//               src="/leetcode-streak.png"
//               alt="LeetCode Streak"
//               className="rounded-lg mx-auto"
//             />
//           </motion.div>

//           {/* Rating */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             whileHover={{ scale: 1.03 }}
//             className="p-6 rounded-2xl border border-gray-700
//                        bg-gradient-to-br from-gray-900 to-black
//                        hover:shadow-[0_25px_80px_-10px_rgba(59,130,246,0.45)]
//                        transition"
//           >
//             <p className="text-gray-400 mb-3 text-center">
//               LeetCode Rating Snapshot
//             </p>
//             <img
//               src="/leetcode-rating.png"
//               alt="LeetCode Rating"
//               className="rounded-lg mx-auto"
//             />
//           </motion.div>
//         </div>
//       </div>

//       {/* ================= STATS ================= */}
//       <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-20">
//         {stats.map((stat, index) => (
//           <motion.div
//             key={index}
//             whileHover={{ y: -8 }}
//             className="p-6 rounded-2xl border border-gray-700
//                        bg-gradient-to-br from-gray-900 to-black
//                        shadow-[0_20px_60px_-15px_rgba(124,58,237,0.35)]
//                        text-center transition"
//           >
//             <div className="mx-auto mb-3 text-purple-400">
//               {stat.icon}
//             </div>
//             <div className="text-2xl font-bold text-white">
//               {stat.value}
//             </div>
//             <div className="text-sm text-gray-400">
//               {stat.label}
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       ================= ACHIEVEMENT CARDS =================
//       <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
//         {achievements.map((item, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.15 }}
//             whileHover={{ y: -10 }}
//             className="p-8 rounded-2xl border border-gray-700
//                        bg-gradient-to-br from-gray-900 to-black
//                        hover:shadow-[0_25px_80px_-10px_rgba(59,130,246,0.45)]
//                        transition-all"
//           >
//             <h3 className="text-xl font-semibold mb-1 text-white">
//               {item.title}
//             </h3>
//             <p className="text-2xl font-bold
//                           bg-gradient-to-r from-purple-400 to-blue-400
//                           bg-clip-text text-transparent mb-2">
//               {item.value}
//             </p>
//             <p className="text-gray-400">
//               {item.desc}
//             </p>
//           </motion.div>
//         ))}
//       </div>

//       {/* ================= CODING PROFILES ================= */}
//       <div className="max-w-4xl mx-auto text-center">
//         <h3 className="text-2xl font-semibold text-white mb-6">
//           Coding Profiles
//         </h3>

//         <div className="flex flex-wrap justify-center gap-4">
//           {profiles.map((profile, index) => (
//             <a
//               key={index}
//               href={profile.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-2 px-5 py-3 rounded-full
//                          border border-gray-600 text-gray-300
//                          hover:border-purple-500 hover:bg-gray-800
//                          transition"
//             >
//               <ExternalLink size={18} />
//               {profile.name}
//             </a>
//           ))}

//           <a
//             href="https://github.com/tiwari-ji-27"
//             target="_blank"
//             className="flex items-center gap-2 px-5 py-3 rounded-full
//                        bg-gradient-to-r from-purple-600 to-blue-600
//                        text-white shadow-lg hover:scale-105 transition"
//           >
//             <Github size={18} />
//             GitHub
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Achievements;
import { motion } from "framer-motion";
import {
  Trophy,
  Flame,
  BarChart3,
  CalendarCheck,
  Github,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";

/* ================= DATA ================= */

const achievements = [
  {
    title: "CodeSummit 2.0",
    value: "AIR 11",
    desc: "Secured All India Rank 11 in national-level coding contest",
  },
  {
    title: "Amazon ML Challenge 2025",
    value: "AIR 115",
    desc: "Ranked among 6,000+ teams with strong ML performance",
  },
 
  {
    title: "LeetCode Knight Badge",
    value: "1859 Rating",
    desc: "Solved 720+ problems across platforms",
  },
  {
    title: "Java Certification",
    value: "IIT Kharagpur",
    desc: "NPTEL certified Java Developer",
  },
];

const stats = [
  { label: "Total Problems", value: "720+", icon: <BarChart3 /> },
  { label: "Max Streak", value: "111 Days", icon: <Flame /> },
  { label: "Active Days", value: "345+", icon: <CalendarCheck /> },
  { label: "Total Contests", value: "33+", icon: <Trophy /> },
];

const profiles = [
  { name: "LeetCode", link: "https://leetcode.com/u/divanshu___tiwari/" },
  { name: "Codeforces", link: "https://codeforces.com/profile/tiwari__ji" },
  { name: "GeeksforGeeks", link: "https://www.geeksforgeeks.org/profile/divanshuti0kpu" },
  { name: "GitHub", link: "https://github.com/tiwari-ji-27" },
];

/* ================= COMPONENT ================= */

const Achievements = () => {
  return (
    <section className="px-16 py-20 relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="absolute w-[450px] h-[450px] bg-purple-500/10 rounded-full blur-[120px] -top-40 -left-40"></div>
        <div className="absolute w-[520px] h-[520px] bg-blue-500/10 rounded-full blur-[120px] -bottom-40 -right-40"></div>
      </div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-extrabold mb-14 text-center
                   bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400
                   bg-clip-text text-transparent"
      >
        Achievements & Coding Journey
      </motion.h2>

      {/* ================= LEETCODE PERFORMANCE ================= */}
      <div className="max-w-6xl mx-auto mb-20">
        <div className="flex items-center justify-center gap-4 mb-8">
          <ShieldCheck className="text-purple-400" size={28} />
          <h3 className="text-2xl font-semibold text-white">
            LeetCode Performance
          </h3>
        </div>

        {/* Knight Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          className="mx-auto mb-10 w-fit p-6 rounded-2xl border border-gray-700
                     bg-gradient-to-br from-gray-900 to-black
                     shadow-[0_20px_60px_-15px_rgba(124,58,237,0.45)]"
        >
          <img src="/knight.png" alt="Knight Badge" className="w-40 mx-auto" />
          <p className="text-center mt-3 bg-gradient-to-r from-purple-400 to-blue-400
                        bg-clip-text text-transparent font-semibold">
            Knight Badge • 1859 Rating
          </p>
        </motion.div>

        {/* Screenshots */}
        <div className="grid md:grid-cols-2 gap-8">
          {["leetcode-streak.png", "leetcode-rating.png"].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              className="p-6 rounded-2xl border border-gray-700
                         bg-gradient-to-br from-gray-900 to-black
                         hover:shadow-[0_25px_80px_-10px_rgba(59,130,246,0.45)]
                         transition"
            >
              <img src={`/${img}`} alt="LeetCode Visual" className="rounded-lg mx-auto" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* ================= STATS ================= */}
      <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-20">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -8 }}
            className="p-6 rounded-2xl border border-gray-700
                       bg-gradient-to-br from-gray-900 to-black
                       shadow-[0_20px_60px_-15px_rgba(124,58,237,0.35)]
                       text-center transition"
          >
            <div className="mx-auto mb-3 text-purple-400">{stat.icon}</div>
            <div className="text-2xl font-bold text-white">{stat.value}</div>
            <div className="text-sm text-gray-400">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* ================= PROFILES + ACHIEVEMENTS (SIDE BY SIDE) ================= */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-start">

        {/* Left: Coding Profiles */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-8">
            Coding Profiles
          </h3>

          <div className="space-y-5">
            {profiles.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                className="flex items-center justify-between px-6 py-5 rounded-2xl
                           bg-gradient-to-br from-gray-800 to-gray-900
                           border border-gray-700
                           shadow-lg hover:border-purple-500 transition"
              >
                <span className="text-lg font-semibold text-white">
                  {item.name}
                </span>
                <ExternalLink className="text-purple-400" size={18} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Right: Achievements */}
        <div>
          <h3 className="text-3xl font-bold text-yellow-400 mb-8">
            Top Competitive Achievements
          </h3>

          <div className="space-y-6">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="relative p-6 rounded-2xl
                           bg-gradient-to-br from-gray-800 to-gray-900
                           border border-gray-700 shadow-lg"
              >
                <div className="absolute left-0 top-0 h-full w-1.5 bg-yellow-400 rounded-l-2xl"></div>

                <div className="pl-4">
                  <div className="text-2xl font-bold text-yellow-400">
                    {item.value}
                  </div>
                  <div className="text-lg font-semibold text-white">
                    {item.title}
                  </div>
                  <div className="text-sm text-gray-400">
                    {item.desc}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Achievements;
