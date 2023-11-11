import React from "react";
import TodoItem from "./TodoItem";

function TodoBoard(props) {
    //console.log("TodoBoard",props.todoList);
    return (
        <div>
            <h1>Todo List</h1>
            {props.todoList.map((item, index) => (
                <TodoItem key={index} item={item} index={index} onRemoveItem={props.onRemoveItem} />
            ))}
        </div>
    );
}

export default TodoBoard;