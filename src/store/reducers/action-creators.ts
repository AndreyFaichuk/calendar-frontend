import { AuthActionCreators } from './authentification/action-creators';
import { UserActionCreators } from './user/action-creators';


export const allActionCreators = {
    ...UserActionCreators,
    ...AuthActionCreators
};