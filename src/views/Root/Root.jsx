import { useState, useEffect } from "react";
import { verifyUser } from "../../services/users.js";
import { Outlet, useNavigate } from "react-router-dom";


function Root() {
  // define navigate
  const navigate = useNavigate();

  // set user state
  const [user, setUser] = useState({
    username: "",
    email: ""
  });
  
  // useEffect on mount
  useEffect(() => {
    async function verify() {
      const user = verifyUser();
      if( user.value ) {
        setUser( user );
        console.log('user: ', user);
      } else {
        navigate("login");
      }
    } 
    verify();
  },[]);

  console.log("look at the loader data". loaderData)



  return (
    <div>ROOOT
      <p>hello: {user.username}</p>
      <Outlet context={[user, setUser]} />
    </div>
  )
}

export default Root;