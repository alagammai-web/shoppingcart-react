import React, { useState, useEffect } from "react";
import Checkout from "./Checkout";
import { productapi } from "./productapi";

const Products = () => {
  const [cartitem, setCartitem] = useState([]);
  const [showcart, setShowcart] = useState(false);

  const [prodapi, setProdapi] = useState(productapi);

  //     set search query to empty string
  const [q, setQ] = useState("");

  useEffect(() => {
    if (cartitem) {
      const getlocalItem = JSON.parse(localStorage.getItem("item"));

      setCartitem(getlocalItem);

      // const set1 = [...new Set(getlocalItem)];
      // console.log("set1", set1);
    }
  }, []);

  useEffect(() => {
    if (cartitem) {
      localStorage.setItem("item", JSON.stringify(cartitem));
    }
  }, [cartitem]);

  useEffect(() => {
    setProdapi(prodapi);
  }, []);
  const addtocart = (id) => {
    const resp = prodapi.find((elem) => elem.id === id);
    const citem = [...cartitem, resp];
    console.log("citem is", citem);

    // removing duplicate items in array by using filter
    const uniqueNames = citem.filter((itemm, index) => {
      return citem.indexOf(itemm) === index;
    });

    setCartitem(uniqueNames);
    console.log("uniqueNames", uniqueNames);
  };
  const routeChange = () => {
    setShowcart(true);
  };

  const moreProducts = () => {
    setShowcart(false);
  };

  // const Loading = () => {
  //   return (
  //     <div className="row">
  //       <div className="col-md-3">
  //         <Skeleton width={400} height={300} />
  //       </div>
  //       <div className="col-md-3">
  //         <Skeleton width={400} height={300} />
  //       </div>
  //       <div className="col-md-3">
  //         <Skeleton width={400} height={300} />
  //       </div>
  //       <div className="col-md-3">
  //         <Skeleton width={400} height={300} />
  //       </div>
  //     </div>
  //   );
  // };
  const Showproducts = () => {
    return (
      <div className="row">
        {filteredProducts
          ? filteredProducts.map((elem) => {
              return (
                <div className=" col-md-3" key={elem.id}>
                  <div className="carrr">
                    <div className="card">
                      <img src={elem.img} alt="" />

                      <h2> {elem.title}</h2>
                      <span
                        className="price"
                        style={{ color: "red", fontWeight: 600 }}
                      >
                        ${elem.price}
                      </span>
                      <button
                        className="btn btn-primary mb-4"
                        onClick={() => addtocart(elem.id)}
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          : "no prod founnd"}
      </div>
    );
  };

  const filteredProducts = prodapi.filter((elem) => {
    if (
      elem.title?.toLowerCase().includes(q) ||
      elem.category?.toLowerCase().includes(q)
    ) {
      return elem;
    }
  });
  // {
  //   console.log("filteredProducts is", filteredProducts);
  // }

  // RENDER

  return (
    <>
      {showcart === false && (
        <>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Search Products..."
              value={q}
              onChange={(e) => setQ(e.target.value.toLowerCase())}
            />
            <button>Search </button>
          </div>
          <button
            className="col-md-2 cartitems btn btn-success mt-4 mb-4"
            onClick={routeChange}
          >
            CART{" "}
            {cartitem && cartitem.length > 0 && (
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
            )}
            {!cartitem ||
              (cartitem.length <= 0 && (
                <>
                  <span
                    style={{
                      backgroundColor: "yellow",
                      color: "white",
                      borderRadius: "100%",
                      width: "20px",
                      height: "20px",
                      display: "inline-block",
                      lineHeight: "20px",
                    }}
                  >
                    0
                  </span>
                </>
              ))}
          </button>

          {<Showproducts />}
        </>
      )}

      {/* checkoutt page display */}
      {showcart === true && (
        <>
          <Checkout
            cartitem={cartitem}
            setCartitem={setCartitem}
            setShowcart={setShowcart}
            moreProducts={moreProducts}
          />
        </>
      )}
    </>
  );
};
export default Products;
