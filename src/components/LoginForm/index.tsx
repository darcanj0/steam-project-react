import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import api from "../../api";
import { useAuth } from "../../contexts/auth";
import ToastStyle from "../../types/toastStyle";
import Button from "../Button";
import { LogoForLogin } from "../Logo/styles";
import * as S from "./styles";

interface LoginFormProps {
  creationMode: boolean;
  handleCreationModeChange: () => void;
}

interface SignForm {
  user_name: string;
  email: string;
  password: string;
  confirm_password: string;
  cpf: string;
  admPassword: string;
}

const LoginForm = ({
  creationMode,
  handleCreationModeChange,
}: LoginFormProps) => {
  const { login } = useAuth();

  const [inputsValues, setInputsValues] = useState<SignForm>({
    user_name: "",
    email: "",
    password: "",
    confirm_password: "",
    cpf: "",
    admPassword: "",
  });

  const handleLogin = async () => {
    const loginInfo: Partial<SignForm> = {
      email: inputsValues.email,
      password: inputsValues.password,
    };

    api
      .post("/auth", loginInfo)
      .then((res) => {
        if (res.status === 201) {
          login({ token: res.data.token, user: res.data.user });
        }
      })
      .catch((err) => {
        err.response.status === 401
          ? toast.error(err.response.data.message, ToastStyle)
          : console.error(err);
      });
  };

  const handleUserCreation = async () => {
    const userCreationInfo = {
      email: inputsValues.email,
      user_name: inputsValues.user_name,
      password: inputsValues.password,
      confirm_password: inputsValues.confirm_password,
      cpf: inputsValues.cpf,
      is_admin: inputsValues.admPassword === "asterixobelix123" ? true : false,
    };

    try {
      const response = await api.post("/user", userCreationInfo);
      if (response.status === 201) {
        toast.success(
          `Hello, ${response.data.user_name}, your account was successfully created !`,
          ToastStyle
        );
        handleCreationModeChange();
      }
    } catch (error) {
      toast.error("Something went wrong...", ToastStyle);
      console.log(error);
    }
  };

  return (
    <S.LoginForm>
      <section>
        <LogoForLogin />
        <span>Steam Project</span>
      </section>
      <div id="loginFields">
        <div className="InputField">
          <label htmlFor="email">E-mail</label>
          <input
            value={inputsValues.email}
            onChange={(e) =>
              setInputsValues({ ...inputsValues, email: e.target.value })
            }
            type="email"
            name="email"
            id=""
          />
        </div>

        <div className="InputField">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={inputsValues.password}
            onChange={(e) =>
              setInputsValues({ ...inputsValues, password: e.target.value })
            }
          />
        </div>

        {creationMode === true && (
          <>
            <div className="InputField">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                name="password"
                onChange={(e) =>
                  setInputsValues({
                    ...inputsValues,
                    confirm_password: e.target.value,
                  })
                }
              />
            </div>

            <div className="InputField">
              <label htmlFor="user_name">User Name</label>
              <input
                type="text"
                name="user_name"
                value={inputsValues.user_name}
                onChange={(e) =>
                  setInputsValues({
                    ...inputsValues,
                    user_name: e.target.value,
                  })
                }
              />
            </div>

            <div>
              <label htmlFor="cpf">CPF</label>
              <input
                type={"number"}
                name="cpf"
                id=""
                value={inputsValues.cpf}
                onChange={(e) =>
                  setInputsValues({ ...inputsValues, cpf: e.target.value })
                }
              />
            </div>

            <div>
              <label htmlFor="admPass">Manager Password</label>
              <input
                type="password"
                name="admPass"
                id=""
                value={inputsValues.admPassword}
                onChange={(e) =>
                  setInputsValues({
                    ...inputsValues,
                    admPassword: e.target.value,
                  })
                }
              />
            </div>
          </>
        )}

        <div id="formBtns">
          <Button onClick={() => handleCreationModeChange()}>
            {creationMode ? "Go Back" : "Don't have an account yet?"}
          </Button>
          <Button
            onClick={() => {
              creationMode ? handleUserCreation() : handleLogin();
            }}
          >
            {creationMode ? "Sign Up" : "Sign In"}
          </Button>
        </div>
      </div>
    </S.LoginForm>
  );
};

export default LoginForm;
