import React, { FC } from 'react';

import AppRouter from '../components/AppRouter';
import Layout from '../components/Layout';

const AuthLayout: FC = () => {

  return (
      <Layout>
        <AppRouter/>
      </Layout>
  )
}

export default AuthLayout;
