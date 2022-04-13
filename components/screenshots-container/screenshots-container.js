import styles from "./screenshots-container.module.css";
import Button from "../button/button";
import ScreenshotCard from "../button/screenshot-card/screenshot-card";

const ScreenshotsContainer = () => {
  return (
    <div className={styles.screenshotsContainer}>
      <div className={styles.websiteNameContainer}>
        <h2 className={styles.websiteName}>Valencia & Torres Law</h2>
        <Button>Fetch Screenshots</Button>
      </div>
      <div className={styles.gridContainer}>
        <ScreenshotCard />
        <ScreenshotCard />
        <ScreenshotCard />
      </div>
    </div>
  );
};

export default ScreenshotsContainer;
