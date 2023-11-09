import React, { useState } from "react";

function ConfirmButton2(props) {
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleConfirm2 = () => {
        setIsConfirmed((prevIsConfiremd) => !prevIsConfiremd);
    };

    return (
        <button onClick={handleConfirm2} disabled={isConfirmed}>
            {isConfirmed ? "확인됨" : "확인하기"}
        </button>
    );
}

export default ConfirmButton2;