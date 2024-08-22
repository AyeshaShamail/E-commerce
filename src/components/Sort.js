import React from "react";
import { BsGridFill, BsList } from "react-icons/bs";
import styled from "styled-components";
import { useFilterContext } from "../utils/filterContext";

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;

  .sorting-list--grid {
    display: flex;
    gap: 2rem;

    .sort-btn {
      padding: 1rem 1rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    .icon {
      font-size: 1.6rem;
    }
    .active {
      background-color: ${({ theme }) => theme.colors.black};
      color: #fff;
    }
  }

  .sort-selection .sort-selection--style {
    padding: 0.5rem;
    cursor: pointer;

    .sort-select--option {
      padding: 0.5rem 0;
      cursor: pointer;
      height: 2rem;
      padding: 10px;
    }
  }
`;

const Sort = () => {
  const {
    filter_products,
    grid_view,
    setGridView,
    setListView,
    handleSorting,
  } = useFilterContext();
  return (
    <Wrapper className="sort-section">
      <div className="sorting-list--grid">
        <button
          className={grid_view ? "active sort-btn" : "sort-btn"}
          onClick={setGridView}
        >
          <BsGridFill className="icon" />
        </button>
        <button
          className={grid_view ? "sort-btn" : "active sort-btn"}
          onClick={setListView}
        >
          <BsList className="icon" />
        </button>
      </div>

      <div className="product-data">
        <p>{`${filter_products?.length} Products`}</p>
      </div>

      <div className="sort-selection">
        <form action="#">
          <label htmlFor="sort"></label>
          <select
            name="sort"
            id="sort"
            className="sort-selection--style"
            onClick={handleSorting}
          >
            <option value="lowest">Price (Low - High)</option>
            <option value="highest">Price (High - Low)</option>
            <option value="a-z"> Sort (A - Z)</option>
            <option value="z-a">Sort (Z - A)</option>
          </select>
        </form>
      </div>
    </Wrapper>
  );
};

export default Sort;
