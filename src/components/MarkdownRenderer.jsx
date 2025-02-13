import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "github-markdown-css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MarkdownRenderer = ({ filePath }) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(filePath)
      .then((response) => response.text())
      .then((text) => setContent(text))
      .catch((error) =>
        console.error("Markdown 파일을 불러오는 중 오류 발생:", error)
      );
  }, [filePath]);

  return (
    <>
      <Header />
      <div className="sub-container">
        <div className="markdown-body">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MarkdownRenderer;
