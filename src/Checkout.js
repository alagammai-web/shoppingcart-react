import React from "react";
import { Link } from "react-router-dom";
import "react-notifications/lib/notifications.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

const Checkout = ({ cartitem, setCartitem, moreProducts }) => {
  // const [qty, setQty] = useState(0);
  const deleteItem = (id) => {
    const deletedvalue = cartitem.filter((elem) => elem.id !== id);
    setCartitem(deletedvalue);
  };

  const createNotification = (type) => {
    switch (type) {
      case "info":
        NotificationManager.info(
          "We're sorry! Only 10 unit(s) allowed in each order"
        );
        break;
      case "success":
        NotificationManager.success("Success message", "Title here");
        break;

      default:
        break;
    }
  };

  // const increment = (id) => {
  //   console.log("elell", id);
  //   // if (qty >= 0 && qty <= 9) {
  //   //   setQty(qty + 1);
  //   // }
  //   // if (qty >= 10) {
  //   //   createNotification("info");
  //   // }
  //   cartitem.map((curElem) => {
  //     console.log(curElem.quantity + 1);
  //     if (curElem.id === id) {
  //       return { ...cartitem, quantity: curElem.quantity + 1 };
  //     }
  //     return curElem;
  //   });
  // };
  // // const decrement = () => {
  // //   if (qty >= 2 && qty <= 10) {
  // //     setQty(qty - 1);
  // //   }
  // // };

  // const changeQty = (e) => {
  //   // if (e <= 10) {
  //   //   setQty(e);
  //   // } else if (e > 10) {
  //   //   setQty(10);
  //   //   createNotification("info");
  //   // }
  //   // cartitem.reduce((prev, curr) => prev + curr, 0);
  // };

  const handleChange = (itemm, d) => {
    const indx = cartitem.indexOf(itemm); //2
    cartitem[indx].quantity += d;

    if (cartitem[indx].quantity === 0) {
      cartitem[indx].quantity = 1;
    }
    if (cartitem[indx].quantity > 10) {
      createNotification("info");
      cartitem[indx].quantity = 10;
    }
    setCartitem([...cartitem]);
  };

  return (
    <>
      <div className="col-sm-12 mt-4 mb-4">
        <button className="btn btn-primary" onClick={() => moreProducts()}>
          Add More Products
        </button>
      </div>
      <div className="col-sm-12">
        <div className="row">
          {cartitem.length >= 0 ? (
            cartitem.map((elem) => {
              return (
                <div className="col-md-12 card1" key={elem.id}>
                  <img src={elem.img} alt="" />
                  <h2>{elem.title}</h2>
                  <span
                    className="price"
                    style={{ color: "red", fontWeight: 600 }}
                  >
                    ₹{elem.price * elem.quantity}
                  </span>
                  <div className="qty">
                    <button onClick={() => handleChange(elem, -1)}>-</button>
                    <b
                      style={{
                        background: "gray",
                        color: "#fff",
                        width: "100px",
                        height: "40px",
                        textAlign: "center",
                        lineHeight: "40px",
                        display: "inline-block",
                        margin: "10px 20px",
                      }}
                    >
                      {elem.quantity}
                    </b>
                    <button onClick={() => handleChange(elem, 1)}>+</button>

                    <NotificationContainer />
                  </div>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteItem(elem.id)}
                  >
                    Delete
                  </button>
                </div>
              );
            })
          ) : (
            <div className="col-sm-12 text-center">
              <div className="col-sm-12 text-center">
                <b>No products found</b>
              </div>
              <Link to="/products" onClick={() => moreProducts()}>
                Go back to products
              </Link>
            </div>
          )}

          {cartitem.length === 0 && (
            <div className="text-center col-sm-12">
              <h1 className="text-center col-sm-12">cart is empty</h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Checkout;
