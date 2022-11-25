import Link from "next/link"

// Import styles
import styles from './index.module.scss'

// Import svg icons
import { ReturnIcon } from "../SvgIcon"

const EmptyCart = () => {
  return (
    <div className={styles["container"]}>
      <p>Your cart is empty!</p>
      <Link href="/">
        <button className={styles["back-to-shop"]}>
          <ReturnIcon />
          Continue shopping
        </button>
      </Link>
    </div>
  )
}

export default EmptyCart