import { useContext } from "react"
import { AppContext } from "../../App"
import styles from "./calling.module.scss"

import { myDataBranches } from "@/data/achievements"

interface CallingProps {
  openModal: () => void
}

function Calling(prop: CallingProps) {
  const { openModal } = prop

  const { location } = useContext(AppContext)

  let hereLocation = myDataBranches[location]

  return (
    <div className={styles.calling}>
      <div className={styles.callingContainer}>
        {myDataBranches[location].trainer.map((el, i) => {
          return (
            <>
              {i > 0 ? " " : <p className={styles.title}>Позвонить тренеру?</p>}
              <p className={styles.title}>Тренер: {`${el}`}</p>
              <p className={styles.title}>
                Номер: {`${hereLocation.number[i]}`}
              </p>

              <div className={styles.buttonContainer}>
                <a
                  href={`${hereLocation && hereLocation.numberRef[i]}`}
                  target='_blank'
                  className={styles.callingBut}
                >
                  Позвонить
                </a>
                <button className={styles.callingBut} onClick={openModal}>
                  Отмена
                </button>
              </div>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default Calling
