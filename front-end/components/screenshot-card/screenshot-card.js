import styles from "./screenshot-card.module.css";
import PropTypes from "prop-types";
import Chip from "../chip/chip";

const ScreenshotCard = (props) => {
  const { imageSource } = props;
  const { size } = props;

  let sizeString = "";

  if (size === "fullPage") {
    sizeString = "Full Page";
  } else if (size === "width=1920&height=1080") {
    sizeString = "1920x1080";
  } else if (size === "width=1200&height=1080") {
    sizeString = "1200x1080";
  } else if (size === "width=880&height=1080") {
    sizeString = "800x1080";
  } else if (size === "width=500&height=1080") {
    sizeString = "500x1080";
  } else if (size === "width=350&height=1080") {
    sizeString = "350x1080";
  }

  return (
    <div className={styles.screenshotCardContainer}>
      <div className={styles.screenshotContainer}>
        {imageSource ? (
          <img className={styles.imageContainer} src={imageSource} />
        ) : (
          <p>No Screenshot</p>
        )}
      </div>
      <Chip>{sizeString}</Chip>
    </div>
  );
};

ScreenshotCard.propTypes = {
  size: PropTypes.string.isRequired,
  imageSource: PropTypes.string,
};

export default ScreenshotCard;
