import { useLoaderData } from "react-router-dom";
import { getPlaylist } from "../../services/playlists.js";
import styles from './plistStyles.module.css';

async function loader({params}) {
  const data = await getPlaylist(params.id);
  return data;
}

function Playlist() {
  const load = useLoaderData();
  const tubes = load.playlist.tubes;
  const title = load.playlist.title;
  console.log("loaded playlist", load.playlist.tubes);
  
  return (
    <div className={styles.root}>
      <h1>{title}</h1>
      {
        tubes?.map((item, idx) => (
          <p
            key={`tube-${idx}`}
            className={styles.tube}
            style={{
              'left': `${item.posX * 100}%`,
              'top': `${item.posY * 100}%`
            }}
          > 
            {item.url}
          </p>
        ))
      }
    </div>
  )
}

Playlist.loader = loader;

export default Playlist