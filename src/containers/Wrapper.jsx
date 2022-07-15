import styles from '../styles/Home.module.css'

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