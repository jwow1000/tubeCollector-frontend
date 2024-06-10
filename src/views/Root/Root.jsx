import { verifyUser } from "../../services/users.js";
import { redirect, useLoaderData } from "react-router-dom";
import { getTube } from "../../services/tubes.js";

// the loader 
async function loader() {
 
  try {
    const user = await getTube(1);
    return user;
  } catch(error) {
    console.error(error);
    return null;
  }
}

function Root() {
  // get the loader data
  const loaderData = useLoaderData();
  console.log(loaderData);
  return (
    <div>ROOOT</div>
  )
}

Root.loader = loader;  

export default Root;