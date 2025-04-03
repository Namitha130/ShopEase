import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategoryList,
  getCategoryType,
} from "../redux/actions/productActions";
import classes from "./styles.module.scss";
export const CategoryFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoryList());
  }, [dispatch]);

  const categoryList = useSelector(
    (state) => state?.categoryList?.payload || []
  );
  const categories = ["All", ...categoryList];

  const handleCategoryClick = (category) => {
    console.log(category);

    setSelectedCategory(category);
    if (category === "All") {
      window.location.reload();
      dispatch(getCategoryList());
    } else {
      dispatch(getCategoryType(category));
    }
  };
  return (
    <div className={classes.categories}>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryClick(category)}
          style={{
            padding: "10px 15px",
            borderRadius: "5px",
            border: "1px solid",
            cursor: "pointer",
            backgroundColor: "white" ,
            borderColor:
              selectedCategory === category ? "#ff6f91" : "gray",
            color: selectedCategory === category ? "#ff6f91" : "black",
            fontWeight: selectedCategory === category ? "bold" : "normal",
           
          }}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  );
};
