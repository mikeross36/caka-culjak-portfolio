import React from "react";
import { resume, skills, rest } from "./data";

const About = () => {

    const openText = (e) => {
        if (e.target.innerText.description !== "") {
            e.target.classList.toggle("show-paragraph")
        }  
    }

    return (
        <section className="about section container" id="about">
            <h1 className="section__title about__section-title">o meni</h1>
            <div className="about__container">
                <div className="about__resume">
                    <h4 className="about__resume-title">radno iskustvo</h4>
                    {resume.map(item => {
                        const { id, year, company, sector, position, description } = item;
                        return (
                            <article key={id} className="about__resume-item">
                                <p>{year}</p>
                                <p>{company}</p>
                                <p>{sector}</p>
                                <p>{position}</p>
                                <p onClick={openText}>{description}</p>
                            </article>
                        )
                    })}
                </div>        
                <div className="about__skills">
                    <h4 className="about__resume-title">obrazovanje i osposobljavanje</h4>
                    {skills.map(item => {
                        const { id, year, title, school, description } = item;
                        return (
                            <article key={id} className="about__skills-item">
                                <p>{year}</p>
                                <p>{title}</p>
                                <p>{school}</p>
                                <p onClick={openText}>{description}</p>
                            </article>
                        )
                    })}
                </div>
                <div className="about__rest">
                    {rest.map(item => {
                        const { id, title, item1, item2, item3, item4, item5} = item;
                        return (
                            <article key={id} className="about__rest-item">
                                <h4>{title}</h4>
                                <p>{item1}</p>
                                <p>{item2}</p>
                                <p>{item3}</p>
                                <p>{item4}</p>
                                <p>{item5}</p>
                            </article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default About;