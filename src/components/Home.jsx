import React from "react";
import { ProductComponent } from "./ProductComponent";
import classes from "./styles.module.scss";

import { CategoryFilter } from "./CategoryFilter";

export const Home = () => {
  return (
    <div className={classes.dashboard}>
      <CategoryFilter />
      <ProductComponent />
    </div>
  );
};
