import Profile from "../../types/profiles";
import * as S from "./styles";

interface ProfileCardProps {
  profile: Profile;
}

const ProfileCard = ({ profile }: ProfileCardProps) => {
  return (
    <S.ProfileCard>
      <img src={profile.image_url} alt="" />
      <p>{profile.gamer_tag}</p>
    </S.ProfileCard>
  );
};

export default ProfileCard;
