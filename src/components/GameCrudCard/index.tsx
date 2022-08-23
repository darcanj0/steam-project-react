import { useState } from "react";
import Game from "../../types/game";
import ModalDeleteGame from "../ModalDeleteGame";
import * as S from "./styles";

interface GameCrudCardProps {
  game: Game;
}

const GameCrudCard = ({ game }: GameCrudCardProps) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <>
      {showDeleteModal && (
        <ModalDeleteGame setShowDeleteModal={setShowDeleteModal} game={game} />
      )}
      <S.GameCrudCard>
        <img src={game.cover_image_url} alt={game.title} />
        <section id="crudCardInfo">
          <div id="infos">
            <h3>{game.title}</h3>
            <p>{game.year}</p>
            <p>Score: {game.score}</p>
          </div>

          <div id="cardBtns">
            <a title="Edit game">
              <S.EditIcon />
            </a>
            <a
              title="Delete game"
              onClick={() => {
                setShowDeleteModal(true);
              }}
            >
              <S.DeleteIcon />
            </a>
          </div>
        </section>
      </S.GameCrudCard>
    </>
  );
};

export default GameCrudCard;
