import React from 'react'

// Import styles
import styles from '../../styles/CartPage.module.scss'

// Import icons
import { MinusIcon, PlusIcon, DeleteIcon } from '../../components/SvgIcon'

// Import contexts
import { CartContext } from '../../contexts/cart'

// Import interfaces
import { ICartItem } from '../../utils/interfaces'

// Import utils
import { colorArray, colorNames } from '../../utils/data'
import { formatPrice } from '../../utils'

const CartItem = ({ uid, id, name, image, size, color, quantity, price, total_price }: ICartItem) => {
  const cartContextData = React.useContext(CartContext)
  const [currentQuantity, setCurrentQuantity] = React.useState(quantity)

  const handleDecreaseQuantity = (event: any) => {
    const selectedItemId = event?.target?.dataset.id
      || event?.target?.parentNode?.dataset.id
      || event?.target?.parentNode?.parentNode?.dataset.id

    setCurrentQuantity(currentQuantity => currentQuantity > 1 ? currentQuantity - 1 : currentQuantity)

    let newCartItems = cartContextData?.cartItems.reduce((prev: Array<ICartItem>, curr) => {
      if (curr.uid === selectedItemId) {
        if (curr.quantity > 1) {
          curr.quantity = curr.quantity - 1
          curr.total_price -= Number(curr.price)
        }
      }
      return [...prev, curr]
    }, [])

    // Update cart in local storage
    newCartItems && cartContextData?.setCartItems(newCartItems)
    newCartItems && cartContextData?.setTotalPrice(newCartItems.reduce((prev, item) => (prev + item.total_price), 0))
    localStorage.setItem('douple-studio-cart', JSON.stringify(newCartItems))
  }

  const handleIncreaseQuantity = (event: any) => {
    const selectedItemId = event?.target?.dataset.id
      || event?.target?.parentNode?.dataset.id
      || event?.target?.parentNode?.parentNode?.dataset.id

    setCurrentQuantity(currentQuantity => currentQuantity + 1)

    let newCartItems = cartContextData?.cartItems.reduce((prev: Array<ICartItem>, curr) => {
      if (curr.uid === selectedItemId) {
        curr.quantity = curr.quantity + 1
        curr.total_price += Number(curr.price)
      }
      return [...prev, curr]
    }, [])

    // Update cart in local storage
    newCartItems && cartContextData?.setCartItems(newCartItems)
    newCartItems && cartContextData?.setTotalPrice(newCartItems.reduce((prev, item) => (prev + item.total_price), 0))
    localStorage.setItem('douple-studio-cart', JSON.stringify(newCartItems))
  }

  const handleRemoveCartItem = (event: any) => {
    const removedItemId = event?.target?.dataset.id
      || event?.target?.parentNode?.dataset.id
      || event?.target?.parentNode?.parentNode?.dataset.id

    const newCartItems = cartContextData?.cartItems.filter(item => item.uid !== removedItemId)

    // Update cart in local storage
    newCartItems && cartContextData?.setCartItems(newCartItems)
    localStorage.setItem('douple-studio-cart', JSON.stringify(newCartItems))
  }

  return (
    <div className={styles["product-item"]} id={uid}>
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
        <button
          className={`btn btn--default ${styles["quantity__decrease"]}`}
          data-id={uid}
          onClick={handleDecreaseQuantity}
        >
          <MinusIcon />
        </button>
        <span className={styles["quantity__number"]}>{quantity}</span>
        <button
          className={`btn btn--default ${styles["quantity__increase"]}`}
          data-id={uid}
          onClick={handleIncreaseQuantity}
        >
          <PlusIcon />
        </button>
      </div>
      <div className={styles["product-item__price"]}>{formatPrice(total_price)}</div>
      <div className={styles["product-item__action"]}>
        <button
          className={`btn btn--default ${styles["remove-item"]}`}
          data-id={uid}
          onClick={handleRemoveCartItem}
        >
          <DeleteIcon />
        </button>
      </div>
    </div>
  )
}

export default CartItem