import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { cookieStorage } from "../../utils/cookie";

const AuthGuard = ({ children }) => {
  const navigate = useNavigate();
  const user = cookieStorage.getItem("user");

  console.log(user);
  
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  return children;
};

export default AuthGuard;
