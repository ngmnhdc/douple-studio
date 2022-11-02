import React from 'react'

// Import components
import ProductCard from '../ProductCard'

// Import styles
import styles from './index.module.css'

// Import utils
import { IProduct } from '../../utils/interfaces'

interface ICollection {
  heading: string,
  productList: Array<IProduct>
}

const Collection = ({ heading, productList }: ICollection) => {
  return (
    <div className={styles["container"]}>
      <h2 className={styles["heading"]}>{heading}</h2>
      <div className={styles["product-list"]}>
        {productList.map((product) =>
          <ProductCard
            id={product.id}
            key={product.id}
            name={product.name}
            image={product.image || "https://images.unsplash.com/photo-1621466550398-ac8062907657?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"}
            price={product.price}
            url={product.url}
          />
        )}
      </div>
    </div>
  )
}

export default Collection