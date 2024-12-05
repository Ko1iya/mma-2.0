import MainText from "../MainText/MainText"
import styles from "./trainer.module.scss"

interface TrainerProps {
  children: string
  img: string
  text: string
}

function Trainer(prop: TrainerProps) {
  return (
    <div className={styles.trainer}>
      <MainText
        style={{
          width: "100%",
          paddingLeft: "16px",
          fontWeight: "bold",
          color: "#4f3900",
          background: "#ffdb0057",
        }}
      >
        {prop.children}
      </MainText>
      <img src={prop.img} className={styles.img}></img>
      <div className={styles.text}>{prop.text}</div>
      <div className={styles.decorLine}></div>
    </div>
  )
}

export default Trainer
