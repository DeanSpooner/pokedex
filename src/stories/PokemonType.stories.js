import PokemonType from "../components/PokemonType/PokemonType";

export default {
  title: "PokemonType",
  component: PokemonType,
  argTypes: {
    elementType: {
      control: {
        type: "select",
        options: [
          "bug",
          "dark",
          "dragon",
          "electric",
          "fairy",
          "fighting",
          "fire",
          "flying",
          "ghost",
          "grass",
          "ground",
          "ice",
          "normal",
          "poison",
          "psychic",
          "rock",
          "steel",
          "water",
        ],
      },
    },
  },
};

export const Template = (args) => (
  <>
    <PokemonType {...args} />
  </>
);
