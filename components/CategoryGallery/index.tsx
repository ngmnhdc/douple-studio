import React from 'react'
import styles from './index.module.css'

// Import utils
import { categoryList } from '../../utils/mockData'

const CategoryGallery = () => {
  return (
    <div className={styles["container"]}>
      {categoryList.map(({ id, name, image }) => (
        <a className={styles["category-item"]} key={id} href={`/collection/${name}`}>
          <div className={styles["category-image"]}>
            <img
              src={image}
              alt={name} />
          </div>
          <div className={styles["category-name"]}>{name}</div>
        </a>
      ))}
    </div>
  )
}

export default CategoryGallery