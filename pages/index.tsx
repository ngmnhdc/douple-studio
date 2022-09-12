import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import PromotionBanner from '../components/PromotionBanner'
import CategoryGallery from '../components/CategoryGallery'
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
