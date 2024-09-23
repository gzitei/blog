import BlogLink from "../BlogLink";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.nav}>
          <BlogLink to="/" className={`${styles.title} ${styles.link}`}>
            It Works on My Machine
          </BlogLink>
          <nav className={styles.menu}>
            <ul>
              <li>
                <BlogLink to="/" className={styles.link}>
                  Posts
                </BlogLink>
              </li>
              <li>
                <BlogLink to="/tags" className={styles.link}>
                  Tags
                </BlogLink>
              </li>
              <li>
                <BlogLink to="/about" className={styles.link}>
                  About
                </BlogLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
