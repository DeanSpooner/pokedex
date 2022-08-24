export interface Props {
  pokemon: {
    name: string;
    base_experience: number;
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
