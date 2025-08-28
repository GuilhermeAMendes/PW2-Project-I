export type StoreSection =
  | "Computers"
  | "Accessories"
  | "Printers"
  | "Games"
  | "Gadgets"
  | "";

export type Brand = "HP" | "Dell" | "Positivo" | "Asus" | "Generic" | "";

export type State = "New" | "Used" | "";

export interface Product {
  brand: Brand;
  section: StoreSection;
  name: string;
  price: number;
  state: State;
}
