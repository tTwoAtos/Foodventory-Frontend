import { Product } from 'src/app/types/product';

export const mockProductList: Product[] = [
  {
    name: `Gnocchi`,
    mark: `Lustucru`,
    ingredients: [`Farine`, `Oeuf`, `Eau`, `Sel`],
    nutriscore: `C`,
  },
  {
    name: `Glace menthe chocolat`,
    mark: `Adélie`,
    ingredients: [
      `Sucre`,
      `Lactose`,
      `Eau`,
      `Graisse végétale`,
      `E471`,
      `Pâte de cacao`,
      `Emulsifiants`,
      `Arôme naturel de menthe`,
    ],
    nutriscore: `D`,
  },
  {
    name: `Baguette Rustique`,
    mark: `Carrefour`,
    ingredients: [`Céréales`, `Eau`, `Farine`, `Sel`, `Gluten`, `Blé`],
    nutriscore: `C`,
  },
  {
    name: `Dairy Dessert 0,1% with Green Apple`,
    mark: `Elle & Vire`,
    ingredients: [`Lait`, `Eau`, `Agare`, `Pommes`, `Additifs:épaississant`],
    nutriscore: `A`,
  },

  {
    name: `Haricots verts extra-fins`,
    mark: `L'oiseau`,
    ingredients: [`Haricots verts extra-fins`],
    nutriscore: `A`,
  },
  {
    name: `Filet de merlan`,
    mark: `Loc marée`,
    ingredients: [`Filet de merlan`],
    nutriscore: `A`,
  },
  {
    name: `Rillettes du Mans`,
    mark: `Tradilège`,
    ingredients: [`Porc`, `Sel`, `Poivre`],
    nutriscore: `D`,
  },
  {
    name: `Poelée asiatique`,
    mark: `D'aucy`,
    ingredients: [
      `Courgettes`,
      `Carottes`,
      `Poivrons jaunes`,
      `Pousses de haricots mungo`,
      `champignons noirs`,
    ],
    nutriscore: `A`,
  },
];
