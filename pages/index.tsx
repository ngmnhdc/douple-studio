import React from 'react'

// Import components
import PromotionBanner from '../components/PromotionBanner'
import CategoryGallery from '../components/CategoryGallery'
import Collection from '../components/Collection'

// Import styles
import styles from '../styles/HomePage.module.css'

// Import utils
import { IProduct } from '../utils/interfaces'
import { CartContext } from '../contexts/cart'
import { getRandomProductList } from './api'

export interface IHomePageProps {
  newArrivals: Array<IProduct>,
  bestSeller: Array<IProduct>
}

const HomePage = ({ newArrivals, bestSeller }: IHomePageProps) => {
  const cartContextData = React.useContext(CartContext)

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
        productList={bestSeller}
      />
    </div>
  )
}

export default HomePage

export async function getServerSideProps() {
  const newArrivals = await getRandomProductList()
  const bestSeller = await getRandomProductList()

  return {
    props: {
      newArrivals: newArrivals,
      bestSeller: bestSeller
    }
  }
}
