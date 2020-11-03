import React from "react"
import ReactDOM from "react-dom"

function Bio() {
    return (
        <div className="bio">
            <div className="bio-content">
                <div style={{textAlign: "left"}}className="description">
                    <p>
                        <b>Hi, my name is Dane!</b>
                    </p>
                    <p>
                        I am currently a second-year student at the University of Massachusetts
                        - Amherst, currently pursuing a B.S in Computer Science.
                    </p>
                    <p>    
                        My plans for the future is to eventually become a full-stack web developer.
                        I am interested in learning new technologies and skills, as well as challenging
                        myself when it comes to problem-solving and critical thinking.
                    </p>
                    <p>
                        Curiosity driven. Always on the lookout for new opportunites for  projects, programs, 
                        and positions, to further pursue my passion for Computer Science.
                    </p>
                </div>
                <div className="skills">
                </div>
            </div>
        </div>
    )
}

export default Bio