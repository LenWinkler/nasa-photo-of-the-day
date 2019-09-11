import React from "react";
import Nav from "./Nav";
import "./Header.css";

const Header = (props) => {
    return (
        <div className="mainTitle">
        <Nav date={props.date}/>
        <h1>Astronomy Picture of the Day</h1>
        <h4>This is a React app which uses NASA's "APOD" API to display the Astronomy Picture of the Day.</h4>
        </div>
    )
}

export default Header; 