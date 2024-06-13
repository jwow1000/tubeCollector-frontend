import { getPlaylists } from "../../services/playlists.js";
import { useLoaderData, Link } from "react-router-dom";

async function loader() {
  const data = await getPlaylists();
  return data;
}

function Home() {
  const plists = useLoaderData();  
  console.log("plistissds", plists)
  return (
    <div>
      {
        plists?.map((item, idx) => (
          <Link
            key={`my-playlists-${idx}`}
            to={`playlists/${item.id}`}
          >
            {item.title}
          </Link>
        ))
      }
    </div>
  )
}

Home.loader = loader;

export default Home