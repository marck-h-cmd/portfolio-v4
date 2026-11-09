import React from "react";
import Image from "next/image";

const Socials = (props) => {
  return (
    <div className="flex flex-col space-y-4 pt-4">
      <div className="flex flex-row items-center flex-wrap gap-3">
        <a
          href={`mailto:${props.data.email}`}
          className="transition-all bg-primary-500 hover:bg-primary-400 text-surface-100 font-bold py-2 px-5 rounded flex flex-row justify-center items-center text-xs"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
          <span>Contáctame</span>
        </a>

      </div>
      <div className="flex flex-row items-center space-x-5 pt-1">
        <a
          href={props.data.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row items-center text-xs hover:text-primary-400 transition-colors"
        >
          <Image
            src="/logos/github-mark-white.png"
            alt="GitHub Logo"
            width={18}
            height={18}
            className="object-contain mr-1.5"
          />
          <span>GitHub</span>
        </a>
        <a
          href={props.data.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row items-center text-xs hover:text-primary-400 transition-colors"
        >
          <Image
            src="/logos/linkedin-mark-white.png"
            alt="LinkedIn Logo"
            width={18}
            height={18}
            className="object-contain mr-1.5"
          />
          <span>LinkedIn</span>
        </a>
      </div>
    </div>
  );
};

export default Socials;
