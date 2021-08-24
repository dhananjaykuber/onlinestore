import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/components/HeaderComponent.module.css";

function HeaderComponent() {
  return (
    <div className={styles.header}>
      <div className={styles.icons}>
        <div className={styles.icon}>
          <Link href="#">
            <a>
              <Image
                src="/images/header/facebook.svg"
                height={15}
                width={15}
                alt="social-icon"
              />
            </a>
          </Link>
        </div>
        <div className={styles.icon}>
          <Link href="#">
            <a>
              <Image
                src="/images/header/instagram.svg"
                height={15}
                width={15}
                alt="social-icon"
              />
            </a>
          </Link>
        </div>
        <div className={styles.icon}>
          <Link href="#">
            <a>
              <Image
                src="/images/header/twitter.svg"
                height={15}
                width={15}
                alt="social-icon"
              />
            </a>
          </Link>
        </div>
      </div>
      <span>LAUNCH OFFER - UPTO 40% OFF</span>
      <div className={styles.account}>
        <span>MY ACCOUNT</span>
        <Image
          src="/images/header/down.svg"
          height={10}
          width={10}
          alt="down-icon"
        />
      </div>
    </div>
  );
}

export default HeaderComponent;
