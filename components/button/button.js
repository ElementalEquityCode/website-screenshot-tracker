import styles from "./button.module.css";
import PropTypes from "prop-types";

const Button = (props) => {
  const { children } = props;
  return (
    <div className={styles.buttonContainer}>
      <div className={styles.buttonTextContainer}>{children}</div>
    </div>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Button;
