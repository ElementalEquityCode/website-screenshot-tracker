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
  const sizes = [
    "fullPage=true",
    "width=1920&height=1080",
    "width=1200&height=1080",
    "width=880&height=1080",
    "width=500&height=1080",
    "width=350&height=1080",
  ];
  const [isPerformingRequest, setPerformingRequest] = useState(false);

  const fetchScreenshots = () => {
    setPerformingRequest(true);
    const screenshotsCopy = [];

    for (let i = 0; i < 6; i += 1) {
      axios
        .post(`http://localhost:8080/take-screenshot`, {
          size: sizes[i],
          website: homepage,
        })
        .then((response) => {
          console.log(response.data);
          screenshotsCopy[i] = response.data.imageURL;
          if (i === 5) {
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
    }
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
          <ScreenshotCard
            imageSource={screenshots[0] ?? null}
            size="fullPage"
          />
          <ScreenshotCard
            imageSource={screenshots[1] ?? null}
            size="width=1920&height=1080"
          />
          <ScreenshotCard
            imageSource={screenshots[2] ?? null}
            size="width=1200&height=1080"
          />
          <ScreenshotCard
            imageSource={screenshots[3] ?? null}
            size="width=880&height=1080"
          />
          <ScreenshotCard
            imageSource={screenshots[4] ?? null}
            size="width=500&height=1080"
          />
          <ScreenshotCard
            imageSource={screenshots[5] ?? null}
            size="width=350&height=1080"
          />
        </div>
      </div>
    </div>
  );
};

export default ScreenshotsContainer;
