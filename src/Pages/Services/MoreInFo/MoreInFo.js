import React from "react";
import { Link, useParams } from "react-router-dom";

const MoreInFo = () => {
  const { moreinfoId } = useParams();
  return (
    <div className=" w-100 text-center">
      <h2>This is more information page {moreinfoId}</h2>
      <Link className="w-25" to="/checkout">
        <button className="btn px-5 mt-4 " style={{ backgroundColor: "#04aa6d", color: "#fff" }}>
          CheckOut
        </button>
      </Link>
    </div>
  );
};

export default MoreInFo;
