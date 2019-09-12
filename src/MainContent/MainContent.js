import React from "react";
import "./MainContent.css";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
`;

const MainContentDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 6rem;
`;

const Img = styled.img`
    width: 90%;
    border-radius: 5px;
`;

const Desc = styled.p`
    width: 85%;
    text-align: center;
    font-size: 1.3rem;
    margin-bottom: 10rem;
`;

function MainContent(props) {
    return (
    <Container>
        <MainContentDiv>
            <h2>You're looking at {props.title}</h2>
            <Img src={props.apod} alt={props.title}/>
            <Desc>{props.desc}</Desc>
        </MainContentDiv>
    </Container>
    )
}

export default MainContent;