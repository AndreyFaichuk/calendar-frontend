import { UserData } from "../../../models/User";
import { UserActions } from "./actions";
import { SetUserInfoAction } from "./types";

export const UserActionCreators = {
  setUser: (user: UserData): SetUserInfoAction => ({
    type: UserActions.SET_USER_INFO,
    payload: user
  })
};
