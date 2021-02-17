export interface carItem {
  BRAND: string;
  MODEL: string;
  DEALER: string;
  MIN_MILEAGE: number;
  MAX_MILEAGE: number;
}

export interface carsListProps {
  carsList: carItem[];
}
