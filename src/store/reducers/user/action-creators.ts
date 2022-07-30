import { UserData } from "../../../models/User";
import { UserActions } from "./actions";
import { SetUpdatedInfoAction, SetUserInfoAction, UserState, PostAvatarAction } from "./types";

export const UserActionCreators = {
  setUser: (user: UserData): SetUserInfoAction => ({
    type: UserActions.SET_USER_INFO,
    payload: user
  }),
  updateUser: (user: UserState): SetUpdatedInfoAction => ({
    type: UserActions.UPDATE_USER,
    payload: user
  }),
  postUserAvatar: (avatar: File): PostAvatarAction => ({
    type: UserActions.POST_USER_AVATAR,
    payload: avatar
  })
};
