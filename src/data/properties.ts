export interface IProperty {
  id: number;
  title: string;
  price:number;
  image: string;
}


export const properties: IProperty[] = [
  {
    id: 1,
    title: "Роскошный пентхаус",
    price: 1400000,
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 2,
    title: "Квартира в центре",
    price: 150000,
    image: "https://via.placeholder.com/300x200",
  },
  {
    id:3,
    title: "Загородный дом",
    price: 350000,
    image: "https://via.placeholder.com/300x200",
  },
];