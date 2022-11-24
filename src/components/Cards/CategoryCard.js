import React from "react";

const CategoryCard = () => {
  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl max-w-sm">
      <figure>
        <img src="https://etimg.etb2bimg.com/photo/75741441.cms" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Vivo!</h2>
        <p>Total Products - 229</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View</button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
