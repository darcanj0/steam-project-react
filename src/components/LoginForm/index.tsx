import Button from "../Button";
import { LogoForLogin } from "../Logo/styles";
import * as S from "./styles";

const LoginForm = () => {
  return (
    <S.LoginForm>
      <section>
        <LogoForLogin color="#" />
        <span>Steam Project</span>
      </section>
      <div>
        <input type="email" name="email" id="" />
        <input type="password" name="password" id="" />
        <Button>Sign In</Button>
      </div>
    </S.LoginForm>
  );
};

export default LoginForm;
