import styles from './Sobre.module.css';
import personal from '../../img/personal.jpg'
import LinkButton from '../layout/LinkButton';
function Sobre (){
    return(
        <section className={styles.sobre_container}>
            <h1>
                Gustavo Silva <span>Personal Trainer</span>
            </h1>
                <img src={personal} alt='Personal'/>
                <p>Sobre mim</p>
                <a>E aí, pessoal! Eu sou o Gustavo Silva, seu parceiro nessa jornada incrível rumo a uma vida mais saudável e ativa. Com vasta experiência em treinamento resistido para os objetivos de emagrecimento e hipertrofia, estou comprometido com cada um de vocês a atingir seus objetivos de maneira eficaz e acertiva.

                    Minha abordagem se baseia em treinos personalizados e desafiadores, sempre focando na técnica correta e progressões no tempo certo para garantir resultados seguros e duradouros.

                    Não importa onde você esteja, sempre tenha em mente que seu corpo precisa de exercícios fisicos e estou aqui para te apoiar e te incentivar a alcançar o melhor de si tanto de forma presencial quanto virtual.

                    Então, vamos juntos conquistar nossos objetivos? Estou ansioso para te conhecer e fazer parte da sua  transformação!

                    Me chame no Individual para conversarmos, te aguardo por lá 🏋🏽‍♂💥
                </a>
    <LinkButton to="/contact"text="Começe Agora"/>
        </section>
    )
}

export default Sobre