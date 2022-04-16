import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="col-sm-12 hero-banner">
        <img src="./images/a2.jpeg" alt="" />
      </div>
      <Link to="/products" className="btn btn-warning mt-4">
        View Our Products
      </Link>
    </>
  );
};
export default Home;
