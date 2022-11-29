import React, { useContext, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import Loading from "../components/Loading/Loading";
import { api } from "../api/api";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  const [isLoading, setIsLoading] = useState(false);
  const [CurrUser, setCurrUser] = useState();

  // call review api
  // useEffect(() => {
  //   setIsLoading(true);

  //   fetch(`${api}/user/${user?.email}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setCurrUser(data);
  //       setIsLoading(false);
  //     })
  //     .catch((er) => console.error(er));
  // }, [user?.email]);

  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
};
export default PrivateRoutes;
