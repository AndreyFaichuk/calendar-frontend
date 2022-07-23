import { UserData } from "../../../models/User";
import { UserActions } from "./actions";

export interface UserState {
  email?: string;
  userId?: string;
  username: string;
}

export interface SetUserInfoAction {
  type: UserActions.SET_USER_INFO;
  payload: UserData;
}

export type UserAction = SetUserInfoAction;
