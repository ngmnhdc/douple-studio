import React from 'react'
import styles from './index.module.css'
import { CartIcon, Logo, SearchIcon, UserIcon } from '../SvgIcon'

const Header = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["logo"]}>
        <Logo />
      </div>
      <ul className={styles["block-menu"]}>
        <li className={`${styles["block-menu-item"]} ${styles["active"]}`}>Home</li>
        <li className={styles["block-menu-item"]}>Top</li>
        <li className={styles["block-menu-item"]}>Bottom</li>
        <li className={styles["block-menu-item"]}>Accessories</li>
        <li className={styles["block-menu-item"]}>Sale</li>
        <li className={styles["block-menu-item"]}>About us</li>
      </ul>
      <ul className={styles["group-action"]}>
        <li className={styles["search-icon"]}>
          <SearchIcon />
        </li>
        <li className={styles["cart-icon"]}>
          <CartIcon />
        </li>
        <li className={styles["user-icon"]}>
          <UserIcon />
        </li>
      </ul>
    </div>
  )
}

export default Header