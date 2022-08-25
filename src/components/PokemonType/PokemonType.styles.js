import styled from "styled-components";

const handleColor = (elementType) => {
  switch (elementType) {
    case "bug":
      return "background: #57e853; color: #000;";
    case "dark":
      return "background: #181818; color: #fff;";
    case "dragon":
      return "background: #9f5ee1; color: #000;";
    case "electric":
      return "background: #e6e330; color: #000;";
    case "fairy":
      return "background: #da67e3; color: #000;";
    case "fighting":
      return "background: #661012; color: #fff;";
    case "fire":
      return "background: #f8410a; color: #fff;";
    case "flying":
      return "background: #7ba4e3; color: #fff;";
    case "ghost":
      return "background: #140765; color: #fff;";
    case "grass":
      return "background: #184910; color: #fff;";
    case "ground":
      return "background: #e2a543; color: #000;";
    case "ice":
      return "background: #24f4ea; color: #000;";
    case "normal":
      return "background: #c0edee; color: #000;";
    case "poison":
      return "background: #a100fd; color: #fff;";
    case "psychic":
      return "background: #e7095a; color: #000;";
    case "rock":
      return "background: #974913; color: #fff;";
    case "steel":
      return "background: #272727; color: #fff;";
    case "water":
      return "background: #03a9f3; color: #000;";
  }
};

export const MonsterType = styled.div`
  ${(props) => handleColor(props.elementType)};
  text-align: center;
  border: solid #fff 5px;
  border-radius: 12px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 24px;
  margin: 4px;
  padding: 4px;
  display: inline-block;
  min-width: 150px;
`;
