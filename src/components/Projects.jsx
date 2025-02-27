import { Link } from "react-router-dom";
import imgTodoVanilla from "../assets/images/project1.png";
import imgTodoReact from "../assets/images/project2.png";

export default function Projects({ projectRef }) {
  return (
    <div id="projects" className="background-alt" ref={projectRef}>
      <h2 className="heading">Projects</h2>
      <div className="container">
        <div className="row">
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
