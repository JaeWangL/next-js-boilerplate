import type { UserGradeTypes } from './enum';
import type { PaymentCard } from './models';

export type UserInfoDTO = {
  id: string;
  email: string;
  name: string;
  address1: string;
  address2: string;
  address3: string;
  grade: UserGradeTypes;
  paymentCards: PaymentCard[];
  mileagePoints: number;
};
