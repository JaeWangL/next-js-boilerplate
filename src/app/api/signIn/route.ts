import type { SignInDTO, SignInInput } from '@data/dtos/auth';
import type { ApiErrorDTO } from '@data/dtos/common';
import { UserGradeTypes } from '@data/dtos/user/enum';
import type { NextRequest, NextResponse } from 'next/server';
import { responseOk, responseUnauthorized } from '../helpers';

export async function POST(
  req: NextRequest
): Promise<NextResponse<ApiErrorDTO | SignInDTO>> {
  const body: SignInInput = await req.json();
  if (body.email !== 't@t.com') {
    return responseUnauthorized('Invalid Email');
  }
  if (body.password !== '1234') {
    return responseUnauthorized('Invalid Password');
  }

  return responseOk<SignInDTO>({
    accessToken:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
    refreshToken:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
    user: {
      id: '1',
      email: body.email,
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
    },
  });
}
