import styled from "styled-components";
export const HeaderMenuStyled = styled.nav`
  display: flex;
  align-items: center;
  .linkItem {
    position: relative;
    transition: all 0.3s ease-in-out;
    &:hover {
      .linkItem__listMenu {
        display: block;
        opacity: 1;
      }
    }
    &__menuTitle {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 20px;
      span {
        margin-right: 8px;
      }
    }
    &__listMenu {
      display: none;
      opacity: 0;
      position: absolute;
    }
  }
`;
