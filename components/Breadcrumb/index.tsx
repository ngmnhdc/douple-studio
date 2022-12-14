import React from 'react'
import { useRouter } from 'next/router'

// Import styles
import styles from './index.module.css'

const Breadcrumb = () => {
  const router = useRouter()
  const parts = router.asPath.split('/')

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["container"]}>
        <ul className={styles["breadcrumb-list"]}>
          <li className={styles["breadcrumb-item"]}>Home</li>
          {parts.map((item, idx) => (
            item && <li key={idx} className={styles["breadcrumb-item"]}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Breadcrumb