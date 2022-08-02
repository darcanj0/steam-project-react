import Game from "../../types/game";
import * as S from "./styles";

interface GameHomeCardProps {
  children: any;
  game: Game;
}

const GameHomeCard = (props: GameHomeCardProps) => {
  return (
    <S.GameHomeCard>
      <img src={props.game.cover_image_url} alt={props.game.title} />
      <div>
        <span>{props.game.year}</span>
        <p>{props.game.title}</p>
        <span>Metacritic Score: {props.game.score}</span>
      </div>
    </S.GameHomeCard>
  );
};

export default GameHomeCard;
