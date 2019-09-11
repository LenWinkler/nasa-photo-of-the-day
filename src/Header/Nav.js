import React from "react";
import "./Nav.css";

const Nav = (props) => {
    var date = props.date;
    return (
      <div className="navBar">
        <p className="date">{date}</p>
        <div className="divLinks">
            <a className="link" href="https://github.com/LenWinkler/nasa-photo-of-the-day/tree/len-winkler">View Code</a>
        </div>
      </div>  
    )
}

export default Nav;