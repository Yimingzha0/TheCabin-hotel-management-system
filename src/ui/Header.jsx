import styled from "styled-components";
import HeaderMenu from "./HeaderMenu.jsx";
import {UserAvator} from "../features/authentication/UserAvator.jsx";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  
  display: flex;
  gap: 1.2rem; 
  align-content: center;
  align-items: center;
  justify-content: end;
`;

function Header() {
  return (<StyledHeader>
      <UserAvator/>
      <HeaderMenu />
  </StyledHeader>)
}

export default Header;
