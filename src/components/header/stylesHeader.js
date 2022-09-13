import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  margin: auto;
  position: fixed;
  background-color: #212437;
  z-index: 3;
`;

export const navList = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  align-items: center;
  height: 4.5rem;
  width: 100%;
  max-width: 1140px;
  margin: auto;

  @media (max-width: 1024px) {
    max-width: 924px;
  }

  @media (max-width: 768px) {
    max-width: 750px;
  }

  @media (max-width: 425px) {
    max-width: 400px;
  }

  .logo {
    a {
      font-size: 2rem;
      border: none;
      &:hover {
        border: none;
      }
    }
    span {
      color: #fd4b57;
    }
  }

  a {
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: bold;
    color: #f8fdfe;
    border-bottom: 2px solid #212437;
    transition: all 0.3s;
    &:active,
    &:focus {
      border-bottom: 2px solid #fd4b57;
    }
    &:hover {
      border-bottom: 2px solid #fd4b57;
    }
  }

  .menu-btn.open .menu-btn-burger {
    transform: translateX(-50px);
    background: transparent;

    &::before {
      transform: rotate(45deg) translate(35px, -35px);
    }
    &::after {
      transform: rotate(-45deg) translate(35px, 35px);
    }
  }

  .menu-btn {
    position: relative;
    z-index: 10;
    display: none;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 40px;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    @media (max-width: 425px) {
      display: flex;
    }

    .menu-btn-burger {
      width: 40px;
      height: 4px;
      background-color: #f8fdfe;
      border-radius: 5px;
      transition: all 0.5s ease-in-out;

      &::before,
      &::after {
        content: "";
        position: absolute;
        width: 40px;
        height: 4px;
        background-color: #f8fdfe;
        border-radius: 5px;
        transition: all 0.5s ease-in-out;
      }

      &::before {
        transform: translateY(-16px);
      }
      &::after {
        transform: translateY(16px);
      }
    }
  }
`;

export const listMenu = styled.ul`
  display: flex;
  gap: 3rem;

  @media (max-width: 425px) {
    display: none;
  }

  @media (max-width: 768px) {
    gap: 1rem;
    font-size: 1.1rem;
  }

  li {
    list-style: none;
    letter-spacing: 1px;
  }
`;
