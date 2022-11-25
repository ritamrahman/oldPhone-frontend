import React from "react";

const AddProductModal = () => {
  return (
    <>
      <input type="checkbox" id="addProductModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <label htmlFor="addProductModal" className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>

          <div className="modal-action">
            <label htmlFor="addProductModal" className="btn">
              Submit
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProductModal;
