import Link from "next/link"
import { Empty } from 'antd';

// Import styles
import styles from './index.module.scss'

// Import svg icons
import { ReturnIcon } from "../SvgIcon"

const EmptyCart = () => {
  return (
    <div className={styles["container"]}>
      <Empty
        image={Empty.PRESENTED_IMAGE_SIMPLE}
        description="Your cart is empty!"
      />
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