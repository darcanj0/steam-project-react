import { BsJoystick } from "react-icons/bs";
import styled from "styled-components";

interface LogoForContentBoxProps {
  inLightMode?: boolean;
}

export const LogoForContentBox = styled(BsJoystick)<LogoForContentBoxProps>`
  transform: scale(2);
  color: ${({ theme, inLightMode }) =>
    inLightMode ? theme.colors.secondaryColor : theme.colors.whiteColor};
`;