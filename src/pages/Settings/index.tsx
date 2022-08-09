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

const Settings = (props: any) => {
  const options = ["User information"];
  const [currentManager, setCurrentManager] = useState<string>(options[0]);
  const [showAlert, setShowAlert] = useState<boolean>(false);

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
                <Input inputSize="x-large" placeholder="Change user email" />
              </div>
              {showAlert && (
                <span>
                  <FiAlertTriangle /> Must be a valid and avaliable e-mail
                </span>
              )}

              <div>
                <label htmlFor="">User Name</label>
                <Input inputSize="x-large" placeholder="Change user name" />
              </div>
              {showAlert && (
                <span>
                  <FiAlertTriangle /> Must be at least 3 and at max 30
                  characters long
                </span>
              )}

              <div>
                <label htmlFor="">CPF</label>
                <Input inputSize="x-large" placeholder="Change CPF" />
              </div>
              {showAlert && (
                <span>
                  <FiAlertTriangle /> Must be avaliable and have 11 characters
                  long string of numbers
                </span>
              )}

              <div>
                <label htmlFor="">Password</label>
                <Input inputSize="x-large" placeholder="Change password" />
              </div>
              {showAlert && (
                <span>
                  <FiAlertTriangle /> Must be between 8 and 32 characters long
                  and include at least one of each: Lower case, Upper case,
                  number and special character [!@#$%^&*]
                </span>
              )}

              <div>
                <label htmlFor="">Confirm Password</label>
                <Input inputSize="x-large" placeholder="Confirm password" />
              </div>
              {showAlert && (
                <span>
                  <FiAlertTriangle /> Must be identical to the password field
                </span>
              )}

              <div>
                <label htmlFor="">Manager Password</label>
                <Input inputSize="x-large" placeholder="Manager password" />
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
