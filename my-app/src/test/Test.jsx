import React, { useState } from "react";
import TodoBoard from "./TodoBorad";


function Test() {
    const [inputValue, setInputValue] = useState('');
    const [todoList, setTodoList] = useState([]);

    const inputValueChage = (event) => {
        setInputValue(event.target.value);
    }
    const insertInputValue = () => {
        setTodoList([...todoList, inputValue]);
        setInputValue('');
    }

    const removeItem = (index) => {
        const updatedTodoList = [...todoList];
        updatedTodoList.splice(index, 1);
        setTodoList(updatedTodoList);
    }

    return (
        <div>
            <input type="text" value={inputValue} onChange={inputValueChage} />
            <button onClick={insertInputValue}>추가</button>
            <TodoBoard todoList={todoList} onRemoveItem={removeItem} />
        </div>
    );
}

export default Test;