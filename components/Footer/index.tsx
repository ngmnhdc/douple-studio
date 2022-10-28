import React from 'react'
import styles from './index.module.css'
import { FacebookIcon, TwitterIcon, InstagramIcon, TiktokIcon, SmallChevronRightIcon } from '../SvgIcon'
import { footerItemList } from '../../utils/mockData'

const Footer = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["container-inner"]}>
        <div className={styles["footer-left"]}>
          {footerItemList.map(itemList => (
            <div className={styles["footer-column"]} key={itemList.id}>
              <h3 className={styles["footer-heading"]}>{itemList.title}</h3>
              <ul className={styles["footer-item-list"]}>
                {itemList.child.map(item => (
                  <li className={styles["footer-item"]} key={item.id}>
                    <SmallChevronRightIcon />
                    <span>{item.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className={styles["footer-column"]}>
            <h3 className={styles["footer-heading"]}>Follow us</h3>
            <div className={styles["footer-social"]}>
              <FacebookIcon />
              <TwitterIcon />
              <InstagramIcon />
              <TiktokIcon />
            </div>
          </div>
        </div>
        <div className={styles["footer-right"]}>
          <div className={styles["footer-column"]}>
            <h3 className={styles["footer-heading"]}>Subcribe to our newsletter</h3>
            <div className={styles["footer-form"]}>
              <div className={styles["form-container"]}>
                <input type="text" className={styles["subcribe-input"]} placeholder="Your email" />
                <button className={styles["subcribe-button"]}>Subcribe</button>
              </div>
              <div className={styles["subcribe-text"]}>
                <span>By clicking the SUBSCRIBE button, you are agreeing to our </span>
                <a href="#">Privacy & Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["copyright"]}>Copyright © 2022 Douple Studio. All Rights Reserved</div>
    </div>
  )
}

export default Footer