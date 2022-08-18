import { ReactNode } from "react";
import * as S from "./styles";

interface ModalOverlayProps {
  children: ReactNode;
}

const ModalOverlay = ({ children }: ModalOverlayProps) => {
  return <S.ModalOverlay>{children}</S.ModalOverlay>;
};

export default ModalOverlay;
