import React from "react";
import { Link } from "react-router-dom";
import "./Lab.css";

function Lab() {

  const handleBoard=async(e)=>{
    //id, pw 빈칸 검증
    e.preventDefault();
    try{
        await axios
        .get("http://localhost:8080/lab")
        .then((res)=>{
            
        })
    }catch(error){
        console.log(error);
    }
    
}

  return (
    <div className='home'>
    <div className="header">
    <Link to="/"><h1>Logo</h1></Link>
        <ui className="header-menu">
         <li><Link to="/Lab"> 연구실 </Link></li>
         <li><Link to="/Group"> 동아리 </Link></li>
         <li><Link to="/Study"> 스터디 </Link></li>
        </ui>
<div className="header-buttons">
    <Link to ="signIn">
    <button className="signin-btn">로그인</button>
    </Link>
    <Link to ="signUp">
    <button className="signup-btn">회원가입</button>
    </Link>
</div>
</div>
<div class="header-content">

<div className="left-container">
<div className="login-box">로그인 박스</div>
</div>
<div className="right-container">
<div className="search-bar">검색 바</div>

          <div className="content123">
            <div className="top-content">
              <div className="top-content-header">
                <h2>연구실</h2>
                <hr />
                <p>총 20 개</p>
              </div>
              <hr className="content-divider" />
            </div>
            <div className="contents">
              <div className="lab-content">
                <h4>게시글 제목 1</h4>
                <h8>게시글 내용 1</h8>
                <hr className="content-divider" />
              </div>
              <div className="lab-content">
              <h4>게시글 제목 2</h4>
                <h8>게시글 내용 2</h8>
                <hr className="content-divider" />
              </div>
              <div className="lab-content">
              <h4>게시글 제목 3</h4>
                <h8>게시글 내용 3</h8>
                <hr className="content-divider" />
              </div>
              <div className="lab-content">
              <h4>게시글 제목 4</h4>
                <h8>게시글 내용 4</h8>
                <hr className="content-divider" />
              </div>
              <div className="lab-content">
              <h4>게시글 제목 5</h4>
                <h8>게시글 내용 5</h8>
                <hr className="content-divider" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lab;