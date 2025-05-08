export default function Experience({ experienceRef }) {
  return (
    <div id="experience" className="background-alt" ref={experienceRef}>
      <h2 className="heading">Experience</h2>
      <div id="experience-timeline">
        <div className="vtimeline-point">
          <div className="vtimeline-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="size-8"
            >
              <path
                fillRule="evenodd"
                d="m7.539 14.841.003.003.002.002a.755.755 0 0 0 .912 0l.002-.002.003-.003.012-.009a5.57 5.57 0 0 0 .19-.153 15.588 15.588 0 0 0 2.046-2.082c1.101-1.362 2.291-3.342 2.291-5.597A5 5 0 0 0 3 7c0 2.255 1.19 4.235 2.292 5.597a15.591 15.591 0 0 0 2.046 2.082 8.916 8.916 0 0 0 .189.153l.012.01ZM8 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="vtimeline-block">
            <span className="vtimeline-date">
              2022 01 – 2024 09
            </span>
            <div className="vtimeline-content">
              <h3>NEXON</h3>
              <h4>Frontend Engineer</h4>
              <p>
                <span className="left">역할</span>
                <span className="right">
                  프론트엔드 엔지니어로 근무
                </span>
              </p>
              <p>
                <span className="left">주요 프로젝트</span>
                <span className="right">
                  나이트워커 인게임 이벤트 프론트엔드개발 담당
                </span>
              </p>
              <p>
                <span className="left">.</span>
                <span className="right">
                  빌딩앤파이터 인게임 이벤트 프론트엔드개발 담당
                </span>
              </p>
              {/* <p>
                <span className="left">.</span>
                <span className="right">
                  넥슨 UI 라이브러리 프론트엔드개발 담당
                </span>
              </p> */}
              <p>
                <span className="left">.</span>
                <span className="right">사내 웹오피스 UI개발 담당</span>
              </p>
            </div>
          </div>
        </div>

        <div className="vtimeline-point">
          <div className="vtimeline-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="size-8"
            >
              <path
                fillRule="evenodd"
                d="m7.539 14.841.003.003.002.002a.755.755 0 0 0 .912 0l.002-.002.003-.003.012-.009a5.57 5.57 0 0 0 .19-.153 15.588 15.588 0 0 0 2.046-2.082c1.101-1.362 2.291-3.342 2.291-5.597A5 5 0 0 0 3 7c0 2.255 1.19 4.235 2.292 5.597a15.591 15.591 0 0 0 2.046 2.082 8.916 8.916 0 0 0 .189.153l.012.01ZM8 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="vtimeline-block">
            <span className="vtimeline-date">2019 10 – 2021 09</span>
            <div className="vtimeline-content">
              <h3>Eland</h3>
              <h4>Frontend Engineer</h4>
              <p>
                <span className="left">역할</span>
                <span className="right">
                  프론트엔드 엔지니어로 근무
                </span>
              </p>
              <p>
                <span className="left">주요 프로젝트</span>
                <span className="right">
                  이랜드몰 프론트엔드개발 유지보수 담당
                </span>
              </p>
              <p>
                <span className="left">.</span>
                <span className="right">이랜드몰 리뉴얼 담당</span>
              </p>
              <p>
                <span className="left">.</span>
                <span className="right">이랜드몰 검색엔진 고도화 작업</span>
              </p>
            </div>
          </div>
        </div>

        <div className="vtimeline-point">
          <div className="vtimeline-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="size-8"
            >
              <path
                fillRule="evenodd"
                d="m7.539 14.841.003.003.002.002a.755.755 0 0 0 .912 0l.002-.002.003-.003.012-.009a5.57 5.57 0 0 0 .19-.153 15.588 15.588 0 0 0 2.046-2.082c1.101-1.362 2.291-3.342 2.291-5.597A5 5 0 0 0 3 7c0 2.255 1.19 4.235 2.292 5.597a15.591 15.591 0 0 0 2.046 2.082 8.916 8.916 0 0 0 .189.153l.012.01ZM8 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="vtimeline-block">
            <span className="vtimeline-date">2015 04 – 2019 06</span>
            <div className="vtimeline-content">
              <h3>Korea Center(현 Connect Wave)</h3>
              <h4>UI Developer</h4>
              <p>
                <span className="left">역할</span>
                <span className="right">
                  UI개발자로 근무
                </span>
              </p>
              <p>
                <span className="left">주요 프로젝트</span>
                <span className="right">메이크샵 UI개발 담당</span>
              </p>
              <p>
                <span className="left">.</span>
                <span className="right">
                  플랫폼기반의 쇼핑몰 구축 업무 담당
                </span>
              </p>
              <p>
                <span className="left">.</span>
                <span className="right">
                  타플랫폼에서 자사플랫폼으로 이관 업무 담당
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="vtimeline-point">
          <div className="vtimeline-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="size-8"
            >
              <path
                fillRule="evenodd"
                d="m7.539 14.841.003.003.002.002a.755.755 0 0 0 .912 0l.002-.002.003-.003.012-.009a5.57 5.57 0 0 0 .19-.153 15.588 15.588 0 0 0 2.046-2.082c1.101-1.362 2.291-3.342 2.291-5.597A5 5 0 0 0 3 7c0 2.255 1.19 4.235 2.292 5.597a15.591 15.591 0 0 0 2.046 2.082 8.916 8.916 0 0 0 .189.153l.012.01ZM8 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="vtimeline-block">
            <span className="vtimeline-date">
              2013 09 – 2014 12
            </span>
            <div className="vtimeline-content">
              <h3>Licom Net</h3>
              <h4>UI Developer</h4>
              <p>
                <span className="left">역할</span>
                <span className="right">
                  UI개발자로 근무
                </span>
              </p>
              <p>
                <span className="left">주요 프로젝트</span>
                <span className="right">
                  포인트리 사이트 UI개발 및 유지보수 담당
                </span>
              </p>
              <p>
                <span className="left">.</span>
                <span className="right">
                  국경없는 의사회 사이트 UI개발 및 유지보수 담당
                </span>
              </p>
              <p>
                <span className="left">.</span>
                <span className="right">
                  각종 신규 사이트 UI개발 및 유지보수 담당
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="vtimeline-point">
          <div className="vtimeline-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="size-8"
            >
              <path
                fillRule="evenodd"
                d="m7.539 14.841.003.003.002.002a.755.755 0 0 0 .912 0l.002-.002.003-.003.012-.009a5.57 5.57 0 0 0 .19-.153 15.588 15.588 0 0 0 2.046-2.082c1.101-1.362 2.291-3.342 2.291-5.597A5 5 0 0 0 3 7c0 2.255 1.19 4.235 2.292 5.597a15.591 15.591 0 0 0 2.046 2.082 8.916 8.916 0 0 0 .189.153l.012.01ZM8 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="vtimeline-block">
            <span className="vtimeline-date">2010 10 – 2013 03</span>
            <div className="vtimeline-content">
              <h3>PT Line</h3>
              <h4>UI Designer</h4>
              <p>
                <span className="left">역할</span>
                <span className="right">
                  UI디자이너로 근무
                </span>
              </p>
              <p>
                <span className="left">주요 프로젝트</span>
                <span className="right">
                  삼성전자 월간발표 PPT 기획 및 UI디자인 담당
                </span>
              </p>
              <p>
                <span className="left">.</span>
                <span className="right">
                  포스코 사내 정기 교육 PPT 기획 및 UI디자인 담당
                </span>
              </p>
              <p>
                <span className="left">.</span>
                <span className="right">
                  한국도로공사 경쟁PT PPT 기획 및 UI디자인 담당
                </span>
              </p>
              <p>
                <span className="left">.</span>
                <span className="right">
                  이외 공공기관 및 기업체 다수 PPT 기획 및 UI디자인 담당
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
