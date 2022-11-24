import './AboutMe.css';

function AboutMe() {
    return (
        <>
            <div className="aboutMe-container">
                <p>I am a Full Stack Web Developer based out of Atlanta, Georgia. I enjoy finding and implementing solutions to complex problems.<br/><br/>
                I have 8 years of retail management experience which allows me to work well in a team environment and adapt to customer needs.<br/><br/></p>
                <p className="skills-label">Skills</p>
                <ul className="skills-list">
                    <li className="skill">HTML</li>
                    <li className="skill">CSS</li>
                    <li className="skill">JavaScript</li>
                    <li className="skill">JQuery</li>
                    <li className="skill">Bootstrap</li>
                    <li className="skill">Node.js</li>
                    <li className="skill">Express.js</li>
                    <li className="skill">MySQL</li>
                    <li className="skill">MongoDB</li>
                    <li className="skill">Handlebars</li>
                    <li className="skill">React</li>
                    <li className="skill">GraphQL</li>
                </ul>
            </div>
        </>
    )
}

export default AboutMe;