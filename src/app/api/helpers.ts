import type { ApiErrorDTO } from '@data/dtos/common';
import { NextResponse } from 'next/server';

// MARK: Success
export function responseOk<T>(body: T): NextResponse<T> {
  return NextResponse.json<T>(body, { status: 200, statusText: 'Ok' });
}

// MARK: Error
export function responseUnauthorized(
  errorMsg: string
): NextResponse<ApiErrorDTO> {
  return NextResponse.json(
    { errorMsg },
    { status: 401, statusText: 'Unauthorized' }
  );
}

export function responseNotFound(errorMsg: string): NextResponse<ApiErrorDTO> {
  return NextResponse.json(
    { errorMsg },
    { status: 404, statusText: 'NotFound' }
  );
}
