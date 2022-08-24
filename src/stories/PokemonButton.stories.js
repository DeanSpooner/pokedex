import PokemonButton from "../components/PokemonButton/PokemonButton";
import Pikachu from "./static/pikachu.png";
import Charmander from "./static/charmander.png";
import Squirtle from "./static/squirtle.png";

export default {
  title: "PokemonButton",
  component: PokemonButton,
  argTypes: {
    pokeName: {
      control: {
        type: "select",
        options: ["Pikachu", "Charmander", "Squirtle"],
      },
    },
  },
};

const image = {
  pikachuSrc: Pikachu,
  charmanderSrc: Charmander,
  squirtleSrc: Squirtle,
};

const handleDexNumber = (args) => {
  if (args.pokeName === "Pikachu") {
    return 25;
  } else if (args.pokeName === "Charmander") {
    return 4;
  }
  return 7;
};

const handleSprite = (args) => {
  if (args.pokeName === "Pikachu") {
    return image.pikachuSrc;
  } else if (args.pokeName === "Charmander") {
    return image.charmanderSrc;
  }
  return image.squirtleSrc;
};

export const Template = (args) => (
  <>
    <PokemonButton
      dexNumber={handleDexNumber(args)}
      spritePath={handleSprite(args)}
      pokeName={"Pikachu"}
      {...args}
    />
  </>
);
