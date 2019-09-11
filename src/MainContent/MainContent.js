import React, {useState, useEffect} from "react";
import Axios from "axios";
import "./MainContent.css";

function MainContent(props) {
    return (
    <div className="container">
        <div className="mainContent">
            <h2>{props.title}</h2>
            <img src={props.apod} alt={props.title}/>
            <p className="picDesc">{props.desc}</p>
        </div>
    </div>
    )
}

export default MainContent;