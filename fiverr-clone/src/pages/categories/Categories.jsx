import React from "react";
import CategoriesBanner from "./CategoriesBanner";
import "./categories.css";
import CategoriesSection from "./CategoriesSection";
import CategoriesBucket from "./CategoriesBucket";
import CategoriesRelate from "./CategoriesRelate";
const Categories = () => {
  return (
    <div className="">
      <CategoriesBanner />
      <CategoriesSection />
      <CategoriesBucket />
      <CategoriesRelate />
    </div>
  );
};

export default Categories;
