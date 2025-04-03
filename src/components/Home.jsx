import React, { useEffect } from "react";
import { ProductComponent } from "./ProductComponent";
import {  getProducts } from "../redux/actions/productActions";
import classes from "./styles.module.scss";

import { useDispatch } from "react-redux";
import { CategoryFilter } from "./CategoryFilter";

export const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  });

  return (
    <div className={classes.dashboard}>
      <aside className={classes.dashboard__asidePart}>
        <CategoryFilter />
      </aside>
      <ProductComponent />
    </div>
  );
};
