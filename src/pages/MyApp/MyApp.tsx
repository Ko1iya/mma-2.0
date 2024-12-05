import React, { useEffect, useState, useRef } from "react"

import Header from "@/components/Header/Header"
import Main from "@/components/Main/Main"
import styles from "./MyApp.module.scss"
import Icon from "../../../logo.svg"
import logo from "@/img/icon.jpeg"
import Burger from "@/components/Burger/Burger"
import HeaderBig from "@/components/HeaderBig/HeaderBig"
interface MyAppProps {
  location: string
}

function MyApp(prop: MyAppProps) {
  // Отображение при скролле логотипа
  const [myScrollY, setMyScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const countOpacity =
        scrolled < 100 ? 0 : scrolled / 1000 > 0.2 ? 0.2 : scrolled / 1000 - 0.1
      setMyScrollY(countOpacity)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })

  // кнопка отображения бургера
  const [burgerActive, setBurgerActive] = useState(false)

  const handlerBurger = () => {
    setBurgerActive(!burgerActive)
  }

  // Отображение при изменении разрешения экрана хеадера
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800)

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 800)
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  // ссылка для перемещения окна к элементу в header нажимаем кнопку, окно скроллится к элементу в main
  const trainersRef = useRef<HTMLDivElement>(null)

  // type trainerRef

  const scrollToElementMenu = () => {
    if (trainersRef.current) {
      trainersRef.current.scrollIntoView({
        behavior: "smooth", // опционально для плавного скролла
        block: "start", // опционально для позиционирования элемента относительно окна просмотра
      })
    }
  }

  return (
    <div className={styles.myApp}>
      <Burger
        handlerBurger={handlerBurger}
        burgerActive={burgerActive}
      ></Burger>
      <Icon className={styles.img} style={{ opacity: `${myScrollY}` }} />
      {isMobile && (
        <Header location={prop.location} handlerBurger={handlerBurger} />
      )}
      {!isMobile && (
        <HeaderBig
          location={prop.location}
          handlerBurger={handlerBurger}
          scrollToElementMenu={scrollToElementMenu}
        />
      )}

      {!isMobile && (
        <div className={styles.logo}>
          <img src={logo} alt='Лого' />
        </div>
      )}

      <Main location={prop.location} trainersRef={trainersRef} />
      <div className={styles.footer}></div>
    </div>
  )
}

export default MyApp
