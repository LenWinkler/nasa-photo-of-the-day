import React, {useState, useEffect} from "react";
import Axios from "axios";
import "./MainContent.css";

function MainContent() {
    const [apod, setApod] = useState("#");
    const [desc, setDesc] = useState("");
    const [title, setTitle] = useState("");

    useEffect(() => {
        Axios.get('https://api.nasa.gov/planetary/apod?api_key=WiZ5maqfRUuFDt0ul6yi5y8pnLlDzzLhajkmG04D')
        .then(res => {
            const data = res.data;
            console.log(data);
            setApod(data.url);
            setDesc(data.explanation);
            setTitle(data.title);
        })
        .catch(error => console.log('uh oh', error))
    })

    return (
    <div className="container">
        <div className="mainContent">
            <h2>{title}</h2>
            <img src={apod} alt={title}/>
            <p className="picDesc">{desc}</p>
        </div>
    </div>
    )
}

export default MainContent;