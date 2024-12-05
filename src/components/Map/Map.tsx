import styles from "./map.module.scss"
import KudaMap from "../../img/KudaMap.png"
import { myDataBranches } from "../../data/achievements"

interface Iaddresses {
  [key: string]: string
}
const locationMap: Iaddresses = {
  angarsk: myDataBranches.angarsk.map,
  meget: myDataBranches.meget.map,
  kuda: myDataBranches.kuda.map,
  zima: myDataBranches.zima.map,
  urik: myDataBranches.urik.map,
}

const addresses: Iaddresses = {
  angarsk: myDataBranches.angarsk.name,
  meget: myDataBranches.meget.name,
  kuda: myDataBranches.kuda.name,
  zima: myDataBranches.zima.name,
  urik: myDataBranches.urik.name,
}

interface MapProps {
  location: string
  openModal: () => void
}

function Map(prop: MapProps) {
  const { location, openModal } = prop

  const text = `Мы находимся по адресу ${location ? addresses[location] : null}`

  return (
    <div className={styles.map} onClick={() => openModal()}>
      <p className={styles.titleMap}>{text}</p>
      <img
        src={location ? locationMap[location] : ""}
        alt='Карта'
        className={styles.kudaMap}
      />
      <p className={styles.showGIS}>Показать в 2ГИС</p>
    </div>
  )
}

export default Map
