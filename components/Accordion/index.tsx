import React from 'react'

// Import styles
import styles from './index.module.css'

// Import svg icons
import { PlusIcon, MinusIcon, FacebookIcon, InstagramIcon, TwitterIcon } from '../SvgIcon'

export interface IAccordionProps {
  heading: string,
  content: string
}

const Accordion = ({ heading, content }: IAccordionProps) => {
  const [isToggle, setIsToggle] = React.useState(false)

  return (
    <div className={styles["accordion-item"]}>
      <div
        className={styles["accordion-heading"]}
        onClick={() => setIsToggle(!isToggle)}
      >
        <h3>{heading}</h3>
        <span>
          {isToggle ? <MinusIcon /> : <PlusIcon />}
        </span>
      </div>
      {isToggle && <div className={styles["accordion-content"]} dangerouslySetInnerHTML={{ __html: content }}></div>}
    </div>
  )
}

export default Accordion