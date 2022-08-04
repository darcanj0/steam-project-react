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
      <div id="loginFields">
        <div className="InputField">
          <label htmlFor="email">E-mail</label>
          <input type="email" name="email" id="" />
        </div>

        <div className="InputField">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="" />
        </div>

        <div id="formBtns">
          <Button>Don't have an account yet?</Button>
          <Button>Sign In</Button>
        </div>
      </div>
    </S.LoginForm>
  );
};

export default LoginForm;
