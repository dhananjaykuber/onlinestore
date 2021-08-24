import React from "react";
import styles from "../styles/components/TaglineComponent.module.css";

function TaglineComponent() {
  return (
    <div className={styles.taglineContainer}>
      <h1>Life is hard enough already. Let us make it a little easier.</h1>
      <span>- Dhananjay Kuber</span>
    </div>
  );
}

export default TaglineComponent;
