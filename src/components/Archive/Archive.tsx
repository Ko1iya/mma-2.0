import styles from "./archive.module.scss"

interface ArchiveProps {
  mySrc: string
}

function Archive({ mySrc }: ArchiveProps) {
  return (
    <div className={styles.archive}>
      <img
        src={mySrc}
        alt='My'
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    </div>
  )
}

export default Archive
