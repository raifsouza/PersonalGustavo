import { Link } from "react-router-dom"
import Container from "./Container"
import styles from './Navbar.module.css'
import logo from '../../img/Logo.png'

function Navbar(){
    return(
        <nav className={styles.navbar}>
        <Container>
            <Link to='/PersonalGustavo/home'><img src={logo} alt="Personal"></img></Link>
           <ul className={styles.list}>
            <li className={styles.item}>
                <Link to='/PersonalGustavo/home'>Home</Link>
            </li>
            <li className={styles.item}>
                <Link to ='/PersonalGustavo/contact'>Contatos</Link>
            </li>
            <li className={styles.item}>
                <Link to='/PersonalGustavo/sobre'>Sobre</Link>
            </li>
           </ul>
        </Container>
      </nav>
    )
}

export default Navbar
