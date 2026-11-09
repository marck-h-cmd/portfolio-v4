import React from "react";

function ProjectItem(props) {
  return (
    <div className="group flex flex-col justify-between p-5 transition-all bg-surface-200 hover:scale-[1.02] hover:bg-surface-300/40 rounded">
      <div>
        <div className="text-surface-600 mb-3 flex flex-row items-center justify-between text-xs">
          <span className="font-mono text-primary-400 uppercase tracking-wider text-[11px] font-semibold">{props.lib}</span>
          <div className="flex flex-row items-center space-x-3 text-surface-600">
            {props.github && (
              <a
                href={props.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-400 transition-colors"
                title="Ver repositorio en GitHub"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
            )}
            {props.web && (
              <a
                href={props.web}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-400 transition-colors"
                title="Visitar sitio web"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            )}
          </div>
        </div>
        <a
          href={props.href || props.web || props.github || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-2 block text-base font-bold subpixel-antialiased group-hover:text-primary-400 transition-colors"
        >
          {props.name} <span className="inline-block transition-transform group-hover:translate-x-0.5">↗</span>
        </a>
        <div className="text-surface-600 text-xs leading-relaxed">{props.description}</div>
      </div>
    </div>
  );
}

export default ProjectItem;
