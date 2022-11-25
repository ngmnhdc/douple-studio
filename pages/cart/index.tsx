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
import EmptyCart from '../../components/EmptyCart'

const Cart = () => {
  const cartContextData = React.useContext(CartContext)

  return (
    <div className={`main-container`}>
      <div className={styles["container"]}>
        <div className={styles["heading"]}>
          <h2 className={styles["heading__text"]}>Shopping cart</h2>
        </div>
        {cartContextData?.numberOfCartItem
          ? (<>
            <div className={styles["product-list"]}>
              {cartContextData?.cartItems.map(({ uid, id, name, image, size, color, quantity, price, total_price }: ICartItem) => (
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
                  total_price={total_price}
                />
              ))}
            </div>
            <div className={styles["total-price"]}>
              <div>Total:</div>
              <div>{cartContextData?.totalPrice && formatPrice(cartContextData?.totalPrice)}</div>
            </div>
            <div className={styles["actions-container"]}>
              <Link href="/"><button className={`btn ${styles["back-to-shop"]}`}>Continue shopping</button></Link>
              <Link href="/checkout"><button className={`btn btn--primary ${styles["check-out"]}`}>Check out</button></Link>
            </div>
          </>
          ) : (<EmptyCart />)}
      </div>
    </div >
  )
}

export default Cart