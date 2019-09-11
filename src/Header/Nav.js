import React from "react";

const Nav = (props) => {
    var date = props.date;
    console.log(date);
    return (
      <>
        <p className="date">{date}</p>
        <a href="#">About</a>
        <a href="#">Source Code</a>
      </>  
    )
}

export default Nav;