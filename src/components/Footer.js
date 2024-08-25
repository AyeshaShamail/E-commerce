import React from "react";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";
import {
  FacebookFilled,
  GithubFilled,
  LinkedinFilled,
} from "@ant-design/icons";

const Wrapper = styled.section`
  .iSIFGq {
    margin: 0;
  }

  .contact-short {
    max-width: 50vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }

  footer {
    padding: 12rem 0 2rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }

  .footer-bottom--section {
    padding-top: 9rem;

    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;

      .grid div:last-child {
        justify-self: center;
      }
    }

    footer {
      padding: 9rem 0 9rem 0;
    }

    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-column">
          <h3>Ready to start?</h3>
          <h3>Talk to us today!</h3>
        </div>
        <div>
          <Button style={{ marginTop: "1.5rem" }}>
            <NavLink to="/contact">Get Started</NavLink>
          </Button>
        </div>
      </section>

      <footer>
        <div className="container grid grid-three-column">
          <div className="footer-about">
            <h3>Developed by</h3>
            <p>Ayesha Shamail ❤️</p>
          </div>

          <div className="footer-social">
            <h3>Follow us</h3>
            <div className="footer-social--icons">
              <div>
                <a
                  href="https://www.facebook.com/noorain.haq.1/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FacebookFilled className="icons" />
                </a>
              </div>
              <div>
                <a
                  href="https://github.com/AyeshaShamail/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GithubFilled className="icons" />
                </a>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/in/ayesha-shamail/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedinFilled className="icons" />
                </a>
              </div>
            </div>
          </div>

          <div className="footer-contact">
            <h3>Call us</h3>
            <a
              href="tel:988-565-8765"
              style={{ color: "#fff", fontSize: "2rem" }}
            >
              +91 988-565-8765
            </a>
          </div>
        </div>

        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
            <p>
              @{new Date().getFullYear()} Ayesha Shamail. All Rights Reserved
            </p>
            <div>
              <p>Privacy Policy</p>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

export default Footer;
