import { useEffect, useState } from "react";
import api from "../../api";
import { useGenres } from "../../contexts/genres";
import Genre from "../../types/genres";
import GenreCrudCard from "../GenreCrudCard";
import Input from "../Input";
import * as S from "./styles";

const GenreCrudBox = () => {
  const [inputValue, setInputValue] = useState<string>();
  const { genres, getAllGenres } = useGenres();

  useEffect(() => {
    getAllGenres();
  }, []);

  return (
    <S.GenreCrudBox>
      <section>
        <div>
          <Input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Search genre"
            inputSize="large"
          />
          <a title="Search genre">
            <S.SearchIcon />
          </a>
        </div>

        <a title="Add new genre">
          <S.AddIcon />
        </a>
      </section>

      <div id="genreList">
        {genres.map((genre) => {
          return <GenreCrudCard genre={genre} key={genre.id} />;
        })}
      </div>
    </S.GenreCrudBox>
  );
};

export default GenreCrudBox;
