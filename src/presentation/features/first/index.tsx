import { useGetUserByUserId } from '@application/hooks/data/user/getByUserId';
import { memo, Suspense } from 'react';
import isEqual from 'react-fast-compare';
import { FirstWrapper } from './styles';

function First(): JSX.Element {
  const { data, isLoading } = useGetUserByUserId('1');

  console.log(data);

  return (
    <Suspense>
      <FirstWrapper>
        <p>First</p>
      </FirstWrapper>
    </Suspense>
  );
}

export const MemoriedFirst = memo(First, isEqual);
