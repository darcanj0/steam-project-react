import Button from "../Button";
import ModalOverlay from "../ModalOverlay";
import * as S from "./styles";

interface ModalCreateProfileProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalCreateProfile = ({ setShowModal }: ModalCreateProfileProps) => {
  return (
    <ModalOverlay>
      <S.ModalCreateProfile>
        <section>
          <span>Create new profile</span>
          <a onClick={() => setShowModal(false)}>
            <S.CloseModalIcon />
          </a>
        </section>
        <Button>Create Profile</Button>
      </S.ModalCreateProfile>
    </ModalOverlay>
  );
};

export default ModalCreateProfile;
