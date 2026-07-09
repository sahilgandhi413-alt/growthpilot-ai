import ReactMarkdown from "react-markdown";

export default function Message({ msg }) {
  return (
    <div className={`message ${msg.role}`}>
      <div className="bubble">
        <ReactMarkdown>{msg.text}</ReactMarkdown>
      </div>
    </div>
  );
}