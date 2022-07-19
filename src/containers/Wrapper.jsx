import styles from '../styles/Wraper.module.scss'

const Wrapper = ({children}) => {
  return (
    <>
      <main className={styles.main}>
        {children}
      </main>
    </>
  );
}

export default Wrapper;