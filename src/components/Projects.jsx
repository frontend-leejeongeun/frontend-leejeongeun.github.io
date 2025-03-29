import { Link } from "react-router-dom";
import imgTodoVanilla from "../assets/images/project1.png";
import imgTodoReact from "../assets/images/project2.png";
import imgCommunity from "../assets/images/project3.png";

export default function Projects({ projectRef }) {
  return (
    <div id="projects" className="background-alt" ref={projectRef}>
      <h2 className="heading">Projects</h2>
      <div className="container">
        <div className="row">

        <div className="project shadow-large">
            <Link to="/community" target="_blank">
              <div className="project-image todovanilla">
                <figure>
                  <img src={imgCommunity} alt="project3" />
                </figure>
              </div>
            </Link>
            <div className="project-info">
              <h3>
                <Link to="/community" target="_blank">
                  Community - NextJs 
                </Link>
              </h3>
              <div className="text-wrapper">
                <div className="text-block">
                  <span className="title">프로젝트 :</span>
                  <span className="des">
                    nextJs와 Firebase 로 만드는 커뮤니티
                  </span>
                </div>
                <div className="text-block">
                  <span className="title">URL :</span>
                  <span className="des">
                    https://project-community-next-client.vercel.app
                  </span>
                </div>
                <div className="text-block">
                  <span className="title">기술스택 :</span>
                  <span className="des">nextJs, Firebase, typescript, javascript, tailwind css, vercel, fly.io</span>
                </div>
                <div className="text-block">
                  <span className="title">기여도 :</span>
                  <span className="des">100%</span>
                </div>
                <div className="text-block">
                  <span className="title">기능정의 :</span>
                  <span className="des">
                    회원가입 & 로그인, 게시판, 댓글 시스템, 게시글 검색 기능
                  </span>
                </div>
              </div>
              <div className="project-view-btn">
                <Link to="https://project-community-next-client.vercel.app/" target="_blank">
                  view project
                </Link>
              </div>
              <div className="project-view-btn">
                <Link to="/community" target="_blank">
                  view project post
                </Link>
              </div>
              <div className="project-view-btn">
                <Link
                  to="https://github.com/frontend-leejeongeun/Project-Community-Next-Client"
                  target="_blank"
                >
                  go to repository - client
                </Link>
              </div>
              <div className="project-view-btn">
                <Link
                  to="https://github.com/frontend-leejeongeun/Project-Community-Next-Server"
                  target="_blank"
                >
                  go to repository - server
                </Link>
              </div>
            </div>
          </div>

          <div className="project shadow-large">
            <Link to="/todovanilla" target="_blank">
              <div className="project-image todovanilla">
                <figure>
                  <img src={imgTodoVanilla} alt="project1" />
                </figure>
              </div>
            </Link>
            <div className="project-info">
              <h3>
                <Link to="/todovanilla" target="_blank">
                  To Do List - Vanilla Javascript
                </Link>
              </h3>
              <div className="text-wrapper">
                <div className="text-block">
                  <span className="title">프로젝트 :</span>
                  <span className="des">
                    바닐라 자바스크립트로 만든 할 일 목록
                  </span>
                </div>
                <div className="text-block">
                  <span className="title">기술스택 :</span>
                  <span className="des">html, css, javascript</span>
                </div>
                <div className="text-block">
                  <span className="title">기여도 :</span>
                  <span className="des">100%</span>
                </div>
                <div className="text-block">
                  <span className="title">기능정의 :</span>
                  <span className="des">
                    목록보여주기, 추가, 수정, 삭제, 전체 및 개별 체크박스 기능,
                    각 상태 별 필터링, 남은 할일 카운트, 기능에 부합하는 UI 구현
                  </span>
                </div>
              </div>
              <div className="project-view-btn">
                <Link to="/todovanilla" target="_blank">
                  view project post
                </Link>
              </div>
              <div className="project-view-btn">
                <Link
                  to="https://github.com/frontend-leejeongeun/Project-Todos-Vanilla"
                  target="_blank"
                >
                  go to repository
                </Link>
              </div>
            </div>
          </div>

          <div className="project shadow-large">
            <Link to="/TodoReact" target="_blank">
              <div className="project-image todoreact">
                <figure>
                  <img src={imgTodoReact} alt="project2" />
                </figure>
              </div>
            </Link>
            <div className="project-info">
              <h3>
                <Link to="/TodoReact" target="_blank">
                  To Do List - React
                </Link>
              </h3>
              <div className="text-wrapper">
                <div className="text-block">
                  <span className="title">프로젝트 :</span>
                  <span className="des">리액트로 만든 할 일 목록</span>
                </div>
                <div className="text-block">
                  <span className="title">기술스택 :</span>
                  <span className="des">
                    react, javascript, typescript, tsx, css
                  </span>
                </div>
                <div className="text-block">
                  <span className="title">기여도 :</span>
                  <span className="des">100%</span>
                </div>
                <div className="text-block">
                  <span className="title">기능정의 :</span>
                  <span className="des">
                    목록보여주기, 추가, 수정, 삭제, 전체 및 개별 체크박스 기능,
                    각 상태 별 필터링, 남은 할일 카운트, 기능에 부합하는 UI 구현
                  </span>
                </div>
              </div>
              <div className="project-view-btn">
                <Link to="/TodoReact" target="_blank">
                  view project post
                </Link>
              </div>
              <div className="project-view-btn">
                <Link
                  to="https://github.com/frontend-leejeongeun/Project-Todos-React"
                  target="_blank"
                >
                  go to repository
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
