import React from 'react'
import Link from 'next/link'

// Import styles
import styles from '../../styles/CheckoutPage.module.scss'

// Import components
import SmallCartItem from '../../components/SmallCartItem'

// Import contexts
import { CartContext } from '../../contexts/cart'

// Import utils
import { formatPrice } from '../../utils'

const Checkout = () => {
  const cartContextData = React.useContext(CartContext)
  const [paymentMethod, setPaymentMethod] = React.useState("")

  const handleSelectPaymentMethod = (event: React.ChangeEvent<HTMLInputElement>) => {
    const payment_method = event.target.value
    setPaymentMethod(payment_method)
  }

  const handleOrderComplete = () => {
    cartContextData?.setCartItems([])
    cartContextData?.setNumberOfCartItem(0)
    // Update local storage
    localStorage.setItem('douple-studio-cart', JSON.stringify([]))
    window.alert("Order complete!")
  }

  return (
    <div className={`main-container`}>
      <div className={styles["container"]}>
        <div className={styles["heading"]}>
          <h2 className={styles["heading__text"]}>Checkout</h2>
        </div>
        <div className={styles["container-inner"]}>
          <div className={styles["checkout-summary"]}>
            <div className={styles["shipping-information"]}>
              <h2 className={styles["sub-heading"]}>Shipping Information</h2>
              <div className={styles["input-item"]}>
                <label className={styles["label"]}>Full Name</label>
                <input type="text" className={styles["input"]} placeholder="Eg: Nguyen Minh Duc" />
              </div>
              <div className={styles["input-item"]}>
                <label className={styles["label"]}>Email</label>
                <input type="text" className={styles["input"]} placeholder="Eg: example@email.com" />
              </div>
              <div className={styles["input-item"]}>
                <label className={styles["label"]}>Phone</label>
                {/* <div className={styles["phone-input"]}>
                  <select
                    className={styles["dropdown"]}
                    name="country-code"
                    id="country-code"
                    defaultValue="+84"
                  >
                    {countryCodes.map(({ name, dial_code, code }) => (
                      <option key={code} value={dial_code}>{`${name} (${dial_code})`}</option>
                    ))}
                  </select>
                </div> */}
                <input type="text" className={styles["input"]} placeholder="Your phone number" />
              </div>
              <div className={styles["input-item"]}>
                <label className={styles["label"]}>Address</label>
                <input type="text" className={`${styles["input"]} ${styles["address-input"]}`} placeholder="Your address" />
              </div>
              <div className={styles["input-item"]}>
                <label className={styles["label"]}>Notes (optional)</label>
                <textarea className={styles["text-area"]} rows={2} />
              </div>
            </div>
            <div className={styles["payment-method"]}>
              <h2 className={styles["sub-heading"]}>Payment Method</h2>
              <div className={styles["payment-method__list"]}>
                <div className={styles["payment-method__item"]}>
                  <div className={styles["payment-method__label"]}>
                    <input type="radio"
                      value="cod"
                      checked={paymentMethod === "cod"}
                      onChange={handleSelectPaymentMethod} />
                    <label className={styles["label"]}>Cash on delivery (COD)</label>
                  </div>
                </div>
                <div className={styles["payment-method__item"]}>
                  <div className={styles["payment-method__label"]}>
                    <input type="radio"
                      value="bank-transfer"
                      checked={paymentMethod === "bank-transfer"}
                      onChange={handleSelectPaymentMethod} />
                    <label className={styles["label"]}>Transfer via bank</label>
                  </div>
                  {(paymentMethod === "bank-transfer") &&
                    <div className={styles["payment-method__content"]}>
                      <p>The content of the transfer please fill out the syntax: <strong>"Phone number - Full name"</strong></p>
                      <p>After the transaction confirmed successfully. DOUPLE will contact again during office hours, up to no more than 12 hours. Please pay attention to the phone to confirm the order.</p>
                      <p>Sincerely thank you for trusting and ordering at DOUPLE!</p>
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>
          <div className={styles["shopping-cart"]}>
            <h2 className={styles["sub-heading"]}>Cart</h2>
            <div className={styles["cart-item-list"]}>
              {cartContextData?.cartItems?.map(({ uid, id, image, name, size, color, quantity, price, total_price }) => (
                <SmallCartItem
                  uid={uid}
                  id={id}
                  image={image}
                  name={name}
                  size={size}
                  color={color}
                  quantity={quantity}
                  price={price}
                  total_price={total_price} />
              ))}
            </div>
            <div className={styles["total-price-container"]}>
              <div className={styles["sub-total"]}>
                <p>Sub Total</p>
                <p>{cartContextData?.totalPrice && formatPrice(cartContextData?.totalPrice)}</p>
              </div>
              <div className={styles["shipping"]}>
                <p>Shipping</p>
                <p>{0}</p>
              </div>
              <div className={styles["discount"]}>
                <p>Discount</p>
                <p>- 0</p>
              </div>
              <div className={styles["total"]}>
                <p>Total</p>
                <p>{cartContextData?.totalPrice && formatPrice(cartContextData?.totalPrice)}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["actions"]}>
          <Link href="/cart"><button className={`btn ${styles["back-to-cart"]}`}>Back to cart</button></Link>
          <button
            className={`btn btn--primary ${styles["order-complete"]}`}
            onClick={handleOrderComplete}
          >
            Order Complete
          </button>
        </div>
      </div>
    </div >
  )
}

export default Checkout