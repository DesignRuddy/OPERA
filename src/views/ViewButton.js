import React from "react";
import { Link } from "react-router-dom";

const ViewButton = () => {
    return(
        <>
        <div className="boardbtn">
        <Link to="/views/ViewButton/Insert">
            <button>게시글 등록</button>
        </Link>
        
        <Link to="/views/ViewButton/View">
            <button>게시글 보기</button>
        </Link>

        <Link to="/views/ViewButton/Update">
            <button>게시글 수정</button>
        </Link>

        <Link to="/views/ViewButton/Delete">
            <button>게시글 삭제</button>
        </Link>
        </div>
        </>
    )
}

export default ViewButton;