import React, { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { authRoutes, publicRoutes } from '../../router';
import { RoutesNames } from '../../router/routesNames';

const AppRouter: FC = () => {
    const { isAuth } = useTypedSelector(state => state.authentificationReducer);

    return (
        isAuth ? 
            <Routes>
                {authRoutes.map(route => <Route path={route.path} element={<route.element/>} key={route.path}/>)}
                <Route path="*" element={<Navigate to={RoutesNames.EVENT} replace />} />
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route => <Route path={route.path} element={<route.element/>} key={route.path}/>)} 
                <Route path="*" element={<Navigate to={RoutesNames.LOGIN} replace />} />
            </Routes> 
    )
}

export default AppRouter; 
