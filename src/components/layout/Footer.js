import {FaFacebook, FaInstagram, FaWhatsapp} from 'react-icons/fa';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

function Footer (){
    return(
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li className={styles.item}>
                <Link to='https://www.facebook.com/profile.php?id=100001318108554'><FaFacebook/></Link>    
                </li>
                <li className={styles.item}>
                    <Link to='https://www.instagram.com/personalgsilva/'><FaInstagram/></Link>
                </li>
                <li className={styles.item}>
                   <Link to='https://wa.link/n4g8rh'><FaWhatsapp/></Link> 
                </li>
            </ul>
            <p className={styles.copy_rigth}>
                <span>R RSystems</span>&copy;2023
            </p>
        </footer>
    )
}

export default Footer