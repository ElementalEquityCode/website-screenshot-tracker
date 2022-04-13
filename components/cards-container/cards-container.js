import styles from "./cards-container.module.css";
import PropTypes from "prop-types";

const CardsContainer = (props) => {
  const { children } = props;
  return <div className={styles.cardsContainer}>{children}</div>;
};

CardsContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default CardsContainer;
