import React from "react";

const styles = {
    wrapper: {
        width: 300,
        height: 50,
        margin: 10,
        padding: 10,
        border: "1px solid skyblue",

    },
}



function TodoItem(props) {

    const itemRemove = () => {
        props.onRemoveItem(props.index);
    }
    return (
        <div style={styles.wrapper}>
            {props.item}
            <br />
            <button onClick={itemRemove}>삭제</button>
        </div>
    );
}

export default TodoItem;