import { useState } from 'react';
// Import Custom Hooks
import { useSessionUser } from 'hooks/useSessionUser';
import { logut } from 'services/supabase';
import styles from '../styles/dashboard.module.scss'

const HeaderBar = () => {
  const { userSession, setUserSession } = useSessionUser();
  const [viewMenu, setViewMenu] = useState(false);

  const handleClickViewMenu = () => {
    setViewMenu(!viewMenu);
  }

  const handleLogout = () => {
    logut();
    setUserSession({});
  }

  return (
    <nav className={styles.userBar}>
      <picture>
        <img src={userSession.avatar} alt={userSession.userName} />
        <p>{userSession.userName}</p>
      </picture>
      <i>➕</i>
      <div>
        <button
          onClick={handleClickViewMenu}
          className={`
            ${styles.options}
            ${ viewMenu && (styles.active) }
            `}>
          🔰
          <ul>
            <li>Configuration</li>
            <li
              onClick={handleLogout}>
                Logout
            </li>
          </ul>
        </button>
      </div>
    </nav>
  );
}

export default HeaderBar;