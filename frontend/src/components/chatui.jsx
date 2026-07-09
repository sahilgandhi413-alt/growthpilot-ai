import { useState, useRef, useEffect } from "react";
import { sendMessage } from "../api";
import Message from "./Message";
import TypingIndicator from "./TypingIndicator";
import "../styles.css";

export default function ChatUI() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const chatRef = useRef(null);

  // Auto scroll
  useEffect(() => {
    chatRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await sendMessage(input);

      const aiMsg = {
        role: "ai",
        text: res.data.reply || "No response",
      };

      setMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "ai", text: "⚠️ Server error" },
      ]);
    }

    setLoading(false);
  };

  const clearChat = () => setMessages([]);

  return (
    <div className="chat-container">
      {/* Header */}
      <div className="chat-header">
        <h2>🤖 AI Copilot</h2>
        <button onClick={clearChat}>Clear</button>
      </div>

      {/* Messages */}
      <div className="chat-box">
        {messages.map((msg, i) => (
          <Message key={i} msg={msg} />
        ))}

        {loading && <TypingIndicator />}
        <div ref={chatRef} />
      </div>

      {/* Input */}
      <div className="chat-input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}