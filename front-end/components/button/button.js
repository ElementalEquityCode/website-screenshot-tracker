import { useState, useEffect } from "react";
import styles from "./button.module.css";
import PropTypes from "prop-types";
import Lottie from "lottie-react";
import LoadingAnimation from "../../assets/loading-animation.json";

const Button = (props) => {
  const [isLoading, setLoading] = useState(false);
  const { setButtonLoading } = props;
  const { onClick } = props;
  const { children } = props;
  const { disabled } = props;

  const handleButtonClick = () => {
    if (!disabled) {
      if (!isLoading) {
        onClick();
        setLoading(!isLoading);
      }
    }
  };

  useEffect(() => {
    if (!setButtonLoading) {
      setLoading(false);
    }
  });

  return (
    <div
      className={`${styles.buttonContainer} ${
        disabled ? `${styles.disabled}` : null
      }`}
      onClick={handleButtonClick}
    >
      {!isLoading ? (
        <div className={styles.buttonTextContainer}>{children}</div>
      ) : (
        <div className={styles.lottieAnimationContainer}>
          <Lottie
            animationData={LoadingAnimation}
            loop={true}
            autoplay={true}
          />
        </div>
      )}
    </div>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  setButtonLoading: PropTypes.bool,
  disabled: PropTypes.bool.isRequired,
};

export default Button;
