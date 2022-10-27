import React from 'react'
import styles from './index.module.css'

const categoryList = [
  {
    id: 1,
    name: "top",
    image: "https://firebasestorage.googleapis.com/v0/b/douple-studio.appspot.com/o/banner%2Fcategory-top.png?alt=media&token=bbe46e94-9f99-45a4-994c-f324adb0d59a"
  },
  {
    id: 2,
    name: "accessories",
    image: "https://firebasestorage.googleapis.com/v0/b/douple-studio.appspot.com/o/banner%2Fcategory-accessories.png?alt=media&token=898757dc-d5a0-4e01-913d-37e16731e783"
  },
  {
    id: 3,
    name: "bottom",
    image: "https://firebasestorage.googleapis.com/v0/b/douple-studio.appspot.com/o/banner%2Fcategory-bottom.png?alt=media&token=9621ccbb-4098-44d4-ba83-00bb6e89aa1c"
  }
]

const CategoryGallery = () => {
  return (
    <div className={styles["container"]}>
      {categoryList.map(({ id, name, image }) => (
        <div className={styles["category-item"]} key={id}>
          <div className={styles["category-image"]}>
            <img
              src={image}
              alt={name} />
          </div>
          <div className={styles["category-name"]}>{name}</div>
        </div>
      ))}
    </div>
  )
}

export default CategoryGallery