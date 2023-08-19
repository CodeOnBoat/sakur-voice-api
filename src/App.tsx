import { useState } from "react";
import "./App.css";
import { Input } from "./components/Input";
import { Output } from "./components/Output";
import { VoiceRecorder } from "./components/VoiceRecorder";
import "./App.css";
import { sendVoiceMessage } from "./client/client";

function App() {
  const [input, setInput] = useState("");
  const [blob, setBlob] = useState<Blob | null>(null);
  const [output, setOutput] = useState("");

  const submit = () => {
    sendVoiceMessage(blob!, input).then((res) => {
      setOutput(JSON.stringify(res));
    });
  };

  return (
    <div className="App">
      <h1>Voice Recording API</h1>
      <div className="app-container">
        <Input input={input} setInput={setInput} />
        <VoiceRecorder setBlob={setBlob} />
        <Output output={output} />
      </div>
      {blob && (
        <audio controls>
          <source src={URL.createObjectURL(blob)} />
        </audio>
      )}
      <button
        className="submitButton"
        onClick={submit}
        disabled={blob === null}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
