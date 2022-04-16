import React from "react";
import { Link } from "react-router-dom";

const Nabvbar = ({ cartitem }) => {
  return (
    <div className="navigation">
      <nav>
        <ul className="container ">
          {/* <li>
            <Link to="/shoppingcart-react">Home</Link>
          </li> */}

          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li style={{ color: "#fff" }}>
            {/* <i className="fa fa-shopping-cart carticon" aria-hidden="true"></i> */}

            {/* {cartitem ? (
              <>
                <span
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    borderRadius: "100%",
                    width: "20px",
                    height: "20px",
                    display: "inline-block",
                    lineHeight: "20px",
                  }}
                >
                  {cartitem.length}
                </span>
              </>
            ) : (
              ""
            )} */}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nabvbar;
