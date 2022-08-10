import { useState } from "react";
import ConfigContentBox from "../../components/ConfigContentBox";
import ContentBox from "../../components/ContentBox";
import Footer from "../../components/Footer";
import HomeHeading from "../../components/HomeHeading";
import Input from "../../components/Input";
import NavBar from "../../components/NavBar";
import OptionsList from "../../components/OptionsList";
import SecondaryContainer from "../../components/SecondaryContainer";
import * as S from "./styles";
import { FiAlertTriangle } from "react-icons/fi";
import Button from "../../components/Button";

interface userEditInputs {
  email: string;
  password: string;
  confirm_password: string;
  user_name: string;
  cpf: string;
  adm_password: string;
}

const Settings = (props: any) => {
  const options = ["User information"];
  const [currentManager, setCurrentManager] = useState<string>(options[0]);
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const [inputsValues, setInputsValues] = useState<userEditInputs>({
    email: "",
    password: "",
    confirm_password: "",
    user_name: "",
    cpf: "",
    adm_password: "",
  });

  return (
    <SecondaryContainer light={false}>
      <NavBar
        currentPage={{
          home: false,
          admin: false,
          profiles: false,
          settings: true,
        }}
      ></NavBar>

      <ContentBox>
        <HomeHeading>User Settings</HomeHeading>
        <ConfigContentBox>
          <OptionsList
            options={options}
            currentManager={currentManager}
            setCurrentManager={setCurrentManager}
          />
          {currentManager === "User information" && (
            <S.UserForm>
              <div>
                <label htmlFor="">E-mail</label>
                <Input
                  inputSize="x-large"
                  placeholder="Change user email"
                  value={inputsValues.email}
                  onChange={(e) =>
                    setInputsValues({ ...inputsValues, email: e.target.value })
                  }
                />
                <a>
                  <S.SendIcon />
                </a>
              </div>
              {showAlert && (
                <span>
                  <FiAlertTriangle /> Must be a valid and avaliable e-mail
                </span>
              )}

              <div>
                <label htmlFor="">User Name</label>
                <Input
                  inputSize="x-large"
                  placeholder="Change user name"
                  value={inputsValues.user_name}
                  onChange={(e) =>
                    setInputsValues({
                      ...inputsValues,
                      user_name: e.target.value,
                    })
                  }
                />
                <a>
                  <S.SendIcon />
                </a>
              </div>
              {showAlert && (
                <span>
                  <FiAlertTriangle /> Must be at least 3 and at max 30
                  characters long
                </span>
              )}

              <div>
                <label htmlFor="">CPF</label>
                <Input
                  inputSize="x-large"
                  placeholder="Change CPF"
                  value={inputsValues.cpf}
                  onChange={(e) =>
                    setInputsValues({ ...inputsValues, cpf: e.target.value })
                  }
                />
                <a>
                  <S.SendIcon />
                </a>
              </div>
              {showAlert && (
                <span>
                  <FiAlertTriangle /> Must be avaliable and have 11 characters
                  long string of numbers
                </span>
              )}

              <div>
                <label htmlFor="">Password</label>
                <Input
                  inputSize="small"
                  placeholder="Change password"
                  value={inputsValues.password}
                  onChange={(e) =>
                    setInputsValues({
                      ...inputsValues,
                      password: e.target.value,
                    })
                  }
                />

                <label htmlFor="">Confirm Password</label>
                <Input
                  inputSize="small"
                  placeholder="Confirm password"
                  value={inputsValues.confirm_password}
                  onChange={(e) =>
                    setInputsValues({
                      ...inputsValues,
                      confirm_password: e.target.value,
                    })
                  }
                />
                <a>
                  <S.SendIcon />
                </a>
              </div>
              {showAlert && (
                <span>
                  <FiAlertTriangle /> Must be between 8 and 32 characters long
                  and include at least one of each: Lower case, Upper case,
                  number and special character [!@#$%^&*]
                </span>
              )}

              <div>
                <label htmlFor="">Manager Password</label>
                <Input
                  inputSize="x-large"
                  placeholder="Manager password"
                  value={inputsValues.adm_password}
                  onChange={(e) =>
                    setInputsValues({
                      ...inputsValues,
                      adm_password: e.target.value,
                    })
                  }
                />
                <a>
                  <S.SendIcon />
                </a>
              </div>
              {showAlert && (
                <span>
                  <FiAlertTriangle /> Secret manager password
                </span>
              )}
            </S.UserForm>
          )}
        </ConfigContentBox>
      </ContentBox>
      <Footer />
    </SecondaryContainer>
  );
};

export default Settings;
