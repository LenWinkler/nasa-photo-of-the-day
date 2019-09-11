import React from "react";
import Nav from "./Nav";
import "./Header.css";

const Header = (props) => {
    return (
        <div className="mainTitle">
        <Nav date={props.date}/>
        <h1>NASA APOD</h1>
        <h4>This is a React app which uses an API to display NASA's Astronomy Picture of the Day.</h4>
        </div>
    )
}

export default Header;