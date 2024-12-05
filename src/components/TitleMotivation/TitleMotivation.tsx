import styles from "./titleMotivation.module.scss"

interface TitleMotivationProps {}

function TitleMotivation(prop: TitleMotivationProps) {
  return (
    <div className={styles.titleMotivation}>
      <p className={styles.titleMotivationEl}>Дисциплина.</p>
      <p className={styles.titleMotivationEl}>Сила.</p>
      <p className={styles.titleMotivationEl}>Стойкость.</p>
    </div>
  )
}

export default TitleMotivation
