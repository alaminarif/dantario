import React from "react";
import { Link, useParams } from "react-router-dom";

const MoreInFo = () => {
  const { moreinfoId } = useParams();
  return (
    <div className=" w-100 text-center">
      <h2>This is more information page {moreinfoId}</h2>
      <Link className="w-25" to="/checkout">
        <button className="btn btn-primary">CheckOut</button>
      </Link>
    </div>
  );
};

export default MoreInFo;
