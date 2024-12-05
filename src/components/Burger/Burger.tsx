import styles from "./burger.module.scss"
import ExitBurg from "../../img/exitBurg.svg"
import PhoneCalling from "../../img/phoneСalling.svg"
import { useState, useEffect } from "react"
interface BurgerProps {
  handlerBurger: () => void
  burgerActive: boolean
}

function Burger(prop: BurgerProps) {
  // how delete listener in containerBurger

  const catchListener = (event: any) => {
    if (
      event.target.className ===
      `${styles.burger} ${prop.burgerActive ? styles.burgerActive : ""}`
    ) {
      prop.handlerBurger()
    }
  }

  return (
    <div
      className={`${styles.burger} ${
        prop.burgerActive ? styles.burgerActive : ""
      }`}
      onClick={catchListener}
    >
      <div className={styles.containerBurger}>
        <div className={styles.headerBurger}>
          <button className={styles.exitBurger} onClick={prop.handlerBurger}>
            <ExitBurg className={styles.exitImg} />
          </button>
          <a href='tel: +795000000' className={styles.exitBurger}>
            +795000000 Рустам Одинаев
            <PhoneCalling className={styles.exitImg} />
          </a>
        </div>

        <ul className={styles.menuBurger}>
          <li>Акция!</li>
          <li>Цены</li>
          <li>Расписание занятий</li>
          <li>Тренеры</li>
        </ul>
      </div>
    </div>
  )
}

export default Burger
