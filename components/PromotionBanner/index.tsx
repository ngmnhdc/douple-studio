import React from 'react'
import styles from './index.module.css'

interface IProps { }

const PromotionBanner = (props: IProps) => {
  return (
    <div className={styles["container"]}>
      <img
        className={styles["banner-image"]}
        src="https://firebasestorage.googleapis.com/v0/b/douple-studio.appspot.com/o/banner%2F2022-winter-collection.png?alt=media&token=77bc9f2a-79b6-4835-b48c-6fa3e72e9d4e"
        alt="2022 Winter Collection" />
      <div className={styles["banner-details"]}>
        <h2 className={styles["banner-title"]}>2022 Winter Collection</h2>
        <p className={styles["banner-description"]}>Pre-order now for 15% discount</p>
        <button className={`btn ${styles["banner-button"]}`}>Explore now</button>
      </div>
    </div>
  )
}

export default PromotionBanner