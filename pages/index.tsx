import React from 'react'
import type { NextPage } from 'next'

// Import components
import PromotionBanner from '../components/PromotionBanner'
import CategoryGallery from '../components/CategoryGallery'

// Import styles
import styles from '../styles/HomePage.module.css'

const HomePage: NextPage = () => {
  return (
    <div className={styles["container"]}>
      <PromotionBanner />
      <CategoryGallery />
    </div>
  )
}

export default HomePage
