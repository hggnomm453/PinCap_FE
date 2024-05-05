import axios from "axios";

const baseUrl = "http://localhost:81";

export const getMedia = async () => {
  const token = localStorage.getItem("token");

  const config = {
    method: "get",
    url: `${baseUrl}/api/medias`,
    headers: {
      'Authorization': `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios(config);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const createMedia = async (request: any) => {
  const token = localStorage.getItem("token");
  const config = {
    method: "post",
    url: `${baseUrl}/api/medias`,
    headers: {
      'Authorization': `Bearer ${token}`,
      // "Content-Type": "application/json",
      "Content-Type": "multipart/form-data",
    },
    data: request,
  };
  try {
    const res = await axios(config);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const getDetailMedia = async (id: any) => {
  const token = localStorage.getItem("token");
  const config = {
    method: "get",
    url: `${baseUrl}/api/medias/${id}`,
    headers: {
      // 'Authorization': `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios(config);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
