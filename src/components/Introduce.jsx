import React, { useRef } from "react";
export default function Introduce() {
  // useRef로 #introduce와 #introduce-down을 참조
  const introduceRef = useRef(null);
  const introduceDownRef = useRef(null);

  const handleScrollDown = () => {
    if (introduceRef.current) {
      // introduce 다음 섹션으로 스크롤
      const nextSection = introduceRef.current.nextElementSibling;
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  return (
    <div id="introduce" ref={introduceRef}>
      <div id="introduce-content">
        <div className="mimoticon"></div>
        <h1>Lee Jeongeun</h1>
        <h2>Frontend Engineer</h2>
      </div>

      <div id="introduce-overlay"></div>

      <div
        id="introduce-down"
        ref={introduceDownRef}
        onClick={handleScrollDown}
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </div>
    </div>
  );
}
