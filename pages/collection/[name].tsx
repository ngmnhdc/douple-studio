import React from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router';

import styles from '../../styles/CollectionPage.module.css'

import ProductCard from '../../components/ProductCard'

import { productList } from '../../utils/mockData'
import Filter from '../../components/Filter';

const Collection: NextPage = () => {
  const collectionName = useRouter().query?.name

  return (
    <div className={`main-container ${styles["container"]}`}>
      <div className={styles["filter-container"]}>
        <Filter />
      </div>
      <div className={styles["list-container"]}>
        <div className={styles["heading"]}>
          <h2 className={styles["collection-name"]}>{collectionName}</h2>
          <p className={styles["items-counter"]}>24 items</p>
        </div>
        <div className={styles["product-list"]}>
          {productList.map((product) =>
            <ProductCard
              id={product.id}
              key={product.id}
              name={product.name}
              image={product.image || "https://images.unsplash.com/photo-1621466550398-ac8062907657?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"}
              price={product.price || 1000000}
            />
          )}
        </div>
      </div>
    </div >
  )
}

export default Collection