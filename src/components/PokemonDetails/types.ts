export interface Props {
  pokemon: {
    name: string;
    base_experience: number;
    height: number;
    weight: number;
    types: [
      {
        type: {
          name: string;
        };
      }
    ];
  };
  id: string | string[];
}
