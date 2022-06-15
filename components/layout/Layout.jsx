import styles from './Layout.module.css'
import Header from '../Header'

const index = ({children}) => {
  return (
  <> 
  <Header/>
  <main className={styles.mainContainer}>
    {children}
   </main>
  </>
  
  );
}

export default index