import {  Link, Outlet, useOutletContext } from 'react-router-dom';
import styles from './styles.module.css'


function Login() {
  // get global user stuff
  const [user, setUser] = useOutletContext();
  
  return (
    <div 
      className={styles.root}
    >
      <Link
        className={styles.logButton}
        to="signin"
      >
        LOGIN
      </Link>
      <Link
        className={styles.regButton}
        to="register"
      >
        Register
      </Link>
      <Outlet context={[user, setUser]}/>
     
   
    </div>
  )
}

export default Login