import { v4 as uuid } from "uuid"
import { useEffect, useRef, useState } from "react"
import MainText from "../MainText/MainText"
import styles from "./aboutUs.module.scss"

interface AboutUsProps {
  children: {
    preText: string
    text: string[]
  }
  title: string
  img: string
  trainer?: boolean
}

function AboutUs(prop: AboutUsProps) {
  const myTextContainer = useRef<HTMLDivElement>(null)
  const myAboutUs = useRef<HTMLDivElement>(null)

  const [stateText, setStateText] = useState(false)
  const [heightText, setHeightText] = useState(
    myTextContainer.current ? myTextContainer.current.offsetHeight + 250 : ""
  )

  const scrollToElement = () => {
    if (myAboutUs.current) {
      myAboutUs.current.scrollIntoView({
        behavior: "smooth", // опционально для плавного скролла
        block: "start", // опционально для позиционирования элемента относительно окна просмотра
      })
    }
  }

  useEffect(
    () =>
      setHeightText((pre) =>
        myTextContainer.current
          ? // ? myTextContainer.current.offsetHeight + 250
            myTextContainer.current.offsetHeight + 250
          : ""
      ),
    [heightText]
  )

  return (
    <div className={styles.aboutUs} ref={myAboutUs}>
      <div
        style={{
          height: `${+heightText > 700 ? +heightText + 0 : +heightText + 70}px`,
        }}
        className={`${styles.aboutContainer} ${
          stateText && styles.aboutContainerOpen
        } ${prop.trainer && styles.aboutContainer__trainer}`}
        onClick={() => {
          setStateText((pre) => !pre)
          setHeightText((pre) =>
            myTextContainer.current ? myTextContainer.current.offsetHeight : ""
          )
          scrollToElement()
        }}
      >
        {/* .imgAboutUsContainer__trainer - означает модификатор тренера для блока About, если при добавление компонента AboutUs указываем параметр trainer
        trainer: true, тогда все модификаторы применяются
         */}
        <div
          className={`${styles.imgAboutUsContainer} ${
            prop.trainer && styles.imgAboutUsContainer__trainer
          }`}
        >
          <img
            className={`${prop.trainer && styles.imgAboutUs__trainer} ${
              styles.imgAboutUs
            }`}
            src={prop.img}
            alt='Кубки'
          />
        </div>
        <h1 className={styles.title}>{prop.title}</h1>
        <div ref={myTextContainer} className={styles.textContainer}>
          {!stateText && (
            <div className={styles.preText}>
              <MainText>{prop.children.preText}</MainText>
            </div>
          )}
          {stateText && (
            <div className={styles.text}>
              {prop.children.text.map((el) => (
                <MainText key={uuid()}>{el}</MainText>
              ))}
            </div>
          )}
        </div>

        {!stateText && <p className={styles.readMore}>Подробнее...</p>}
      </div>
    </div>
  )
}

export default AboutUs
