import { useContext } from "react"
import { AppContext } from "../../App"
import styles from "./twoGisModal.module.scss"

import { myDataBranches } from "../../data/achievements"

interface TwoGisModalProps {
  openModal: () => void
}

function TwoGisModal(prop: TwoGisModalProps) {
  const { openModal } = prop

  const { location } = useContext(AppContext)

  let hereLocation = myDataBranches[location]

  return (
    <div className={styles.twoGisModal}>
      <div className={styles.twoGisModalContainer}>
        <p className={styles.title}>Перейти в 2ГИС?</p>
        <div className={styles.buttonContainer}>
          <a
            href={`${hereLocation && hereLocation.address}`}
            target='_blank'
            className={styles.twoGisModalBut}
          >
            Перейти
          </a>
          <button className={styles.twoGisModalBut} onClick={openModal}>
            Отмена
          </button>
        </div>
      </div>
    </div>
  )
}

export default TwoGisModal
