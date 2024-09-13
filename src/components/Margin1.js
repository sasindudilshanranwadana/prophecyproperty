import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Margin1.module.css";

const Margin1 = ({
  className = "",
  propWidth,
  propFlex,
  onLinkContainerClick,
  propBackgroundImage,
  sOLDHref,
}) => {
  const marginStyle = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex,
    };
  }, [propWidth, propFlex]);

  const backgroundStyle = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (
    <div className={[styles.margin, className].join(" ")} style={marginStyle}>
      <div className={styles.container}>
        <div className={styles.link} onClick={onLinkContainerClick}>
          <div className={styles.background} style={backgroundStyle}>
            <div className={styles.background1}>
              <a className={styles.sold} href={sOLDHref} target="_blank">
                SOLD
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Margin1.propTypes = {
  className: PropTypes.string,
  sOLDHref: PropTypes.string.isRequired,

  /** Style props */
  propWidth: PropTypes.any,
  propFlex: PropTypes.any,
  propBackgroundImage: PropTypes.any,

  /** Action props */
  onLinkContainerClick: PropTypes.func,
};

export default Margin1;
