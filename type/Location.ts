export interface ILocations {
  info: {
    count: string;
  }
  results:Array<ILocation>
}

export interface ILocation {
  id: string;
  name: string;
  type: string;
  dimension: string;
  residents: {
    id: string;
    name: string;
    species: string;
    status: string;
    origin: {
      name: string;
    };
  };
}
