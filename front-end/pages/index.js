import Head from "next/head";
import CardsContainer from "../components/cards-container/cards-container";
import Card from "../components/card/card";
import ValenciaTorresLawLogo from "../assets/valencia-torres-law-website-snapshot.jpeg";
import DoralTitleGroupLogo from "../assets/doral-title-group-website-snapshot.jpeg";
import JemimahWeiLogo from "../assets/jemma-wei-website-snapshot.jpeg";

const websiteData = [
  {
    logo: ValenciaTorresLawLogo,
    websiteName: "Valencia & Torres Law",
    description:
      "Valencia & Torres Law Doral, located in Doral, Florida, provides the highest-quality and cost-effective legal representation for our clients in the fields of business and corporate law, family law, personal injury, and title and closing transactions.",
    link: "/website/valencia-and-torres-law/",
    homepage: "valenciatorreslaw.com",
  },
  {
    logo: DoralTitleGroupLogo,
    websiteName: "Doral Title Group",
    description:
      "Doral Title Group is an attorney-staffed and owned Florida Title Insurance Company and Escrow Agency. The firm handles Florida escrow and real estate closing transactions, issue Florida title insurance policies, Florida title commitments, and title searches throughout the entire State. The firm's top market in Florida is Miami-Dade County, with the top city being Doral.",
    link: "/website/doral-title-group/",
    homepage: "doraltitlegroup.com",
  },
  {
    logo: JemimahWeiLogo,
    websiteName: "Jemimah Wei",
    description:
      "Born and raised in Singapore, Jemimah is currently based between Singapore and New York. She was recently named a 2022-4 Stegner Fellow at Stanford University, a 2020 Felipe P. De Alba Fellow at Columbia University, and is a Francine Ringold Award for New Writers honouree. Her fiction has been nominated for the Pushcart Prize and Best of the Net anthologies, received support from Singapore’s National Arts Council, and appeared in Narrative, Nimrod, and CRAFT Literary, amongst others. Presently a columnist for No Contact Magazine and a submissions editor for SmokeLong Quarterly, Jemimah is at work on a novel and three story collections.",
    link: "/website/jemimah-wei/",
    homepage: "jemmawei.com",
  },
];

const Home = () => {
  return (
    <div>
      <Head>
        <title>Website Screenshot Tracker</title>
      </Head>
      <CardsContainer>
        {websiteData.map((website) => {
          return (
            <Card
              logo={website.logo}
              websiteName={website.websiteName}
              description={website.description}
              link={website.link}
              key={website.websiteName}
              homepage={website.homepage}
            />
          );
        })}
      </CardsContainer>
    </div>
  );
};

export default Home;
