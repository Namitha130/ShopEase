import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategoryList,
  getCategoryType,
} from "../redux/actions/productActions";
export const CategoryFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoryList());
  }, [dispatch]);

  // const categories = [
  //   { name: "TV", value: "tv" },
  //   { name: "Audio", value: "audio" },
  //   { name: "Laptop", value: "laptop" },
  //   { name: "Mobile", value: "mobile" },
  //   { name: "Appliances", value: "appliances" },
  // ];
  const categoryList = useSelector(
    (state) => state?.categoryList?.payload?.categories || []
  );

  const handleCheckboxChange = (event) => {
    const category = event.target.value;
    if (selectedCategory === category) {
      setSelectedCategory("");
      window?.location?.reload();
    } else {
      setSelectedCategory(category);
      dispatch(getCategoryType(category));
    }
  };

  return (
    <div>
      <h3>Filter By Categories</h3>
      <form>
        {/* {categories.map((category) => (
          <div key={category?.value}>
            <label>
              <input
                type="checkbox"
                value={category.value}
                checked={selectedCategory === category.value}
                onChange={(type) => handleCheckboxChange(type)}
              />
              {category?.name}
            </label>
          </div>
        ))} */}
        {categoryList.map((category) => (
          <div key={category}>
            <label>
              <input
                type="checkbox"
                value={category}
                checked={selectedCategory === category} // Only one can be selected
                onChange={handleCheckboxChange}
              />
              {category.charAt(0).toUpperCase() + category.slice(1)}{" "}
              {/* Capitalize first letter */}
            </label>
          </div>
        ))}
      </form>
    </div>
  );
};
