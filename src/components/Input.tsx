import React from "react";

type InputProps = {
  input: string;
  setInput: (arg0: string) => void;
};

export const Input = ({ input, setInput }: InputProps) => {

  return (
      <textarea
        className="textarea"
        name="input"
        value={input || ""}
        onChange={(e)=> setInput(e.target.value)}
        autoFocus
        placeholder="JSON input"

      />
  );
};
