import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="px-16 py-14 max-w-6xl">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-10"
      >
        About Me
      </motion.h2>

      {/* Intro */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-lg text-gray-700 dark:text-gray-300 max-w-4xl mb-12"
      >
        I am a Computer Science undergraduate with a strong inclination towards
        backend engineering, distributed systems, and microservices
        architecture. I enjoy designing scalable systems and writing clean,
        maintainable Java code following SOLID principles.
      </motion.p>

      {/* Timeline */}
      <div className="space-y-10">
        {/* Education */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="border-l-4 border-blue-600 pl-6"
        >
          <h3 className="text-2xl font-semibold">Education</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            <strong>B.Tech – Computer Science Engineering</strong><br />
            GL Bajaj Group of Institutions, Mathura<br />
            CGPA: <strong>8.52</strong> (2023 – 2027)
          </p>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="border-l-4 border-blue-600 pl-6"
        >
          <h3 className="text-2xl font-semibold">Professional Experience</h3>
          <ul className="list-disc list-inside mt-2 space-y-2 text-gray-600 dark:text-gray-400">
            <li>Open Source Contributor – Java & Spring Boot</li>
            <li>Worked on bug fixes and feature enhancements</li>
            <li>Participated in backend architecture discussions</li>
            <li>Collaborated on distributed system design</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
