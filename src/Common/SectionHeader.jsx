import React from "react";

const SectionHeader = ({ title, subtitle, color }) => {
  return (
    <div className="mb-14 text-center">
      {/* Title */}
      <h2
        className={`text-4xl md:text-5xl font-extrabold mb-4 
        bg-gradient-to-r ${color} bg-clip-text text-transparent`}
      >
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}

      {/* Divider */}
      <div className="mt-6 flex justify-center">
        <span className="h-1 w-24 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"></span>
      </div>
    </div>
  );
};

export default SectionHeader;
