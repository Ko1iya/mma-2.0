import styles from "./headerBig.module.scss"

import logo from "../../img/logo3.png"
import BackBranches from "../BackBranches/BackBranches"
import { AppContext } from "../../App"
import { useContext } from "react"
import PhoneCalling from "../../img/phoneСalling.svg"

interface HeaderBigProps {
  location: string
  handlerBurger: () => void
  scrollToElementMenu: () => void
}

function HeaderBig(prop: HeaderBigProps) {
  const { location, scrollToElementMenu } = prop

  const { editLocation } = useContext(AppContext)

  return (
    <header className={styles.headerBig}>
      <div className={styles.containerHeaderBig}>
        <BackBranches editLocation={editLocation} value={location} />

        <ul className={styles.menu}>
          <li>Акция!</li>
          <li>Цены</li>
          <li>Расписание занятий</li>
          <li onClick={scrollToElementMenu}>Тренеры</li>
          <li>
            <a href='tel: +795000000' className={styles.number}>
              +795000000 Рустам Одинаев
              <PhoneCalling className={styles.phone} />
            </a>
          </li>
        </ul>

        <img className={styles.logo} src={logo} alt='Эмблема клуба' />
      </div>
    </header>
  )
}

export default HeaderBig
