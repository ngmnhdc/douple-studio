import React from 'react'

// Import styles
import styles from './index.module.css'

// Import utils
import { colorArray, colorNames } from '../../utils/data'

const Filter = () => {
  return (
    <>
      <h2 className={styles["filter-heading"]}>Filters</h2>
      {/* <div className={styles["filter-group"]}>
        <div className={styles["group-heading"]}>
          <h3 className={styles["group-title"]}>Price</h3>
          <span className={styles["group-clear"]}>x</span>
        </div>
        <div className={styles["group-content"]}>
          <div className={styles["slider"]}>
            <div className={styles["progress"]}></div>
          </div>
          <div className={styles["range-input"]}>
            <input type="range" className={`${styles["input"]} ${styles["range-min"]}`} min="0" max="10000" value="2500" step="100" />
            <input type="range" className={`${styles["input"]} ${styles["range-max"]}`} min="0" max="10000" value="7500" step="100" />
          </div>
        </div>
        <div className={styles["price-input"]}>
          <div className={styles["field"]}>
            <span>From</span>
            <input type="number" className={styles["input-min"]} value="2500" />
          </div>
          <div className={styles["separator"]}>-</div>
          <div className={styles["field"]}>
            <span>To</span>
            <input type="number" className={styles["input-max"]} value="7500" />
          </div>
        </div>
      </div> */}
      <div className={styles["filter-group"]}>
        <div className={styles["group-heading"]}>
          <h3 className={styles["group-title"]}>Size</h3>
          <span className={styles["group-clear"]}>x</span>
        </div>
        <div className={`${styles["group-content"]} ${styles["size-filter"]}`}>
          <div className={styles["size-item"]}>XS</div>
          <div className={styles["size-item"]}>S</div>
          <div className={styles["size-item"]}>M</div>
          <div className={styles["size-item"]}>L</div>
          <div className={styles["size-item"]}>XL</div>
        </div>
      </div>
      <div className={styles["filter-group"]}>
        <div className={styles["group-heading"]}>
          <h3 className={styles["group-title"]}>Color</h3>
          <span className={styles["group-clear"]}>x</span>
        </div>
        <div className={`${styles["group-content"]} ${styles["color-filter"]}`}>
          {/* <div className={styles["color-item"]} style={{ color: "#75AB79" }}>
            <CheckCircleIcon />
          </div> */}
          {colorArray.map((color, idx) => (
            <a key={idx} className={styles["color-item"]} style={{ color: `${color}` }} title={`${colorNames[idx]}`}></a>
          ))}
        </div>
      </div>
      <div className={styles["filter-actions"]}>
        <button className="btn">Clear all</button>
        <button className="btn primary-btn">Apply</button>
      </div>
    </>
  )
}

export default Filter