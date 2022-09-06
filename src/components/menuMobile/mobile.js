import styled from "styled-components";

export const Menu = styled.div`
  position: absolute;
  top: 0;
  right: ${(props) => (props.right ? "0" : "-100vh")};
  height: 100vh;
  width: 50%;
  background-color: #212437;
  color: #f8fdfe;
  transition: all ease-in-out 0.5s;
  display: none;

  @media (max-width: 425px) {
    display: block;
  }
`;

export const MenuList = styled.ul`
  text-align: center;
  display: flex;
  flex-direction: column;
  margin-top: 4rem;

  li {
    margin-top: 2rem;
    list-style: none;
  }
  .links{
    border: none;
    &:hover{
      border: none;
    }
  }
`;
