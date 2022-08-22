import PokemonButton from "../components/PokemonButton/PokemonButton";
import Pikachu from "./static/pikachu.png";
import Charmander from "./static/charmander.png";
import Squirtle from "./static/squirtle.png";
import { PokemonGrid } from "../components/PokemonGrid/PokemonGrid.styles";

export default {
  title: "PokemonGrid",
  component: PokemonGrid,
};

const image = {
  pikachuSrc: Pikachu,
  charmanderSrc: Charmander,
  squirtleSrc: Squirtle,
};

export const Default = () => (
  <PokemonGrid>
    <PokemonButton
      dexNumber={25}
      pokeName="Pikachu"
      spritePath={image.pikachuSrc}
    />
    <PokemonButton
      dexNumber={4}
      pokeName="Charmander"
      spritePath={image.charmanderSrc}
    />
    <PokemonButton
      dexNumber={7}
      pokeName="Squirtle"
      spritePath={image.squirtleSrc}
    />{" "}
    <PokemonButton
      dexNumber={25}
      pokeName="Pikachu"
      spritePath={image.pikachuSrc}
    />
    <PokemonButton
      dexNumber={4}
      pokeName="Charmander"
      spritePath={image.charmanderSrc}
    />
    <PokemonButton
      dexNumber={7}
      pokeName="Squirtle"
      spritePath={image.squirtleSrc}
    />{" "}
    <PokemonButton
      dexNumber={25}
      pokeName="Pikachu"
      spritePath={image.pikachuSrc}
    />
    <PokemonButton
      dexNumber={4}
      pokeName="Charmander"
      spritePath={image.charmanderSrc}
    />
    <PokemonButton
      dexNumber={7}
      pokeName="Squirtle"
      spritePath={image.squirtleSrc}
    />{" "}
    <PokemonButton
      dexNumber={25}
      pokeName="Pikachu"
      spritePath={image.pikachuSrc}
    />
    <PokemonButton
      dexNumber={4}
      pokeName="Charmander"
      spritePath={image.charmanderSrc}
    />
    <PokemonButton
      dexNumber={7}
      pokeName="Squirtle"
      spritePath={image.squirtleSrc}
    />{" "}
    <PokemonButton
      dexNumber={25}
      pokeName="Pikachu"
      spritePath={image.pikachuSrc}
    />
    <PokemonButton
      dexNumber={4}
      pokeName="Charmander"
      spritePath={image.charmanderSrc}
    />
    <PokemonButton
      dexNumber={7}
      pokeName="Squirtle"
      spritePath={image.squirtleSrc}
    />{" "}
    <PokemonButton
      dexNumber={25}
      pokeName="Pikachu"
      spritePath={image.pikachuSrc}
    />
    <PokemonButton
      dexNumber={4}
      pokeName="Charmander"
      spritePath={image.charmanderSrc}
    />
    <PokemonButton
      dexNumber={7}
      pokeName="Squirtle"
      spritePath={image.squirtleSrc}
    />
  </PokemonGrid>
);
