import styles from '../styles/dashboard.module.scss'

const HeaderBar = () => {
  return (
    <nav className={styles.userBar}>
      <picture>
        <img src="https://i.pravatar.cc/150?u=Kp" alt="User" />
      </picture>
      <i>➕</i>
      <i className={styles.options}>
        🔰
        <ul>
          <li>Configuration</li>
          <li>Logout</li>
        </ul>
      </i>
    </nav>
  );
}

export default HeaderBar;