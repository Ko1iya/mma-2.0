import styles from "./butBranche.module.scss"
import { RefObject, useRef } from "react"
interface ButBrancheProps {
  children: string
  id: string
  // changeLocation: (param: string) => void
  className?: string
}

function ButBranche(prop: ButBrancheProps) {
  console.log(`/${prop.id}`)

  return (
    <a className={`${styles.butBranche} ${prop.className}`} href={`/angarsk`}>
      {prop.children}
    </a>
  )
}

export default ButBranche
