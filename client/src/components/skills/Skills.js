import React from "react";
import "./skills.css"

function Skills()
{
    return(
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My Technical Level</span>

            <div className="skills__container container grid">
                <div className="skills__card">
                    <i class='bx bxl-c-plus-plus skills__icon' ></i>
                    <h3 className="skills__title">C++</h3>
                </div>
                <div className="skills__card">
                    <i class='bx bxl-html5 skills__icon'></i>
                    <h3 className="skills__title">HTML5</h3>
                </div>
                <div className="skills__card">
                    <i class='bx bxl-css3 skills__icon'></i>
                    <h3 className="skills__title">CSS</h3>
                </div>
                <div className="skills__card">
                    <i class='bx bxl-javascript skills__icon' ></i>
                    <h3 className="skills__title">JavaScript</h3>
                </div>
                <div className="skills__card">
                    <i class='bx bxl-typescript skills__icon'></i>
                    <h3 className="skills__title">TypeScript</h3>
                </div>
                <div className="skills__card">
                    <i class='bx bxl-react skills__icon'></i>
                    <h3 className="skills__title">React</h3>
                </div>
                <div className="skills__card">
                    <i class='bx bxl-nodejs skills__icon'></i>
                    <h3 className="skills__title">Node.js/Express</h3>
                </div>
                <div className="skills__card">
                    <i class='bx bxl-mongodb skills__icon' ></i>
                    <h3 className="skills__title">MongoDB</h3>
                </div>
                <div className="skills__card">
                    <i class='bx bxl-git skills__icon'></i>
                    <h3 className="skills__title">Git</h3>
                </div>
                <div className="skills__card">
                    <i class='bx bxl-github skills__icon' ></i>
                    <h3 className="skills__title">GitHub</h3>
                </div>
            </div>
        </section>
    );
}

export default Skills;