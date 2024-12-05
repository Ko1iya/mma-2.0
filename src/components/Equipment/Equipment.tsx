import styles from "./equipment.module.scss"
import u1 from "../../img/equipment/1.png"
import u2 from "../../img/equipment/2.png"
import u3 from "../../img/equipment/3.png"
import u4 from "../../img/equipment/4.png"
import u5 from "../../img/equipment/5.png"
import u6 from "../../img/equipment/6.png"
import u7 from "../../img/equipment/7.png"

interface EquipmentProps {}

function Equipment(prop: EquipmentProps) {
  return (
    <div className={styles.equipment}>
      <h1 className={styles.titleEquipment}>Что потребуется для тренировок:</h1>
      <div className={styles.equipmentContainer}>
        <div className={styles.imgContainer}>
          <p className={styles.nameEquipment}>Самбовки (на мягкой подошве)</p>
          <img
            className={styles.img}
            src={u1}
            alt='Самбовки (на мягкой подошве)'
          />
        </div>
        <div className={styles.imgContainer}>
          <p className={styles.nameEquipment}>
            Лапы для работы над ударной техникой
          </p>
          <img
            className={styles.img}
            src={u2}
            alt='Лапы для работы над ударной техникой'
          />
        </div>
        <div className={styles.imgContainer}>
          <p className={styles.nameEquipment}>Капа</p>
          <img className={styles.img} src={u3} alt='Капа' />
        </div>
        <div className={styles.imgContainer}>
          <p className={styles.nameEquipment}>
            Перчатки для рукопашного боя. 6-9 лет - 8 унций; 10-17 лет - 10
            унций; 18 и старше-12 унций. (красные, синие)
          </p>
          <img
            className={styles.img}
            src={u4}
            alt='Перчатки доя рукопашного боя (6-9лет- 8 унций; 10-17лет-10 унций; 18 и старше-12 унций) (красные, синие)'
          />
        </div>
        <div className={styles.imgContainer}>
          <p className={styles.nameEquipment}>
            Шлем боксерский (для детей до 12 лет, шлем закрытый) (красный,
            синий){" "}
          </p>
          <img
            className={styles.img}
            src={u5}
            alt='Шлем боксерский (для детей до 12 лет, шлем закрытый) (красный, синий) '
          />
        </div>
        <div className={styles.imgContainer}>
          <p className={styles.nameEquipment}>
            Кимоно для рукопашного боя с прорезями для пояса (красное, синее,
            белое)
          </p>
          <img
            className={styles.img}
            src={u6}
            alt='Кимоно для рукопашного боя с прорезями для пояса (красное, синее, белое)'
          />
        </div>
        <div className={styles.imgContainer}>
          <p className={styles.nameEquipment}>Накладки для защиты голени</p>
          <img
            className={styles.img}
            src={u7}
            alt='накладки для защиты голени'
          />
        </div>
      </div>
    </div>
  )
}

export default Equipment
