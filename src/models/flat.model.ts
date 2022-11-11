export interface IFlat {
  id: string;
  title: string;
  cover: string;
  pictures: string[];
  description: string;
  host:IHost;
  rating: string;
  location: string;
  equipments: string[];
  tags: string[];
}

export interface IHost {
  name: string;
  picture: string;
}
