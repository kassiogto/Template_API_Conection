import React, { useContext } from 'react';
import AuthContext from '../contexts/auth';

import { Route, Redirect } from 'react-router-dom';

const RouterPrivate = ({ component, ...rest }:any) => {
    const { signed } = useContext(AuthContext); 
    const routeComponent = (props:any) => (
        signed ? 
        React.createElement(component, props) 
        : <Redirect to={{pathname:'/'}}/>
    );
    return <Route { ...rest } render={ routeComponent }/>
};

export default RouterPrivate;