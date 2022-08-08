import Game from "../../types/game";
import * as S from "./styles";

interface GameCrudCardProps {
  game: Game;
}

const GameCrudCard = ({ game }: GameCrudCardProps) => {
  return (
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
          <a title="Delete game">
            <S.DeleteIcon />
          </a>
        </div>
      </section>
    </S.GameCrudCard>
  );
};

export default GameCrudCard;
