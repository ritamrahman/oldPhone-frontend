import React from "react";
import CategoryCard from "../Cards/CategoryCard";

const Categories = () => {
  return (
    <section id="categories" className="bg-white text-white mx-auto">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl text-baseSecondary">Categories</h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Array(3)
            .fill()
            .map((item, index) => (
              <CategoryCard index={index} key={index} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
