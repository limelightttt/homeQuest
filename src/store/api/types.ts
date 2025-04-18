export interface IEstate {
  id: number;
  title: string;
  location?: { name: string }[];
  description?: string;
  area: number;
  type: string;
  price: number;
  photos?: { url: string }[];
  coverPhoto: {
    url: string;
  };
}
