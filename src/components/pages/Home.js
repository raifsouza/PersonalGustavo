import styles from './Home.module.css';
import foto1 from '../../img/1.jpg';
import foto2 from '../../img/2.jpg';
import foto9 from '../../img/9.jpg';
import foto5 from '../../img/5.jpg';
import foto6 from '../../img/6.jpg';
import foto13 from '../../img/13.jpg';
import LinkButton from '../layout/LinkButton';

function Home (){
    return(
        <section className={styles.home_container}>
            <h1>
                    Gustavo Silva
            <span>Personal Trainer</span>
            </h1>
            <p>Construa hoje seu futuro de qualidade</p>
            <div className={styles.image_wrapper}>
                <div className={styles.img_container}>
                    <img src={foto1} alt="foto1" />
                </div>
                <div className={styles.img_container}>
                    <img src={foto2} alt="foto2" />
                </div>
                <div className={styles.img_container}>
                    <img src={foto9} alt="foto9" />
                </div>
                <div className={styles.img_container}>
                    <img src={foto5} alt="foto5" />
                </div>
                <div className={styles.img_container}>
                    <img src={foto6} alt="foto6" />
                </div>
                <div className={styles.img_container}>
                    <img src={foto13} alt="foto13" />
                </div>
            </div>
           <LinkButton to="/contact"text="Começe Agora"/>
        </section>
    )
}

export default Home