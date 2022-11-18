import React from 'react'
import Link from 'next/link'
import { v4 as uuidv4 } from 'uuid'

// Import styles
import styles from '../../styles/CartPage.module.scss'

// Import components
import CartItem from '../../components/CartItem'

// Import contexts
import { CartContext } from '../../contexts/cart'

// Import interfaces
import { ICartItem } from '../../utils/interfaces'

// Import utils
import { formatPrice } from '../../utils'

const Cart = () => {
  const cartContextData = React.useContext(CartContext)

  return (
    <div className={`main-container`}>
      <div className={styles["container"]}>
        <div className={styles["heading"]}>
          <h2 className={styles["heading__text"]}>Shopping cart</h2>
        </div>
        <div className={styles["product-list"]}>
          {cartContextData?.cartItems.map(({ uid, id, name, image, size, color, quantity, price }: ICartItem) => (
            <CartItem
              key={uid}
              uid={uid}
              id={id}
              name={name}
              image={image}
              size={size}
              color={color}
              quantity={quantity}
              price={price}
            />
          ))}
        </div>
        <div className={styles["total-price"]}>
          <div>Total:</div>
          <div>{cartContextData?.totalPrice && formatPrice(cartContextData?.totalPrice)}</div>
        </div>
        <div className={styles["actions-container"]}>
          <Link href="/"><button className={`btn ${styles["back-to-shop"]}`}>Continue shopping</button></Link>
          <button className={`btn btn--primary ${styles["check-out"]}`}>Check out</button>
        </div>
      </div>
    </div >
  )
}

export default Cart