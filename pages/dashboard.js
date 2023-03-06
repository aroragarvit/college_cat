import { useContext, useEffect } from "react";
import { AuthContext } from "../context/auth";

export const Dashboard = () => {
  const { loggedIn, setLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    if (!loggedIn) {
      router.push("/");
    }
  }, [loggedIn]);

  return <div>Hello World</div>;
};
