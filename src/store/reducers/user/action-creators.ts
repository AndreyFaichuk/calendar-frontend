import { UserData } from "../../../models/User";
import { UserActions } from "./actions";
import { SetUpdatedInfoAction, SetUserInfoAction, UserState } from "./types";

export const UserActionCreators = {
  setUser: (user: UserData): SetUserInfoAction => ({
    type: UserActions.SET_USER_INFO,
    payload: user
  }),
  updateUser: (user: UserState): SetUpdatedInfoAction => ({
    type: UserActions.UPDATE_USER,
    payload: user
  })
};
