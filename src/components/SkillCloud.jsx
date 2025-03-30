import React from "react";
import { TagCloud } from "react-tagcloud";

const skills = [
  { value: "JavaScript", count: 40 },
  { value: "React", count: 38 },
  { value: "Tailwind CSS", count: 35 },
  { value: "Python", count: 30 },
  { value: "C++", count: 28 },
  { value: "Node.js", count: 25 },
  { value: "MongoDB", count: 20 },
  { value: "Git", count: 22 },
  { value: "AI/ML", count: 30 },
  { value: "Next.js", count: 25 },
  { value: "TypeScript", count: 18 },
  { value: "Firebase", count: 15 },
];

const options = {
  luminosity: "bright",
  hue: "blue",
};

const SkillCloud = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 text-white p-6 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold text-center mb-4">My Skills</h2>
        <TagCloud
          minSize={20}
          maxSize={50}
          tags={skills}
          colorOptions={options}
          className="flex flex-wrap justify-center"
        />
      </div>
    </div>
  );
};

export default SkillCloud;