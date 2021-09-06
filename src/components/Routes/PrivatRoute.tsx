import React from "react";
import { Redirect, Route } from "react-router-dom";

interface Props {
  Component: React.ComponentClass,
  isLoggedIn: boolean,
  path: string, 
  exact: true | undefined
}

export const PrivatRoute: React.FC<Props> = ({Component, isLoggedIn, path, exact}) => {
  return (
    <Route path={path} exact={exact} render={props => 
      isLoggedIn ?
          <Component {...props} />
      : <Redirect to="/" />
    } />
  );
}