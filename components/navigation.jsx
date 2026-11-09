'use client'

import React, { useState, useEffect, useRef } from "react";
import NavItem from "./nav-item";

const Navigation = () => {
    const [activeSection, setActiveSection] = useState(null);
    const observer = useRef(null);

    useEffect(() => {
        observer.current = new IntersectionObserver((entries) => {
            const visibleSection = entries.find((entry) => entry.isIntersecting)?.target;
            if (visibleSection) {
                setActiveSection(visibleSection.id);
            }
        }, {threshold:0.5});

        const sections = document.querySelectorAll('[data-section]');

        sections.forEach((section) => {
            observer.current.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.current.unobserve(section);
            });
        };
    }, []);

    return (
        <div id='navigation' className='flex flex-col py-8 font-medium tracking-widest text-xs'>
            <NavItem active={activeSection === 'about'} href='#about' num='01' name="SOBRE MÍ"></NavItem>
            <NavItem active={activeSection === 'skills'} href='#skills' num='02' name="HABILIDADES"></NavItem>
            <NavItem active={activeSection === 'experiences'} href='#experiences' num='03' name="EXPERIENCIA"></NavItem>
            <NavItem active={activeSection === 'education'} href='#education' num='04' name="EDUCACIÓN"></NavItem>
            <NavItem active={activeSection === 'projects'} href='#projects' num='05' name="PROYECTOS"></NavItem>
        </div>
    )
}

export default Navigation;
