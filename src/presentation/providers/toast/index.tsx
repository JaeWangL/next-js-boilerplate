import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import type { ToastProviderProps } from './types';

export function ToastProvider(props: ToastProviderProps): JSX.Element {
  const { children } = props;

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="light"
      />
      {children}
    </>
  );
}
