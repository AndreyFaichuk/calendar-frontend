import { UserActions } from "./actions";
import { UserAction, UserState } from "./types";

const initialState: UserState = {
  username: '',
  email: '',
  userId: '',
  avatar: '',
  age: 0,
  gender: '',
};

export default function user(state = initialState, action: UserAction): UserState {
  switch (action.type) {
    case UserActions.SET_USER_INFO:
      return {...state, ...action.payload};

    default:
      return state;
  }
}
