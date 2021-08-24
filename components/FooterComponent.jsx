import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/components/FooterComponent.module.css";

function FooterComponent() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.quickLinks}>
          <h2>QUICK LINKS</h2>
          <ul>
            <li>
              <Link href="#">
                <a>Privacy Policy</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Return Policy</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Terms of Service</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Contact Us</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.keepConnected}>
          <h2>KEEP CONNECTED</h2>
          <div className={styles.socialIcons}>
            <Link href="#">
              <a className={styles.icon}>
                <Image
                  src="/images/footer/facebook.svg"
                  height={20}
                  width={20}
                  alt="social-icon"
                />
              </a>
            </Link>
            <Link href="#">
              <a className={styles.icon}>
                <Image
                  src="/images/footer/instagram.svg"
                  height={20}
                  width={20}
                  alt="social-icon"
                />
              </a>
            </Link>
            <Link href="#">
              <a className={styles.icon}>
                <Image
                  src="/images/footer/twitter.svg"
                  height={20}
                  width={20}
                  alt="social-icon"
                />
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.menu}>
          <h2>MENU</h2>
          <ul>
            <li>
              <Link href="#">
                <a>Collections</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>About Us</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Contact Us</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.subscribe}>
          <h2>SUBSCRIBE</h2>
          <p>Stay tuned for discounts.</p>
          <div className={styles.inputContainer}>
            <input type="text" placeholder="Enter your email" />
            <button>SIGN UP</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterComponent;
