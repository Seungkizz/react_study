import React, { useState } from "react";

function Box(props) {

    const [like, setLike] = useState(0);

    const clickme = () => {
        props.onBtn(props.name);
        setLike(like + 1);
    };



    return (
        <div className="box">
            box {props.num}
            {props.name}
            <button onClick={clickme}>클릭!</button>
            <span>👍 {like}</span>
        </div>
    );
}

export default Box;