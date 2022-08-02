import * as S from "./styles";

const Footer = (props: any) => {
  return (
    <S.Footer>
      <div>
        Desenvolvido por <span>@darcanjo_</span>
      </div>

      <div id="footerLogos">
        <S.FooterIconButton
          href="https://github.com/darcanj0/steam-project-react"
          target="_blank"
        >
          <S.GithubLogo />
        </S.FooterIconButton>
        <S.FooterIconButton
          href="https://www.linkedin.com/in/darcanjoo/"
          target="_blank"
        >
          <S.LinkedinLogo />
        </S.FooterIconButton>
      </div>
    </S.Footer>
  );
};

export default Footer;
