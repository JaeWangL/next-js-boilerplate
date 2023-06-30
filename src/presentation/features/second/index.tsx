import { memo } from 'react';
import isEqual from 'react-fast-compare';

function Second(): JSX.Element {
  return (
    <div>
      <p>Second</p>
    </div>
  );
}

export const MemoriedSecond = memo(Second, isEqual);
