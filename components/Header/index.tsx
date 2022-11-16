import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

// Import styles
import styles from './index.module.scss'

// Import svg icons
import { BurgerIcon, CartIcon, CloseIcon, Logo, SearchIcon, UserIcon } from '../SvgIcon'

// Import interfaces
import { ICart } from '../../utils/interfaces'

// Import utils
import { headerMenuItem } from '../../utils/data'

const Header = () => {
  const router = useRouter()
  const currentUrl = router.asPath

  const [toggleSidebarMenu, setToggleSidebarMenu] = React.useState<boolean>(false)
  const [toggleSearch, setToggleSearch] = React.useState<boolean>(false)
  const [searchQuery, setSearchQuery] = React.useState<string>("")

  const [cart, setCart] = React.useState<Array<ICart>>([])
  const [numberOfCartItem, setNumberOfCartItem] = React.useState<number>(cart.length)

  React.useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('douple-studio-cart') || '[]'))
  }, [])

  React.useEffect(() => {
    setNumberOfCartItem(cart.length)
  }, [cart])

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
                    <Link href={item.url}>{item.title}</Link>
                  </li>
                ))}
              </ul>
              <div className={styles["overlay"]} onClick={() => setToggleSidebarMenu(false)}></div>
            </div>
          }
        </div>
        <div className={styles["logo"]}>
          {/* <a href="/"> */}
          <Logo />
          {/* </a> */}
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
              <Link href={item.url}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <ul className={styles["group-action"]}>
          <li className={styles["search-icon"]} onClick={() => setToggleSearch(true)}>
            {toggleSearch
              ? (<div className={styles["search-input"]}>
                <input
                  id="search-input"
                  type="text"
                  placeholder="Search product"
                  autoFocus
                  onBlur={() => setToggleSearch(false)}
                  onChange={(event) => setSearchQuery(event.target.value.toLocaleLowerCase())}
                  onKeyPress={(event) => {
                    if (event.key === "Enter") {
                      if (searchQuery)
                        router.push(`/search/${searchQuery}`)
                    }
                  }}
                />
                <SearchIcon />
                {/* <div onClick={() => router.push(`/search/${searchQuery}`)}><SearchIcon /></div> */}
              </div>)
              : <SearchIcon />
            }
          </li>
          <li className={styles["cart-icon"]}>
            <Link href="/cart">
              <CartIcon />
              <span className={styles["cart-quantity"]}>{numberOfCartItem}</span>
            </Link>
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