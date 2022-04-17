import ScreenshotsContainer from "../../components/screenshots-container/screenshots-container";
import { useRouter } from "next/router";
import Head from "next/head";

const Website = () => {
  const router = useRouter();
  const { website } = router.query;

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
