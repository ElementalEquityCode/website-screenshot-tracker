import { useState, useContext } from "react";
import Link from "next/link";
import styles from "./screenshots-container.module.css";
import Button from "../button/button";
import ScreenshotCard from "../screenshot-card/screenshot-card";
import axios from "axios";
import WebsiteContext from "../../contexts/website";

const ScreenshotsContainer = () => {
  const websiteContext = useContext(WebsiteContext);
  const homepage = websiteContext.websiteHomePage;

  const [screenshots, setScreenshots] = useState(["", "", "", "", "", ""]);
  const [screenshotsFetched, setScreenshotsFetched] = useState(false);
  const [isPerformingRequest, setPerformingRequest] = useState(false);

  const sizes = [
    "fullPage=true",
    "width=1920&height=1080",
    "width=1200&height=1080",
    "width=880&height=1080",
    "width=500&height=1080",
    "width=350&height=1080",
  ];

  const fetchScreenshots = () => {
    setPerformingRequest(true);
    const screenshotsCopy = ["", "", "", "", "", ""];

    sizes.forEach((size, i) => {
      axios
        .post(`https://screen-shot-tracker.herokuapp.com/take-screenshot`, {
          size,
          website: homepage,
        })
        .then((response) => {
          screenshotsCopy[i] = response.data.imageURL;

          let wereScreenshotsFetched = true;

          for (let index = 0; index < screenshotsCopy.length; index++) {
            if (!screenshotsCopy[index]) {
              wereScreenshotsFetched = false;
            }
          }
          if (wereScreenshotsFetched) {
            setScreenshots(screenshotsCopy);
            setScreenshotsFetched(true);
            setPerformingRequest(false);
          }
        })
        .catch((error) => {
          console.log(error);
          if (i === 5) {
            setPerformingRequest(false);
          }
        });
    });
  };

  return (
    <div className={styles.mainContainer}>
      <Link href="/">
        <div className={styles.returnArrow}>←</div>
      </Link>
      <div className={styles.screenshotsContainer}>
        <div className={styles.websiteNameContainer}>
          <h2 className={styles.websiteName}>
            {websiteContext.currentWebsiteName ?? null}
          </h2>
          <Button
            onClick={fetchScreenshots}
            setButtonLoading={isPerformingRequest}
            disabled={screenshotsFetched}
          >
            Fetch Screenshots
          </Button>
        </div>
        <div className={styles.gridContainer}>
          {sizes.map((size, index) => {
            return (
              <ScreenshotCard
                key={index}
                imageSource={screenshots[index]}
                size={size}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ScreenshotsContainer;
