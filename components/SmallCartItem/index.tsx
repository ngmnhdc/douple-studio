import React from 'react'

// Import styles
import styles from './index.module.scss'

// Import interfaces
import { ICartItem } from '../../utils/interfaces'

// Import utils
import { formatPrice } from '../../utils'

const SmallCartItem = ({ uid, image, name, size, color, quantity, price, total_price }: ICartItem) => {
  return (
    <div className={styles["cart-item"]} id={uid}>
      <div className={styles["cart-item__image"]}>
        <img src={image} alt={name} />
      </div>
      <div className={styles["cart-item__details"]}>
        <div className={styles["cart-item__name"]}>{name}</div>
        <div className={styles["cart-item__classify"]}>{`${color} - ${size}`}</div>
        <div className={styles["cart-item__quantity"]}>{`${quantity} x ${price}`}</div>
        <div className={styles["cart-item__price"]}>{formatPrice(total_price)}</div>
      </div>
    </div>
  )
}

export default SmallCartItem