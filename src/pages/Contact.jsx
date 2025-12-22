// import { motion } from "framer-motion";
// import {
//   Mail,
//   MapPin,
//   Github,
//   Linkedin,
// } from "lucide-react";

// const Contact = () => {
//   return (
//     <section className="px-16 py-24 relative overflow-hidden">

//       {/* Background glow */}
//       <div className="absolute inset-0 -z-10 opacity-40">
//         <div className="absolute w-[420px] h-[420px] bg-purple-500/10 rounded-full blur-[140px] -top-40 -left-40"></div>
//         <div className="absolute w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[140px] -bottom-40 -right-40"></div>
//       </div>

//       {/* Heading */}
//       <motion.h2
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="text-4xl md:text-5xl font-extrabold mb-6 text-center
//                    bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400
//                    bg-clip-text text-transparent"
//       >
//         Let’s Connect
//       </motion.h2>

//       <motion.p
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.2 }}
//         className="text-gray-400 text-center max-w-2xl mx-auto mb-16"
//       >
//         Open to backend roles, internships, collaborations, or deep technical discussions.
//         Feel free to reach out anytime.
//       </motion.p>

//       {/* ================= MAIN ROW ================= */}
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-start">

//         {/* LEFT: CONTACT INFO */}
//         <div className="space-y-8">
//           {[
//             {
//               icon: <Mail />,
//               title: "Email",
//               value: "divanshutiwari2003@gmail.com",
//             },
//             {
//               icon: <MapPin />,
//               title: "Location",
//               value: "Mathura, Uttar Pradesh",
//             },
//           ].map((item, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ y: -6 }}
//               className="p-8 rounded-2xl border border-gray-700
//                          bg-gradient-to-br from-gray-900 to-black
//                          shadow-[0_20px_60px_-15px_rgba(124,58,237,0.35)]
//                          transition-all"
//             >
//               <div className="flex items-center gap-4">
//                 <div className="w-12 h-12 flex items-center justify-center
//                                 rounded-xl bg-gradient-to-br from-purple-600/30 to-blue-600/30
//                                 text-purple-400">
//                   {item.icon}
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold text-white">
//                     {item.title}
//                   </h3>
//                   <p className="text-gray-400 text-sm">
//                     {item.value}
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* RIGHT: CONTACT FORM (FORMSPREE ENABLED) */}
//         <motion.form
//           action="https://formspree.io/f/xeejkveq"
//           method="POST"
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4 }}
//           className="grid gap-5 p-10 rounded-3xl border border-gray-700
//                      bg-gradient-to-br from-gray-900 to-black
//                      shadow-[0_25px_80px_-15px_rgba(59,130,246,0.45)]"
//         >
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             required
//             className="p-4 rounded-xl bg-gray-800 text-white
//                        border border-gray-600 focus:border-purple-500
//                        outline-none transition"
//           />

//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             required
//             className="p-4 rounded-xl bg-gray-800 text-white
//                        border border-gray-600 focus:border-purple-500
//                        outline-none transition"
//           />

//           <textarea
//             name="message"
//             rows="5"
//             placeholder="Your Message"
//             required
//             className="p-4 rounded-xl bg-gray-800 text-white
//                        border border-gray-600 focus:border-purple-500
//                        outline-none transition resize-none"
//           />

//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             type="submit"
//             className="mt-2 bg-gradient-to-r from-purple-600 to-blue-600
//                        text-white py-4 rounded-xl font-semibold
//                        shadow-lg hover:shadow-xl transition"
//           >
//             Send Message
//           </motion.button>
//         </motion.form>

//       </div>

//       {/* SOCIAL LINKS */}
//       <div className="flex justify-center gap-6 mt-14">
//         <a
//   href="https://github.com/tiwari-ji-27"
//   target="_blank"
//   className="p-3 rounded-full bg-gray-800 text-white
//              hover:bg-gray-700 hover:text-purple-400 transition"
// >
//   <Github size={22} />
// </a>

//         <a
//   href="https://www.linkedin.com/in/divanshu-tiwari-80a279322/"
//   target="_blank"
//   className="p-3 rounded-full bg-gray-800 text-white
//              hover:bg-gray-700 hover:text-blue-400 transition"
// >
//   <Linkedin size={22} />
// </a>

//       </div>

//     </section>
//   );
// };

// export default Contact;



import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section className="px-6 md:px-16 py-12 md:py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[100px] -top-20 -left-20"></div>
        <div className="absolute w-[350px] h-[350px] bg-blue-500/10 rounded-full blur-[100px] -bottom-20 -right-20"></div>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-5xl font-extrabold mb-4 text-center bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
      >
        Let’s Connect
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-gray-400 text-center text-sm md:text-base max-w-2xl mx-auto mb-10 md:mb-16 px-2"
      >
        Open to backend roles, internships, collaborations, or deep technical discussions.
      </motion.p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
        {/* LEFT: INFO CARDS */}
        <div className="space-y-4 md:space-y-6">
          {[
            { icon: <Mail />, title: "Email", value: "divanshutiwari2003@gmail.com" },
            { icon: <MapPin />, title: "Location", value: "Mathura, Uttar Pradesh" },
          ].map((item, index) => (
            <div key={index} className="p-6 md:p-8 rounded-2xl border border-gray-800 bg-gray-900/50 flex items-center gap-4 transition-transform hover:scale-[1.02]">
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-purple-600/20 text-purple-400">
                {item.icon}
              </div>
              <div>
                <h3 className="text-base md:text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-gray-400 text-xs md:text-sm break-all">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT: FORM */}
        <motion.form
          action="https://formspree.io/f/xeejkveq"
          method="POST"
          className="flex flex-col gap-4 p-6 md:p-10 rounded-3xl border border-gray-800 bg-gray-900/80 shadow-2xl"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-3 md:p-4 rounded-xl bg-gray-800/50 text-white border border-gray-700 focus:border-purple-500 outline-none transition text-sm md:text-base"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-3 md:p-4 rounded-xl bg-gray-800/50 text-white border border-gray-700 focus:border-purple-500 outline-none transition text-sm md:text-base"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            required
            className="p-3 md:p-4 rounded-xl bg-gray-800/50 text-white border border-gray-700 focus:border-purple-500 outline-none transition resize-none text-sm md:text-base"
          />
          <button
            type="submit"
            className="mt-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 md:py-4 rounded-xl font-bold shadow-lg hover:brightness-110 active:scale-95 transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>

      {/* SOCIALS */}
      <div className="flex justify-center gap-6 mt-12">
        <a href="https://github.com/tiwari-ji-27" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-gray-800 text-white hover:text-purple-400 transition">
          <Github size={24} />
        </a>
        <a href="https://www.linkedin.com/in/divanshu-tiwari-80a279322/" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-gray-800 text-white hover:text-blue-400 transition">
          <Linkedin size={24} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
