import React from 'react'

// Import styles
import styles from '../../styles/CollectionPage.module.css'

// Import components
import Filter from '../../components/Filter';
import ProductCard from '../../components/ProductCard'

// Import utils
import { IProduct } from '../../utils/interfaces';
import { getCollectionList } from '../api';

export interface ICollectionProps {
  collectionName: string
  productList: Array<IProduct>
}

const Collection = ({ collectionName, productList }: ICollectionProps) => {

  return (
    <div className={`main-container`}>
      <div className={styles["container"]}>
        <div className={styles["filter-container"]}>
          <Filter />
        </div>
        <div className={styles["list-container"]}>
          <div className={styles["heading"]}>
            <h2 className={styles["collection-name"]}>{collectionName}</h2>
            <p className={styles["items-counter"]}>24 items</p>
          </div>
          <div className={styles["product-list"]}>
            {productList.map((item: IProduct) =>
              <ProductCard
                id={item.id}
                key={item.id}
                name={item.name}
                image={item.image || "https://images.unsplash.com/photo-1621466550398-ac8062907657?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"}
                price={item.price}
                url={item.url} />
            )}
          </div>
        </div>
      </div>
    </div >
  )
}
export default Collection

export async function getServerSideProps(context: { params: { name: string } }) {
  const collectionName = context?.params?.name
  const productList = await getCollectionList(context?.params?.name)

  return {
    props: {
      collectionName: collectionName,
      productList: productList
    }
  }
}