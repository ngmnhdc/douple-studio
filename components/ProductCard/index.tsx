import React from 'react'
import styles from './index.module.css'
import { formatPrice } from '../../utils'
import IProduct from '../../utils/interfaces'

const ProductCard = ({ id, name, image, price }: IProduct) => {
  return (
    <div className={styles["container"]} key={id}>
      <div className={styles["product-image"]}>
        <img src={image} alt={name} />
      </div>
      <div className={styles["product-info"]}>
        <h3 className={styles["product-name"]}>{name}</h3>
        <p className={styles["product-price"]}>{formatPrice(price)}</p>
      </div>
    </div>
  )
}

export default ProductCard