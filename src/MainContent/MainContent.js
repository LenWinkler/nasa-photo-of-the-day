import React from "react";
import "./MainContent.css";

function MainContent(props) {
    return (
    <div className="container">
        <div className="mainContent">
            <h2>You're looking at {props.title}</h2>
            <img src={props.apod} alt={props.title}/>
            <p className="picDesc">{props.desc}</p>
        </div>
    </div>
    )
}

export default MainContent;