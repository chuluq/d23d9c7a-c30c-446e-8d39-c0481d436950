import axios from "axios";

export const API_URL = process.env.REACT_APP_API_URL;
export const API_KEY = process.env.REACT_APP_API_KEY;

const httpRequest = async (method, url, request) => {
  const config = { headers: { "Content-Type": "application/json" } };

  const errorResponseDefault = {
    status: 400,
    message: "Something went wrong",
  };

  let result;
  try {
    const res = await axios[method](url, request, config);

    result = res.data;
  } catch (e) {
    result = e.response?.data || errorResponseDefault;
  }

  return result;
};

export const GET = (url, request) => {
  return httpRequest("get", url, request);
};
