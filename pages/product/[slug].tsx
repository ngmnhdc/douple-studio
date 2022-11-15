import React from 'react'
import { v4 as uuidv4 } from 'uuid'

// Import styles
import styles from '../../styles/ProductPage.module.css'

// Import components
import Accordion from '../../components/Accordion'
import Collection from '../../components/Collection'

// Import icons
import { HeartIcon } from '../../components/SvgIcon'

// Import interfaces
import { IProduct, IProductDetail } from '../../utils/interfaces'

// Import utils
import { formatPrice } from '../../utils'
import { colorArray, compositionAndCare, socialMediaShare } from '../../utils/data'

// Import fake api
import { getProductDetail, getRandomProductList } from '../api'

// Import context
import useCartContext, { CartContext } from '../../context/cart'

export interface IProductPageProps {
  productDetail: IProductDetail,
  relatedItems: Array<IProduct>,
  recentlyViewed: Array<IProduct>
}

const ProductPage = ({ productDetail, relatedItems, recentlyViewed }: IProductPageProps) => {
  // const cartContextData = React.useContext(CartContext)
  // const { total, products, addToCart, removeFromCart } = useCartContext()
  // console.log(products);

  const handleAddToCart = () => {
    const currentCart = JSON.parse(localStorage.getItem('douple-studio-cart') || '[]')
    currentCart.push(productDetail)
    // console.log(currentCart)
    localStorage.setItem('douple-studio-cart', JSON.stringify(currentCart))
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
              <a key={id} className={styles["color-item"]} style={{ color: `${colorArray[id]}` }} title={name.toLocaleUpperCase()}></a>
            ))}
          </div>
          <select className={`select ${styles["product-size"]}`}>
            <option value="Default" disabled>Choose size</option>
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
            <button className={`btn ${styles["buy-now-button"]}`}>Buy now</button>
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