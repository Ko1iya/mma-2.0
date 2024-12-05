import styles from "./schedule.module.scss"

interface ScheduleProps {
  handlerSchedule: string[]
}

function Schedule(prop: ScheduleProps) {
  const { handlerSchedule } = prop

  return (
    <div className={styles.schedule}>
      <div className={styles.title}>Расписание занятий</div>
      <div className={styles.verLine}></div>
      <div className={styles.line}>
        <div className={styles.dayWeek}>Пн</div>
        <div className={styles.time}>{handlerSchedule[0]}</div>
      </div>
      <div className={styles.horLine}></div>
      <div className={styles.line}>
        <div className={styles.dayWeek}>Вт</div>
        <div className={styles.time}>{handlerSchedule[1]}</div>
      </div>
      <div className={styles.horLine}></div>
      <div className={styles.line}>
        <div className={styles.dayWeek}>Ср</div>
        <div className={styles.time}>{handlerSchedule[2]}</div>
      </div>
      <div className={styles.horLine}></div>
      <div className={styles.line}>
        <div className={styles.dayWeek}>Чт</div>
        <div className={styles.time}>{handlerSchedule[3]}</div>
      </div>
      <div className={styles.horLine}></div>
      <div className={styles.line}>
        <div className={styles.dayWeek}>Пт</div>
        <div className={styles.time}>{handlerSchedule[4]}</div>
      </div>
      <div className={styles.horLine}></div>
      <div className={styles.line}>
        <div className={styles.dayWeek}>Сб</div>
        <div className={styles.time}>{handlerSchedule[5]}</div>
      </div>
      <div className={styles.horLine}></div>
      <div className={styles.line}>
        <div className={styles.dayWeek}>Вс</div>
        <div className={styles.time}>{handlerSchedule[6]}</div>
      </div>
    </div>
  )
}

export default Schedule
