import styles from "./screenshot-card.module.css";
import PropTypes from "prop-types";
import Chip from "../chip/chip";

const ScreenshotCard = (props) => {
  const { size } = props;

  let sizeString = "";

  if (size === "fullPage") {
    sizeString = "Full Page";
  } else if (size === "width=1080&height=1920") {
    sizeString = "1920x1080";
  } else if (size === "width=1080&height=1200") {
    sizeString = "1200x1080";
  } else if (size === "width=1080&height=800") {
    sizeString = "800x1080";
  } else if (size === "width=1080&height=500") {
    sizeString = "500x1080";
  } else if (size === "width=1080&height=350") {
    sizeString = "350x1080";
  }

  return (
    <div className={styles.screenshotCardContainer}>
      <div className={styles.screenshotContainer}>Here</div>
      <Chip>{sizeString}</Chip>
    </div>
  );
};

ScreenshotCard.propTypes = {
  size: PropTypes.string.isRequired,
};

export default ScreenshotCard;
