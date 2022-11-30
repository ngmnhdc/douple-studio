import React from 'react'

// Import styles
import styles from './index.module.css'

// Import utils
import { formatPrice } from '../../utils'
import { IProduct } from '../../utils/interfaces'

const ProductCard = ({ id, name, image, price, url }: IProduct) => {
  return (
    <a
      key={id}
      className={styles["container"]}
      title={name}
      href={`/product/${url}`}
    >
      <div className={styles["product-image"]}>
        <img src={image} alt={name} title="Image: pullandbear.com" />
      </div>
      <div className={styles["product-info"]}>
        <h3 className={styles["product-name"]}>{name}</h3>
        <p className={styles["product-price"]}>{formatPrice(price)}</p>
      </div>
    </a>
  )
}

export default ProductCard