import styles from "./screenshots-container.module.css";
import Button from "../button/button";
import ScreenshotCard from "../screenshot-card/screenshot-card";

const ScreenshotsContainer = () => {
  return (
    <div className={styles.screenshotsContainer}>
      <div className={styles.websiteNameContainer}>
        <h2 className={styles.websiteName}>Valencia & Torres Law</h2>
        <Button>Fetch Screenshots</Button>
      </div>
      <div className={styles.gridContainer}>
        <ScreenshotCard size="fullPage" />
        <ScreenshotCard size="width=1080&height=1920" />
        <ScreenshotCard size="width=1080&height=1200" />
        <ScreenshotCard size="width=1080&height=800" />
        <ScreenshotCard size="width=1080&height=500" />
        <ScreenshotCard size="width=1080&height=350" />
      </div>
    </div>
  );
};

export default ScreenshotsContainer;
