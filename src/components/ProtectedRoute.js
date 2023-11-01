import React from "react";
import { Route, Redirect } from "react-router-dom";
import { UserInfoContext } from "../contexts/UserInfoContext";

function ProtectedRoute({ children, ...props }) {
  const { isLoggedIn } = React.useContext(UserInfoContext);
  return (
    <Route {...props}>{isLoggedIn ? children : <Redirect to="/" />}</Route>
  );
}
export default ProtectedRoute;
