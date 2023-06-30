import type { ApiErrorDTO } from '@data/dtos/common';
import type { UserInfoDTO } from '@data/dtos/user';
import { UserGradeTypes } from '@data/dtos/user/enum';
import type { NextRequest, NextResponse } from 'next/server';
import { responseNotFound, responseOk } from '../../helpers';

export async function GET(
  req: NextRequest,
  { params }: { params: { userId: string } }
): Promise<NextResponse<ApiErrorDTO | UserInfoDTO>> {
  const { userId } = params;
  if (userId !== '1') {
    return responseNotFound('User not found');
  }

  return responseOk<UserInfoDTO>({
    id: '1',
    email: 't@t.com',
    name: 'Test User',
    address1: 'Busan',
    address2: 'Busan',
    address3: 'Suyeong-gu',
    grade: UserGradeTypes.VIP,
    paymentCards: [
      {
        name: 'Visa Card',
        type: 'visa',
        cardNumber: 1234,
        isDefault: true,
      },
      {
        name: 'Master Card',
        type: 'mastercard',
        cardNumber: 1235,
        isDefault: false,
      },
    ],
    mileagePoints: 1352,
  });
}
