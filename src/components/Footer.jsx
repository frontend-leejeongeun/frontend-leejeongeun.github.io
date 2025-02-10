export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // 부드러운 스크롤
    });
  };

  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-sm-5 copyright">
            <p>
              Copyright &copy; <span id="current-year">2025</span> LEE JEONGEUN
            </p>
          </div>
          <div className="col-sm-2 top">
            <span id="to-top" onClick={handleScrollToTop}>
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
                  d="m4.5 15.75 7.5-7.5 7.5 7.5"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
