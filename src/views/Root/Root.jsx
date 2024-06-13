import { useState, useEffect } from "react";
import { verifyUser } from "../../services/users.js";
import { Outlet, useNavigate } from "react-router-dom";


function Root() {
  // define navigate
  const navigate = useNavigate();

  // set user state
  const [user, setUser] = useState({});
  
  // useEffect on mount
  useEffect(() => {
    async function verify() {
      const user = await verifyUser();
      if( user ) {
        setUser( user );
        console.log('user: ', user);
        // navigate('home');
      } else {
        console.log("user not verified bitch")
        // navigate("login/signin");
      }
    } 
    verify();
  },[]);




  return (
    <div>ROOOT
      <p>hello: {user.username}</p>
      <Outlet context={[user, setUser]} />
    </div>
  )
}

export default Root;