import { useContext } from "react"
import { AppContext } from "../../App"
import styles from "./gallery.module.scss"
import { myDataBranches } from "@/data/achievements"

interface GalleryProps {}

function Gallery(prop: GalleryProps) {
  const { location } = useContext(AppContext)

  const hereLocation = myDataBranches[location]
  // не работает useContext

  return (
    <div className={styles.gallery}>
      <div className={styles.title}>Фото зала и тренировочного процесса:</div>
      {hereLocation.gallery &&
        hereLocation.gallery.map((el) => {
          return <img src={el} className={styles.image} key={el}></img>
        })}
    </div>
  )
}

export default Gallery
