import React from "react";
import SkillsCard from "./SkillsCard";

function Skills() {
  return (
    <section className = ""> 
        <div>
            <div>
                Skills
            </div>
            <div>
            Below are the skills I possess. I'm always trying to learn 
            new techniques or technologies whether it be for the 
            frontend or the backend. 
            </div>
        </div>
        <section>
            <div>Languages</div>
            <div className = "flex flex-col sm:flex-row justify-center">
                <SkillsCard 
                    imgSrc= {process.env.PUBLIC_URL + '/img/favicons/python.png'}
                    hoverText="Python3"
                />
                <SkillsCard 
                    imgSrc= {process.env.PUBLIC_URL + '/img/favicons/cpp_logo.png'}
                    hoverText="C++"
                />
                <SkillsCard 
                    imgSrc= {process.env.PUBLIC_URL + '/img/favicons/js.png'}
                    hoverText="Javascript"
                />
                <SkillsCard 
                    imgSrc= {process.env.PUBLIC_URL + '/img/favicons/swift.svg'}
                    hoverText="Swift"
                />
            </div>
            <div>Web Development</div>
            <div className = "flex flex-col sm:flex-row justify-center">
                <SkillsCard 
                    imgSrc= {process.env.PUBLIC_URL + '/img/favicons/html.png'}
                    hoverText="HTML"
                />
                <SkillsCard 
                    imgSrc= {process.env.PUBLIC_URL + '/img/favicons/css.png'}
                    hoverText="CSS"
                />
                <SkillsCard 
                    imgSrc= {process.env.PUBLIC_URL + '/img/favicons/nodejs.png'}
                    hoverText="Node.js"
                />
                <SkillsCard 
                    imgSrc= {process.env.PUBLIC_URL + '/img/favicons/react.png'}
                    hoverText="React"
                />
                <SkillsCard 
                    imgSrc= {process.env.PUBLIC_URL + '/img/favicons/express.png'}
                    hoverText="Express"
                />
            </div>
            <div>Frameworks and Libaries</div>
            <div className = "flex flex-col sm:flex-row justify-center">
                <SkillsCard 
                    imgSrc= {process.env.PUBLIC_URL + '/img/favicons/bootstrap.png'}
                    hoverText="Bootstrap"
                />
                <SkillsCard 
                    imgSrc= {process.env.PUBLIC_URL + '/img/favicons/tailwindCSS.png'}
                    hoverText="TailwindCSS"
                />
            </div>
            <div>Misc.</div>
            <div className = "flex flex-col sm:flex-row justify-center">
                <SkillsCard 
                    imgSrc= {process.env.PUBLIC_URL + '/img/favicons/unity.png'}
                    hoverText="Unity"
                />
                <SkillsCard 
                    imgSrc= {process.env.PUBLIC_URL + '/img/favicons/postgresql.png'}
                    hoverText="PostgreSQL"
                />
                <SkillsCard 
                    imgSrc= {process.env.PUBLIC_URL + '/img/favicons/mongoDB.png'}
                    hoverText="MongoDB"
                />
                <SkillsCard 
                    imgSrc= {process.env.PUBLIC_URL + '/img/favicons/firebase.png'}
                    hoverText="FireBase"
                />
                <SkillsCard 
                    imgSrc= {process.env.PUBLIC_URL + '/img/favicons/github.png'}
                    hoverText="GitHub"
                />
            </div>
        </section>
    </section>
  );
}

export default Skills;
