import { useState } from 'react';
import { Link } from 'react-router-dom';
import {FaFacebook, FaInstagram, FaWhatsapp} from 'react-icons/fa';

import styles from './Contact.module.css';

function Contact (){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
  
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Contato</h1>
        <form className={styles.form} onSubmit={() => {}}>
          <input 
            className={styles.input}
            type="text"
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          
          <input 
            className={styles.input}
            type="text"
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
  
          <textarea 
            className={styles.textarea}
            placeholder="Digite sua mensagem..."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
  
          <input className={styles.button} type="submit" value="Enviar" />
        </form>
        <h1>
            Ou
        </h1>
        <p>Entre em contato pelas redes sociais</p>

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
      </div>
    );
}

export default Contact