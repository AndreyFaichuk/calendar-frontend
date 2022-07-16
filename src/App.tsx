import React, { FC } from 'react';
import AppRouter from './components/AppRouter';
import AppNavBar from './components/AppNavBar';
import Notification from './controls/Notification';

const App: FC = () => {
  
  return (
    <React.Fragment>
      <AppNavBar/>
      <AppRouter/>
      <Notification/>
    </React.Fragment>
  )
}

export default App;
