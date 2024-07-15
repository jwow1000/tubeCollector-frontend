import { useState, useEffect } from "react";
import { verifyUser } from "../../services/users.js";
import { NavLink, Outlet, useNavigate } from "react-router-dom";


function Root() {
  // define navigate
  const navigate = useNavigate();

  // set user state
  const [user, setUser] = useState({});
  
  // useEffect on mount
  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser();
      user ? setUser(user) : setUser(null);
    };

    fetchUser();
  }, []);


  console.log("user? : ", user.username);

  return (
    <div>
      <p>user: {user.username}</p>
      {
        !user.username &&
          <NavLink to="Login">
            Login Yo!
          </NavLink>  
      }

      <Outlet context={[user, setUser]} />
    </div>
  )
}

export default Root;