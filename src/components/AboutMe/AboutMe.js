import './AboutMe.css';

function AboutMe() {
    return (
        <>
            <div className="aboutMe-container">
                <p>I am a junior Full Stack Web Developer based out of Atlanta, Georgia. I have always enjoyed solving problems. Either in the workplace, or in my free time playing board games. I have 8 years of retail management experience which has taught me how to work well with a team to deliver the best possible experience for the clients as well as the company.<br/><br/>I recently graduated from Georgia Tech's Full Stack Web Development bootcamp, and I am looking to further expand upon what I learned there in order to create even better web applications.<br/><br/></p>
                <p className="skills-label">Skills</p>
                <ul className="skills-list">
                    <li className="skill">React</li>
                    <li className="skill">GraphQL</li>                    
                    <li className="skill">JavaScript</li>                    
                    <li className="skill">Node.js</li>
                    <li className="skill">Express.js</li>
                    <li className="skill">MySQL</li>
                    <li className="skill">MongoDB</li>
                    <li className="skill">Handlebars</li>
                    <li className="skill">JQuery</li>
                    <li className="skill">Bootstrap</li>
                    <li className="skill">CSS</li>
                    <li className="skill">HTML</li>
                </ul>
            </div>
        </>
    )
}

export default AboutMe;