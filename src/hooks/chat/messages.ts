export interface ReqUserJoin {
  accessToken: string;
}

export const messageUserJoin = (accessToken: string): string => {
  return JSON.stringify({
    event: 'userJoin',
    data: {
      accessToken,
    } as ReqUserJoin,
  });
};
