import axios from "axios";
import { UserState } from "../store/reducers/user/types";
import { Buffer } from "buffer";

export const updateUser = async (
    payload: UserState
  ) => {
    return await axios({
      method: "put",
      url: "http://localhost:5000/users/edit",
      data: payload,
      withCredentials: true,
    });
  };

export const getUserAvatar = async (
  avatar: string
) => {
  const response = await axios({
    method: "get",
    url: `http://localhost:5000/users/avatar/${avatar}`,
    withCredentials: true,
    responseType: 'arraybuffer'
  });
  const base64ImageString = Buffer.from(response.data, 'binary').toString('base64')
  return "data:image/png;base64," + base64ImageString
};

export const postUserAvatar = async (
  avatar: File
) => {
  const formData = new FormData();
  formData.append("file", avatar);
  return await axios({
    method: "post",
    url: 'http://localhost:5000/users/avatar/',
    data: formData,
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    withCredentials: true,
  });
};