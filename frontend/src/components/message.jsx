import ReactMarkdown from "react-markdown";
import { useState } from "react";

export default function Message({ msg }) {
  const [copied, setCopied] = useState(false);

  const copyText = () => {
    navigator.clipboard.writeText(msg.text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className={`message ${msg.role}`}>
      <div className="avatar">
        {msg.role === "user" ? "👤" : "🤖"}
      </div>

      <div className="bubble">
        <ReactMarkdown>{msg.text}</ReactMarkdown>

        {msg.role === "ai" && (
          <button onClick={copyText} className="copy-btn">
            {copied ? "Copied!" : "Copy"}
          </button>
        )}
      </div>
    </div>
  );
}