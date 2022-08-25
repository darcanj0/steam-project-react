import { useState } from "react";
import Button from "../../components/Button";
import ConfigContentBox from "../../components/ConfigContentBox";
import ContentBox from "../../components/ContentBox";
import Footer from "../../components/Footer";
import HomeHeading from "../../components/HomeHeading";
import { Input } from "../../components/Input/styles";
import NavBar from "../../components/NavBar";
import ProfileCard from "../../components/ProfileCard";
import SecondaryContainer from "../../components/SecondaryContainer";
import { useProfile } from "../../contexts/profile";
import Profile from "../../types/profiles";
import * as S from "./styles";

const Profiles = (props: any) => {
  const { userProfiles, profile } = useProfile();
  const [currentProfile, setCurrentProfile] = useState<Profile>(profile);
  const [inputsValues, setInputsValues] = useState({
    gamer_tag: "",
    image_url: "",
  });

  return (
    <SecondaryContainer light={false}>
      <NavBar
        currentPage={{
          admin: false,
          home: false,
          profiles: true,
          settings: false,
        }}
      ></NavBar>

      <ContentBox>
        <HomeHeading>Profiles settings</HomeHeading>
        <ConfigContentBox>
          <S.ProfileOptionContainer>
            {userProfiles.map((profile) => {
              return (
                <ProfileCard
                  profile={profile}
                  onClick={() => setCurrentProfile(profile)}
                  active={currentProfile === profile}
                />
              );
            })}
          </S.ProfileOptionContainer>
          <S.ProfileForm>
            <form>
              <label htmlFor="">Gamertag</label>
              <Input
                inputSize="large"
                placeholder={currentProfile.gamer_tag}
                value={inputsValues.gamer_tag}
                onChange={(e) =>
                  setInputsValues({
                    ...inputsValues,
                    gamer_tag: e.target.value,
                  })
                }
              />
              <a onClick={() => {}}>
                <S.SendIcon />
              </a>
            </form>
            <form>
              <label htmlFor="">Profile picture</label>
              <Input
                inputSize="large"
                placeholder={currentProfile.image_url}
                value={inputsValues.image_url}
                onChange={(e) =>
                  setInputsValues({
                    ...inputsValues,
                    image_url: e.target.value,
                  })
                }
              />
              <a onClick={() => {}}>
                <S.SendIcon />
              </a>
            </form>
            <div>
              <Button specialColor="delete">Delete Profile</Button>
              <Button specialColor="purple">Change Profile</Button>
            </div>
          </S.ProfileForm>
        </ConfigContentBox>
      </ContentBox>
      <Footer />
    </SecondaryContainer>
  );
};

export default Profiles;
