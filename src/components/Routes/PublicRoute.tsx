import React from 'react';
import { Redirect, Route } from 'react-router-dom';

interface Props {
  Component: React.FC,
  isLoggedIn: boolean,
  restricted: boolean,
  path: string, 
  exact: true | undefined
}

export const PublicRoute: React.FC<Props> = ({Component, isLoggedIn, restricted, path, exact}) => {
  return (
    <Route path={path} exact={exact} render={() => 
      isLoggedIn && restricted ?
        <Redirect to="/" />
      : <Component />
    } />
  );
}