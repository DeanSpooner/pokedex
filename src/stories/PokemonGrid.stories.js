import PokemonButton from "../components/PokemonButton/PokemonButton";
import Pikachu from "./static/pikachu.png";
import Charmander from "./static/charmander.png";
import Squirtle from "./static/squirtle.png";
import { GridWrapper } from "../components/PokemonGrid/PokemonGrid.styles";

export default {
  title: "PokemonGrid",
  component: GridWrapper,
};

const image = {
  pikachuSrc: Pikachu,
  charmanderSrc: Charmander,
  squirtleSrc: Squirtle,
};

const pokemonArray = [
  "Pikachu",
  "Charmander",
  "Squirtle",
  "Pikachu",
  "Charmander",
  "Squirtle",
  "Pikachu",
  "Charmander",
  "Squirtle",
  "Pikachu",
  "Charmander",
  "Squirtle",
];

export const Default = () => (
  <GridWrapper>
    {pokemonArray.map((pokemon) => (
      <PokemonButton
        dexNumber={
          pokemon === "Pikachu" ? 25 : pokemon === "Charmander" ? 4 : 7
        }
        pokeName={pokemon}
        spritePath={
          pokemon === "Pikachu"
            ? image.pikachuSrc
            : pokemon === "Charmander"
            ? image.charmanderSrc
            : image.squirtleSrc
        }
      />
    ))}
  </GridWrapper>
);
