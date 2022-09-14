import React from 'react'
import type { NextPage } from 'next'

// Import components
import PromotionBanner from '../components/PromotionBanner'
import CategoryGallery from '../components/CategoryGallery'
import Collection from '../components/Collection'

// Import styles
import styles from '../styles/HomePage.module.css'

// Import utils
import { productList } from '../utils/mockData'
import IProduct from '../utils/interfaces'

const newArrivals: Array<IProduct> = productList.slice(0, 4)

const HomePage: NextPage = () => {
  return (
    <div className={styles["container"]}>
      <PromotionBanner />
      <CategoryGallery />
      <Collection
        heading="New Arrivals"
        productList={newArrivals}
      />
      <Collection
        heading="Best Seller"
        productList={newArrivals}
      />
    </div>
  )
}

export default HomePage
