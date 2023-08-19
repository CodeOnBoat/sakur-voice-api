import React from "react";

type OutputProps ={
  output:string
}
export const Output = ({output}:OutputProps) => {
  return (
      <textarea
        className="textarea"
        name="output"
        value={output || ""}
        placeholder="JSON output"
        readOnly
        disabled
      />
  );
};
