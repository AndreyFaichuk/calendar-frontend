import { AuthActions } from './actions';
import { AuthAction, AuthentificationState } from './types';

const initialState: AuthentificationState = {
    isAuth: false,
    isLoading: false,
};

export default function authentification(state = initialState, action: AuthAction): AuthentificationState{
    switch(action.type){
        case AuthActions.SET_AUTH:
            return {...state, isAuth: action.payload, isLoading: false}

        case AuthActions.SET_IS_LOADING:
            return {...state, isLoading: action.payload}

        default: return state
    }

}