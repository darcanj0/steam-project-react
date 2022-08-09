import { useEffect, useState } from "react";
import api from "../../api";
import Genre from "../../types/genres";
import GenreCrudCard from "../GenreCrudCard";
import Input from "../Input";
import * as S from "./styles";

const GenreCrudBox = () => {
  const [inputValue, setInputValue] = useState<string>();
  const [genres, setGenres] = useState<Genre[]>([]);

  const getAllGenres = async () => {
    try {
      const response = await api.get("/genre");
      setGenres(response.data);
    } catch (error) {
      console.log(error);
    }
  };

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
          return <GenreCrudCard genre={genre} />;
        })}
      </div>
    </S.GenreCrudBox>
  );
};

export default GenreCrudBox;
