import Button from "../Button";
import { LogoForLogin } from "../Logo/styles";
import * as S from "./styles";

interface LoginFormProps {
  creationMode: boolean;
  handleCreationModeChange: () => void;
}

const LoginForm = ({
  creationMode,
  handleCreationModeChange,
}: LoginFormProps) => {
  return (
    <S.LoginForm>
      <section>
        <LogoForLogin />
        <span>Steam Project</span>
      </section>
      <div id="loginFields">
        <div className="InputField">
          <label htmlFor="email">E-mail</label>
          <input type="email" name="email" id="" />
        </div>

        <div className="InputField">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
        </div>

        {creationMode === true && (
          <>
            <div className="InputField">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input type="password" name="password" />
            </div>

            <div className="InputField">
              <label htmlFor="user_name">User Name</label>
              <input type="text" name="user_name" />
            </div>

            <div>
              <label htmlFor="cpf">CPF</label>
              <input type={"number"} name="cpf" id="" />
            </div>

            <div>
              <label htmlFor="admPass">Manager Password</label>
              <input type="password" name="admPass" id="" />
            </div>
          </>
        )}

        <div id="formBtns">
          <Button onClick={() => handleCreationModeChange()}>
            {creationMode ? "Go Back" : "Don't have an account yet?"}
          </Button>
          <Button onClick={() => console.log("sign")}>
            {creationMode ? "Sign Up" : "Sign In"}
          </Button>
        </div>
      </div>
    </S.LoginForm>
  );
};

export default LoginForm;
