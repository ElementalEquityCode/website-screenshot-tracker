import styles from "./cards-container.module.css";

const CardsContainer = (props) => {
  const { children } = props;
  return <div className={styles.cardsContainer}>{children}</div>;
};

export default CardsContainer;
