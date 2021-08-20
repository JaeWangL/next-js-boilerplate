import { useEffect, useRef } from 'react';
import { messageUserJoin } from './messages';

export function useWebSocket(): WebSocket | undefined {
  const wsRef = useRef<WebSocket>();

  useEffect(() => {
    wsRef.current = new WebSocket('ws://localhost:8800');
    wsRef.current.onopen = () => {
      wsRef.current?.send(messageUserJoin(''));
    };
    wsRef.current.onmessage = ({ data }) => {};
    wsRef.current.onerror = (e) => {};

    return () => {
      wsRef.current!.close();
    };
  }, []);

  return wsRef.current;
}
