import { BiCog } from "react-icons/bi";
import { BiHome } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import { BiLockAlt } from "react-icons/bi";
import { BiLogOut } from "react-icons/bi";
import styled, { css } from "styled-components";

export const NavBar = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.secondaryColorOpacity};
    border: 1px solid ${theme.colors.glassBorderColor};
    ${theme.mixins.defaultGlass()}
  `}
  border-radius: 0 5px 5px 0;
  height: 100vh;
  width: 56px;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

export const IconGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
`;

export const NavBarIcon = styled.a`
  ${({ theme }) => css`
    color: ${(props) =>
      props.active ? theme.colors.tertiaryColor : theme.colors.whiteColor};
    border-radius: ${theme.constants.defaultBorderRadius};

    :hover {
      background-color: ${theme.colors.glassBorderColor};
    }
  `}
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  cursor: pointer;
`;

export const SettingsIcon = styled(BiCog)`
  transform: scale(1.5);
`;

export const HomeIcon = styled(BiHome)`
  transform: scale(1.5);
`;

export const ProfileIcon = styled(BiUser)`
  transform: scale(1.5);
`;

export const AdminIcon = styled(BiLockAlt)`
  transform: scale(1.5);
`;

export const LogoutIcon = styled(BiLogOut)`
  transform: scale(1.5);
`;
