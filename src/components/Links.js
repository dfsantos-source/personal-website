import React from "react"
import github_logo from "../static/github_logo.svg"
import linkedin_logo from "../static/linkedin_logo.svg"

function Links() {
    return (
        <div>
            <img src={github_logo} alt="github_logo"></img>
            <img src={linkedin_logo} alt="linkedin_logo"></img>
        </div>
    )
}

export default Links