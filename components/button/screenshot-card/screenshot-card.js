import styles from "./screenshot-card.module.css";
import Chip from "../../chip/chip";

const ScreenshotCard = () => {
  return <div className={styles.screenshotCardContainer}><Chip>800x500</Chip></div>;
};

export default ScreenshotCard;
