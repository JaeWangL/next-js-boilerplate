export type PaymentCard = {
  name: string;
  type: 'visa' | 'mastercard';
  cardNumber: number;
  isDefault: boolean;
};
