import React from 'react'

// Import styles
import styles from '../../styles/ProductPage.module.css'

// Import components
import Accordion from '../../components/Accordion'

// Import icons
import { HeartIcon } from '../../components/SvgIcon'

// Import utils
import { formatPrice } from '../../utils'
import { compositionAndCare, productList, socialMediaShare } from '../../utils/mockData'

const ProductPage = () => {
  const productInfo = productList[0]

  const toggleAccordion = (event: any) => {
    console.log(event)
    console.log(event?.target?.parentElements)
  }

  return (
    <div className={`main-container ${styles["container"]}`}>
      <div className={styles["product-image"]}>
        <div className={styles["image-carousel-wrapper"]}>
          <ul className={styles["image-carousel"]}>
            {productInfo.image_list && productInfo?.image_list.map((item, idx) => (
              <li key={idx} className={styles["image-carousel-item"]}>
                <img src={item} />
              </li>
            ))}
          </ul>
        </div>
        <div className={styles["main-image-wrapper"]}>
          <ul className={styles["main-image"]}>
            {productInfo.image_list && productInfo?.image_list.map((item, idx) => (
              <li key={idx} className={styles["main-image-item"]}>
                <img src={item} />
              </li>
            ))}
          </ul>
        </div>
        {/* <div className={styles["main-image-scroll"]}></div> */}
      </div>
      <div className={styles["product-info"]}>
        <h2 className={styles["product-name"]}>{productInfo.name}</h2>
        <span className={styles["product-price"]}>{formatPrice(productInfo.price)}</span>
        <div className={styles["product-colors"]}>
          <div className={styles["color-item"]} style={{ color: "#75AB79" }}></div>
          <div className={styles["color-item"]} style={{ color: "#DCC77B" }}></div>
          <div className={styles["color-item"]} style={{ color: "#963" }}></div>
          <div className={styles["color-item"]} style={{ color: "#543" }}></div>
          <div className={styles["color-item"]} style={{ color: "#789" }}></div>
          <div className={styles["color-item"]} style={{ color: "#6465B7" }}></div>
          <div className={styles["color-item"]} style={{ color: "#246" }}></div>
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
          <button className={`btn primary-btn ${styles["add-cart-button"]}`}>Add to cart</button>
          <button className={`btn ${styles["buy-now-button"]}`}>Buy now</button>
          <button className={`btn ${styles["favorite-button"]}`}>
            <HeartIcon />
          </button>
        </div>
        <div className={styles["product-details"]}>
          <div className={styles["accordion"]}>
            <Accordion heading="Description" content={productInfo?.description || ""} />
            <Accordion heading="Composition & Care" content={compositionAndCare} />
            <Accordion heading="Share" content={socialMediaShare} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage