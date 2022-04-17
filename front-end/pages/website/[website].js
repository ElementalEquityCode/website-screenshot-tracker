import { useEffect, useContext } from "react";
import ScreenshotsContainer from "../../components/screenshots-container/screenshots-container";
import { useRouter } from "next/router";
import Head from "next/head";
import WebsiteContext from "../../contexts/website";

const Website = () => {
  const websiteContext = useContext(WebsiteContext);
  const router = useRouter();
  const { website } = router.query;

  useEffect(() => {
    if (
      !localStorage.getItem("currentWebsiteName") ||
      !localStorage.getItem("websiteHomePage")
    ) {
      router.push("/");
    }

    if (!websiteContext.currentWebsiteName && !websiteContext.websiteHomePage) {
      websiteContext.setNewWebsiteName(
        localStorage.getItem("currentWebsiteName")
      );
      websiteContext.setNewWebsiteHomePage(
        localStorage.getItem("websiteHomePage")
      );
    }
  });

  return (
    <div>
      <Head>
        <title>{website}</title>
      </Head>
      <ScreenshotsContainer />
    </div>
  );
};

export default Website;
