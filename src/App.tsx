import React, { FC } from 'react';
import AppRouter from './components/AppRouter';
import AppNavBar from './components/AppNavBar';

const App: FC = () => {
  return (
    <React.Fragment>
      <AppNavBar/>
      <AppRouter/>
    </React.Fragment>
  )
}

export default App;
