import { useState } from "react";
import OptionItem from "../OptionItem";
import * as S from "./styles";

interface OptionsListProps {
  options: string[];
}

const OptionsList = ({ options }: OptionsListProps) => {
  const [currentManager, setCurrentManager] = useState<string>(options[0]);

  return (
    <S.OptionsList>
      {options.map((option) => {
        return (
          <OptionItem
            active={option === currentManager}
            option={option}
            onClick={() => {
              console.log(currentManager);
              setCurrentManager(option);
            }}
          />
        );
      })}
    </S.OptionsList>
  );
};

export default OptionsList;
