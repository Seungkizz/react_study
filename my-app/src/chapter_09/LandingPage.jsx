import React, { useState } from "react";
import Toolbar from "./Toolbar";

function LandingPage(props) {

    const [isLoggendIn, setIsLoggendIn] = useState(false);

    const onClickLogin = () => {
        setIsLoggendIn(true);
    };

    const onClickLogout = () => {
        setIsLoggendIn(false);
    };

    return (
        <div>
            <Toolbar
                isLoggendIn={isLoggendIn}
                onClickLogin={onClickLogin}
                onClickLogout={onClickLogout}
            />
            <div style={{ padding: 16 }}>리액트 공부하기!!!</div>
        </div>
    );
}

export default LandingPage;