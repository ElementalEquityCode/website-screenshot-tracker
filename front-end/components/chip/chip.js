import styles from "./chip.module.css";
import PropTypes from "prop-types";
import Link from "next/link";

const Chip = (props) => {
  const { link } = props;
  const { children } = props;

  if (!link) {
    return (
      <div className={styles.websiteNameContainer}>
        <h3 className={styles.websiteNameNoLink}>{children}</h3>
      </div>
    );
  }
  return (
    <div className={styles.websiteNameContainer}>
      <Link href={link}>
        <h3 className={styles.websiteName}>{children}</h3>
      </Link>
    </div>
  );
};

Chip.propTypes = {
  link: PropTypes.string,
  children: PropTypes.string.isRequired,
};

export default Chip;
