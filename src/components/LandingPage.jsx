import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import classes from "./styles.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/actions/productActions";

const LandingPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const products = useSelector((state) => state?.allProducts?.data) || [];

  const topProducts = [...products]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  console.log("Top 3 Products: ", topProducts);
  return (
    <div className={classes.landingPage}>
      <main>
        <section className={classes.landingPage__hero}>
          <h1>Welcome to ShopEase</h1>
          <p>Your one-stop shop for all your fashion needs.</p>

          <Link to="/home">
            <button>Shop Now</button>
          </Link>
        </section>

        <section className={classes.landingPage__fProducts}>
          <h2>Featured Products</h2>
          <div className={classes.landingPage__fProducts__productGrid}>
            {topProducts.length > 0
              ? topProducts.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className={
                      classes.landingPage__fProducts__productGrid__productCard
                    }
                    style={{textDecoration :"none" , color:"black"}}
                  >
                    <img src={product.image} alt={product.name} />
                    <h3>{product?.title}</h3>
                    <p>${product?.price}</p>
                    <button>View Details</button>
                  </Link>
                ))
              : ""}
          </div>
        </section>

        <section className={classes.landingPage__testimonials}>
          <div>
            <h2>What Our Customers Say</h2>
            <p>"Great products and fast delivery!" - Happy Customer</p>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 ShopEase. All Rights Reserved.</p>
        <p>
          Your go-to online store for the best deals on clothing, accessories,
          and more.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
