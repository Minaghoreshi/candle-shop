import styled from "styled-components";
export const Navbar = styled.nav`
  background-color: white;
  /* max-width: 100%; */
  right: 0;
  left: 0;
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
  /* gap: 250px; */
  font-weight: 500;
  padding: 21px 168px;
  .NavLogoSection {
    display: flex;
    gap: 8px;
    color: #56b280;
    align-items: center;
    font-size: 14px;
    .NavLogo {
      background-color: #56b280;
      border-radius: 50%;
      width: 33px;
      height: 33px;
    }
  }
  .NavList {
    display: flex;
    gap: 30px;
    list-style: none;
    font-size: 16px;
    padding: 0;
  }
  .NavIcons {
    display: flex;
    gap: 10px;
    align-items: center;
  }
`;
