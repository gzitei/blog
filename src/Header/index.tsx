import { Link } from "react-router-dom";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.nav}>
          <Link to="/" className={`${styles.title} ${styles.link}`}>
            It Works on My Machine
          </Link>
          <nav className={styles.menu}>
            <ul>
              <li>
                <Link to="/" className={styles.link}>
                  Posts
                </Link>
              </li>
              <li>
                <Link to="/tags" className={styles.link}>
                  Tags
                </Link>
              </li>
              <li>
                <Link to="/about" className={styles.link}>
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
