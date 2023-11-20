import React from "react";
import "../App.css";
import Box from "./Box";

function StudyReact() {

    const btnclick = (name) =>{
        alert(`${name} 버튼을 눌렀습니다.`);
    };

    return (
        <main>
            <Box name="승기" num="1" onBtn={btnclick}/>
            <Box name="재석" num="2" onBtn={btnclick}/>
            <Box name="세호" num="3" onBtn={btnclick}/>
            <Box name="하하" num="4" onBtn={btnclick}/>
        </main>
    );
}

export default StudyReact;