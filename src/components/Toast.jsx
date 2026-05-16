// components/Toast.jsx
export default function Toast({ msg, show }) {
  return (
    <div className={`s-toast ${show ? "show" : ""}`}>
      <i className="bi bi-check-circle-fill me-2" style={{ color: "var(--teal)" }} />
      {msg}
    </div>
  );
}
