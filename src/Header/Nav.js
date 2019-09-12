import React from "react";
import "./Nav.css";
import styled from "styled-components";

const Link = styled.a`
  font-size: 1.5rem;
  text-decoration: none;
  margin: .8rem;
  margin-right: 4.8rem;
`;

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Date = styled.p`
  font-size: 1.5rem;
  margin-left: 1.8rem;
`;


const Nav = (props) => {
    var date = props.date;
    return (
      <NavBar>
        <Date>{date}</Date>
        <div>
            <Link href="https://github.com/LenWinkler/nasa-photo-of-the-day/tree/len-winkler">View Code</Link>
        </div>
      </NavBar>  
    )
}

export default Nav;