import React from "react";
import ShirtComponent from "./ShirtComponent";
import styles from "../styles/components/ShirtContainerComponent.module.css";

function ShirtContainerComponent() {
  return (
    <div className={styles.shirtsContainer}>
      <div className={styles.pageWidth}>
        <div className={styles.heading}>
          <h2>Men&#39;s Shirt</h2>{" "}
        </div>
        <div className={styles.featuredContainer}>
          <div className={styles.allShirts}>
            <ShirtComponent />
            <ShirtComponent />
            <ShirtComponent />
            <ShirtComponent />
            <ShirtComponent />
            <ShirtComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShirtContainerComponent;
