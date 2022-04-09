import React from "react";

const Spinner = () => {
  return (
    <div className="d-flex align-items-center justify-content-center mt-4">
      <div class="spinner-grow" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
