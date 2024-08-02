import React from "react";

function Info()
{
    return(
        <div className="about__info grid">
            <div className="about__box">
                <i class='bx bxs-briefcase about__icon'></i>
                <h3 className="about__title">Internship</h3>
                <span className="about__subtitle">Interned at Netesenz</span>
            </div>

            <div className="about__box">
                <i class='bx bxs-graduation about__icon'></i>
                <h3 className="about__title">Education</h3>
                <span className="about__subtitle">BTech in CS (2025)</span>
            </div>
        </div> 
    );
}

export default Info;