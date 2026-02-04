import React from 'react'

const ProjectCard = () => {
  return (
    <div className="bg-slate-900 p-6 rounded-lg border border-slate-800 hover:border-sky-400 transition">
      <h3 className="text-xl font-semibold">Project Name</h3>
      <p className="text-slate-400 mt-3">
        Short backend-focused description goes here.
      </p>

      <div className="mt-4 flex flex-wrap gap-2 text-xs">
        <span className="bg-slate-800 px-3 py-1 rounded">Node</span>
        <span className="bg-slate-800 px-3 py-1 rounded">MongoDB</span>
        <span className="bg-slate-800 px-3 py-1 rounded">Redis</span>
      </div>

      <div className="mt-6 flex gap-4 text-sm">
        <button className="text-sky-400 hover:underline">Case Study</button>
        <button className="text-sky-400 hover:underline">GitHub</button>
      </div>
    </div>
  );
};

export default ProjectCard