import React, { FC, useEffect } from 'react';

import AppRouter from './components/AppRouter';
import AppNavBar from './components/AppNavBar';
import Notification from './controls/Notification';
import { useActions } from './hooks/useActions';
import { UserData } from './models/User';
import { AuthActionCreators } from './store/reducers/authentification/action-creators';

const App: FC = () => {
  const { setUser, setIsAuth } = useActions(AuthActionCreators);

  useEffect(() => {
    if(localStorage.getItem('isAuth')){
      setUser({ username: localStorage.getItem('username' || '') } as UserData)
      setIsAuth(true)
    }
  }, []);
  
  return (
    <React.Fragment>
      <AppNavBar/>
      <AppRouter/>
      <Notification/>
    </React.Fragment>
  )
}

export default App;
