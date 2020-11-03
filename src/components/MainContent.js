import React from "react"
import ReactDOM from "react-dom"
import Projects from "./Projects"
import Bio from "./Bio"
import profile_pic from "../static/profile_pic.jpg"

function MainContent() {
    return (
        <div>
            <img style={{width: "9em", borderRadius: "50%"}}src={profile_pic} alt="Avatar"/>
            <div className="bio">
                <Bio />
            </div> 
        </div>
    )
}

export default MainContent