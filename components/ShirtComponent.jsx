import React from "react";
import Link from "next/link";
import styles from "../styles/components/ShirtComponent.module.css";

function ShirtComponent() {
  return (
    <Link href="#">
      <a className={styles.shirt}>
        <div className={styles.productItem}>
          <div className={styles.productImage}>
            <span className={styles.badge}>-25.0%</span>
            <div className={styles.productImageWrapper}>
              <img src="/images/shirts/shirt-1.jpg" alt="product-image" />
            </div>
          </div>
          <div className={styles.productInformation}>
            <h2 className={styles.productTitle}>ETERNAL WHITE</h2>
            <div className={styles.productMeta}>
              <span className={styles.currentPrice}>Rs. 1,520.08</span>
              <span className={styles.originalPrice}>Rs. 1,000.08</span>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default ShirtComponent;
