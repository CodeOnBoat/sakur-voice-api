import axios from "axios";
import FormData from "form-data";

const root = "https://sakurapi.se/retendo-voice/api";

export const sendVoiceMessage = async (voice: Blob, data: {}) => {
  const formData = new FormData();
  formData.append("functionsToCallCollection", data);
  formData.append("file", voice);
  const res = await axios.post(`${root}/voice`, formData, {
    // headers: {
    //   "Content-Type": "multipart/form-data",
    // },
  });
  return res.data;
};
