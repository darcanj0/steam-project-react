import OptionItem from "../OptionItem";
import * as S from "./styles";

interface OptionsListProps {
  options: string[];
  currentManager: string;
  setCurrentManager: (state: string) => void;
}

const OptionsList = ({
  options,
  currentManager,
  setCurrentManager,
}: OptionsListProps) => {
  return (
    <S.OptionsList>
      {options.map((option) => {
        return (
          <OptionItem
            active={option === currentManager}
            option={option}
            onClick={() => {
              setCurrentManager(option);
            }}
          />
        );
      })}
    </S.OptionsList>
  );
};

export default OptionsList;
