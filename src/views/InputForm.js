import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class InputForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            articleId: '',
            articleTitle: '',
            articleContent: '',
            crud: props.match.params.crud
        };
        if (this.state.crud !== "Insert"){
            this.getData();
        }
    }


    createHeaderName() {
        const crud = this.state.crud;
        if (crud === "View"){
            return "조회";
        } else if(crud === "Update"){
            return "수정";
        } else if(crud === "Delete"){
            return "삭제";
        } else if(crud === "Insert"){
            return "등록";
        }
    }


    createCrudBtn() {
        const crud= this.state.crud;
        if(crud === "View"){
            return null; //처음에 넘길 값이 없음.
        } else {
            const crudName =
            crud === "Update" ? "수정" : //업데이트라면 -> 수정 : 그러지않다면..
            crud === "Insert" ? "등록" : "삭제"; //인설트가 맞다면 .. 등록 : 아니라면 :삭제;
            
            return( <button onClick={() => this.crud()}>게시글{crudName}</button>);
        }
    }


    crud(){
        const { articleId, articleTitle, articleContent, crud} = this.state;

        let crudType= "";

        if (crud === "Update"){
            crudType = "/updateProcess.do"
        } else if(crud === "Delete"){
            crudType = "/deleteProcess.do"
        } else if(crud === "Insert"){
            crudType = "/insertProcess.do"
        } else if(crud === "View"){
            return null;
        };

        let form= new FormData();
        form.append("articleContent", articleContent);
        form.append("articleTitle", articleTitle);
        if(crud !== "Insert"){
            form.append("articleId",articleId);
        };
        axios
            .post(crudType, form)
            .then((res) => {
                alert("요청이 처리되었습니다");
            this.props.history.push("/");
            })
            .catch((err) => alert("error :"+ err.response.data.msg));
    }
    

    getData() {
        axios.get("/view.do").then((res) => {
            const data= res.data;
            this.setState({
                articleId: data.articleId,
                articleTitle: data.articleTitle,
                articleContent: data.articleContent,
            });
        });
    }
    

    createArticleIdTag() {
        const articleId=  this.state.articleId;
        const crud= this.state.crud;

        if(crud !== "Insert"){
            return <input type='hidden' value={articleId ||""} readOnly />;
        } else {
            return null;
        }
    }



    // 코드작성 (View)
    render() {
        const articleTitle = this.state.articleTitle;
        const articleContent = this.state.articleContent;

        return (
            
            <>
            <div className="board">
                <h1>게시글{this.createHeaderName()}</h1>
                {this.createArticleIdTag()}
                <h3>제목</h3>
                <input
                type="text"
                value={articleTitle ||''}
                onChange={(event) =>
                    this.setState({ articleTitle: event.target.value })
                }
                />
                <br />
                
                <h3>내용</h3>
                <textarea
                rows="20"
                cols="50"
                value={articleContent||''}
                onChange={(event) => 
                    this.setState({articleContent: event.target.value})
                }
                />
                <br />
                {this.createCrudBtn()}
                <Link to="/">
                    <button type='button'>취소</button>
                </Link>
                </div>
            </>
        );
    }
}

export default InputForm;