import React from "react"
import linkedin_logo from "../static/linkedin_logo.svg"
import github_logo from "../static/github_logo.svg"

function ContactMe() {
    return (
        <div className="contact-me">
            <a className="email-button"style={{textDecoration: "none", width: "40%"}}href={"mailto:dfsantos.dev@gmail.com"}>
            <p style={{fontSize:"1em", color: "white"}}>Email</p>
            </a>
            <a className="email-button"style={{textDecoration: "none", width: "40%"}}href={"mailto:dfsantos.dev@gmail.com"}>
            <p style={{fontSize:"1em", color: "white"}}>Linkedin</p>
            </a>
            <a className="email-button"style={{textDecoration: "none", width: "40%"}}href={"mailto:dfsantos.dev@gmail.com"}>
            <p style={{fontSize:"1em", color: "white"}}>Github</p>
            </a>
        </div>
    )
}

export default ContactMe