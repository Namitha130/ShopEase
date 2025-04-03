// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   increaseCartItemQuantity,
//   decreaseCartItemQuantity,
//   removeCartItem,
// } from "../redux/actions/productActions";
// import classes from "./styles.module.scss";

// const Cart = () => {
//   const { cartItems, totalAmount } = useSelector((state) => state?.cart);
//   const dispatch = useDispatch();

//   return (
//     <div className={classes.cartContainer}>
//       <h2>Shopping Cart</h2>

//       {cartItems.length === 0 ? (
//         <p className={classes.emptyCart}>Your cart is empty.</p>
//       ) : (
//         <>
//           {cartItems.map((item) => (
//             <div key={item?.id} className={classes.cartContainer__cartItem}>
//               <img src={item?.image} alt={item?.title} />
//               <div>
//                 <h3>{item?.title}</h3>
//                 <p>Price: ${item?.price}</p>
//               </div>
//               <div className={classes.cartContainer__cartItem__cartActions}>
//                 <button
//                   onClick={() => dispatch(decreaseCartItemQuantity(item.id))}
//                   className={
//                     classes.cartContainer__cartItem__cartActions__minus
//                   }
//                 >
//                   -
//                 </button>
//                 <span>{item?.quantity}</span>
//                 <button
//                   onClick={() => dispatch(increaseCartItemQuantity(item.id))}
//                   className={
//                     classes.cartContainer__cartItem__cartActions__plus
//                   }
//                 >
//                   +
//                 </button>
//                 <button
//                   onClick={() => dispatch(removeCartItem(item.id))}
//                   className={classes.remove}
//                 >
//                   Remove
//                 </button>
//               </div>
//             </div>
//           ))}
//           <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
//         </>
//       )}
//     </div>
//   );
// };

// export default Cart;
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseCartItemQuantity,
  decreaseCartItemQuantity,
  removeCartItem,
} from "../redux/actions/productActions";
import classes from "./styles.module.scss";

const Cart = () => {
  const { cartItems, totalAmount } = useSelector((state) => state.cart || {});
  const dispatch = useDispatch();
  console.log(cartItems);

  return (
    <div className={classes.cartContainer}>
      <h2>Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p className={classes.emptyCart}>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item?.id} className={classes.cartContainer__cartItem}>
              <img src={item?.image} alt="product image" />
              <div>
                <h3>{item?.title}</h3>
                <p>Price: ${item?.price ? item.price.toFixed(2) : "0.00"}</p>
              </div>
              <div className={classes.cartContainer__cartItem__cartActions}>
                <button
                  onClick={() => dispatch(decreaseCartItemQuantity(item.id))}
                  className={
                    classes.cartContainer__cartItem__cartActions__minus
                  }
                >
                  -
                </button>
                <span>{item?.quantity || 1}</span>
                <button
                  onClick={() => dispatch(increaseCartItemQuantity(item.id))}
                  className={classes.cartContainer__cartItem__cartActions__plus}
                >
                  +
                </button>
                <button
                  onClick={() => dispatch(removeCartItem(item.id))}
                  className={classes.remove}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <h3>
            Total Amount: ${totalAmount ? totalAmount.toFixed(2) : "0.00"}
          </h3>
        </>
      )}
    </div>
  );
};

export default Cart;
