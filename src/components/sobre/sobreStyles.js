import styled from "styled-components";

export const container = styled.section`
  max-width: 1140px;
  margin: auto;
  height: 100vh;
  display: grid;
  grid-template-columns: 3fr 2.5fr;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  color: #f8fdfe;

  @media (max-width: 1024px) {
    max-width: 924px;
    height: 100vh;
  }

  @media (max-width: 768px) {
    padding-top: 5rem;
    height: 100%;
    max-width: 750px;
  }

  @media (max-width: 425px) {
    padding: 1rem;
    max-width: 400px;
    display: block;
  }

  .perfil {
    width: 100%;
    img {
      margin-top: 0.5rem;
      width: 100%;
      border-radius: 50%;
      border: 2px solid #FFF;
    }

    @media (max-width: 425px) {
      display: none;
    }
  }
`;

export const card = styled.div`
  display: flex;
  width: 100%;
  margin-top: 5rem;
  gap: 1rem;

  @media (max-width: 425px) {
    display: block;
    margin-top: 4rem;
  }

  div {
    flex: 0 0 45%;
    padding: 1rem;
    background-color: #2b2e41;
    text-align: center;
    border: 1px solid #2b2e41;
    transition: all linear 0.4s;
    @media (max-width: 768px) {
      flex: 0 0 60%;
    }
    @media (max-width: 425px) {
      margin-bottom: 1rem;
    }

    &:hover {
      border: 1px solid #fd4b57;
    }
    span {
      font-size: 1.5rem;
      color: #fd4b57;
    }
    p {
      font-size: 1rem;
    }
    h5 {
      font-size: 1.3rem;
      font-weight: 700;
      padding-bottom: 0.5rem;
    }
  }
`;

export const sobre = styled.div`
  position: relative;
  h2 {
    font-size: 2.2rem;
    padding-left: 0.9rem;
    margin-bottom: 2rem;
    &::before {
      display: block;
      position: absolute;
      content: "";
      top: 6px;
      left: 0;
      width: 10px;
      height: 1.9rem;
      background: #fa163f;
    }
  }

  h4 {
    font-size: 1.5rem;
    margin-bottom: 1.3rem;
    line-height: 33px;
    letter-spacing: 1px;
    span {
      color: #fd4b57;
    }
  }

  p {
    font-size: 1rem;
    font-weight: 300;
    letter-spacing: 1px;
    color: #cecdcd;
    margin-bottom: 1rem;
  }

  .git-sobre {
    font-weight: 600;
    color: #cecdcd;
    text-decoration: underline;
  }

  .buttons {
    display: block;
    margin-top: 4rem;
  }

  .hire,
  .down {
    font-weight: 600;
    letter-spacing: 1px;
    padding: 13px 15px;
    border: 2px solid #fd4b57;
    color: #f8fdfe;
    background: #fd4b57;
    transition: all linear 0.4s;
    text-decoration: none;
    &:first-child {
      margin-right: 1.5rem;
      @media (max-width: 320px) {
        margin-right: 0.3rem;
      }
    }
  }

  .hire:hover {
    background-color: transparent;
  }

  .down {
    background: transparent;
    &:hover {
      background-color: #fd4b57;
    }
  }
`;
