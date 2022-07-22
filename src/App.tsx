import React, { FC, useEffect } from 'react';

import AppRouter from './components/AppRouter';
import AppNavBar from './components/AppNavBar';
import Notification from './controls/Notification';
import { useActions } from './hooks/useActions';
import { AuthActionCreators } from './store/reducers/authentification/action-creators';
import Cookies from 'universal-cookie';
import AuthLayout from './layout/AuthLayout';
import { useTypedSelector } from './hooks/useTypedSelector';

const cookies = new Cookies();

const App: FC = () => {
  const { verifySession } = useActions(AuthActionCreators);
  const { isAuth } = useTypedSelector(state => state.authentification);
  const cookie = cookies.get('connect.sid')

  useEffect(() => {
    if(cookie){
      verifySession()
    }
  }, []);
  
  return (
    <React.Fragment>
      <AppNavBar/>
      { isAuth ? <AuthLayout/> : <AppRouter/> }
      <Notification/>
    </React.Fragment>
  )
}

export default App;
