import { useState } from 'react'
import Logo from '../../molecules/Logo'
import SearchForm from '../../molecules/SearchForm'
import VisitorValue from '../../molecules/VisitorValue'
import styles from './index.module.scss'
import PopupCreate from '../PopupCreate'

export default function Header() {
  const [active, setActive] = useState(false);
  return (
    <div className={styles.header}>
        <Logo/>
        <SearchForm setActive={() => setActive(!active)} className={styles.header_center}/>
        <VisitorValue/>
        <PopupCreate active={active} setActive={() => setActive(!active)}/>
    </div>
  )
}
