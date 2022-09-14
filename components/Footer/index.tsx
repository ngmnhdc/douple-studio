import React from 'react'
import styles from './index.module.css'
import { FacebookIcon, TwitterIcon, InstagramIcon, TiktokIcon } from '../SvgIcon'

const Footer = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["container-inner"]}>
        <div className={styles["footer-left"]}>
          <div className={styles["footer-column"]}>
            <h3 className={styles["footer-heading"]}>Company info</h3>
            <ul className={styles["footer-item-list"]}>
              <li className={styles["footer-item"]}>About us</li>
              <li className={styles["footer-item"]}>Store location</li>
              <li className={styles["footer-item"]}>Blog</li>
              <li className={styles["footer-item"]}>Career</li>
            </ul>
          </div>
          <div className={styles["footer-column"]}>
            <h3 className={styles["footer-heading"]}>Help & Support</h3>
            <ul className={styles["footer-item-list"]}>
              <li className={styles["footer-item"]}>Help Center</li>
              <li className={styles["footer-item"]}>FAQ</li>
              <li className={styles["footer-item"]}>Terms and Conditions</li>
              <li className={styles["footer-item"]}>Size Chart</li>
            </ul>
          </div>
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