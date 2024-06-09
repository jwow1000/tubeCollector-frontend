import { verifyUser, getProfile } from "./services/users.js";

function Root() {
  return (
    <div>Root</div>
  )
}

export default Root

// the loader grabbing term and page params
export async function loader( ) {
  try {
    const results = await fetchReleaseMax();
    console.log( "root loader results", results );
    return results;

  } catch (error) {
    return console.error(error);
  }
};