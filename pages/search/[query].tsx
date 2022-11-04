import React from 'react'

// Import styles
import styles from '../../styles/SearchPage.module.css'

// Import components
import Filter from '../../components/Filter';
import ProductCard from '../../components/ProductCard'

// Import utils
import { IProduct } from '../../utils/interfaces';
import { getSearchResults } from '../api';

export interface ISearchPageProps {
  query: string
  productList: Array<IProduct>
}

const SearchPage = ({ query, productList }: ISearchPageProps) => {
  return (
    <div className={`main-container`}>
      <div className={styles["container"]}>
        <div className={styles["filter-container"]}>
          <Filter />
        </div>
        <div className={styles["list-container"]}>
          <div className={styles["heading"]}>
            <h2 className={styles["search-heading"]}>
              Search:
              <span>{` ${query}`}</span>
            </h2>
            <p className={styles["items-counter"]}>{`${productList.length} results`}</p>
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
export default SearchPage

export async function getServerSideProps(context: { params: { query: string } }) {
  const query = context?.params?.query
  const productList = await getSearchResults(context?.params?.query)

  return {
    props: {
      query: query,
      productList: productList
    }
  }
}