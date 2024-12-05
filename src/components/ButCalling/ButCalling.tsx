import styles from "./butCalling.module.scss"

interface ButCallingProps {
  text: string
  myOnClick?: () => void
}

function ButCalling({ text, myOnClick }: ButCallingProps) {
  return (
    <button className={styles.butCalling} onClick={myOnClick}>
      {text}
    </button>
  )
}

export default ButCalling
