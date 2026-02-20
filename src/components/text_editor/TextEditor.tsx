import React, { useCallback, useRef, useState } from "react";
import Editor from "@monaco-editor/react";
import CopyButton from "./CopyButton";


interface TextEditorProps {
  text: string;
  setText: (value: string) => void;
  language?: string; // any Monaco-supported language
  setParsed?: (value: any) => void; // parsed object for JSON
  height?: number | string;
  width?: number | string;
  readOnly?: boolean;
}

const TextEditor: React.FC<TextEditorProps> = ({
  text,
  setText,
  language = "plaintext",
  setParsed,
  height = 300,
  width = "100%",
  readOnly = false,
}) => {
  const [fontSize, setFontSize] = useState(14);
  const [error, setError] = useState<string | null>(null);
  const editorRef = useRef<any>(null);

  // Font zoom shortcuts
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.ctrlKey && e.key === "=") {
      e.preventDefault();
      setFontSize((prev) => Math.min(prev + 1, 40));
    }
    if (e.ctrlKey && e.key === "-") {
      e.preventDefault();
      setFontSize((prev) => Math.max(prev - 1, 8));
    }
    if (e.ctrlKey && e.key === "0") {
      e.preventDefault();
      setFontSize(14);
    }
  }, []);

  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Parse content if possible
  const parseText = (value: string) => {
    if (!value.trim()) {
      setError(null);
      setParsed?.(null);
      return;
    }

    if (language === "json") {
      try {
        const parsed = JSON.parse(value);
        setError(null);
        setParsed?.(parsed);
      } catch (e: any) {
        setError(e.message);
        setParsed?.(null);
      }
    } else {
      // For other languages, we don't parse, just clear error
      setError(null);
      setParsed?.(null);
    }
  };

  const handleEditorChange = (value?: string) => {
    const newValue = value || "";
    setText(newValue);
    parseText(newValue);
  };

  const handleEditorDidMount = (editor: any, monaco: any) => {
    editorRef.current = editor;

    // Enable JSON validation if language is JSON
    if (language === "json") {
      monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
        validate: true,
        allowComments: false,
      });
    }

    editor.updateOptions({
      minimap: { enabled: true },
      fontSize: fontSize,
      lineNumbers: "on",
      renderWhitespace: "selection",
      folding: true,
      bracketPairColorization: { enabled: true },
      formatOnPaste: true,
      formatOnType: true,
    });
  };

  return (
    <div className="relative w-full mx-auto bg-white">
      <div className="absolute top-2 right-4 z-50">
        <CopyButton
          item={text}
          copySize={15}
          copiedSize={10}
          classNameCopied="!px-[15px] !py-[10px]"
        />
      </div>

      <Editor
        height={height}
        width={width}
        language={language}
        value={text}
        onChange={handleEditorChange}
        onMount={handleEditorDidMount}
        theme="vs-dark"
        options={{
          readOnly: readOnly,
          domReadOnly: readOnly,
          padding: { top: 10 },
          selectOnLineNumbers: true,
          automaticLayout: true,
          minimap: { enabled: false },
          fontSize: fontSize,
          wordWrap: "off",
          lineNumbers: "on",
          renderWhitespace: "selection",
          folding: true,
          bracketPairColorization: { enabled: true },
          formatOnPaste: true,
          formatOnType: true,
          scrollBeyondLastLine: false,
          smoothScrolling: true,
          cursorBlinking: "smooth",
          renderLineHighlight: "all",
          scrollbar: {
            vertical: "visible",
            horizontal: "visible",
          },
        }}
      />

      {error && (
        <div className="text-red-500 text-sm mt-1">{error}</div>
      )}
    </div>
  );
};

export default TextEditor;
