import styled from '@emotion/styled';

interface ILoadingWrapperProps {
  isFinished: boolean;
  animationDuration: number;
}
export const LoadingWrapper = styled.div<ILoadingWrapperProps>`
  opacity: ${(props) => (props.isFinished ? 0 : 1)};
  pointer-events: none;
  transition: opacity ${(props) => props.animationDuration}ms linear;
`;

interface IProgressBarProps {
  progress: number;
  animationDuration: number;
}
export const ProgressBar = styled.div<IProgressBarProps>`
  background: #29d;
  height: 2px;
  left: 0;
  margin-left: ${(props) => (-1 + props.progress) * 100}%;
  position: fixed;
  top: 0;
  transition: margin-left ${(props) => props.animationDuration}ms linear;
  width: 100%;
  z-index: 1031;
`;

export const Spinner = styled.div`
  box-shadow: 0 0 10px #29d, 0 0 5px #29d;
  display: block;
  height: 100%;
  opacity: 1;
  position: absolute;
  right: 0;
  transform: rotate(3deg) translate(0, -4px);
  width: 100px;
`;
