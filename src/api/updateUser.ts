import axios from "axios";
import { UserState } from "../store/reducers/user/types";

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