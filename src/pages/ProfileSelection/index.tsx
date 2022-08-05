import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import api from "../../api";
import HomeHeading from "../../components/HomeHeading";
import ProfileCard from "../../components/ProfileCard";
import SecondaryContainer from "../../components/SecondaryContainer";
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

const ProfileSelection = (props: any) => {
  const [userProfiles, setUserProfiles] = useState<userProfiles[]>([]);

  const getUserProfiles = async () => {
    try {
      const decoded: decodedJwt = jwt_decode(
        localStorage.getItem("steamProjectToken") || ""
      );
      const response = await api.get(`/user/${decoded.id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("steamProjectToken")}`,
        },
      });
      setUserProfiles(response.data.profiles);
      console.log(userProfiles);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong... You will be redirected to login");
    }
  };

  useEffect(() => {
    getUserProfiles();
  }, []);

  return (
    <SecondaryContainer light={false}>
      <S.TitleProfileSelection>Who is Playing?</S.TitleProfileSelection>
      <S.SwiperContainerProfileSelection>
        <Swiper
          spaceBetween={50}
          slidesPerView={2}
          centeredSlides={true}
          navigation
          modules={[Navigation]}
          rewind={true}
          grabCursor={true}
        >
          {userProfiles.map((profile) => {
            console.log(profile);
            return (
              <SwiperSlide>
                <ProfileCard profile={profile} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </S.SwiperContainerProfileSelection>
    </SecondaryContainer>
  );
};

export default ProfileSelection;
