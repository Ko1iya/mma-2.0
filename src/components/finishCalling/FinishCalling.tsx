import styles from "./finishCalling.module.scss"

interface FinishCallingProps {
  myOnClick?: () => void
}

function FinishCalling(prop: FinishCallingProps) {
  return (
    <div className={styles.finishCalling}>
      <h2 className={styles.title}>Начните тренировки сейчас!</h2>
      <button onClick={prop.myOnClick} className={styles.butCalling}>
        Позвонить тренеру
      </button>
    </div>
  )
}

export default FinishCalling
