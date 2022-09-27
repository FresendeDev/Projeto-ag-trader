import styles from "./Home.module.css";
import savings from "../../img/savings.svg";
import LinkButton from "../layout/LinkButton";

const Home = () => {
  return (
    <section className={styles.home_container}>
      <h1>
        Bem-Vindo ao <span>AG-Trader</span>
      </h1>
      <p>Comece a gerenciar seus projetos agora</p>
      <LinkButton to="/newproject" text="Criar Projeto Trader" />
      <img src={savings} alt="AG-Trader" />
    </section>
  );
};

export default Home;
