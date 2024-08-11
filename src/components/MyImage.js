import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  gap: 1rem;

  .grid {
    flex-direction: row;
    justify-items: center;
    align-items: center;
    width: 100%;
    gap: 1rem;

    img {
      max-width: 100%;
      max-height: 100%;
      background-size: cover;
      object-fit: contain;
      cursor: pointer;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }

  .main-screen {
    display: grid;
    place-items: center;
    img {
      max-width: 100%;
      height: auto;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }
  .grid-four-column {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    display: flex;
    flex-direction: column;

    .grid-four-column {
      grid-template-rows: 1fr;
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

const MyImage = ({ imgs = [] }) => {
  const [mainImage, setMainImage] = useState(imgs[0] || "");

  return (
    <Wrapper>
      <div className="grid grid-four-column">
        {imgs.map((curElm, i) => (
          <figure key={i}>
            <img
              src={curElm}
              alt={`image-${i}`}
              className="box-image--style"
              onClick={() => setMainImage(curElm)}
            />
          </figure>
        ))}
      </div>

      <div className="main-screen">
        {mainImage && <img src={mainImage} alt="main" />}
      </div>
    </Wrapper>
  );
};

export default MyImage;
