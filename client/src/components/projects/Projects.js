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
                            <h3>Coming Soon</h3>
                        </div>

                        <div className="projects__desc">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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
                            <h3>Coming Soon</h3>
                        </div>

                        <div className="projects__desc">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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