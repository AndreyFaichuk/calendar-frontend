import { UserActions } from './actions';
import { UserAction, UserState } from './types';

const initialState: UserState = {
    username: '',
    email: '',
    userId: ''
};

export default function user(state = initialState, action: UserAction): UserState{
    switch(action.type){
        case UserActions.SET_USER_INFO:
            return {
                ...state,
                username: action.payload.username,
                email: action.payload.email,
                userId: action.payload.userId,
            }

        default: return state
    }

}