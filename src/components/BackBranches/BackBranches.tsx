import styles from "./backBranches.module.scss"
import ButBackToBranches from "../../img/ButBackToBranches.svg"

interface BackBranchesProps {
  value: string | null
  editLocation: () => void
}

function BackBranches(prop: BackBranchesProps) {
  const { value, editLocation } = prop

  return (
    <button className={styles.backBranches} onClick={() => editLocation()}>
      <ButBackToBranches className={styles.butBackToBranches} />
    </button>
  )
}

export default BackBranches
