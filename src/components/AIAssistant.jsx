// components/AIAssistant.jsx
import { useState } from "react";
import { askClaude } from "../api";



const SUGGESTION_CHIPS = [
  "Outfit ideas for a summer wedding",
  "What's trending in fashion right now?",
  "Best accessories under $100?",
  "How to style oversized pieces?",
];

export default function AIAssistant() {
  const [reply, setReply]     = useState("");
  const [loading, setLoading] = useState(false);
  const [asked, setAsked]     = useState(false);

  const ask = async (question) => {
    setLoading(true);
    setAsked(true);
    setReply("");
    const result = await askClaude(
      question,
      "You are a warm, stylish fashion assistant for BLOSSOM., a premium fashion brand. Give helpful style advice in 2-3 sentences max."
    );
    setReply(result);
    setLoading(false);
  };

  return (
    <div className="ai-panel">
      <div className="ai-panel-title">
        <i className="bi bi-stars" /> AI Style Advisor
      </div>
      <p className="ai-panel-sub">
        Ask our AI for personalized fashion advice — tap a suggestion below:
      </p>

      {/* Suggestion chips */}
      <div className="mb-1">
        {SUGGESTION_CHIPS.map(chip => (
          <button key={chip} className="ai-chip" onClick={() => ask(chip)}>
            {chip}
          </button>
        ))}
      </div>

      {/* Response */}
      {loading && (
        <div className="ai-response">
          <i className="bi bi-hourglass-split me-2" />Crafting your style tip…
        </div>
      )}
      {!loading && asked && reply && (
        <div className="ai-response">{reply}</div>
      )}
    </div>
  );
}
