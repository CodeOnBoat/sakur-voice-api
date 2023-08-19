import axios from "axios";
import FormData from "form-data";

const root = "https://sakurapi.se/retendo-voice/api";

export const sendVoiceMessage = async (voice: Blob, data: {}) => {
  const formData = new FormData();
  formData.append("functionsToCallCollection", JSON.stringify(data));
  formData.append("file", voice,{
    filename: 'voice.mp4',
    contentType: 'audio/mp4', 
  });
  console.log(voice);
  console.log(formData);
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  };
  const res = await axios.post(`${root}/voice`, formData, config);
  return res.data;
};
