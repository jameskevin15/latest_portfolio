"use client";

import React from "react";
import TextEditor from "@/components/text_editor/TextEditor";

const page = () => {
  const [text, setText] = React.useState("");
  return (
    <div>
      <TextEditor text={text} setText={setText} language="json" height="90vh" />
    </div>
  );
};

export default page;
