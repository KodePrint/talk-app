import { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import { supabase, logut } from 'services/supabase';
import Image from 'next/image'
// Import Custom Hooks

import styles from '../styles/dashboard.module.scss'
import { getSupabaseUser } from 'services/get-auth-user';

const HeaderBar = () => {
  const [viewMenu, setViewMenu] = useState(false);
  const [session, setSession] = useState({});
  const router = useRouter();
  
  const handleClickViewMenu = () => {
    setViewMenu(!viewMenu);
  }
  
  const handleLogout = () => {
    logut()
    return router.push('/')
  }

  useEffect(() => {
    setSession(getSupabaseUser())
  }, []);

  return (
    <nav className={styles.userBar}>
      <picture>
        <img src={session.avatar} alt={session.userName} />
        <p>{session.userName}</p>
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