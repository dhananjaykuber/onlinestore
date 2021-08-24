import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/components/NavbarComponent.module.css";

function NavbarComponent() {
  return (
    <div className={styles.navbar}>
      <div className={styles.hamburgerContainer}>
        <div className={styles.hamburger}></div>
      </div>
      <div className={styles.logo}>
        <Link href="#">
          <a>ShopDhananjayKuber</a>
        </Link>
      </div>
      <ul>
        <li>
          <Link href="#">
            <a>COLLECTIONS</a>
          </Link>
          <div style={{ marginLeft: "5px" }}>
            <Image
              src="/images/navbar/down.svg"
              height={10}
              width={10}
              alt="down-icon"
            />
          </div>
        </li>
        <li>
          <Link href="#">
            <a>ABOUT US</a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>CONTACT US</a>
          </Link>
        </li>
      </ul>
      <div className={styles.icons}>
        <div className={styles.icon}>
          <Image
            src="/images/navbar/search.svg"
            height={20}
            width={20}
            alt="navbar-icons"
          />
        </div>
        <div className={styles.icon}>
          <Image
            src="/images/navbar/heart.svg"
            height={20}
            width={20}
            alt="navbar-icons"
          />
        </div>
        <div className={styles.icon}>
          <Image
            src="/images/navbar/cart.svg"
            height={20}
            width={20}
            alt="navbar-icons"
          />
        </div>
      </div>
    </div>
  );
}

export default NavbarComponent;
