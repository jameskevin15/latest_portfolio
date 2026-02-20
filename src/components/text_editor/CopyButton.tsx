import { Copy, CopyCheck } from "lucide-react";
import React, { useState } from "react";


interface CopyButtonProps {
  item?: string | Record<string, any>;
  className?: string;
  copySize?: number;
  copiedSize?: number;
  classNameCopied?: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({
  item,
  className = "",
  copySize = 20,
  copiedSize = 16,
  classNameCopied = "",
}) => {
  const [copied, setCopied] = useState(false);

  const copyData = async () => {
    if (!item) {
      alert("No data to copy.");
      return;
    }

    try {
      let dataToCopy = "";

      // Handle string or object
      if (typeof item === "string") {
        try {
          const parsed = JSON.parse(item); // try parse JSON string
          dataToCopy = JSON.stringify(parsed, null, 2); // pretty-print
        } catch {
          dataToCopy = item; // raw string if not JSON
        }
      } else if (typeof item === "object") {
        dataToCopy = JSON.stringify(item, null, 2);
      }

      // Clipboard API fallback
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(dataToCopy);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = dataToCopy;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }

      setCopied(true);
      setTimeout(() => setCopied(false), 1000); // 1s feedback
    } catch (err) {
      console.error("Failed to copy data:", err);
      alert("Failed to copy data.");
    }
  };

  return (
    <button
      onClick={copyData}
      className={`flex items-center justify-center !px-3 !py-2 !bg-gray-300 !text-black/80 transition-all duration-150 ${
        copied ? "bg-green-300" : ""
      } ${className} ${copied ? classNameCopied : ""}`}
    >
      {!copied ? <Copy size={copySize} /> : <CopyCheck size={copiedSize} />}
    </button>
  );
};

export default CopyButton;
