import React from "react";
import "./projects.css"
import PROJECT1 from "../../assets/BlogNest.png"
import PROJECT2 from "../../assets/Discord.png"
import PROJECT3 from "../../assets/LinkShrinker.png"

function Projects()
{
    return(
        <section className="projects section" id="projects">
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle">Portfolio Highlights</span>

            <div className="projects__container container grid">

                <div className="projects__card grid">
                    <img src={PROJECT1} className="projects__img"/>
                    <div className="projects__data">
                        <div className="projects__title">
                            <h3>BlogNest</h3>
                        </div>

                        <div className="projects__desc">
                            <p>Built a secure blog application with JWT authentication, enabling users to register, login, create and edit their posts. Implemented database connectivity for efficient storage and retrieval of user data. Home page displays all posts for seamless exploration.</p>
                        </div>

                        <div className="projects__buttons">
                            <a className="projects__button button--flex" href="https://github.com/Khushal-Pabri/mern-blog" target="blank">
                                GitHub
                                <i class='bx bxl-github projects__button-icon'></i>
                            </a>
                            <a className="projects__button button--flex" href="https://mern-blog-frontend-kohl-five.vercel.app/" target="blank">
                                Live Demo
                                <i class='bx bx-link-external projects__button-icon'></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="projects__card grid coverimg">
                    <img src={PROJECT2} className="projects__img right"/>
                    <div className="projects__data">
                        <div className="projects__title">
                            <h3>NewsBot</h3>
                        </div>

                        <div className="projects__desc">
                            <p>NewsBot is a Discord bot that lets users create profiles and store news preferences. It scrapes news from Google News using Puppeteer, automates updates at user-defined intervals with Node Schedule, and offers commands for API-based searches and archived articles.</p>
                        </div>

                        <div className="projects__buttons">
                            <a className="projects__button button--flex" href = "https://github.com/Khushal-Pabri/newsBot" target="blank">
                                GitHub
                                <i class='bx bxl-github projects__button-icon'></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="projects__card grid coverimg">
                    <img src={PROJECT3} className="projects__img"/>
                    <div className="projects__data">
                        <div className="projects__title">
                            <h3>LinkShrinker</h3>
                        </div>

                        <div className="projects__desc">
                            <p>LinkShrinker is a URL shortening service built with Node.js, Express, and MongoDB. It supports custom aliases, user-specific URL management, visit tracking with analytics, and QR code generation for enhanced sharing and accessibility.</p>
                        </div>

                        <div className="projects__buttons">
                            <a className="projects__button button--flex" href = "https://github.com/Khushal-Pabri/LinkShrinker" target="blank">
                                GitHub
                                <i class='bx bxl-github projects__button-icon'></i>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Projects;