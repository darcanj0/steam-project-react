import jwt_decode from "jwt-decode";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import api from "../../api";
import ProfileCard from "../../components/ProfileCard";
import SecondaryContainer from "../../components/SecondaryContainer";
import Profile from "../../types/profiles";
import { RoutePath } from "../../types/routes";
import ToastStyle from "../../types/toastStyle";
import User from "../../types/user";
import * as S from "./styles";

interface decodedJwt {
  id: string;
  is_admin: boolean;
  email: string;
  iat: number;
  exp: number;
}

interface userProfiles {
  id: string;
  gamer_tag: string;
  image_url: string;
}

interface ProfileSelectionProps {
  setCurrentProfile: Dispatch<SetStateAction<Profile | undefined>>;
  inLightMode: boolean;
}

const ProfileSelection = ({ setCurrentProfile }: ProfileSelectionProps) => {
  const [userProfiles, setUserProfiles] = useState<userProfiles[]>([]);

  const navigate = useNavigate();

  const getUserProfiles = async () => {
    const user: User = JSON.parse(
      localStorage.getItem("steamProjectUser") || "{}"
    );
    const headers = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("steamProjectToken")}`,
      },
    };
    api
      .get(`/user/${user.id}`, headers)
      .then((res) => {
        setUserProfiles(res.data.profiles);
      })
      .catch((err) => {
        console.error(err);
        toast.error(
          "Something went wrong... You will be redirected to login",
          ToastStyle
        );
      });
  };

  useEffect(() => {
    getUserProfiles();
  }, []);

  return (
    <SecondaryContainer light={false}>
      <S.TitleProfileSelection>Who is Playing?</S.TitleProfileSelection>
      <S.ContainerProfileSelection>
        <S.SwiperCreateProfileCard>
          <div>
            <span>+</span>
          </div>
          <p>Create new Profile</p>
        </S.SwiperCreateProfileCard>

        {userProfiles.map((profile) => {
          return (
            <ProfileCard
              onClick={() => {
                setCurrentProfile(profile);
                navigate(RoutePath.HOME);
              }}
              profile={profile}
              key={profile.id}
            />
          );
        })}
      </S.ContainerProfileSelection>
    </SecondaryContainer>
  );
};

export default ProfileSelection;
