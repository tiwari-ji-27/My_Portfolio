// // import { Link } from "react-router-dom";

// // const Header = () => {
// //   return (
// //     <header className="flex justify-between items-center px-10 py-4
// //                        bg-white dark:bg-gray-900
// //                        shadow-md sticky top-0 z-50">

// //       {/* Logo / Name */}
// //       <h1 className="text-2xl font-bold
// //                      bg-gradient-to-r from-purple-500 to-blue-500
// //                      bg-clip-text text-transparent">
// //         Divanshu Tiwari
// //       </h1>

// //       {/* Navigation */}
// //       <nav className="space-x-6 font-medium text-gray-700 dark:text-gray-300">
// //         <Link to="/" className="hover:text-purple-500 transition">Home</Link>
// //         <Link to="/skills" className="hover:text-purple-500 transition">Skills</Link>
// //         <Link to="/projects" className="hover:text-purple-500 transition">Projects</Link>
// //         <Link to="/achievements" className="hover:text-purple-500 transition">Achievements</Link>
// //         <Link to="/contact" className="hover:text-purple-500 transition">Contact</Link>
// //       </nav>

// //       {/* Download Resume Button */}
// //       <a
// //         href="/Divanshu_Tiwari_Resume.pdf"
// //         download
// //         className="px-5 py-2 rounded-lg font-semibold
// //                    bg-gradient-to-r from-purple-600 to-blue-600
// //                    text-white shadow-lg hover:scale-105
// //                    transition-transform"
// //       >
// //         Download Resume
// //       </a>

// //     </header>
// //   );
// // };

// // export default Header;
// import { Link } from "react-router-dom";

// const Header = () => {
//   return (
//     <header
//       className="flex justify-between items-center px-10 py-4
//                  bg-gray-900
//                  shadow-md sticky top-0 z-50"
//     >
//       {/* Logo / Name */}
//       <h1
//         className="text-2xl font-bold
//                    bg-gradient-to-r from-purple-400 to-blue-400
//                    bg-clip-text text-transparent"
//       >
//         Divanshu Tiwari
//       </h1>

//       {/* Navigation */}
//       <nav className="space-x-6 font-medium text-white">
//         <Link to="/" className="hover:text-purple-400 transition">Home</Link>
//         <Link to="/skills" className="hover:text-purple-400 transition">Skills</Link>
//         <Link to="/projects" className="hover:text-purple-400 transition">Projects</Link>
//         <Link to="/achievements" className="hover:text-purple-400 transition">Achievements</Link>
//         <Link to="/contact" className="hover:text-purple-400 transition">Contact</Link>
//       </nav>

//       {/* Download Resume Button */}
//       <a
//         href="/Divanshu_Tiwari_Resume.pdf"
//         download
//         className="px-5 py-2 rounded-lg font-semibold
//                    bg-gradient-to-r from-purple-600 to-blue-600
//                    text-white shadow-lg hover:scale-105
//                    transition-transform"
//       >
//         Download Resume
//       </a>
//     </header>
//   );
// };

// export default Header;





import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi"; // Install: npm install react-icons

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 shadow-md sticky top-0 z-50 text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 py-4">
        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Divanshu Tiwari
        </h1>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-3xl focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 font-medium">
          <Link to="/" className="hover:text-purple-400 transition">Home</Link>
          <Link to="/skills" className="hover:text-purple-400 transition">Skills</Link>
          <Link to="/projects" className="hover:text-purple-400 transition">Projects</Link>
          <Link to="/achievements" className="hover:text-purple-400 transition">Achievements</Link>
          <Link to="/contact" className="hover:text-purple-400 transition">Contact</Link>
        </nav>

        {/* Desktop Resume Button */}
        <a
          href="/Divanshu_Tiwari_Resume.pdf"
          download
          className="hidden md:block px-5 py-2 rounded-lg font-semibold bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg hover:scale-105 transition-transform"
        >
          Download Resume
        </a>
      </div>

      {/* Mobile Sidebar/Dropdown */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-gray-800 px-6 pb-6 pt-2 transition-all`}>
        <nav className="flex flex-col space-y-4 font-medium mb-4">
          <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-purple-400">Home</Link>
          <Link to="/skills" onClick={() => setIsOpen(false)} className="hover:text-purple-400">Skills</Link>
          <Link to="/projects" onClick={() => setIsOpen(false)} className="hover:text-purple-400">Projects</Link>
          <Link to="/achievements" onClick={() => setIsOpen(false)} className="hover:text-purple-400">Achievements</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-purple-400">Contact</Link>
        </nav>
        <a
          href="/Divanshu_Tiwari_Resume.pdf"
          download
          className="block text-center px-5 py-2 rounded-lg font-semibold bg-gradient-to-r from-purple-600 to-blue-600"
        >
          Download Resume
        </a>
      </div>
    </header>
  );
};

export default Header;