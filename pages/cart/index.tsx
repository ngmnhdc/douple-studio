import React from 'react'
import Link from 'next/link'
import { v4 as uuidv4 } from 'uuid'

// Import styles
import styles from '../../styles/CartPage.module.scss'

// Import components
import CartItem from '../../components/CartItem'

// Import interfaces
import { ICart } from '../../utils/interfaces'

// Import utils
import { formatPrice } from '../../utils'

const Cart = () => {
  const [cart, setCart] = React.useState<Array<ICart>>([])
  const [totalPrice, setTotalPrice] = React.useState<string>("")

  React.useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('douple-studio-cart') || '[]'))
  }, [])

  React.useEffect(() => {
    const total = cart.reduce((total, item) => {
      total += Number(item.price)
      return total
    }, 0)
    setTotalPrice(formatPrice(`${total}`))
  }, [cart])

  return (
    <div className={`main-container`}>
      <div className={styles["container"]}>
        <div className={styles["heading"]}>
          <h2 className={styles["heading__text"]}>Shopping cart</h2>
        </div>
        <div className={styles["product-list"]}>
          {cart.map(({ id, name, image, size, color, quantity, price }: ICart) => (
            <CartItem
              key={uuidv4()}
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
          <div>{totalPrice}</div>
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