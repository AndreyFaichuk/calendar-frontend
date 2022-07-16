import { User } from '../../../models/User';
import { UserActions } from './actions';
import { UserAction, UserState } from './types';

const initialState: UserState = {
    username: '',
    email: ''
};

export default function user(state = initialState, action: UserAction): UserState{
    switch(action.type){
        case UserActions.SET_USER_INFO:
            return {
                ...state,
                username: action.payload.username,
                email: action.payload.email
            }

        default: return state
    }

}