import { useState } from "react";
import styles from "./screenshots-container.module.css";
import Button from "../button/button";
import ScreenshotCard from "../screenshot-card/screenshot-card";
import axios from "axios";

const ScreenshotsContainer = () => {
  const [screenshots, setScreenshots] = useState(["", "", "", "", "", ""]);
  const [isPerformingRequest, setPerformingRequest] = useState(false);

  const fetchScreenshots = () => {
    setPerformingRequest(true);

    const screenshotsCopy = [];
    for (let i = 0; i < 6; i += 1) {
      axios
        .get("http://localhost:8080/take-screenshot")
        .then((response) => {
          screenshotsCopy[i] = response.data.imageURL;
          if (i === 5) {
            setScreenshots(screenshotsCopy);
            setPerformingRequest(false);
          }
        })
        .catch((error) => {
          console.log(error);
          if (i === 5) {
            setPerformingRequest(false);
          }
        });
    }
  };

  return (
    <div className={styles.screenshotsContainer}>
      <div className={styles.websiteNameContainer}>
        <h2 className={styles.websiteName}>Website Name Here</h2>
        <Button
          onClick={fetchScreenshots}
          setButtonLoading={isPerformingRequest}
        >
          Fetch Screenshots
        </Button>
      </div>
      <div className={styles.gridContainer}>
        <ScreenshotCard imageSource={screenshots[0]} size="fullPage" />
        <ScreenshotCard
          imageSource={screenshots[1]}
          size="width=1080&height=1920"
        />
        <ScreenshotCard
          imageSource={screenshots[2]}
          size="width=1080&height=1200"
        />
        <ScreenshotCard
          imageSource={screenshots[3]}
          size="width=1080&height=800"
        />
        <ScreenshotCard
          imageSource={screenshots[4]}
          size="width=1080&height=500"
        />
        <ScreenshotCard
          imageSource={screenshots[5]}
          size="width=1080&height=350"
        />
      </div>
    </div>
  );
};

export default ScreenshotsContainer;
