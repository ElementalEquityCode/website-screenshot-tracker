import styles from "./chip.module.css";
import PropTypes from "prop-types";
import Link from "next/link";

const Chip = (props) => {
  const { link } = props;
  const { children } = props;
  const { handleClick } = props;

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
        {handleClick ? (
          <h3 className={styles.websiteName} onClick={handleClick}>
            {children}
          </h3>
        ) : (
          <h3 className={styles.websiteName}>{children}</h3>
        )}
      </Link>
    </div>
  );
};

Chip.propTypes = {
  link: PropTypes.string,
  children: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};

export default Chip;
