import React, { FC, useEffect } from 'react';
import AppRouter from './components/AppRouter';
import AppNavBar from './components/AppNavBar';
import Notification from './controls/Notification';
import { useActions } from './hooks/useActions';
import { User } from './models/User';

const App: FC = () => {
  const { setUser, setIsAuth } = useActions();

  useEffect(() => {
    if(localStorage.getItem('isAuth')){
      setUser({username: localStorage.getItem('username' || '')} as User)
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
