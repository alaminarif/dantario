import React from "react";
import { Link } from "react-router-dom";

const MoreInFo = () => {
  return (
    <div>
      <h2>this is more information</h2>
      <Link to="/checkout">
        <button>CheckOut</button>
      </Link>
    </div>
  );
};

export default MoreInFo;
