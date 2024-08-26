import React from "react";
import { Link, useParams } from "react-router-dom";

import "./styles.css";

const Product = () => {
  const route = useParams();

  return (
    <div className="product-container">
      <p className="product">Product: {JSON.stringify(route)}</p>
      <Link className="link-btn" to="/">
        Go to LookBook
      </Link>
    </div>
  );
};

export default Product;
