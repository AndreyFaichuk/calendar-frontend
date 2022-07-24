import { UserData } from "../../../models/User";
import { UserActions } from "./actions";

export interface UserState {
  email?: string;
  userId?: string;
  username: string;
  avatar?: string;
  age?: number;
  gender?: string;
  data?: any
}

export interface SetUserInfoAction {
  type: UserActions.SET_USER_INFO;
  payload: UserData;
}

export interface SetUpdatedInfoAction {
  type: UserActions.UPDATE_USER;
  payload: UserState;
}

export type UserAction = SetUserInfoAction;
