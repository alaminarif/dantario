import React from "react";
import { Link, useParams } from "react-router-dom";

const MoreInFo = () => {
  const { moreinfoId } = useParams();
  return (
    <div>
      <h2>This is more information page {moreinfoId}</h2>
      <Link to="/checkout">
        <button className="btn btn-primary px-5">CheckOut</button>
      </Link>
    </div>
  );
};

export default MoreInFo;
