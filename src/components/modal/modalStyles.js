import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 0 1rem;
  z-index: 15;
  opacity: 1;

  .Overlay,
  .mdl {
    transition: 0.3s;
  }
`;

export const Content = styled.div`
  position: relative;
  background-color: #2b2e41;
  padding: 1.5rem;
  border-radius: 0.5rem;

  @media (max-width: 350px) {
    padding: 1rem;
  }

  .icon {
    display: flex;
    text-align: center;
    justify-content: flex-start;
  }

  h4 {
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 1.5rem;
    color: #fff;
  }

  .portfolios_modal-close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 1.5rem;
    color: red;
    cursor: pointer;
  }

  .description-content {
    overflow-y: scroll;
    height: 55vh;
    margin-bottom: 1rem;

    @media (min-width: 768px) {
      display: flex;
      gap: 2rem;
      overflow-y: hidden;
    }
    @media (min-width: 568px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }
  }

  .portfolio-img {
    overflow-y: hidden;
    margin-bottom: 0.75rem;

    @media (min-width: 768px) {
      width: 500px;
    }
    @media (min-width: 568px) {
      height: 50vh;
    }
    img {
      max-width: 100%;
      height: auto;
    }
    .modal-desktop {
      display: block;
    }
  }

  i {
    font-size: 1.25rem;
    margin-left: 0.5rem;
    transition: 0.3s;
    color: #fd4b57;
  }

  .portfolio_button {
    @media (min-width: 340px) {
      display: flex;
      gap: 1rem;
      justify-content: flex-end;
    }

    a {
      border: 0 solid;
      border-radius: 8px;
      background-color: hsl(240, 92%, 85%);
      color: hsl(240, 10%, 8%);
      margin-bottom: 1.5rem;
      margin-left: .5rem;
      display: inline-block;
      padding: 1rem;
      font-weight: 500;
      text-decoration: none;
      text-align: center;
    }
  }
`;

export const Data = styled.div`
  p {
    color: #fff;
  }

  h3 {
    color: #fff;
    font-weight: 500;
  }

  .portfolio_tech {
    margin-top: 0.75rem;
    margin-bottom: 1.5rem;
  }

  .portfolio_tech-icon {

    a {
      display: inline-flex;
      gap: 1rem;
      border: 0 solid;
      border-radius: 5px;
      padding: 6px 1rem;
      margin: 5px 3px;
      text-decoration: none;
      transition: all 0.3s;
      justify-content: center;
      align-items: center;

      &:hover {
        background: #fe727b;
      }
    }
  }

  .button {
    display: inline-block;
    background-color: #fd4b57;
    color: #fff;
    padding: 1rem;
    border-radius: 5rem;
    font-weight: 500;
  }

  .button--flex {
    justify-items: center;
    align-items: center;
  }
`;
