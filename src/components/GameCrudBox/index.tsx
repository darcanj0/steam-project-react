import { useEffect, useState } from "react";
import { useGames } from "../../contexts/games";
import GameCrudCard from "../GameCrudCard";
import Input from "../Input";
import * as S from "./styles";

const GameCrudBox = () => {
  const [inputValue, setInputValue] = useState<string>();
  const { games, getAllGames } = useGames();

  useEffect(() => {
    getAllGames();
  }, []);

  return (
    <S.GameCrudBox>
      <section>
        <div>
          <Input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Search game"
            inputSize="large"
          />
          <a title="Search game">
            <S.SearchIcon />
          </a>
        </div>

        <a title="Add new game">
          <S.AddIcon />
        </a>
      </section>

      <div id="gameList">
        {games
          .sort((a, b) => a.title.localeCompare(b.title))
          .map((game) => {
            return <GameCrudCard game={game} key={game.id} />;
          })}
      </div>
    </S.GameCrudBox>
  );
};

export default GameCrudBox;
