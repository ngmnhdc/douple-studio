import React from 'react'

// Import styles
import styles from '../../styles/CartPage.module.scss'

// Import icons
import { MinusIcon, PlusIcon, DeleteIcon } from '../../components/SvgIcon'

// Import utils
import { colorArray, productList } from '../../utils/data'
import { formatPrice } from '../../utils'

// export interface ICollectionProps {
//   collectionName: string
//   productList: Array<IProduct>
// }

const Cart = () => {
  const product = productList[2]
  const products = productList.slice(1, 3)
  // console.log(products)

  return (
    <div className={`main-container`}>
      <div className={styles["container"]}>
        <div className={styles["heading"]}>
          <h2 className={styles["heading__text"]}>Shopping cart</h2>
        </div>
        <div className={styles["product-list"]}>
          {products.map(product => (
            <div className={styles["product-item"]}>
              <div className={styles["product-item__image"]}>
                <img src={product.image} alt={product.name} />
              </div>
              <div className={styles["product-item__name"]}>{product.name}</div>
              <div className={styles["product-item__color"]}>
                <a
                  className={styles["color-box"]}
                  style={{ color: `${colorArray[product.colors[0].id]}` }}
                  title={product.colors[0].name.toLocaleUpperCase()}>
                </a>
              </div>
              <div className={styles["product-item__size"]}>M</div>
              <div className={styles["product-item__quantity-control"]}>
                <button className={`btn btn--default ${styles["quantity__decrease"]}`}><MinusIcon /></button>
                <span className={styles["quantity__number"]}>1</span>
                <button className={`btn btn--default ${styles["quantity__increase"]}`}><PlusIcon /></button>
              </div>
              <div className={styles["product-item__price"]}>{formatPrice(product.price)}</div>
              <div className={styles["product-item__action"]}>
                <button className={`btn btn--default ${styles["remove-item"]}`}><DeleteIcon /></button>
              </div>
            </div>
          ))}
        </div>
        <div className={styles["total-price"]}>
          <div>Total:</div>
          <div>{formatPrice('1098000')}</div>
        </div>
        <div className={styles["actions-container"]}>
          <a href="/"><button className={`btn ${styles["back-to-shop"]}`}>Continue shopping</button></a>
          <button className={`btn btn--primary ${styles["check-out"]}`}>Check out</button>
        </div>
      </div>
    </div >
  )
}
export default Cart

// export async function getServerSideProps(context: { params: { name: string } }) {
//   const collectionName = context?.params?.name
//   const productList = await getCollectionList(context?.params?.name)

//   return {
//     props: {
//       collectionName: collectionName,
//       productList: productList
//     }
//   }
// }