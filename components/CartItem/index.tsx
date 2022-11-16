import React from 'react'

// Import styles
import styles from '../../styles/CartPage.module.scss'

// Import icons
import { MinusIcon, PlusIcon, DeleteIcon } from '../../components/SvgIcon'

// Import interfaces
import { ICart } from '../../utils/interfaces'

// Import utils
import { colorArray, colorNames } from '../../utils/data'
import { formatPrice } from '../../utils'

// export interface ICollectionProps {
//   collectionName: string
//   productList: Array<IProduct>
// }

const CartItem = ({ id, name, image, size, color, quantity, price }: ICart) => {
  return (
    <div className={styles["product-item"]}>
      <div className={styles["product-item__image"]}>
        <img src={image} alt={name} />
      </div>
      <div className={styles["product-item__name"]}>{name}</div>
      <div className={styles["product-item__color"]}>
        <a
          className={styles["color-box"]}
          style={{ color: `${colorArray[colorNames.indexOf(color)]}` }}
          title={color}>
        </a>
      </div>
      <div className={styles["product-item__size"]}>{size}</div>
      <div className={styles["product-item__quantity-control"]}>
        <button className={`btn btn--default ${styles["quantity__decrease"]}`}><MinusIcon /></button>
        <span className={styles["quantity__number"]}>{quantity}</span>
        <button className={`btn btn--default ${styles["quantity__increase"]}`}><PlusIcon /></button>
      </div>
      <div className={styles["product-item__price"]}>{formatPrice(price)}</div>
      <div className={styles["product-item__action"]}>
        <button className={`btn btn--default ${styles["remove-item"]}`}><DeleteIcon /></button>
      </div>
    </div>
  )
}

export default CartItem