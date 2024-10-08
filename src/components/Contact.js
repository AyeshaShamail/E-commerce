import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const Contact = () => {
  const { isAuthenticated, user } = useAuth0();

  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Contact Page</h2>
      <iframe
        title="myLocation"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.008890127804!2d77.63282679999999!3d12.907149700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1556d789b071%3A0xc1cc4ec19e7fed3e!2sSalarpuria%20Serenity!5e0!3m2!1sen!2sin!4v1723197792489!5m2!1sen!2sin"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/mwpebbpr"
            method="POST"
            target="_blank"
            className="contact-inputs"
          >
            <input
              type="text"
              placeholder="User Name"
              name="username"
              value={isAuthenticated ? user.name : ""}
              required
              autoComplete="off"
            />
            <input
              type="email"
              placeholder="E-mail"
              name="email"
              value={isAuthenticated ? user.email : ""}
              required
              autoComplete="off"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
            />

            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
