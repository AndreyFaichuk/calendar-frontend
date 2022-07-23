import { useDispatch } from "react-redux";
import { ActionCreatorsMapObject, bindActionCreators } from "redux";

export const useActions = (actions: ActionCreatorsMapObject<object>) => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
