import React, { useEffect } from "react";
import RecordImage from "../images/record.png";
import RecordingImage from "../images/loading.gif";
import { useAudioRecorder } from "react-audio-voice-recorder";

type VoiceRecorderProps = {
  setBlob: (blob: Blob | null) => void;
};

export const VoiceRecorder = ({ setBlob }: VoiceRecorderProps) => {
  const { startRecording, stopRecording, recordingBlob, isRecording } =
    useAudioRecorder();
  useEffect(() => {
    if (!recordingBlob) return;
    setBlob(recordingBlob);
  }, [recordingBlob]);

  useEffect(() => {
    setBlob(null);
  }, [isRecording]);
  return (
    <div>
      {isRecording ? (
        <img
          className="record-image"
          src={RecordingImage}
          alt="Recording"
          onClick={() => stopRecording()}
        />
      ) : (
        <img
          src={RecordImage}
          alt="Record"
          onClick={() => startRecording()}
          className="record-image"
        />
      )}
    </div>
  );
};
