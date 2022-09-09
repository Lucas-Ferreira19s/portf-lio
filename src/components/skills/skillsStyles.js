import styled from "styled-components";

export const Container = styled.section`
  padding: 2.5rem 0 4rem;
  max-width: 1140px;
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
    margin-top: 3rem;
    @media (max-width: 768px) {
      margin-left: 0.5rem;
    }
  }

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
`;

export const Card = styled.div`
  display: grid;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  transform: translateX(2rem);
  transform: translateX(-2rem);
  grid-template-columns: repeat(3, 1fr);
  max-width: 768px;
  margin: auto;

  @media (max-width: 768px) {
    transform: translateX(0);
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    width: 80%;
  }

  @media (max-width: 425px) {
    max-width: 420px;
    grid-template-columns: 1fr;
    transform: translateX(1.5rem);
  }

  @media (max-width: 375px) {
    transform: translateX(0.7rem);
  }

  @media (max-width: 375px) {
    transform: translateX(0);
  }

  .skills_card {
    width: 16rem;
    position: relative;
    height: 25rem;
    margin: 0.5rem;
    border-radius: 25px;
    background: #2b2e41;
    overflow: hidden;
    transition: 0.5s;

    &::after {
      content: "";
      position: absolute;
      inset: 5px;
      background: #2b2e41;
      border-radius: 20px;
    }

    @keyframes barra {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(350deg);
      }
    }

    .card-border::before {
      content: "";
      position: absolute;
      width: 8rem;
      left: 4.5rem;
      top: -50%;
      height: 50rem;
      animation: barra 6s linear 0s infinite normal none running;
    }

    .html::before {
      background-color: hsl(16, 98%, 50%);
    }
    .css::before {
      background: hsl(231, 98%, 50%);
    }
    .js::before {
      background: hsl(60, 99%, 50%);
    }
    .ts::before {
      background: hsl(217, 93%, 37%);
    }
    .react::before {
      background: hsl(204, 88%, 52%);
    }
    .git::before {
      background: hsl(0, 87%, 47%);
    }

    .circle {
      position: relative;
      width: 100%;
      height: 100%;
      background: hsl(16, 98%, 50%);
      clip-path: circle(100px at right 10px);
      align-items: center;
      z-index: 1;
    }

    .circle1 {
      background: hsl(231, 98%, 50%);
    }

    .circle2 {
      background: hsl(60, 99%, 50%);
    }

    .circle3 {
      background-color: hsl(217, 94%, 39%);
    }

    .circle4 {
      background-color: hsl(204, 88%, 52%);
    }

    .circle5 {
      background: hsl(0, 87%, 47%);
    }

    img {
      max-width: 100%;
      height: auto;
    }

    .skills_img {
      position: relative;
      left: 11.2rem;
      top: 0.8rem;
      width: 4rem;
      z-index: 1;
    }

    .card_title {
      color: #fff;
      font-size: 1.25rem;
      font-weight: 600;
      text-align: center;
      position: relative;
      bottom: 23.2rem;
      right: 3rem;
      z-index: 1;
    }

    .card_description {
      position: relative;
      text-align: center;
      bottom: 18rem;
      margin: 0 0.9rem;
      z-index: 1;
      color: #fff;
    }
  }
`;
