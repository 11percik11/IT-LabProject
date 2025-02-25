import Footer from '../../organisms/Footer'
import Header from '../../organisms/Header'
import Main from '../../organisms/Main'
import styles from './index.module.scss';

export default function MainTemplate() {
  return (
    <div  className={styles.mainTemplate}>
        <Header/>
        <Main className={styles.mainTemplate_main}/>
        <Footer/>
    </div>
  )
}
