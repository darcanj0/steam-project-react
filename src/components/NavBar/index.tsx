import { useNavigate } from "react-router-dom";
import { CurrentPageObject } from "../../types/currentPageObject";
import { RoutePath } from "../../types/routes";
import * as S from "./styles";

interface NavBarProps {
  currentPage: CurrentPageObject;
}

const NavBar = (props: NavBarProps) => {
  const navigate = useNavigate();

  return (
    <S.NavBar>
      <S.IconGroup>
        <S.NavBarIcon
          onClick={
            props.currentPage.home ? undefined : () => navigate(RoutePath.HOME)
          }
          active={props.currentPage.home}
        >
          <S.HomeIcon />
        </S.NavBarIcon>

        <S.NavBarIcon
          onClick={
            props.currentPage.profiles
              ? undefined
              : () => navigate(RoutePath.PROFILES)
          }
          active={props.currentPage.profiles}
        >
          <S.ProfileIcon />
        </S.NavBarIcon>

        <S.NavBarIcon
          onClick={
            props.currentPage.settings
              ? undefined
              : () => navigate(RoutePath.SETTINGS)
          }
          active={props.currentPage.settings}
        >
          <S.SettingsIcon />
        </S.NavBarIcon>

        <S.NavBarIcon
          onClick={
            props.currentPage.admin
              ? undefined
              : () => navigate(RoutePath.ADMIN)
          }
          active={props.currentPage.admin}
        >
          <S.AdminIcon />
        </S.NavBarIcon>
      </S.IconGroup>

      <S.IconGroup>
        <S.NavBarIcon onClick={() => navigate(RoutePath.LOGIN)}>
          <S.LogoutIcon />
        </S.NavBarIcon>
      </S.IconGroup>
    </S.NavBar>
  );
};

export default NavBar;
