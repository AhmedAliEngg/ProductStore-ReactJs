import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import ProductTable from "../ProductTable/ProductTable";
function FilterableProductTable({ products }) {
    return (
      <div>
        <SearchBar />
        <ProductTable products={products} />
      </div>
    );
  }
  export default FilterableProductTable;