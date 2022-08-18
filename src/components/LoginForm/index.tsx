import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import api from "../../api";
import { useAuth } from "../../contexts/auth";
import ToastStyle from "../../types/toastStyle";
import Button from "../Button";
import { LogoForLogin } from "../Logo/styles";
import * as S from "./styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Input } from "../Input/styles";

interface LoginFormProps {
  creationMode: boolean;
  handleCreationModeChange: () => void;
}

interface handleLoginParams {
  email: string;
  password: string;
}

const loginSchema = yup.object().shape({
  email: yup.string().email("Incorrect email format").required(),
  password: yup
    .string()
    .max(32, "Password is too long")
    .min(8, "Password is too short")
    .required(),
});

const LoginForm = ({
  creationMode,
  handleCreationModeChange,
}: LoginFormProps) => {
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  const handleLogin = (data: handleLoginParams) => {
    const loginInfo: handleLoginParams = {
      email: data.email,
      password: data.password,
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

  return (
    <>
      {creationMode ? (
        <S.LoginForm></S.LoginForm>
      ) : (
        <S.LoginForm onSubmit={handleSubmit(handleLogin)}>
          <section>
            <LogoForLogin />
            <span>Steam Project</span>
          </section>
          <div id="inputFields">
            <div className="InputField">
              <label htmlFor="email">E-mail</label>
              <Input type="text" inputSize="large" {...register("email")} />
            </div>

            <div className="InputField">
              <label htmlFor="password">Password</label>
              <Input
                type="password"
                inputSize="large"
                {...register("password")}
              />
            </div>

            {errors.email && (
              <S.FormErrors>{String(errors.email.message)}</S.FormErrors>
            )}
            {errors.password && (
              <S.FormErrors>{String(errors.password.message)}</S.FormErrors>
            )}

            <div id="formBtns">
              <Button onClick={() => handleCreationModeChange()}>
                {creationMode ? "Go Back" : "Don't have an account yet?"}
              </Button>
              <Button type="submit">Sign In</Button>
            </div>
          </div>
        </S.LoginForm>
      )}
    </>
  );
};

export default LoginForm;
