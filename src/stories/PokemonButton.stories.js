import PokemonButton from "../components/PokemonButton/PokemonButton";
import Pikachu from "./static/pikachu.png";

export default {
  title: "PokemonButton",
  component: PokemonButton,
};

const image = {
  pikachuSrc: Pikachu,
};

export const Default = () => (
  <>
    <PokemonButton
      dexNumber={25}
      pokeName="Pikachu"
      spritePath={image.pikachuSrc}
    />
  </>
);
