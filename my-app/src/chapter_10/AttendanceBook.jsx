import React from "react";

const students = [
    {
        id: 1,
        name: "승기",
    },
    {
        id: 2,
        name: "제동",
    },
    {
        id: 3,
        name: "재석",
    },
    {
        id: 4,
        name: "민경",
    },
    {
        id: 5,
        name: "태양",
    },
];

function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student) => {
                return <li key={student.id}>{student.name}</li>
            })}
        </ul>
    );
}

export default AttendanceBook;
