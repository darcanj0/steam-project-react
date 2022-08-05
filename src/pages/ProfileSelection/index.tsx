import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import api from "../../api";
import SecondaryContainer from "../../components/SecondaryContainer";

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
      <Swiper
        spaceBetween={0}
        slidesPerView={3}
        navigation
        modules={[Navigation]}
      >
        {userProfiles.map((profile) => {
          console.log(profile);
          return <SwiperSlide>{profile.gamer_tag}</SwiperSlide>;
        })}
      </Swiper>
    </SecondaryContainer>
  );
};

export default ProfileSelection;
