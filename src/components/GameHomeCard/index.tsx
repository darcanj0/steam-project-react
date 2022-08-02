import Game from "../../types/game";
import * as S from "./styles";

interface GameHomeCardProps {
  children: any;
  game: Game;
}

const GameHomeCard = (props: GameHomeCardProps) => {
  return (
    <S.GameHomeCard imageUrl={props.game.cover_image_url}>
      <img src={props.game.cover_image_url} alt={props.game.title} />
      <p>{props.game.title}</p>
    </S.GameHomeCard>
  );
};

export default GameHomeCard;
