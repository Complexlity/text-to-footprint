import React, { useState } from "react";

export default function FootprintComponent({
  data,
}: {
  data: string | undefined;
}) {
  const [copied, setCopied] = useState(false);

  const footprintCode = `<component footprint="${data}" />`;

  const handleCopy = () => {
    navigator.clipboard.writeText(footprintCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={styles.container}>
      <div style={styles.comment}>// paste into tscircuit</div>
      <div style={styles.codeContainer}>{footprintCode}</div>
      <button onClick={handleCopy} style={styles.button}>
        {copied ? "✅ Copied!" : "📋 Copy"}
      </button>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#f3f4f6",
    borderRadius: "8px",
    padding: "16px",
    fontFamily: "monospace",
    fontSize: "14px",
    marginTop: "4px",
  },
  comment: {
    marginBottom: "8px",
    color: "#4b5563",
  },
  codeContainer: {
    backgroundColor: "white",
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #d1d5db",
    overflow: "auto",
  },
  button: {
    backgroundColor: "#3b82f6",
    color: "white",
    border: "none",
    borderRadius: "4px",
    padding: "8px 12px",
    marginTop: "8px",
    cursor: "pointer",
    transition: "background-color 0.2s",
    fontSize: "14px",
  },
};
