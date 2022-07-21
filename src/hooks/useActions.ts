import { useDispatch } from 'react-redux';
import { AnyAction, bindActionCreators } from 'redux';

export const useActions = (actions: any) => {
    const dispatch = useDispatch();
    return bindActionCreators(actions, dispatch)
}