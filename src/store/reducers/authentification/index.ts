import { AuthActions } from './actions';
import { AuthAction, AuthentificationState } from './types';

const initialState: AuthentificationState = {
    isAuth: false
};

export default function authentificationReducer(state = initialState, action: AuthAction): AuthentificationState{
    switch(action.type){
        case AuthActions.SET_AUTH:
            return {...state, isAuth: action.payload}


        default: return state
    }

};