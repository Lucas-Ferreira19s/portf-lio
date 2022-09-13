import styled from "styled-components";

export const Container = styled.section`
  max-width: 1140px;
  padding-top: 5rem;
  margin: auto;
  color: #f8fdfe;

  @media (max-width: 1024px) {
    max-width: 924px;
  }

  @media (max-width: 768px) {
    max-width: 750px;
  }

  @media (max-width: 425px) {
    max-width: 420px;
  }

  .title {
    position: relative;
    margin-left: 1rem;
    h2 {
      font-size: 2.2rem;
      padding-left: 0.9rem;
      margin-bottom: 1rem;
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
  }
`;

export const gridPort = styled.div`
  max-width: 768px;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem 1.5rem;
  margin: 5rem auto;
  color: #f8fdfe;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    width: 50%;
    gap: 2.5rem 1rem;
  }

  @media (max-width: 425px) {
    grid-template-columns: 1fr;
  }

  .portfolios_content {
    position: relative;
    background-color: #2b2e41;
    transition: ease-in-out 0.4s;
    border: 4px solid #2b2e41;
    width: 20rem;

    &:hover {
      border: 4px solid #fd4b57;
    }

    .portfolio_img {
      max-width: 100%;
      width: 100vw;
      margin-bottom: 1rem;
      border-radius: 2px;
    }

    .portfolios_title {
      font-size: 1.3rem;
      font-weight: 500;
      text-align: center;
      margin-left: 0.3rem;
    }

    .icon{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 1.5rem;

      i{
        font-size: 1.3rem;
      }
    }

    .portfolios_button {
      font-size: 1.125rem;
      justify-content: center;
      align-items: center;
      border: 3px solid #fd4b57;
      background-color: #fd4b57;
      padding: 5px;
      color: #fff;
      margin: 0 2.2rem;
      display: flex;
      margin-bottom: 2.5rem;
      cursor: pointer;
      &:hover {
        transition: 0.5s;
        background: transparent;
      }
    }
  }
`;

export const gridGitHub = styled.div`
  text-align: center;
  display: grid;
  gap: 1.5rem;

  .github_title {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    font-weight: 500;
    text-align: center;
    color: #fff;

    span {
      font-weight: bold;
      color: #fd4b57;
    }
  }

  .button-github {
    position: relative;
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;

    .button {
      display: inline-block;
      background: transparent;
      color: #fff;
      padding: 1rem;
      border-radius: 5rem;
      font-weight: 500;
      justify-content: center;
      align-items: center;
      border: 2px solid #fd4b57;
      text-decoration: none;
      transition: all ease-in-out 0.3s;
      &:hover {
        background: #fd4b57;
      }
    }
  }
`;
