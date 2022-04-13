import styles from "./card.module.css";
import PropTypes from "prop-types";
import Chip from "../chip/chip";
import ElementalWebDesignLogo from "../../assets/elemental-web-design-web-logo.png";
import Link from "next/link";

const Card = (props) => {
  const { logo } = props;
  const { websiteName } = props;
  const { description } = props;
  const { link } = props;

  return (
    <div className={styles.cardContainer}>
      <div className={styles.logoContainer}>
        <img src={logo.src} className={styles.clientWebsiteLogo} />
      </div>
      <div className={styles.infoContainer}>
        <Chip link={link}>{websiteName}</Chip>
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

Card.propTypes = {
  logo: PropTypes.object.isRequired,
  websiteName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Card;
