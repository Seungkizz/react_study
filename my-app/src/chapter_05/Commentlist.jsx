import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "김승기",
        comment: "안녕하세요, 김승기 입니다.",
    },
    {
        name: "TOM",
        comment: "리액트 너무 신기하네요.",
    },
    {
        name: "Jerry",
        comment: "저도 같이 배워보고 싶어요!",
    },
    {
        name: "jane",
        comment: "우아아아ㅏ",
    },
    {
        name: "박명수",
        comment: "너무 신기하네!",
    },
    {
        name: "유재석",
        comment: "이야 좋은데?",
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })};
        </div>
    );
}

export default CommentList;