import { Link } from "react-router-dom"
import Container from "./Container"
import styles from './Navbar.module.css'
import logo from '../../img/Logo.png'

function Navbar(){
    return(
        <nav className={styles.navbar}>
        <Container>
            <Link to='/PersonalGustavo/'><img src={logo} alt="Personal"></img></Link>
           <ul className={styles.list}>
            <li className={styles.item}>
                <Link to='/PersonalGustavo/'>Home</Link>
            </li>
            <li className={styles.item}>
                <Link to ='/contact'>Contatos</Link>
            </li>
            <li className={styles.item}>
                <Link to='/sobre'>Sobre</Link>
            </li>
           </ul>
        </Container>
      </nav>
    )
}

export default Navbar
