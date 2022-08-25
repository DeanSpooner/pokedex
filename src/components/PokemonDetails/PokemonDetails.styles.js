import styled from "styled-components";

const handleColor = (elementType) => {
  switch (elementType) {
    case "bug":
      return "#57e853";
    case "dark":
      return "#181818;";
    case "dragon":
      return "#9f5ee1;";
    case "electric":
      return "#e6e330;";
    case "fairy":
      return "#da67e3;";
    case "fighting":
      return "#661012;";
    case "fire":
      return "#f8410a;";
    case "flying":
      return "#7ba4e3;";
    case "ghost":
      return "#140765;";
    case "grass":
      return "#184910;";
    case "ground":
      return "#e2a543;";
    case "ice":
      return "#24f4ea;";
    case "normal":
      return "#c0edee;";
    case "poison":
      return "#a100fd;";
    case "psychic":
      return "#e7095a;";
    case "rock":
      return "#974913;";
    case "steel":
      return "#272727;";
    case "water":
      return "#03a9f3;";
  }
};

export const PokemonDetailsWrapper = styled.div`
  text-align: center;
`;

export const PokemonImageWrapper = styled.div`
  border: solid 24px ${(props) => handleColor(props.firstType)};
  border-radius: 50%;
  margin: auto;
  padding: 32px;
  width: 240px;
`;

export const PokemonDetailText = styled.p`
  font-size: 24px;
  font-weight: 500;
`;
