import React from "react";
import Image from "next/image";
import styles from "../styles/components/StoreInformationComponent.module.css";

function StoreInformationComponent() {
  return (
    <div className={styles.shopInformation}>
      <div className={styles.shopInformationItem}>
        <div className={styles.icon}>
          <Image
            src="/images/shop info/plane.svg"
            height={30}
            width={30}
            alt="icon"
          />
        </div>
        <div className={styles.itemWrapper}>
          <h2>FREE SHIPPING</h2>
          <p>Free shipping on orders above Rs. 500/-</p>
        </div>
      </div>
      <div className={styles.shopInformationItem}>
        <div className={styles.icon}>
          <Image
            src="/images/shop info/gift.svg"
            height={30}
            width={30}
            alt="icon"
          />
        </div>
        <div className={styles.itemWrapper}>
          <h2>MONEY GUARENTEE</h2>
          <p>7 days money back guarentee</p>
        </div>
      </div>
      <div className={styles.shopInformationItem}>
        <div className={styles.icon}>
          <Image
            src="/images/shop info/ring.svg"
            height={30}
            width={30}
            alt="icon"
          />
        </div>
        <div className={styles.itemWrapper}>
          <h2>ONLINE SUPPORT</h2>
          <p>We support 10am to 5pm</p>
        </div>
      </div>
    </div>
  );
}

export default StoreInformationComponent;
