import Genre from "../../types/genres";
import * as S from "./styles";

interface GenreCrudCardProps {
  genre: Genre;
}

const GenreCrudCard = ({ genre }: GenreCrudCardProps) => {
  return (
    <S.GenreCrudCard>
      <p>{genre.genre_title}</p>
      <div>
        <a title="Edit genre">
          <S.EditIcon />
        </a>
        <a title="Delete genre">
          <S.DeleteIcon />
        </a>
      </div>
    </S.GenreCrudCard>   
  );
};

export default GenreCrudCard;
