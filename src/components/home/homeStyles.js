import styled from "styled-components";

export const Sobre = styled.section`
  max-width: 1140px;
  height: 100vh;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (max-width: 1024px) {
    max-width: 924px;
  }

  @media (max-width: 768px) {
    max-width: 750px;
  }

  @media (max-width: 425px) {
    max-width: 420px;
  }

  h1 {
    font-size: 4.2rem;
    color: #f8fdfe;
    span {
      color: #fd4b57;
    }
    @media (max-width: 768px) {
      font-size: 4rem;
    }

    @media (max-width: 425px) {
      font-size: 3rem;
    }
  }

  h3 {
    font-size: 2.5rem;
    color: #f8fdfe;

    @media (max-width: 768px) {
      font-size: 2.3rem;
    }
    @media (max-width: 425px) {
      font-size: 1.5rem;
    }
  }
  .ola {
    font-weight: 400;
  }

  .link {
    margin-top: 3rem;
    a {
      font-weight: 600;
      letter-spacing: 1px;
      padding: 13px 15px;
      border: 2px solid #fd4b57;
      color: #fff;
      background: #fd4b57;
      transition: all linear 0.4s;
      text-decoration: none;

      &:hover {
        background: transparent;
      }
    }
  }
`;