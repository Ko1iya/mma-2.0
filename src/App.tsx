import { useEffect, useState } from "react"
import styles from "./app.module.scss"
import React from "react"
import { Outlet } from "react-router-dom"
import Branches from "./pages/Branches/Branches"

//------------------------
interface IAppContext {
  location: string
  editLocation: () => void
}

export const AppContext = React.createContext<IAppContext>({
  location: "start",
  editLocation: () => null,
})
//------------------------

export function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  //-----------------------------------------
  // Реализация блока выбора филиала
  const [location, setLocation] = useState("start")

  function handlerChangeLocation(param: string) {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // опционально для плавного скролла
    })
    setLocation(param)
  } // для передачи в компонент Branches

  function editLocation() {
    setLocation("start")
    window.scrollTo({
      top: 0,
      behavior: "smooth", // опционально для плавного скролла
    })
  } // для редактирования location, передается в компонент BackBranches

  //-----------------------------------------

  return (
    <AppContext.Provider value={{ location, editLocation }}>
      <Branches />
      <Outlet />
    </AppContext.Provider>
  )
}

export function Loader() {
  return (
    <div className={styles.app}>
      <div className={styles.loading}>
        <div className={styles.img}></div>
        <div className={styles.loader}>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
        </div>
      </div>
    </div>
  )
}
