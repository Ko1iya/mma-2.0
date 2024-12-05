import { CiMenuBurger as BurgerIcon } from "react-icons/ci"

import styles from "./butBurger.module.scss"

interface ButBurgerProps {}

function ButBurger(prop: ButBurgerProps) {
  return (
    <button className={styles.butBurger}>
      <BurgerIcon className={styles.burgerIcon} />
    </button>
  )
}

export default ButBurger
