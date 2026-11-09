import React from "react";

const About = (props) => {
  return (
    <div data-section id="about" className="mb-16 group">
      <h2 className="mb-8 visible lg:invisible font-medium tracking-widest uppercase">
        Sobre mí
      </h2>
      <div className="text-surface-600 leading-relaxed">
        {props.data.about.map(function (paragraph, index) {
          return (
            <div key={index} className="mb-4">
              {paragraph}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
