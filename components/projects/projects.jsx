import React from "react";
import ProjectItem from "./project-item";

const Projects = (props) => {
  return (
    <div data-section id="projects" className="mb-16">
      <h2 className="mb-8 visible lg:invisible font-medium tracking-widest uppercase">
        Proyectos
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {props.data.map(function (object, index) {
          return (
            <ProjectItem
              key={`${object.name}+${index}`}
              name={object.name}
              stars={object.stars}
              lib={object.framework}
              description={object.description}
              href={object.href}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
