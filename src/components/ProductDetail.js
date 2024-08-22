import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useProductsContext } from "../utils/productContext";
import PageNavigation from "./PageNavigation";
import MyImage from "./MyImage";
import { Container } from "./Container";
import FormatPrice from "../Helpers/FormatPrice";
import { TbReplace, TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import Star from "./Star";
import AddToCart from "./AddToCart";

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 1rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .product-reviews {
    margin: 2rem auto;
    width: 50%;
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    text-align: center;

    .review {
      margin-bottom: 1.5rem;
      padding: 1rem;
      border: 1px solid #ddd;
      border-radius: 5px;
      text-align: left;
    }

    p {
      margin: 0.5rem 0;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
    .product-reviews {
      width: 100%;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

const API = "https://dummyjson.com/products";

const ProductDetail = () => {
  const { getProductDetails, isSingleLoading, singleProduct } =
    useProductsContext();

  const { id } = useParams();

  const {
    title,
    brand,
    category,
    price,
    description,
    rating,
    reviews,
    warrantyInformation,
    stock,
    returnPolicy,
    images,
  } = singleProduct;

  const discountPercentage = 25;
  const discountedPrice = price - price * (discountPercentage / 100);

  const capitalizeFirstLetter = (str) => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  useEffect(() => {
    getProductDetails(`${API}/${id}`);
  }, []);

  if (isSingleLoading) {
    return <div className="page_loading">Loading.......</div>;
  }

  return (
    <Wrapper>
      <PageNavigation title={title} />
      <Container className="cntainer">
        <div className="grid grid-two-column">
          <div className="product_images">
            <MyImage imgs={images} />
          </div>

          <div className="product-data">
            <h2>{title}</h2>
            <Star stars={rating} reviews={reviews?.length} />
            <p className="product-data-price">
              MRP:{" "}
              <del>
                <FormatPrice price={price} />
              </del>
            </p>

            <p className="product-data-price product-data-real-price">
              Deal of the Day: <FormatPrice price={discountedPrice} />
            </p>
            <h3>About Product</h3>
            <p>{description}</p>

            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>

              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>{returnPolicy}</p>
              </div>

              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Crest delivered</p>
              </div>

              {warrantyInformation && (
                <div className="product-warranty-data">
                  <MdSecurity className="warranty-icon" />
                  <p>{warrantyInformation}</p>
                </div>
              )}
            </div>

            <div className="product-data-info">
              <p>
                Availablity: <span>{stock > 0 ? "In stock" : "No stock"}</span>{" "}
              </p>
              <p>
                Brand: <span>{brand ? brand : "Shamaya Assured"}</span>
              </p>
              <p>
                Category: <span>{capitalizeFirstLetter(category)}</span>
              </p>
            </div>
            <hr />
            {stock > 0 && <AddToCart product={singleProduct} />}
          </div>
        </div>
      </Container>

      {/**Reviews div */}
      <div className="product-reviews">
        <h2>Reviews</h2>
        {reviews && reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div key={index} className="review">
              <p>
                <b>{review.reviewerName}</b> (
                {new Date(review.date).toLocaleDateString()})
              </p>
              <p>
                <b>Rating: </b>
                {review.rating}
              </p>
              <p>{review.comment}</p>
            </div>
          ))
        ) : (
          <p>No reviews available.</p>
        )}
      </div>
    </Wrapper>
  );
};

export default ProductDetail;
