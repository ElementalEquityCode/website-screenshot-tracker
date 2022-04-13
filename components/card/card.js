import styles from "./card.module.css";
import ElementalWebDesignLogo from "../../assets/elemental-web-design-web-logo.png";

const Card = (props) => {
  const { logo } = props;
  const { websiteName } = props;
  const { description } = props;

  return (
    <div className={styles.cardContainer}>
      <div className={styles.logoContainer}>
        <img src={logo.src} className={styles.clientWebsiteLogo} />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.websiteNameContainer}>
          <h3 className={styles.websiteName}>{websiteName}</h3>
        </div>
        <p className={styles.description}>{description}</p>
        <div className={styles.companyInfoContainer}>
          <div className={styles.companyLogoImageContainer}>
            <img
              src={ElementalWebDesignLogo.src}
              className={styles.logo}
              width="30"
              height="30"
            />
          </div>
          <a
            className={styles.websiteLink}
            href="https://elementalweb.design/"
            target="_blank"
          >
            <p className={styles.companyInfo}>By: Elemental Web Design</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
