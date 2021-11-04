import { useNProgress } from '@tanem/react-nprogress';
import React from 'react';
import IsEqual from 'react-fast-compare';
import { LoadingWrapper, ProgressBar, Spinner } from './styles';

type PageLoadingProps = {
  isRouteChanging: boolean;
};

function PageLoading(props: PageLoadingProps): JSX.Element {
  const { isRouteChanging } = props;
  const { animationDuration, isFinished, progress } = useNProgress({
    isAnimating: isRouteChanging,
  });

  return (
    <LoadingWrapper isFinished={isFinished} animationDuration={animationDuration}>
      <ProgressBar animationDuration={animationDuration} progress={progress}>
        <Spinner />
      </ProgressBar>
    </LoadingWrapper>
  );
}

export default React.memo(PageLoading, IsEqual);
