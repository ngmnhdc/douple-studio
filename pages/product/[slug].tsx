import React from 'react'
import { v4 as uuidv4 } from 'uuid'

// Import styles
import styles from '../../styles/ProductPage.module.css'

// Import components
import Accordion from '../../components/Accordion'
import Collection from '../../components/Collection'

// Import icons
import { HeartIcon } from '../../components/SvgIcon'

// Import contexts
import { CartContext } from '../../contexts/cart'

// Import interfaces
import { ICartItem, IProduct, IProductDetail } from '../../utils/interfaces'

// Import utils
import { formatPrice } from '../../utils'
import { colorArray, compositionAndCare, socialMediaShare } from '../../utils/data'

// Import fake api
import { getProductDetail, getRandomProductList } from '../api'

export interface IProductPageProps {
  productDetail: IProductDetail,
  relatedItems: Array<IProduct>,
  recentlyViewed: Array<IProduct>
}

const ProductPage = ({ productDetail, relatedItems, recentlyViewed }: IProductPageProps) => {
  const cartContextData = React.useContext(CartContext)

  const [color, setColor] = React.useState(productDetail.colors[0].name)
  const [size, setSize] = React.useState("")
  const [quantity, setQuantity] = React.useState(1)

  const handleChangeSize = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSize = event.target.value
    setSize(selectedSize)
  }

  const handleChangeColor = (event: any) => {
    const selectedColor = event.target.title
    setColor(selectedColor)
  }

  const handleAddToCart = () => {
    const uid = uuidv4()
    const { id, name, image, price } = productDetail
    let cart: Array<ICartItem> = cartContextData?.cartItems || []

    // Check existence of item and add it into cart
    let existedItem = cart.find(item => (
      item.id === id && item.color === color && item.size === size
    ));
    if (existedItem) {
      existedItem.quantity += quantity;
    } else {
      (size && color)
        ? cart.push({ uid, id, name, image, size, color, quantity, price })
        : window.alert("Oops! Seems like you forgot to select size or color")
    }

    // Update states
    cartContextData?.setCartItems(cart)
    cartContextData?.setNumberOfCartItem(cart.reduce((prev, item) => (prev + item.quantity), 0))
    cartContextData?.setTotalPrice(cart.reduce((prev, item) => (prev + Number(item.price) * item.quantity), 0))

    // Update local storage
    localStorage.setItem('douple-studio-cart', JSON.stringify(cart))
  }

  return (
    <div className={`main-container`}>
      <div className={styles["container"]}>
        <div className={styles["product-image"]}>
          <div className={styles["image-carousel-wrapper"]}>
            <ul className={styles["image-carousel"]}>
              {productDetail.image_list && productDetail?.image_list.map((item, idx) => (
                <li key={uuidv4()} className={styles["image-carousel-item"]}>
                  <img src={item} />
                </li>
              ))}
            </ul>
          </div>
          <div className={styles["main-image-wrapper"]}>
            <ul className={styles["main-image"]}>
              {productDetail.image_list && productDetail?.image_list.map((item, idx) => (
                <li key={uuidv4()} className={styles["main-image-item"]}>
                  <img src={item} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles["product-info"]}>
          <h2 className={styles["product-name"]}>{productDetail.name}</h2>
          <span className={styles["product-price"]}>{formatPrice(productDetail?.price)}</span>
          <div className={styles["product-colors"]}>
            {productDetail?.colors.map(({ id, name }) => (
              <a
                key={id}
                className={color === name ? `${styles["color-item"]} ${styles["color-item--selected"]}` : `${styles["color-item"]}`}
                style={{ color: `${colorArray[id]}` }}
                title={name}
                onClick={handleChangeColor}
              ></a>
            ))}
          </div>
          <select
            className={`select ${styles["product-size"]}`}
            onChange={handleChangeSize}
            defaultValue="default"
          >
            <option value="default" disabled>Choose size</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
          <p className={styles["size-measurement"]}>See measurement</p>
          <div className={styles["product-actions"]}>
            <button
              className={`btn primary-btn ${styles["add-cart-button"]}`}
              onClick={handleAddToCart}
            >
              Add to cart
            </button>
            <button
              className={`btn ${styles["buy-now-button"]}`}
              onClick={handleAddToCart}
            >
              Buy now
            </button>
            <button className={`btn ${styles["favorite-button"]}`}>
              <HeartIcon />
            </button>
          </div>
          <div className={styles["product-details"]}>
            <div className={styles["accordion"]}>
              <Accordion heading="Description" content={productDetail?.description} />
              <Accordion heading="Composition & Care" content={compositionAndCare} />
              <Accordion heading="Share" content={socialMediaShare} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles["more-product-wrapper"]}>
        <Collection heading="Related Items" productList={relatedItems} />
        <Collection heading="Recently Viewed" productList={recentlyViewed} />
      </div>
    </div>
  )
}

export default ProductPage

export async function getServerSideProps(context: { params: { slug: string } }) {
  const productDetail = await getProductDetail(context?.params?.slug)
  const relatedItems = await getRandomProductList()
  const recentlyViewed = await getRandomProductList()

  return {
    props: {
      productDetail: productDetail[0],
      relatedItems: relatedItems,
      recentlyViewed: recentlyViewed
    }
  }
}