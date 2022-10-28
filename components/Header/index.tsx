import React from 'react'
import { useRouter } from 'next/router'

// Import styles
import styles from './index.module.css'

// Import svg icons
import { BurgerIcon, CartIcon, CloseIcon, Logo, SearchIcon, UserIcon } from '../SvgIcon'

// Import utils
import { headerMenuItem } from '../../utils/mockData'

const Header = () => {
  const currentUrl = useRouter().pathname
  const [toggleSidebarMenu, setToggleSidebarMenu] = React.useState<boolean>(false)

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["container"]}>
        <div className={styles["burger-menu-wrapper"]}>
          <button type="button" className={styles["burger-menu-icon"]} onClick={() => setToggleSidebarMenu(prev => !prev)}>
            {!toggleSidebarMenu ? <BurgerIcon /> : <CloseIcon />}
          </button>
          {toggleSidebarMenu &&
            <div className={styles["sidebar-menu-container"]}>
              <ul className={styles["sidebar-menu"]}>
                {headerMenuItem.map(item => (
                  <li
                    key={item.id}
                    className={styles["sidebar-menu-item"]}
                  >
                    <a href={item.url}>{item.title}</a>
                  </li>
                ))}
              </ul>
              <div className={styles["overlay"]} onClick={() => setToggleSidebarMenu(false)}></div>
            </div>
          }
        </div>
        <div className={styles["logo"]}>
          <a href="/">
            <Logo />
          </a>
        </div>
        <ul className={styles["block-menu"]}>
          {headerMenuItem.map(item => (
            <li
              key={item.id}
              className={
                (currentUrl === item.url)
                  ? `${styles["block-menu-item"]} ${styles["active"]}`
                  : `${styles["block-menu-item"]}`
              }
            >
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
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
    </div>
  )
}

export default Header