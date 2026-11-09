import React from "react";

const skillIcons = {
  python: (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 128 128">
      <path fill="#3776AB" d="M63.5 8c-28.7 0-27 12.4-27 12.4l.03 12.8h27.5v3.9H25.4S8 35.1 8 63.8c0 28.6 15.2 27.6 15.2 27.6l9.1-.01v-12.7s-.5-15.2 15-15.2h25.8s14.4.2 14.4-14V22.4S89 8 63.5 8zm-14.7 8.3c2.7 0 4.8 2.2 4.8 4.8s-2.2 4.8-4.8 4.8-4.8-2.2-4.8-4.8 2.1-4.8 4.8-4.8z" />
      <path fill="#FFD438" d="M64.5 120c28.7 0 27-12.4 27-12.4l-.03-12.8H63.9v-3.9h38.6s17.4 2 17.4-26.7c0-28.6-15.2-27.6-15.2-27.6l-9.1.01v12.7s.5 15.2-15 15.2H54.8s-14.4-.2-14.4 14v26.1S39 120 64.5 120zm14.7-8.3c-2.7 0-4.8-2.2-4.8-4.8s2.2-4.8 4.8-4.8 4.8 2.2 4.8 4.8-2.1 4.8-4.8 4.8z" />
    </svg>
  ),
  typescript: (
    <svg className="w-5 h-5 shrink-0 rounded" viewBox="0 0 128 128">
      <path fill="#3178C6" d="M1.5 1.5h125v125H1.5z" />
      <path fill="#FFF" d="M69.6 70.1H54.4V113H38.7V70.1H23.5V57.6h46.1v12.5zm19.9 29.5c3.7 2.4 8.7 4.1 14.3 4.1 8 0 12.6-4.1 12.6-10.2 0-6-3.8-9.1-13.3-13.1-12.2-5-17.7-11.8-17.7-21.7 0-12.4 9.9-22 26.2-22 6.8 0 12.3 1.7 15.9 3.8l-4.1 12.3c-3-1.8-7.2-3.2-11.9-3.2-6.9 0-11.1 3.7-11.1 8.8 0 5.4 3.6 8.3 13 12.3 12.7 5.4 18.1 11.9 18.1 22.7 0 13.5-10.4 23.3-28.3 23.3-7.9 0-15-2.1-19.1-4.7l5.4-12.6z" />
    </svg>
  ),
  javascript: (
    <svg className="w-5 h-5 shrink-0 rounded" viewBox="0 0 128 128">
      <path fill="#F7DF1E" d="M1.5 1.5h125v125H1.5z" />
      <path fill="#000" d="M29.6 101.4l11.4-6.9c2.3 3.9 5.3 7 10.7 7 5.5 0 9-2.2 9-10.8V43.2h15.2v47.7c0 16.2-9.6 23.5-23.7 23.5-12.2 0-19.4-6.3-22.6-13zm47.9-2.5l11.4-6.6c3.2 5.1 7.6 8.9 14.8 8.9 6.2 0 10.1-3.1 10.1-7.4 0-5.2-4.1-7.1-13.7-11.3-13.8-5.9-19.6-11.8-19.6-22.4 0-11.2 8.7-19.8 22.3-19.8 9.7 0 16.6 3.5 21.2 11.5l-10.8 6.9c-2.4-4.2-5.1-6.1-10.4-6.1-5.1 0-8.5 3.1-8.5 6.7 0 4.6 3.5 6.5 11.8 10.1 15.5 6.6 21.7 12.5 21.7 23.9 0 13.7-10.8 21-25.1 21-14.2-.1-22.1-7.2-25.2-15.4z" />
    </svg>
  ),
  sql: (
    <svg className="w-5 h-5 shrink-0 text-primary-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  )
};

const Skills = (props) => {
  if (!props.data || props.data.length === 0) return null;

  return (
    <div data-section id="skills" className="mb-16">
      <h2 className="mb-8 visible lg:invisible font-medium tracking-widest uppercase">
        Habilidades
      </h2>
      <div className="flex flex-col space-y-4">
        {props.data.map((item, index) => (
          <div
            key={index}
            className="group flex flex-col p-4 transition-all hover:bg-surface-200 rounded"
          >
            <div className="flex flex-row items-center space-x-2.5 mb-2">
              {skillIcons[item.icon] || null}
              <h3 className="font-bold text-sm text-on-background group-hover:text-primary-400 transition-colors">
                {item.name}
              </h3>
            </div>
            <p className="text-surface-600 text-xs leading-relaxed mb-3">
              {item.summary}
            </p>
            <div className="flex flex-row flex-wrap gap-1.5">
              {item.tools &&
                item.tools.map((tool) => (
                  <span
                    key={tool}
                    className="bg-surface-400 py-0.5 px-2.5 rounded-full text-[11px] text-on-background"
                  >
                    {tool}
                  </span>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

