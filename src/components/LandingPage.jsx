import React from "react";
// import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import classes from "./styles.module.scss";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className={classes.landingPage}>
      <main>
        <section className={classes.landingPage__hero} >
          <div></div>
          <h1>Welcome to ShopEase</h1>
          <p>Your one-stop shop for all your fashion needs.</p>

          <Link to="/home">
            <button
              onClick={() => navigate("/products")}
            >
              Shop Now
            </button>
          </Link>
        </section>

        {/* Featured Products */}
        <section className={classes.landingPage__fProducts}>
          <h2>Featured Products</h2>
          <div className={classes.landingPage__fProducts__productGrid}>
            {[1, 2, 3].map((item) => (
              <div key={item} className="product-card">
                <img
                  src={`https://source.unsplash.com/300x300/?fashion,clothing&sig=${item}`}
                  alt="Product"
                />
                <h3>Product {item}</h3>
                <p>$99.99</p>
                <button className="buy-now-btn">Buy Now</button>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="testimonials">
          <h2>What Our Customers Say</h2>
          <img
            src="https://source.unsplash.com/200x200/?happy,customer"
            alt="Customer"
          />
          <p>"Great products and fast delivery!" - Happy Customer</p>
        </section>
      </main>

      <footer >
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
