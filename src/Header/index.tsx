import { Link } from "react-router-dom";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.nav}>
          <Link to="/blog" className={`${styles.title} ${styles.link}`}>
            It Works on My Machine
          </Link>
          <nav className={styles.menu}>
            <ul>
              <li>
                <Link to="/blog" className={styles.link}>
                  Posts
                </Link>
              </li>
              <li>
                <Link to="/blog/tags" className={styles.link}>
                  Tags
                </Link>
              </li>
              <li>
                <Link to="/blog/about" className={styles.link}>
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
